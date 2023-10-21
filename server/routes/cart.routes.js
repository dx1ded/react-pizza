import { Router, json } from "express"
import { Types } from "mongoose"
import { AuthMiddleware } from "../auth.middleware.js"
import { Product } from "../models/Product.js"

const router = Router()

router.use(json())

// -> /api/cart/getPrice
router.post("/getPrice", AuthMiddleware, async (req, res) => {
  try {
    const cart = Object.entries(req.body.cart).reduce((acc, [key, value]) => {
      const [id] = key.split("_")

      return acc[id] !== undefined ? (acc[id] += value) : (acc[id] = value), acc
    }, {})

    const productsIds = Object.keys(cart).map((id) =>
      new Types.ObjectId(id)
    )

    const products = await Product.aggregate([
      { $match: { _id: { $in: productsIds } } },
      { $project: { _id: 1, price: 1 } }
    ])

    const price = products.reduce((acc, product) =>
        acc += product.price * cart[product._id],
      0
    )

    res.json({ price })
  } catch (e) {
    console.log(e)
  }
})

export default router
