import { combineReducers } from 'redux'
import recipes from './recipes'
import basket from './basket'
import visibleRecipes from './visibleRecipes'

export default combineReducers({
  recipes,
  basket,
  visibleRecipes
})