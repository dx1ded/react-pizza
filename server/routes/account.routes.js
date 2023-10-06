import { Router, json } from "express"
import jwt from "jsonwebtoken"
import { AuthMiddleware } from "../auth.middleware.js"
import { User } from "../models/User.js"
import { Address } from "../models/Address.js"

const router = Router()

router.use(json())

router.post("/info", AuthMiddleware, async (req, res) => {
  const decoded = jwt.verify(req.body.token, process.env.SECRET_TOKEN)
  const user = await User.findOne({ email: decoded.data })
  const addresses = await Address.find({ userId: user._id })

  res.json({ user, addresses })
})

router.post("/addAddress", AuthMiddleware, async (req, res) => {
  const userId = req.body.userId
  const addressData = req.body.address

  const address = new Address({
    userId,
    ...addressData
  })

  await address.save()

  res.json({ message: "Ok", address })
})

router.post("/editAddress", AuthMiddleware, async (req, res) => {
  const addressData = req.body.address

  await Address.findOneAndUpdate(
    { _id: addressData._id },
    addressData
  )

  res.json({ message: "Ok" })
})

router.post("/removeAddress", AuthMiddleware, async (req, res) => {
  const id = req.body.id

  await Address.deleteOne({ _id: id })

  res.json({ message: "Ok" })
})

export default router
