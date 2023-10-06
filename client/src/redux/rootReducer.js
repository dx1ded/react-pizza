import { combineReducers } from "redux"
import { secretReducer } from "./secret/reducer"
import { productsReducer } from "./products/reducer"
import { cartReducer } from "./cart/reducer"
import { profileReducer } from "./profile/reducer"

export const rootReducer = combineReducers({
  secret: secretReducer,
  products: productsReducer,
  cart: cartReducer,
  profile: profileReducer,
})
