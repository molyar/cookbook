import { connect } from 'react-redux'
// import { setActiveRecipe } from '../../actions'
import RecipeDescription from './RecipeDescription'

const getRevipe = (recipes, recipeid) => {
    return recipes.find(r => r.id == recipeid)
}

const mapStateToProps = (state, ownProps) => ({
    recipe: getRevipe(state.recipes, state.visibleRecipes.active_recipe)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // setRecipe: () => dispatch(setActiveRecipe(ownProps.recipe_id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeDescription)