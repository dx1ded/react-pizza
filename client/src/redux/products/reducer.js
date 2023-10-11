import { SET_PRODUCTS, SET_PRODUCTS_COUNT, SET_PRODUCTS_LOADING } from "./types"

const initialState = {
  list: [],
  count: 0,
  isLoading: true,
}

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        list: action.payload,
      }
    case SET_PRODUCTS_COUNT:
      return {
        ...state,
        count: action.payload,
      }
    case SET_PRODUCTS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }
    default:
      return state
  }
}
