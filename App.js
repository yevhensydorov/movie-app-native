import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={styles.header}> Movie App </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    padding: 30,
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: 'powderblue'

  }
})