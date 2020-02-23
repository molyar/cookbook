import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';

import RecipesListScreen from '../recipes/recipesList/VisibleRecipeList';
import RecipeDescription from '../recipes/recipeDescription/ContainerRecipeDescription';

import BasketList from '../basket/basketList/ContainerBasketList';

import SettingsScreen from '../screens/SettingsScreen';

// import Recipes from '../Recipes'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const RecipesStack = createStackNavigator(
  {
    RecipesList: RecipesListScreen,
    RecipeDescription: RecipeDescription,
  }
);

RecipesStack.navigationOptions = {
  tabBarLabel: 'Рецепты',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};


RecipesStack.path = '';



const BasketStack = createStackNavigator(
  {
    BasketList: BasketList,
  }
);

BasketStack.navigationOptions = {
  tabBarLabel: 'Покупки',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};


BasketStack.path = ''


const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  RecipesStack,
  BasketStack,
  SettingsStack
});

tabNavigator.path = '';

export default tabNavigator;
