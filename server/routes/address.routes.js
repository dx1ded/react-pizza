import { Router, json } from "express"
import { AuthMiddleware } from "../auth.middleware.js"
import { Address } from "../models/Address.js"

const router = Router()

router.use(json())

// -> /api/address/add
router.post("/add", AuthMiddleware, async (req, res) => {
  const addressData = req.body.address
  const userId = res.locals._id

  const address = new Address({
    userId,
    ...addressData
  })

  await address.save()

  res.json({ address })
})

// -> /api/address/edit
router.post("/edit", AuthMiddleware, async (req, res) => {
  const addressData = req.body.address

  await Address.findOneAndUpdate(
    { _id: addressData._id },
    addressData
  )

  res.json({ message: "Ok" })
})

// -> /api/address/remove
router.post("/remove", AuthMiddleware, async (req, res) => {
  const id = req.body.id

  await Address.deleteOne({ _id: id })

  res.json({ message: "Ok" })
})

// -> /api/address/find
router.post("/find", AuthMiddleware, async (req, res) => {
  const id = req.body.id

  const address = await Address.findOne({ _id: id })

  res.json({ address })
})

export default router