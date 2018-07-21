import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class MovieCard extends Component {
  render() {
    return (
      <View
        style={styles.cardContainer}>
        <Image
          style={styles.cardImage}
          source={{ uri: 'http://via.placeholder.com/50x70' }} />
        <Text
          style={styles.cardTitle}> Movie Title </Text>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 2,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'grey'
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardImage: {
    height: 120,
    width: 90,
  }
})