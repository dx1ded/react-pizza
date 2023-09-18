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
  const { page = 1, filterBy, sortBy } = req.query

  const aggregator = [
    { $skip: (page - 1) * PRODUCTS_PER_PAGE },
    { $limit: PRODUCTS_PER_PAGE },
  ]

  if (sortBy) aggregator.unshift({
    $sort: sortOptions[sortBy]
  })

  if (filterBy && filterBy !== "All") aggregator.unshift({
    $match: { category: filterOptions.indexOf(filterBy) }
  })

  const products = await Product.aggregate(aggregator)

  res.json({ products })
})

export default router
