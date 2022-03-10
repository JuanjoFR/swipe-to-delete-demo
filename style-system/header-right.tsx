import type { HeaderButtonProps } from "@react-navigation/elements";
import * as React from "react";
import { Alert, Image, StyleSheet } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import Box from "../style-system/box";

const styles = StyleSheet.create({
  avatar: { borderRadius: 20 }
});

interface Props extends HeaderButtonProps {
  avatarSource: Array<object>;
}

function HeaderRight({ avatarSource }: Props): JSX.Element {
  function handlePress(): void {
    Alert.alert("Go to profile screen");
  }

  return (
    <BorderlessButton onPress={handlePress}>
      <Box marginRight="l">
        <Image
          source={avatarSource}
          width={45}
          height={45}
          style={styles.avatar}
        />
      </Box>
    </BorderlessButton>
  );
}

export default HeaderRight;
