import { HeaderHeightContext } from "@react-navigation/elements";
import * as React from "react";
import { ScrollView, StatusBar, StyleSheet } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets
} from "react-native-safe-area-context";
import ScreenBackground from "../style-system/screen-background";
import Text from "../style-system/text";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: { fontSize: 40, color: "#FFF" }
});

function Home(): JSX.Element {
  const insets = useSafeAreaInsets();

  return (
    <ScreenBackground
      color1="backgroundGradient1"
      color2="backgroundGradient2"
      color3="buttonPrimaryBackground"
    >
      <SafeAreaView edges={["right", "left"]} style={styles.container}>
        <StatusBar barStyle="light-content" />
        <HeaderHeightContext.Consumer>
          {(headerHeight): JSX.Element => (
            <ScrollView
              style={{
                marginTop: headerHeight
              }}
              contentContainerStyle={{
                paddingBottom: insets.bottom
              }}
              indicatorStyle="white"
            >
              <Text style={styles.text}>hello world</Text>
              <Text style={styles.text}>hello world</Text>
              <Text style={styles.text}>hello world</Text>
              <Text style={styles.text}>hello world</Text>
              <Text style={styles.text}>hello world</Text>
              <Text style={styles.text}>hello world</Text>
              <Text style={styles.text}>hello world</Text>
              <Text style={styles.text}>hello world</Text>
              <Text style={styles.text}>hello world</Text>
              <Text style={styles.text}>hello world</Text>
              <Text style={styles.text}>hello world</Text>
              <Text style={styles.text}>hello world</Text>
              <Text style={styles.text}>hello world</Text>
              <Text style={styles.text}>hello world</Text>
              <Text style={styles.text}>hello world</Text>
              <Text style={styles.text}>hello world</Text>
              <Text style={styles.text}>hello world</Text>
              <Text style={styles.text}>hello world</Text>
              <Text style={styles.text}>hello world</Text>
              <Text style={styles.text}>hello world</Text>
            </ScrollView>
          )}
        </HeaderHeightContext.Consumer>
      </SafeAreaView>
    </ScreenBackground>
  );
}

export default Home;
