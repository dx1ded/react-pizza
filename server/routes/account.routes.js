import { Router, json } from "express"
import { AuthMiddleware } from "../auth.middleware.js"
import { User } from "../models/User.js"
import { Address } from "../models/Address.js"

const router = Router()

router.use(json())

router.post("/info", AuthMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({ _id: res.locals._id })
    const addresses = await Address.find({ userId: user._id })

    res.json({ user, addresses })
  } catch (e) {
    console.log(e)
  }
})

export default router
