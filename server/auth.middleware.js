import jwt from "jsonwebtoken"

export const AuthMiddleware = (req, res, next) => {
  jwt.verify(req.body.token, process.env.SECRET_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" })
    }

    res.locals._id = decoded.data

    next()
  })
}
