import actionTypes from '../actionTypes';

const initialState = {
  ingredientsLoading: true,
  ingredients: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_INGREDIENTS: {
      return {
        ...state,
        ingredientsLoading: true,
        ingredients: []
      }
    }
    case actionTypes.GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsLoading: false,
        ingredients: action.ingredients
      }
    }
    default:
      return state
  }
}