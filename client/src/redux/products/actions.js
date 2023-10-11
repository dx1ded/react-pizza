import { SET_PRODUCTS, SET_PRODUCTS_COUNT, SET_PRODUCTS_LOADING } from "./types"

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
})

export const setProductsCount = (count) => ({
  type: SET_PRODUCTS_COUNT,
  payload: count,
})

export const setProductsLoading = (boolean) => ({
  type: SET_PRODUCTS_LOADING,
  payload: boolean,
})
