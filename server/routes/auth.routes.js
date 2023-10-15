import { Router, json } from "express"
import { body, validationResult } from "express-validator"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { User } from "../models/User.js"

const router = Router()
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

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
    const hashedPassword = await bcrypt.hash(req.body.password, +process.env.SALT_ROUNDS)

    const user = new User({
      ...req.body,
      password: hashedPassword
    })

    const secret = jwt.sign({
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7), // 7 days
      data: user._id
    }, process.env.SECRET_TOKEN)

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
  const { login, password } = req.body

  if (!login) {
    return res.status(400)
  }

  let loginType = emailRegexp.test(login) ? "email" : "username"

  const user = await User.findOne({ [loginType]: login })

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
    exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7), // 7 days
    data: user._id
  }, process.env.SECRET_TOKEN)

  res.json({ secret })
})

// -> /api/auth/isEmailTaken
router.post("/isEmailTaken", async (req, res) => {
  const email = req.body.email

  const user = await User.findOne({ email })

  res.json({ isTaken: !!user })
})

// -> api/auth/isUsernameTaken
router.post("/isUsernameTaken", async (req, res) => {
  const username = req.body.username

  const user = await User.findOne({ username })

  res.json({ isTaken: !!user })
})

export default router
