import * as React from "react";
import { StyleSheet } from "react-native";
import Box from "./box";
import Text from "./text";

const styles = StyleSheet.create({
  container: { paddingVertical: 4 }
});

type Props = {
  text: string;
};

function Label({ text }: Props): JSX.Element {
  return (
    <Box
      backgroundColor="labelBackground"
      // padding="s"
      alignItems="center"
      justifyContent="center"
      borderRadius={6}
      paddingHorizontal="s"
      style={styles.container}
    >
      <Text variant="bigLabel">{text}</Text>
    </Box>
  );
}

export default Label;
