import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const RecipeListElement = ({ setRecipe, recipe, nav, recipe_id }) => (
  <TouchableOpacity onPress={() => { setRecipe(recipe_id); nav.navigate("RecipeDescription", {recipeId:recipe_id}); }} style={{left: 50, height: 60}} >
    <Text style={styles.titleText}>
      {recipe.name}
    </Text>
    <Text  style={styles.baseText}>
      {recipe.description}
    </Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  baseText: {
    fontSize: 14,
    color: '#aaaaaa'
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default RecipeListElement