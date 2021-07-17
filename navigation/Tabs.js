import React, { useLayoutEffect} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Favs from "../screens/Favs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Platform } from "react-native";

const Tabs = createBottomTabNavigator();

export default ({ navigation, route }) => {
//difference bitween useEffect and useLayoutEffect, useLayoutEffect returns after all the graphical things
  useLayoutEffect(()=>{
    const routeName = getFocusedRouteNameFromRoute(route)??"Movies";
    navigation.setOptions({ title: routeName });
// next project will use navigation.setOptions({headerShown:False}) or ({headerStyle:{}})
  }, [route]);
  return(
  <Tabs.Navigator 
  screenOptions={({route})=> ({
    tabBarIcon: ({focused})=>{
      //Ionicons have prefixes with ios(ios), md(android)
      let checkOS = Platform.OS === "ios" ? "ios-" : "md-";
      let iconName;
      if(route.name==="Movies"){
        iconName = checkOS + "film"   
      }else if(route.name==="TV"){
        iconName = checkOS + "tv"
      }else if(route.name==="Search"){
        iconName = checkOS + "search"
      }else if(route.name==="Favorites"){
        iconName = checkOS + "heart"
      }
      return <Ionicons name={iconName} color={focused ? "white":"grey"} size={30}/>;
    }
  })}
  tabBarOptions={{
    showLabel: false,
    style:{
      backgroundColor: "black",
      borderTopColor: "black"
    }
  }}>
    <Tabs.Screen name="Movies" component={Movies} />
    <Tabs.Screen name="TV" component={Tv} />
    <Tabs.Screen name="Search" component={Search} />
    <Tabs.Screen name="Favorites" component={Favs} />
  </Tabs.Navigator>
  );
};