import { Schema, Types, model } from "mongoose"

const addressSchema = new Schema({
  userId: Types.ObjectId,
  title: String,
  unit: Number,
  streetNumber: Number,
  streetName: String,
  city: String,
  province: String,
  postalCode: String
})

export const Address = model("address", addressSchema)
