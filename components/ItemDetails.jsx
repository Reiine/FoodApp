import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import { items } from "../items";
import ContactUs from "./ContactUs";
import { restaurants } from "../items";
export default function ItemDetails({ navigation, route }) {
  const [itemDetails, setItemDetails] = useState();

  useEffect(() => {
    const itemDetails = items.find(
      (data) => data.name.toLowerCase() === route.params.name
    );
    setItemDetails(itemDetails);
    if (!itemDetails) {
      const itemDetails = restaurants.find(
        (data) => data.name.toLowerCase() === route.params.name.toLowerCase()
      );
      setItemDetails(itemDetails);
    }
  }, [items, route.params.name]);

  const openWebsite = (e) => {
    Linking.openURL(e);
  };

  return (
    <ScrollView>
      {itemDetails && (
        <View style={styles.wrapper}>
          <Text style={styles.heading}>{itemDetails.name}</Text>
          <Image style={styles.img} source={itemDetails.image} />
          <Text style={styles.details}>{itemDetails.details}</Text>
          <Text style={styles.reference}>References:</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => openWebsite(itemDetails.references.website)}
          >
            <Text style={[styles.details, { color: "dodgerblue" }]}>
              {itemDetails.references.website}
            </Text>
          </TouchableOpacity>
          {itemDetails.references.recipe && (
            <>
              <Text style={[styles.reference, { marginTop: 20 }]}>Recipe:</Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => openWebsite(itemDetails.references.recipe)}
              >
                <Text style={[styles.details, { color: "dodgerblue" }]}>
                  {itemDetails.references.recipe}
                </Text>
              </TouchableOpacity>
            </>
          )}
          <ContactUs />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold",
  },
  img: {
    width: "auto",
    height: 200,
  },
  details: {
    textAlign: "justify",
    marginHorizontal: 20,
    marginTop: 10,
    fontSize: 18,
  },
  reference: {
    marginHorizontal: 20,
    fontSize: 18,
    fontWeight: "500",
  },
});
