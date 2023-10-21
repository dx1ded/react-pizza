import { Router, json } from "express"
import { Types } from "mongoose"
import { AuthMiddleware } from "../auth.middleware.js"
import { Product } from "../models/Product.js"
import { filterOptions, sortOptions } from "../utils.js"

const router = Router()

router.use(json())

// -> /api/products/list
router.post("/list", AuthMiddleware, async (req, res) => {
  try {
    const productsPerPage = req.body.productsPerPage
    const {
      page = 1,
      search,
      filterBy,
      sortBy = "rating"
    } = req.query

    if (search) {
      const products = await Product.find({
        title: { "$regex": search, "$options": "i" }
      })

      return res.json({ products, total: products.length })
    }

    const filter = [{ $sort: sortOptions[sortBy] }]
    const aggregation = [
      { $skip: (page - 1) * productsPerPage },
      { $limit: productsPerPage },
    ]

    if (filterBy && filterBy !== "All") filter.push({
      $match: { category: filterOptions.indexOf(filterBy) }
    })

    const products = await Product.aggregate([
      ...filter,
      ...aggregation
    ])

    const count = await Product.aggregate([
      ...filter,
      { $count: "count" }
    ])

    res.json({ products, count: count[0].count })
  } catch (e) {
    console.error(e)
  }
})

router.post("/listByIds", AuthMiddleware, async (req, res) => {
  try {
    const ids = req.body.ids
      .map((id) => new Types.ObjectId(id.split("_")[0]))

    const items = await Promise.all(ids.map((id) =>
      Product.findOne({ _id: id }).exec()
    ))

    const itemsWithInitialIds = items.map((item, index) => ({
      ...item._doc,
      _id: req.body.ids[index]
    }))

    res.json({ items: itemsWithInitialIds })
  } catch (e) {
    console.log(e)
  }
})

export default router
