import { useTheme } from "@shopify/restyle";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import type { Theme } from "../../libraries/theme";

type Props = {
  onPress: () => void;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0000",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    right: 0,
    borderRadius: 50
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  }
});

function CreateTaskButton({ onPress }: Props): JSX.Element {
  const theme = useTheme<Theme>();

  return (
    <View
      style={[
        styles.container,
        {
          margin: theme.spacing.m
        }
      ]}
    >
      <LinearGradient
        colors={[
          theme.colors.leadButtonTopBackground,
          theme.colors.leadButtonBottomBackground
        ]}
        style={styles.gradient}
      >
        <RectButton style={[styles.button]} onPress={onPress}>
          <Icon
            name="add-outline"
            size={24}
            color={theme.colors.leadButtonForeground}
          />
        </RectButton>
      </LinearGradient>
    </View>
  );
}

export default CreateTaskButton;
