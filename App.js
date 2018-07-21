import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator
} from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: []
    };
  }
  componentDidMount() {
    return fetch("http://www.omdbapi.com/?apikey=674ff9&s=star")
      .then(data => data.json())
      .then(movies => {
        this.setState({
          isLoading: false,
          data: movies.Search
        });
      });
  }
  render() {
    // console.log(
    //   "data from state in render",
    //   this.state.isLoading,
    //   this.state.data
    // );
    return (
      <View>
        <View>
          <Text style={styles.header}> Movie App </Text>
        </View>
        this.state.isLoading ? (<View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>) : (<View style={{ flex: 1, paddingTop: 20 }}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <Text>
                {item.Title}, {item.Year}
              </Text>
            )}
            keyExtractor={(item, index) => index}
          />
        </View>)
      </View>
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
