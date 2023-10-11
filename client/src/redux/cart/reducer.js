import {
  ADD_TO_CART,
  CHANGE_CART_BY,
  CLEAR_CART,
  REMOVE_FROM_CART,
  SET_CART_PRODUCTS,
} from "./types"

const initialState = {
  list: JSON.parse(localStorage.getItem("cart")) || {},
  products: [],
}

export const cartReducer = (state = initialState, action) => {
  let newList = { ...state.list }
  let newProducts = [...state.products]

  switch (action.type) {
    case SET_CART_PRODUCTS:
      return {
        ...state,
        products: action.payload.map((product) => ({
          ...product,
          count: state.list[product._id],
        })),
      }
    case ADD_TO_CART:
      newList = {
        ...newList,
        [action.payload]: state.list[action.payload] + 1 || 1,
      }

      break
    case CHANGE_CART_BY:
      newList = {
        ...newList,
        [action.payload.id]: action.payload.value,
      }
      break
    case REMOVE_FROM_CART:
      delete newList[action.payload]
      newProducts = state.products.filter(
        (product) => product._id !== action.payload
      )
      break
    case CLEAR_CART:
      newList = {}
      newProducts = []
      break
    default:
      return state
  }

  newProducts = newProducts.map((product) => ({
    ...product,
    count: newList[product._id],
  }))

  localStorage.setItem("cart", JSON.stringify(newList))

  return { ...state, list: newList, products: newProducts }
}
