import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";

export default class TodaysPick extends Component {
  render() {
    const openWebsite = () => {
      Linking.openURL(
        "https://recipes.timesofindia.com/recipes/tomato-penne-pasta/rs84784534.cms"
      );
    };
    return (
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.heading}>Today's Pick</Text>
          <View style={styles.box}>
            <Image
              style={styles.image}
              source={require("../assets/pasta.webp")}
            />
            <View style={styles.headAndRead}>
              <Text style={styles.headText}>Tomato Penne Pasta</Text>
              <TouchableOpacity onPress={openWebsite} activeOpacity={0.7}>
                <Text style={styles.btnText}>(Read more ↗)</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.paraText}>
              Tomato Pasta is a very wholesome dish made from organic tomato
              sauce and spices. It's a subtle recipe with exciting flavours of
              tomato and a handful of other ingredients.
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 10,
    backgroundColor: "#222",
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 10,
  },
  box: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    marginBottom:20
  },
  image: {
    flex: 1,
    width: 400,
    height: 185,
    alignSelf: "center",
  },
  headText: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
    marginVertical: 10,
  },
  paraText: {
    fontSize: 15,
    textAlign: "justify",
    color: "white",
  },
  btnText: {
    color: "dodgerblue",
    marginLeft:10
  },
  headAndRead:{
    flexDirection:"row",
    alignItems: "center",
  }
});
