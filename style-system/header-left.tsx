import type { HeaderButtonProps } from "@react-navigation/elements";
import * as React from "react";
import { Alert, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Box from "../style-system/box";

function HeaderLeft({
  pressOpacity,
  tintColor
}: HeaderButtonProps): JSX.Element {
  function handlePress(): void {
    Alert.alert("Open menu");
  }

  return (
    <Pressable onPress={handlePress}>
      {({ pressed }): JSX.Element => (
        <Box
          marginLeft="m"
          alignItems="center"
          justifyContent="center"
          width={48}
          height={48}
          opacity={pressed ? pressOpacity : 1}
        >
          <Icon name="menu-outline" size={25} color={tintColor} />
        </Box>
      )}
    </Pressable>
  );
}

export default HeaderLeft;
