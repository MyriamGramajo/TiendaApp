import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
//import { HomeScreens } from "../screens/products/HomeScreens";
import { HomeScreen1 } from "../screens/products/HomeScreen1";
import { ProductsScreens } from "../screens/products/ProductsScreens";
import { CheckoutScreens } from "../screens/cards/CheckoutScreens";

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      
        cardStyle: {
          backgroundColor: "#e1bee7", //color violeta claro
        },
        headerStyle: {
          borderBottomColor: "black",
          borderBottomWidth: 1,
          elevation: 5,
          shadowColor: "black",
          backgroundColor: "#e1bee7",
        },
      }}
    >
       {
        <Stack.Screen
          name="HomeScreen"
          options={{ title: "Iniciojjj" }}
          component={HomeScreen1}
        />
      } 

      <Stack.Screen
        name="ProductsScreens"
        options={{ title: "carrusel" }}
        component={ProductsScreens}
      />

      {/* <Stack.Screen  name="Checkout" component={CheckoutScreens} /> */}
    </Stack.Navigator>
  );
};
