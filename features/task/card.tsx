import { useTheme } from "@shopify/restyle";
import hexToRgba from "hex-to-rgba";
import * as React from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Icon from "react-native-vector-icons/Ionicons";
import type { Theme } from "../../libraries/theme";
import Box from "../../style-system/box";
import Text from "../../style-system/text";

type Props = {
  data: {
    id: string;
    body: string;
    isFinished: boolean;
    isReaded: boolean;
  };
  onDeletePress: () => void;
};

const styles = StyleSheet.create({
  actionButton: {
    alignItems: "center",
    justifyContent: "center"
  }
});

function Card({ data, onDeletePress }: Props): JSX.Element {
  const theme = useTheme<Theme>();

  function renderActions(): JSX.Element {
    return (
      <RectButton
        style={[
          styles.actionButton,
          {
            backgroundColor: theme.colors.danger,
            paddingHorizontal: theme.spacing.m
          }
        ]}
        onPress={onDeletePress}
      >
        <Icon name="close-outline" size={24} color={theme.colors.text} />
      </RectButton>
    );
  }

  return (
    <Box
      marginRight="l"
      marginBottom="m"
      overflow={"hidden"}
      borderTopRightRadius={14}
      borderBottomRightRadius={14}
    >
      <Swipeable renderRightActions={renderActions}>
        <Box
          flexDirection="row"
          alignItems="center"
          borderTopLeftRadius={14}
          borderBottomLeftRadius={14}
          backgroundColor="taskCardBarckground"
          marginLeft="l"
          paddingVertical="s"
          paddingHorizontal="m"
        >
          {data.isFinished ? (
            <Box
              width={20}
              height={20}
              borderRadius={50}
              marginRight="m"
              backgroundColor="checkmarkBackground"
              alignItems="center"
              justifyContent="center"
            >
              <Icon name="checkmark-outline" size={14} color={"white"} />
            </Box>
          ) : (
            <Box
              width={19}
              height={19}
              marginRight="m"
              borderRadius={50}
              borderWidth={1}
              borderColor={"placeholderText"}
              style={{
                borderColor: hexToRgba(theme.colors.softText, "0.3")
              }}
            />
          )}
          <Box flex={1} minHeight={45} justifyContent="center">
            <Text variant="body" marginRight="m" numberOfLines={2}>
              {data.body}
            </Text>
          </Box>
          {data.isReaded ? (
            <Box width={6} height={6} borderRadius={50} />
          ) : (
            <Box
              width={6}
              height={6}
              borderRadius={50}
              backgroundColor={"dot"}
            />
          )}
        </Box>
      </Swipeable>
    </Box>
  );
}

export default Card;
