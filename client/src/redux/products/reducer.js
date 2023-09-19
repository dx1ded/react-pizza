import { SET_LIST, SET_TOTAL_COUNT, SET_LIST_LOADING } from "./types"

const initialState = {
  list: [],
  totalCount: 0,
  isLoading: true,
}

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST:
      return {
        ...state,
        list: action.payload,
      }
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload,
      }
    case SET_LIST_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }
    default:
      return state
  }
}
