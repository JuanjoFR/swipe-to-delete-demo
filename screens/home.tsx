import { HeaderHeightContext } from "@react-navigation/elements";
import * as React from "react";
import { Alert, ScrollView, StatusBar, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  SafeAreaView,
  useSafeAreaInsets
} from "react-native-safe-area-context";
import TaskProgressList from "../features/task-progress/task-progress-list";
import ScreenBackground from "../style-system/screen-background";
import SearchInput from "../style-system/search-input";
import Text from "../style-system/text";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: { fontSize: 40, color: "#FFF" },
  keyboardAware: {
    flex: 1
  },
  keyboardAwareContentContainer: {
    flexGrow: 1
  }
});

function Home(): JSX.Element {
  const insets = useSafeAreaInsets();

  function handleTaskProgressPress(id: string): void {
    Alert.alert(`Go to task progress ${id}`);
  }

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
              <KeyboardAwareScrollView
                enableOnAndroid={true}
                style={styles.keyboardAware}
                contentContainerStyle={styles.keyboardAwareContentContainer}
                bounces={false}
                bouncesZoom={false}
                alwaysBounceVertical={false}
                alwaysBounceHorizontal={false}
                keyboardShouldPersistTaps={"handled"}
                enableResetScrollToCoords={false}
              >
                <SearchInput
                  marginHorizontal="l"
                  marginTop="s"
                  marginBottom="xl"
                />
                <TaskProgressList onPress={handleTaskProgressPress} />
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
              </KeyboardAwareScrollView>
            </ScrollView>
          )}
        </HeaderHeightContext.Consumer>
      </SafeAreaView>
    </ScreenBackground>
  );
}

export default Home;
