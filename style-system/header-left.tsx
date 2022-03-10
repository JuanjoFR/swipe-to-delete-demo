import type { HeaderButtonProps } from "@react-navigation/elements";
import * as React from "react";
import { Alert } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import Box from "../style-system/box";

function HeaderLeft({ tintColor }: HeaderButtonProps): JSX.Element {
  function handlePress(): void {
    Alert.alert("Open menu");
  }

  return (
    <BorderlessButton onPress={handlePress}>
      <Box
        marginLeft="l"
        alignItems="center"
        justifyContent="center"
        width={44}
        height={44}
      >
        <Icon name="menu-outline" size={25} color={tintColor} />
      </Box>
    </BorderlessButton>
  );
}

export default HeaderLeft;
