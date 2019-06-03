import actionTypes from '../actionTypes';

const initialState = {
  recipeLoading: true,
  recipes: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_RECIPE_BY_ID: {
      return {
        ...state,
        recipeLoading: true,
        recipe: {}
      }
    }
    case actionTypes.GET_RECIPE_BY_ID_SUCCESS: {
      return {
        ...state,
        recipeLoading: false,
        recipe: action.recipe
      }
    }
    default:
      return state
  }
}