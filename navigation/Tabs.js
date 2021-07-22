import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import MoviesContainer from "../screens/Movies/MoviesContainer";
import TvContainer from "../screens/Tv/TvContainer";
import Search from "../screens/Search";
import Favs from "../screens/Favs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Platform } from "react-native";

const Tabs = createBottomTabNavigator();

export default ({ navigation, route }) => {
  //difference bitween useEffect and useLayoutEffect, useLayoutEffect returns after all the graphical things
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "Movies";
    navigation.setOptions({ title: routeName });
    // next project will use navigation.setOptions({headerShown:False}) or ({headerStyle:{}})
  }, [route]);
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          //Ionicons have prefixes with ios(ios), md(android)
          let checkOS = Platform.OS === "ios" ? "ios-" : "md-";
          let iconName;
          if (route.name === "Movies") {
            iconName = checkOS + "film";
          } else if (route.name === "TV") {
            iconName = checkOS + "tv";
          } else if (route.name === "Search") {
            iconName = checkOS + "search";
          } else if (route.name === "Discovery") {
            iconName = checkOS + "heart";
          }
          return (
            <Ionicons
              name={iconName}
              color={focused ? "white" : "grey"}
              size={30}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "black",
          borderTopColor: "black",
        },
      }}
    >
      <Tabs.Screen name="Movies" component={MoviesContainer} />
      <Tabs.Screen name="TV" component={TvContainer} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Discovery" component={Favs} />
    </Tabs.Navigator>
  );
};
