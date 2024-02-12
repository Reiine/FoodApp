import React from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

import { restaurants } from "../items";

const Restaurants = ({ navigation }) => {
  const itemWidth = Dimensions.get("window").width - 30;

  const renderItem = ({ item }) => {
    const { name, image } = item;
    return (
      <TouchableOpacity
      activeOpacity={0.9}
        style={styles.box}
        onPress={() => navigation.navigate("ItemDetails", { name })}
      >
        <Image style={styles.image} source={image} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.heading}>Restaurants</Text>
        <FlatList
          data={restaurants}
          renderItem={renderItem}
          horizontal
          decelerationRate="fast"
          snapToInterval={itemWidth + 30}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 10,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  container: {
    paddingHorizontal: 10,
  },
  box: {
    height: 185,
    width: Dimensions.get("window").width - 30,
    marginHorizontal: 15,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  image: {
    flex: 1,
    width: "100%",
    borderRadius: 10,
  },
});

export default Restaurants;
