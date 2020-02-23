import React from 'react'
import PropTypes from 'prop-types'
import RecipeListElement from './VisibleRecipeListElement'
import { View, ScrollView, FlatList } from 'react-native';




const RecipeList = ({ recipes, navigation }) => (
    <ScrollView style={{top: 50}}>
        {recipes.map(re => (
            <RecipeListElement  key={re.id} recipe_id={re.id} recipe={re} nav={navigation}  />
        ))}
    </ScrollView>
)

RecipeList._clickRecipe  = () => {
    
};


RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}
export default RecipeList