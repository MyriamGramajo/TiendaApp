import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons";
import { SearchProductScreens } from "../screens/products/SearchProductScreens";
import { ProfileScreens } from "../screens/auths/ProfileScreens";
import { StackNavigator } from "./StackNavigator";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        //estilos del contenedor de los  botones
        headerShown: false,
        tabBarStyle: {
          //borderColor: "#6a1b9a",
          backgroundColor: "#F7F9F9", //#EBDEF0
          borderTopWidth: 1,
          //borderTopColor: "red",
          borderRadius: 50,
          position: "absolute",
          
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 0,
          height: 50,
        },

        tabBarLabelStyle: {
          // estilos
          fontSize: 15,
          color: "black", //#64FFDA  16A085
        },

        tabBarActiveTintColor: "black",
        tabBarLabelStyle: {
          textAlign: "center",
        },
        tabBarShowLabel: false, // no se muestran los nombres
      }}
    >
      <Tab.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{
          title: "Home",
          tabBarIcon: () => (
            <Ionicons
              name="home"
              color={"#6a1b9a"}
              size={25}
            />
          ),
            



        }}
      />

      <Tab.Screen
        name="ProfileScreens"
        options={{
          title: "Mi perfil",
          tabBarIcon: () => (
            <Ionicons
              name="person-circle-sharp"
              color={"#6a1b9a"}
              size={30}
            />
          ),
        }}
        component={ProfileScreens}
      />
      <Tab.Screen
        name="SearchScreens"
        component={SearchProductScreens}
        options={{
          title: "Buscar",
          tabBarIcon: () => (
            <Ionicons name="search-circle" 
            color={"#6a1b9a"} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
