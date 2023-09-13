import { Schema, model } from "mongoose"

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  picture: {
    type: String,
    default: "https://static.wixstatic.com/media/8b5c7c_08163db9119c45da8d492974b9c862b2~mv2.png/v1/fill/w_560,h_564,al_c,lg_1,q_85,enc_auto/8b5c7c_08163db9119c45da8d492974b9c862b2~mv2.png"
  },
  email: { type: String, unique: true },
  username: { type: String, unique: true },
  password: String
})

export const User = model("User", userSchema)
