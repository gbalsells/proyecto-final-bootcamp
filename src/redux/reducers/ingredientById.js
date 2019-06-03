import actionTypes from '../actionTypes';

const initialState = {
  ingredientLoading: true,
  ingredient: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_INGREDIENT_BY_ID: {
      return {
        ...state,
        ingredientLoading: true,
        ingredient: {}
      }
    }
    case actionTypes.GET_INGREDIENT_BY_ID_SUCCESS: {
      return {
        ...state,
        ingredientLoading: false,
        ingredient: action.ingredient
      }
    }
    default:
      return state
  }
}