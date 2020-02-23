const visibleRecipes = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_RECIPE':
      state.active_recipe = action.recipeId
      return state
    default:
      return state
  }
}
export default visibleRecipes