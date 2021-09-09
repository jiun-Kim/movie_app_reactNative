import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "../screen/Detail";
import Tabs from "./Tabs";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        borderBottomColor: "black",
        backgroundColor: "black",
        shadowColor: "black",
      },
      headerTintColor: "white",
      headerBackTitleVisible: false,
    }}
  >
    <Stack.Screen
      name="Tabs"
      component={Tabs}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);
