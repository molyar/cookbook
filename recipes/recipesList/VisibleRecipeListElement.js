import { connect } from 'react-redux'
import { setActiveRecipe } from '../../actions'
import RecipeListElement from './RecipeListElement'

const mapStateToProps = (state, ownProps) => ({
  
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setRecipe: () => dispatch(setActiveRecipe(ownProps.recipe_id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeListElement)