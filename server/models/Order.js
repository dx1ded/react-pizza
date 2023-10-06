import { Schema, Types, model } from "mongoose"

const orderSchema = new Schema({
  userId: Types.ObjectId,
  orderId: Number,
  items: Array,
  totalPrice: Number,
  date: Date
})

export const Order = model("order", orderSchema)
