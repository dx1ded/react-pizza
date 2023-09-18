import { SET_LIST, SET_FILTERED_LIST, SET_LIST_IS_LOADING } from "./types"

export const setProductsList = (products) => ({
  type: SET_LIST,
  payload: products,
})

export const setFilteredProductsList = (products) => ({
  type: SET_FILTERED_LIST,
  payload: products,
})

export const setListIsLoading = (boolean) => ({
  type: SET_LIST_IS_LOADING,
  payload: boolean,
})
