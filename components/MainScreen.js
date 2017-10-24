import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

{/* Home Screen */}
export default class MainScreen extends Component {
  static navigationOptions = {
    title: "Welcome"
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View
        style={styles.container}>

        {/* Menu Text */}
        <Text
          style={styles.text}>
          Menu
        </Text>

        {/* Open CounterScreen Button */}
        <TouchableHighlight
          style={styles.button}
          onPress={() => navigate("CounterScreen", {screen: "CounterScreen"})}>
          <Text
            style={styles.buttonText}>
            Open Counter
          </Text>
        </TouchableHighlight>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  button: {
    alignSelf: 'stretch',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  buttonText: {
    color: 'black',
    fontSize: 22,
    alignSelf: 'center'
  }
});
