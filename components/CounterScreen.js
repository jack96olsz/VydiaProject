import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from '../store/store.js';
import CounterContainer from '../containers/CounterContainer.js';

{/* Screen with a counter */}
class CounterScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Counter"
    }
  };

  render() {
    const { state, navigate } = this.props.navigation;
    return (
      /* Custom CounterContainer and store for state */
        <Provider store={store}>
          <View
            style={styles.container}>
            <CounterContainer/>
          </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    padding: 30,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  button: {
    alignSelf: 'stretch',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center'
  }
});

export default CounterScreen;
