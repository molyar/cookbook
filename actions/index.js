export const setStateFromServer = serverState => ({
  type: 'SET_SERVER_STATE',
  serverState
});

export const setActiveRecipe = recipeId => ({
  type: 'SET_ACTIVE_RECIPE',
  recipeId
})