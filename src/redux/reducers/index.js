import { combineReducers } from "redux";
import recipes from "./recipes";
import recipesById from "./recipesById";
import chefs from "./chefs";
import chefById from "./chefById";
import ingredients from "./ingredients";
import ingredientById from "./ingredientById"
import galleries from "./galleries"

export default combineReducers({ recipes, recipesById, chefs, chefById, ingredients, ingredientById, galleries });