import { CLOSE_BURGER, OPEN_BURGER } from "./types"

const initialState = {
  isOpened: false,
}

export const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_BURGER:
      return {
        isOpened: true,
      }
    case CLOSE_BURGER:
      return {
        isOpened: false,
      }
    default:
      return state
  }
}
