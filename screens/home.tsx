import { HeaderHeightContext } from "@react-navigation/elements";
import * as React from "react";
import { Alert, ScrollView, StatusBar, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  SafeAreaView,
  useSafeAreaInsets
} from "react-native-safe-area-context";
import TaskProgressList from "../features/task-progress/task-progress-list";
import CreateTaskButton from "../features/task/create-task-button";
import TasksList from "../features/task/tasks-list";
import ScreenBackground from "../style-system/screen-background";
import SearchInput from "../style-system/search-input";

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

  function handleCreateTaskPress(): void {
    Alert.alert("Go to create task screen");
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
                <TaskProgressList marginBottom="l" />
                <TasksList />
              </KeyboardAwareScrollView>
            </ScrollView>
          )}
        </HeaderHeightContext.Consumer>
        <CreateTaskButton onPress={handleCreateTaskPress} />
      </SafeAreaView>
    </ScreenBackground>
  );
}

export default Home;
