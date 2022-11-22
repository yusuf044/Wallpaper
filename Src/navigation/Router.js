// In App.js in a new project

import  React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Layout1 from "../screen/Layout1"
import Layout2 from "../screen/Layout2"

import Dr from "../screen/Dr"
import Dr2 from "../screen/Dr2"
import wall from "../screen/wall"



const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Layout1" component={Layout1} />
      <Stack.Screen name="Layout2" component={Layout2} />
      {/* <Stack.Screen name="Dr"> {(props=><Dr {...props} />)}</Stack.Screen> */}

      <Stack.Screen name="Dr" component={Dr} />
      <Stack.Screen name="Dr2" component={Dr2} />
      <Stack.Screen name="wall" component={wall} />
         
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;