import type {
  HeaderButtonProps,
  HeaderTitleProps
} from "@react-navigation/elements";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet } from "react-native";
import { getAvatarSource, getName } from "../features/profile/data";
import HomeScreen from "../screens/home";
import HeaderLeft from "../style-system/header-left";
import HeaderRight from "../style-system/header-right";
import HeaderTitle from "../style-system/header-title";

const Stack = createStackNavigator();
const styles = StyleSheet.create({
  header: { height: 130 }
});
const profileName = getName();
const avatarSource = getAvatarSource();

function Application(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitleAlign: "center",
        headerTitle: (props: HeaderTitleProps) =>
          React.createElement(HeaderTitle, { ...props, profileName }),
        headerStyle: styles.header,
        headerTintColor: "white",
        headerPressOpacity: 0.5,
        headerLeft: HeaderLeft,
        headerRight: (props: HeaderButtonProps) =>
          React.createElement(HeaderRight, { ...props, avatarSource })
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default Application;
