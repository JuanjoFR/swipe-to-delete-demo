import { useTheme } from "@shopify/restyle";
import hexToRgba from "hex-to-rgba";
import * as React from "react";
import { StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import type { Theme } from "../libraries/theme";

const style = StyleSheet.create({
  container: {
    flex: 1
  }
});
type Props = {
  color1: keyof Theme["colors"];
  color2: keyof Theme["colors"];
  children: JSX.Element;
};

function Home({ color1, color2, children }: Props): JSX.Element {
  const theme = useTheme<Theme>();

  return (
    <LinearGradient
      start={{ x: 0.2, y: 0.2 }}
      end={{ x: 1, y: 1.0 }}
      colors={[
        hexToRgba(theme.colors[color2], "0"),
        hexToRgba(theme.colors[color2], "0.5")
      ]}
      style={[style.container, { backgroundColor: theme.colors[color1] }]}
    >
      {children}
    </LinearGradient>
  );
}

export default Home;
