import React from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
const App = createDrawerNavigator({
  Home: {
    Main: HomeScreen,
  },
});

export default createDrawerNavigator({
});

import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import AuthTabNavigator from './AuthTabNavigator';
const RootStack =  createSwitchNavigator({
  // You could add another route here for authentication.
  // Reaad more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: AuthTabNavigator,
  App: MainTabNavigator,
});
const App = createAppContainer(RootStack);
export default App;
