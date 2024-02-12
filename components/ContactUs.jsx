import { Text, StyleSheet, View, SafeAreaView, Image, Dimensions, TouchableOpacity, Linking } from "react-native";
import React, { Component } from "react";

export default class ContactUs extends Component {
  render() {
    const openWebsite = (e) =>{
        if (e === "instagram") {
            Linking.openURL(
              "https://www.instagram.com"
            );
          } else if (e === "twitter") {
            Linking.openURL(
              "https://www.twitter.com"
            );
          } else if (e === "facebook") {
            Linking.openURL("https://facebook.com");
          } else if (e === "mail") {
            Linking.openURL("mailto:reiineiangar3@gmail.com");
          }
    }
    return (
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.imageCover}>
            <TouchableOpacity activeOpacity={0.9} onPress={()=>openWebsite('instagram')}>
            <Image style={styles.images} source={require("../assets/insta.png")} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} onPress={()=>openWebsite('twitter')}>
            <Image style={styles.images} source={require("../assets/twitter.webp")} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} onPress={()=>openWebsite('facebook')}>
            <Image style={styles.images} source={require("../assets/facebook.png")} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} onPress={()=>openWebsite('mail')}>
            <Image style={styles.images} source={require("../assets/mail.png")} />
            </TouchableOpacity>
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
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  imageCover:{
    marginTop:20,
    height: 80,
    flexDirection: "row",
    justifyContent: "center",
    gap: 50,
  },
  images:{
    width: 40,
    height: 40,
  }
});
