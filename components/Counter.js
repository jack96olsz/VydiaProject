import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Counter extends Component {
  render() {
    return (
      <View
        style={styles.container}>

        {/* Count */}
        <Text
          style={styles.counter}>
          {this.props.count}
        </Text>

        {/* Increment Button */}
        <TouchableHighlight
          style={styles.button}
          onPress={this.props.increment}>
          <Text
            style={styles.buttonText}>
            +
          </Text>
        </TouchableHighlight>

        {/* Reset button */}
        <TouchableHighlight
          style={styles.button}
          onPress={this.props.reset}>
          <Text
            style={styles.buttonText}>
            Reset
          </Text>
        </TouchableHighlight>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  counter: {
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold'
  },
  button: {
    borderRadius: 5,
    padding: 20,
    margin: 10,
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    alignSelf: 'center'
  }
});

export default Counter;
