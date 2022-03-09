import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";
import * as React from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ApplicationNavigator from "../navigators/application";
import theme from "./theme";

const styles = StyleSheet.create({
  gestureHandler: { flex: 1 }
});

function Application(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <GestureHandlerRootView style={styles.gestureHandler}>
          <NavigationContainer>
            <ApplicationNavigator />
          </NavigationContainer>
        </GestureHandlerRootView>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default Application;
