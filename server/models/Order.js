import { Schema, Types, model } from "mongoose"
import { AutoIncrementID } from "@typegoose/auto-increment"

const orderSchema = new Schema({
  _id: Number,
  userId: Types.ObjectId,
  items: Array,
  address: Object,
  payMethod: String
}, { timestamps: true })

orderSchema.plugin(AutoIncrementID, {})

export const Order = model("order", orderSchema)