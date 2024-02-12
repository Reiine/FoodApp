import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.logo}>FoodApp</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    zIndex:99999
  },
  container: {
    height: 50,
    backgroundColor: "#222",
    position: "absolute",
    top: 0,
    width: "100%",
  },
  logo: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
  },
});
