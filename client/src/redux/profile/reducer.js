import {
  ADD_ADDRESS,
  EDIT_ADDRESS,
  SET_IS_LOADING,
  REMOVE_ADDRESS,
  SET_ADDRESSES,
  SET_USER,
} from "./types"

const initialState = {
  user: {},
  addresses: [],
  isLoading: true,
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      }
    case SET_ADDRESSES:
      return {
        ...state,
        addresses: action.payload,
      }
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }
    case ADD_ADDRESS:
      return {
        ...state,
        addresses: [...state.addresses, action.payload],
      }
    case EDIT_ADDRESS:
      return {
        ...state,
        addresses: state.addresses.map((address) =>
          address._id === action.payload._id ? action.payload : address
        ),
      }
    case REMOVE_ADDRESS:
      return {
        ...state,
        addresses: state.addresses.filter(
          (address) => address._id !== action.payload
        ),
      }
    default:
      return state
  }
}
