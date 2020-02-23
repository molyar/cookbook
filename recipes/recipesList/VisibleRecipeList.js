import { connect } from 'react-redux'
// import { toggleTodo } from '../actions'
import RecipeList from './RecipeList'

const mapStateToProps = state => ({
  recipes: state.recipes
})


export default connect(
  mapStateToProps
)(RecipeList)