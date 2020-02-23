const basket = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          completed: false
        }
      ]
    case 'TOGGLE_PRODUCT':
      return state.map(product =>
        product.id === action.id ? { ...product, completed: !product.completed } : product
      )
    case 'CLEAR_PRODUCTS':
      return {}
    default:
      return state
  }
}
export default basket