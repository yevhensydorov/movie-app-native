import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator
} from "react-native";
import MovieCard from "./src/components/MovieCard";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: []
    };
  }
  componentDidMount() {
    return fetch("https://www.omdbapi.com/?apikey=674ff9&s=star")
      .then(data => data.json())
      .then(movies => {
        this.setState({
          isLoading: false,
          data: movies.Search
        });
      });
  }
  render() {
    return (
      <ScrollView>
        <View>
          <Text style={styles.header}> Movie App </Text>
        </View>

        <View style={styles.container}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <Text style={styles.item}>
                {item.Title} - {item.Year}
              </Text>
            )}
          />
        </View>
        <Text style={styles.header}> Movie App </Text>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    padding: 30,
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "powderblue"
  }
});
