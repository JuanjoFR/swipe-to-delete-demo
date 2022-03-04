import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import HeaderTitle from "../libraries/header-title";
import HomeScreen from "../screens/home";

const Stack = createStackNavigator();

function Application(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: HeaderTitle,
        headerStyle: { height: 100 }
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default Application;
