import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class MovieCard extends Component {
  render() {
    return (
      <View>
        <Image
          style={styles.cardImage}
          source={{ uri: 'http://via.placeholder.com/50x70' }} />
        <Text> Movie Title </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardImage: {
    height: 120,
    width: 90,
    backgroundColor: 'green'
  }
})