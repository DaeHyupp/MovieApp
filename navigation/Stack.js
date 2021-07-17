import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";
import Detail from "../screens/Detail";


const Stack = createStackNavigator();
//All the Navigator Screens can access navigation prop
export default () =>(
    <Stack.Navigator
        //mode = "modal" ... slides from the bottom
        screenOptions={{
        headerStyle:{
            backgroundColor:"black",
            borderBottomColor:"black",
            shadowColor:"black"
        },
        headerTintColor: "white",
        headerBackTitleVisible : false
    }}>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
);