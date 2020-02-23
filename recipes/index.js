import { createStackNavigator } from 'react-navigation-stack';
import RecipeList from './RecipesList/VisibleRecipeList';
import RecipeDescription from './RecipeDescription/RecipeDescription';

export default createStackNavigator({
    RecipeList,
    RecipeDescription
});