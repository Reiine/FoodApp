import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from "react-native";

import Home from "./components/Home";
import ItemDetails from "./components/ItemDetails";

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
          <Stack.Screen name="ItemDetails" component={ItemDetails} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    zIndex: -1,
  },
  
});

export default App;
