import actionTypes from '../actionTypes';

const initialState = {
  chefsLoading: true,
  chefs: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_CHEFS: {
      return {
        ...state,
        chefsLoading: true,
        chefs: []
      }
    }
    case actionTypes.GET_CHEFS_SUCCESS: {
      return {
        ...state,
        chefsLoading: false,
        chefs: action.chefs
      }
    }
    default:
      return state
  }
}