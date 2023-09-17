import { SET_SECRET, REMOVE_SECRET } from "./types"

export const setSecret = (token) => ({
  type: SET_SECRET,
  payload: token,
})

export const removeSecret = () => ({
  type: REMOVE_SECRET,
})
