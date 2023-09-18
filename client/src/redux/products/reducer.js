import { SET_LIST, SET_FILTERED_LIST, SET_LIST_IS_LOADING } from "./types"

const initialState = {
  list: [],
  filteredList: [],
  isLoading: true,
}

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST:
      return {
        ...state,
        list: action.payload,
        filteredList: action.payload,
      }
    case SET_FILTERED_LIST:
      return {
        ...state,
        filteredList: action.payload,
      }
    case SET_LIST_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }
    default:
      return state
  }
}
