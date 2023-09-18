import { combineReducers } from "redux"
import { secretReducer } from "./secret/reducer"
import { productsReducer } from "./products/reducer"

export const rootReducer = combineReducers({
  secret: secretReducer,
  products: productsReducer,
})
