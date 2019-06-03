import actionTypes from '../actionTypes';

const initialState = {
  gallerieLoading: true,
  gallerie: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_GALLERIE_BY_ID: {
      return {
        ...state,
        gallerieLoading: true,
        gallerie: {}
      }
    }
    case actionTypes.GET_GALLERIE_BY_ID_SUCCESS: {
      return {
        ...state,
        gallerieLoading: false,
        gallerie: action.gallerie
      }
    }
    default:
      return state
  }
}