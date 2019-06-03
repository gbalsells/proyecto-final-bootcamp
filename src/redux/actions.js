import axios from 'axios';
import actionTypes from './actionTypes';
import EndpointBase from '../constants';

export const getRecipes = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.GET_RECIPES
    });

    return axios.get(`${EndpointBase}/recipes`)
      .then(response => {
        dispatch({
          type: actionTypes.GET_RECIPES_SUCCESS,
          recipes: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: actionTypes.GET_RECIPES_ERROR,
          error: error.response
        });
      });
  }
};

export const getChefs = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.GET_CHEFS
    });

    return axios.get(`${EndpointBase}/chefs`)
      .then(response => {
        dispatch({
          type: actionTypes.GET_CHEFS_SUCCESS,
          chefs: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: actionTypes.GET_CHEFS_ERROR,
          error: error.response
        });
      });
  }
};

export const getIngredients = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.GET_INGREDIENTS
    });

    return axios.get(`${EndpointBase}/ingredients`)
      .then(response => {
        dispatch({
          type: actionTypes.GET_INGREDIENTS_SUCCESS,
          ingredients: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: actionTypes.GET_INGREDIENTS_ERROR,
          error: error.response
        });
      });
  }
};

export const getGalleries = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.GET_GALLERIES
    });

    return axios.get(`${EndpointBase}/galleries`)
      .then(response => {
        dispatch({
          type: actionTypes.GET_GALLERIES_SUCCESS,
          galleries: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: actionTypes.GET_GALLERIES_ERROR,
          error: error.response
        });
      });
  }
};


export const getIngredientById = (id) => {
  return dispatch => {
    dispatch({
      type: actionTypes.GET_INGREDIENT_BY_ID
    });

    return axios.get(`${EndpointBase}/ingredients/${id}`)
      .then(response => {
        dispatch({
          type: actionTypes.GET_INGREDIENT_BY_ID_SUCCESS,
          ingredient: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: actionTypes.GET_INGREDIENT_BY_ID_ERROR,
          error: error.response
        });
      });
  }
};

export const getRecipeById = (id) => {
  return dispatch => {
    dispatch({
      type: actionTypes.GET_RECIPE_BY_ID
    });

    return axios.get(`${EndpointBase}/recipes/${id}`)
      .then(response => {
        dispatch({
          type: actionTypes.GET_RECIPE_BY_ID_SUCCESS,
          recipe: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: actionTypes.GET_RECIPE_BY_ID_ERROR,
          error: error.response
        });
      });
  }
};

export const getChefById = (id) => {
  return dispatch => {
    dispatch({
      type: actionTypes.GET_CHEF_BY_ID
    });

    return axios.get(`${EndpointBase}/chefs/${id}`)
      .then(response => {
        dispatch({
          type: actionTypes.GET_CHEF_BY_ID_SUCCESS,
          chef: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: actionTypes.GET_CHEF_BY_ID_ERROR,
          error: error.response
        });
      });
  }
};

export const getGallerieById = (id) => {
  return dispatch => {
    dispatch({
      type: actionTypes.GET_GALLERIE_BY_ID
    });

    return axios.get(`${EndpointBase}/galleries/${id}`)
      .then(response => {
        dispatch({
          type: actionTypes.GET_GALLERIE_BY_ID_SUCCESS,
          gallerie: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: actionTypes.GET_GALLERIE_BY_ID_ERROR,
          error: error.response
        });
      });
  }
};