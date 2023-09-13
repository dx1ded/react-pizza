import "dotenv/config"
import express from "express"
import mongoose from "mongoose"

import AuthRouter from "./routes/auth.routes.js"

const app = express()

app.use("/api/auth", AuthRouter)

app.listen(process.env.PORT, (err) => {
  if (err) throw err
  console.log(`Server is listening port ${process.env.PORT}`)

  mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Server is connected to the MongoDB Cluster"))
})
