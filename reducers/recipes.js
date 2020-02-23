const recipes = (state = [], action) => {
  switch (action.type) {
    case 'SET_SERVER_STATE':
      state = action.serverState
      return state
    case 'ADD_RECIPE':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          description: action.description,
          ingredient: action.ingredient,
          instruction: action.instruction,
          categories: action.categories,
          categories: action.categories,
          time: action.time,
        }
      ]
    default:
      return state
  }
}
export default recipes