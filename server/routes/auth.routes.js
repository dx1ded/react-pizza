import { Router, json } from "express"
import { body, validationResult } from "express-validator"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { User } from "../models/User.js"

const router = Router()

router.use(json())

// -> /api/auth/sign-up
router.post(
  "/sign-up",
  body("firstName").exists(),
  body("lastName").exists(),
  body("email").isEmail(),
  body("username").exists(),
  body("password").isLength({ min: 8, max: 128 }),
  async (req, res) => {
  const result = validationResult(req)

  if (!result.isEmpty()) {
    return res.status(400)
      .json({ message: "Request body schema is incorrect" })
  }

  try {
    const secret = jwt.sign({
      exp: 60 * 60 * 24 * 7, // 7 days
      data: req.body.email
    }, process.env.SECRET_TOKEN)

    const hashedPassword = await bcrypt.hash(req.body.password, +process.env.SALT_ROUNDS)

    const user = new User({
      ...req.body,
      password: hashedPassword
    })

    await user.save()

    res.json({ secret })
  } catch (e) {
    // If username or email is already taken
    if (e.code === 11000) {
      return res.status(400)
        .json({ message: "E-mail or username is already taken" })
    }

    console.error(e)

    res.status(500)
  }
})

// -> /api/auth/sign-in
router.post("/sign-in", async (req, res) => {
  const { email, username, password } = req.body

  if (!username && !email) {
    return res.status(400)
  }

  const user = await User.findOne({
    [email ? "email" : "username"]: email || username
  })

  if (!user) {
    return res.status(400)
      .json({ message: "User not found" })
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password)

  if (!isPasswordCorrect) {
    return res.status(400)
      .json({ message: "Incorrect credentials" })
  }

  const secret = jwt.sign({
    exp: 60 * 60 * 24 * 7, // 7 days
    data: user.email
  }, process.env.SECRET_TOKEN)

  res.json({ secret })
})

export default router
