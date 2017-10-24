import React from 'react';

import { StackNavigator } from 'react-navigation';
import MainScreen from './components/MainScreen';
import CounterScreen from './components/CounterScreen';

const App = StackNavigator({
    MainScreen: { screen: MainScreen},
    CounterScreen: { screen: CounterScreen}
})

export default App;
