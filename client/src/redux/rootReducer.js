import { combineReducers } from "redux"
import { secretReducer } from "./secret/reducer"

export const rootReducer = combineReducers({
  secret: secretReducer,
})
