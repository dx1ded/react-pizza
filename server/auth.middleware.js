import jwt from "jsonwebtoken"

export const AuthMiddleware = (req, res, next) => {
  jwt.verify(req.body.secret, process.env.SECRET_TOKEN, (err) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" })
    }

    next()
  })
}
