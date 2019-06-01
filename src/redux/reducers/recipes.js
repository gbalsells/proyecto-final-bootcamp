import actionTypes from '../actionTypes';

const initialState = {
  recipesLoading: true,
  recipes: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_RECIPES: {
      return {
        ...state,
        recipesLoading: true,
        recipes: []
      }
    }
    case actionTypes.GET_RECIPES_SUCCESS: {
      return {
        ...state,
        recipesLoading: false,
        recipes: action.recipes
      }
    }
    default:
      return state
  }
}