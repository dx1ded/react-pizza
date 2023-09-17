import { Router, json } from "express"
import { AuthMiddleware } from "../auth.middleware.js"
import { Product } from "../models/Product.js"

const router = Router()
const PRODUCTS_PER_PAGE = 8

router.use(json())

// -> /api/products/list
router.post("/list/:offset?", AuthMiddleware, async (req, res) => {
  const { offset = 0 } = req.params

  const products = await Product.aggregate([
    { $skip: offset * PRODUCTS_PER_PAGE },
    { $limit: PRODUCTS_PER_PAGE }
  ])

  res.json({ products })
})

export default router
