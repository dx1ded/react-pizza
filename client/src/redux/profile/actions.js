import {
  ADD_ADDRESS,
  EDIT_ADDRESS,
  IS_LOADING,
  REMOVE_ADDRESS,
  SET_ADDRESSES,
  SET_PROFILE_INFO,
} from "./types"

export const setProfileInfo = (data) => ({
  type: SET_PROFILE_INFO,
  payload: data,
})

export const setAddresses = (data) => ({
  type: SET_ADDRESSES,
  payload: data,
})

export const setIsLoading = (boolean) => ({
  type: IS_LOADING,
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
