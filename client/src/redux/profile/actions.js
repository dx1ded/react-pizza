import {
  ADD_ADDRESS,
  EDIT_ADDRESS,
  SET_IS_LOADING,
  REMOVE_ADDRESS,
  SET_ADDRESSES,
  SET_USER,
} from "./types"

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
})

export const setAddresses = (addresses) => ({
  type: SET_ADDRESSES,
  payload: addresses,
})

export const setIsLoading = (boolean) => ({
  type: SET_IS_LOADING,
  payload: boolean,
})

export const addAddress = (address) => ({
  type: ADD_ADDRESS,
  payload: address,
})

export const editAddress = (address) => ({
  type: EDIT_ADDRESS,
  payload: address,
})

export const removeAddress = (id) => ({
  type: REMOVE_ADDRESS,
  payload: id,
})
