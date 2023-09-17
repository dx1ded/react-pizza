import { Schema, model } from "mongoose"

const productSchema = new Schema({
  imageUrl: String,
  title: String,
  types: Array,
  sizes: Array,
  price: Number,
  category: Number,
  rating: Number
})

export const Product = model("product", productSchema)
