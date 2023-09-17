import { SET_SECRET, REMOVE_SECRET } from "./types"

const initialState = {
  token: localStorage.getItem("secret"),
}

export const secretReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SECRET:
      return { token: action.payload }
    case REMOVE_SECRET:
      return { token: "" }
    default:
      return state
  }
}
