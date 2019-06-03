import actionTypes from '../actionTypes';

const initialState = {
  chefLoading: true,
  chef: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_CHEF_BY_ID: {
      return {
        ...state,
        chefLoading: true,
        chef: {}
      }
    }
    case actionTypes.GET_CHEF_BY_ID_SUCCESS: {
      return {
        ...state,
        chefLoading: false,
        chef: action.chef
      }
    }
    default:
      return state
  }
}