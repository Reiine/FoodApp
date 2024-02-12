import { StyleSheet, View,ScrollView,SafeAreaView } from 'react-native'
import React from 'react'
import FastFood from "./FastFood";
import Restaurants from "./Restaurants";
import TodaysPick from "./TodaysPick";
import ContactUs from "./ContactUs";
import Nav from './Nav';
export default HomeScreen = ({navigation}) => {
    return (
      <SafeAreaView style={styles.wrapper}>
        <Nav/>
        <ScrollView style={styles.componentCover}>
          <View style={styles.componentCover}>
            <FastFood navigation={navigation}/>
            <Restaurants navigation={navigation} />
            <TodaysPick />
            <ContactUs />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
    wrapper:{
        flex: 1,
    },
    componentCover: {
        marginTop: 30,
      },
})