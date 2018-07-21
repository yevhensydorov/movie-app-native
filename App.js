import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MovieCard from './src/components/MovieCard';

export default class App extends Component {
  render() {
    return (
      <View>
        <Text
          style={styles.header}> Movie App </Text>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
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
