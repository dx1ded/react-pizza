import "dotenv/config"
import express from "express"
import mongoose from "mongoose"

import AuthRouter from "./routes/auth.routes.js"
import ProductsRouter from "./routes/products.routes.js"
import CartRouter from "./routes/cart.routes.js"
import AccountRouter from "./routes/account.routes.js"
import AddressRouter from "./routes/address.routes.js"
import OrderRouter from "./routes/order.routes.js"

const app = express()

app.use("/api/auth", AuthRouter)
app.use("/api/products", ProductsRouter)
app.use("/api/cart", CartRouter)
app.use("/api/account", AccountRouter)
app.use("/api/address", AddressRouter)
app.use("/api/order", OrderRouter)

app.listen(process.env.PORT, (err) => {
  if (err) throw err
  console.log(`Server is listening port ${process.env.PORT}`)

  mongoose.connect(process.env.MONGO_URL)
    .then((res) => console.log("Server is connected to the MongoDB Cluster"))
})
