import { Router, json } from "express"
import { Types } from "mongoose"
import { AuthMiddleware } from "../auth.middleware.js"
import { Product } from "../models/Product.js"
import { PRODUCTS_PER_PAGE, filterOptions, sortOptions } from "../utils.js"

const router = Router()

router.use(json())

// -> /api/products/list
router.post("/list", AuthMiddleware, async (req, res) => {
  try {
    const {
      page = 1,
      search = "",
      filterBy,
      sortBy = "rating"
    } = req.query

    if (search) {
      const searchResult = await Product.find({
        title: { "$regex": search, "$options": "i" }
      })

      return res.json({ products: searchResult, totalCount: searchResult.length })
    }

    const paramsAggregator = [
      { $skip: (page - 1) * PRODUCTS_PER_PAGE },
      { $limit: PRODUCTS_PER_PAGE },
    ]

    if (filterBy && filterBy !== "All") paramsAggregator.unshift({
      $match: { category: filterOptions.indexOf(filterBy) }
    })

    if (sortBy) paramsAggregator.unshift({
      $sort: sortOptions[sortBy]
    })

    const products = await Product.aggregate(paramsAggregator)

    const result = await Product.aggregate([
      ...paramsAggregator,
      { $count: "count" }
    ])

    res.json({ products, totalCount: result[0].count })
  } catch (e) {
    console.error(e)
  }
})

router.post("/listByIds", AuthMiddleware, async (req, res) => {
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
})

router.post("/totalPrice", AuthMiddleware, async (req, res) => {
  const products = Object
    .entries(req.body.products)
    .reduce((acc, [id, value]) => {
      const separatedId = id.split("_")[0]

      if (acc[separatedId] !== undefined) {
        acc[separatedId] += value
      } else {
        acc[separatedId] = value
      }

      return acc
    }, {})

  const ids = Object
    .keys(products)
    .map((id) => new Types.ObjectId(id))

  const items = await Product.aggregate([
    {
      $match: { _id: { $in: ids } },
    },
    {
      $project: { _id: 1, price: 1 }
    }
  ])

  const totalPrice = items.reduce(
    (acc, item) => (acc += item.price * products[item._id]),
    0
  )

  res.json({ totalPrice })
})

export default router
