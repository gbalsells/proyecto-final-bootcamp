import actionTypes from '../actionTypes';

const initialState = {
  galleriesLoading: true,
  galleries: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_GALLERIES: {
      return {
        ...state,
        galleriesLoading: true,
        galleries: []
      }
    }
    case actionTypes.GET_GALLERIES_SUCCESS: {
      return {
        ...state,
        galleriesLoading: false,
        galleries: action.galleries
      }
    }
    default:
      return state
  }
}