import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet } from "react-native";
import HeaderTitle from "../libraries/header-title";
import HomeScreen from "../screens/home";
import HeaderLeft from "../style-system/header-left";
import HeaderRight from "../style-system/header-right";

const Stack = createStackNavigator();
const styles = StyleSheet.create({
  header: { height: 130 }
});

function Application(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: HeaderTitle,
        headerStyle: styles.header,
        headerTintColor: "white",
        headerPressOpacity: 0.5,
        headerLeft: HeaderLeft,
        headerRight: HeaderRight
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default Application;
