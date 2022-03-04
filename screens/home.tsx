import { HeaderHeightContext } from "@react-navigation/elements";
import * as React from "react";
import { ScrollView, StatusBar, StyleSheet, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  linearGradient: {
    flex: 1,
    backgroundColor: "#151B29"
  },
  text: { fontSize: 40, color: "#FFF" }
});

function Home(): JSX.Element {
  return (
    <LinearGradient
      // colors={["#101D3F", "#101D3F", "#192f6a"]}
      start={{ x: 0.2, y: 0.2 }}
      end={{ x: 1, y: 1.0 }}
      colors={["rgba(46, 35, 104, 0)", "rgba(46, 35, 104, .5)"]}
      style={styles.linearGradient}
    >
      <SafeAreaView
        edges={["right", "left", "bottom"]}
        style={[
          styles.container,
          {
            // backgroundColor: theme.colors.mainBackground
          }
        ]}
      >
        <StatusBar barStyle="light-content" />
        <HeaderHeightContext.Consumer>
          {(headerHeight): JSX.Element => (
            <ScrollView
              style={{
                marginTop: headerHeight
              }}
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
    </LinearGradient>
  );
}

export default Home;
