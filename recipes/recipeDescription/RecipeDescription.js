import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, ScrollView, FlatList } from 'react-native';




const RecipeDescription = ({ navigation, recipe }) => (
    <View style={{top: 50}}>
        <Text > {recipe.name} </Text>
      <Text >Recipe Description = {recipe.description} </Text>
    </View>
)


//{navigation.getParam('recipeId', -1)}

RecipeDescription.propTypes = {
    recipe: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }).isRequired
}

export default RecipeDescription