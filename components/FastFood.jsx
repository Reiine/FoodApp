import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import { imagesDataFlat } from "../images";

export default function FastFood({navigation}) {


  const renderItem = ({ item }) => {
    const { name } = item;
    return (
      <View style={styles.flatCardBox}>
        {name == "burger" ? (
          <TouchableOpacity
            onPress={()=>navigation.navigate("ItemDetails",{name:"burger"})}
            activeOpacity={0.9}
          >
            <Image
              style={styles.image}
              source={require("../assets/burger.jpg")}
            />
          </TouchableOpacity>
        ) : name == "pizza" ? (
          <TouchableOpacity
          onPress={()=>navigation.navigate("ItemDetails",{name:"pizza"})}
            activeOpacity={0.9}
          >
            <Image
              style={styles.image}
              source={require("../assets/pizza.jpg")}
            />
          </TouchableOpacity>
        ) : name == "ramen" ? (
          <TouchableOpacity
          onPress={()=>navigation.navigate("ItemDetails",{name:"ramen"})}
            activeOpacity={0.9}
          >
            <Image
              style={styles.image}
              source={require("../assets/ramen.jpg")}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
          onPress={()=>navigation.navigate("ItemDetails",{name:"drinks"})}
            activeOpacity={0.9}
          >
            <Image
              style={styles.image}
              source={require("../assets/drinks.jpg")}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <View>
        <Text style={styles.heading}>Fast Food</Text>
        <FlatList
          horizontal
          data={imagesDataFlat}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },

  flatCardBox: {
    height: 185,
    width: 185,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    borderRadius: 10,
  },
  flatCardItem: {
    color: "white",
  },
  image: {
    flex: 1,
    width: 170,
    borderRadius: 10,
  },
});
