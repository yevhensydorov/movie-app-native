import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class MovieCard extends Component {
  render() {
    return (
      <View
        style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.cardImage}
            source={{ uri: this.props.pic }} />
        </View>
        <View style={styles.textContainer}>
          <Text
            style={styles.cardTitle}> {this.props.title} </Text>
          <Text style={styles.year}> {this.props.year} </Text>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2,
    borderBottomWidth: 1,
    borderColor: 'grey'
  },
  textContainer: {
    flex: 3
  },
  cardTitle: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  imageContainer: {
    flex: 1
  },
  cardImage: {
    height: 120,
    width: 85
  },
  year: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 5
  }

})