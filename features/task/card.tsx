import { useTheme } from "@shopify/restyle";
import hexToRgba from "hex-to-rgba";
import * as React from "react";
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
};

function Card({ data }: Props): JSX.Element {
  const theme = useTheme<Theme>();

  return (
    <Box
      flexDirection="row"
      marginBottom="m"
      marginHorizontal="l"
      paddingVertical="s"
      paddingHorizontal="m"
      borderRadius={14}
      alignItems="center"
      backgroundColor="taskCardBarckground"
      left={0}
    >
      {data.isFinished ? (
        <Box
          width={20}
          height={20}
          marginRight="m"
          borderRadius={50}
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
        <Box width={6} height={6} borderRadius={50} backgroundColor={"dot"} />
      )}
    </Box>
  );
}

export default Card;
