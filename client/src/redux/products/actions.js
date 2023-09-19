import { SET_LIST, SET_TOTAL_COUNT, SET_LIST_LOADING } from "./types"

export const setProductsList = (products) => ({
  type: SET_LIST,
  payload: products,
})

export const setTotalCount = (count) => ({
  type: SET_TOTAL_COUNT,
  payload: count,
})

export const setListLoading = (boolean) => ({
  type: SET_LIST_LOADING,
  payload: boolean,
})
