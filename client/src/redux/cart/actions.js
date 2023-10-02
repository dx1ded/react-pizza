import {
  ADD_TO_CART,
  CHANGE_IN_CART_BY,
  CLEAR_CART,
  REMOVE_FROM_CART,
  SET_CART_PRODUCTS,
} from "./types"

export const addToCart = (productId) => ({
  type: ADD_TO_CART,
  payload: productId,
})

// payload -> productId: String, value: Number
export const changeInCartBy = (payload) => ({
  type: CHANGE_IN_CART_BY,
  payload,
})

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
})

export const setCartProducts = (products) => ({
  type: SET_CART_PRODUCTS,
  payload: products,
})

export const clearCart = () => ({
  type: CLEAR_CART,
})
