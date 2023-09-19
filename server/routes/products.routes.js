import { Router, json } from "express"
import { AuthMiddleware } from "../auth.middleware.js"
import { Product } from "../models/Product.js"

const router = Router()

const PRODUCTS_PER_PAGE = 4
const filterOptions = ["Meat", "Vegetarian", "Grill", "Spicy", "Closed"]
const sortOptions = {
  rating: { rating: -1 },
  price_increasing: { price: 1 },
  price_decreasing: { price: -1 }
}

router.use(json())

// -> /api/products/list
router.post("/list", AuthMiddleware, async (req, res) => {
  try {
    const { page = 1, filterBy, sortBy = "rating" } = req.query

    const aggregator = [
      { $skip: (page - 1) * PRODUCTS_PER_PAGE },
      { $limit: PRODUCTS_PER_PAGE },
    ]

    const paramsAggregator = []

    if (filterBy && filterBy !== "All") paramsAggregator.push({
      $match: { category: filterOptions.indexOf(filterBy) }
    })

    if (sortBy) paramsAggregator.push({
      $sort: sortOptions[sortBy]
    })

    const products = await Product.aggregate([
      ...paramsAggregator,
      ...aggregator
    ])

    const result = await Product.aggregate([
      ...paramsAggregator,
      { $count: "count" }
    ])

    res.json({ products, totalCount: result[0].count })
  } catch (e) {
    console.error(e)
  }
})

export default router
