import { Router, json } from "express"
import { Types } from "mongoose"
import { AuthMiddleware } from "../auth.middleware.js"
import { Order } from "../models/Order.js"
import { ORDERS_PER_PAGE } from "../utils.js"

const router = Router()

router.use(json())

// -> /api/order/place
router.post("/place", AuthMiddleware, async (req, res) => {
  const { items, address, payMethod } = req.body
  const userId = res.locals._id

  const order = new Order({
    userId,
    items,
    address,
    payMethod
  })

  await order.save()

  res.json({ message: "Ok" })
})

// -> /api/order/list
router.post("/list/:page", AuthMiddleware, async (req, res) => {
  const page = req.params.page
  const userId = res.locals._id

  const orders = await Order.aggregate([
    { $match: { userId: new Types.ObjectId(userId) } },
    { $skip: (page - 1) * ORDERS_PER_PAGE },
    { $limit: ORDERS_PER_PAGE }
  ])

  const count = await Order.countDocuments({ userId })

  res.json({ orders, count })
})

export default router
