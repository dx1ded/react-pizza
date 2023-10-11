import {
  ADD_TO_CART,
  CHANGE_CART_BY,
  CLEAR_CART,
  REMOVE_FROM_CART,
  SET_CART_PRODUCTS,
} from "./types"

export const setCartProducts = (products) => ({
  type: SET_CART_PRODUCTS,
  payload: products,
})

export const addToCart = (id) => ({
  type: ADD_TO_CART,
  payload: id,
})

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
})

// payload -> id: String, value: Number
export const changeCartBy = (payload) => ({
  type: CHANGE_CART_BY,
  payload,
})

export const clearCart = () => ({
  type: CLEAR_CART,
})
