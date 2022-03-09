import { BoxProps, useTheme, VariantProps } from "@shopify/restyle";
import { format } from "date-fns";
import * as React from "react";
import { StyleSheet } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import type { Theme } from "../../libraries/theme";
import AvatarsList from "../../style-system/avatars-list";
import Box from "../../style-system/box";
import Label from "../../style-system/label";
import ProgressBar from "../../style-system/progress-bar";
import TaskProgressCard from "../../style-system/task-progress-card";
import Text from "../../style-system/text";

type Props = {
  data: {
    id: string;
    date: Date;
    name: string;
    progress: number;
    users: Array<{
      id: string;
      source: Array<{
        uri: string;
      }>;
    }>;
    daysLeft: number;
  };
  onPress: () => void;
} & BoxProps<Theme> &
  VariantProps<Theme, "taskProgressVariants">;

const styles = StyleSheet.create({
  iconContainer: { position: "absolute" },
  iconPressed: { opacity: 0.5 },
  iconUnpressed: { opacity: 1 },
  title: { minHeight: 46 }
});

function Card({ data, onPress, ...rest }: Props): JSX.Element {
  const theme = useTheme<Theme>();

  return (
    <TaskProgressCard
      {...rest}
      width={150}
      // height={160}
      backgroundColor="buttonPrimaryBackground"
      marginHorizontal="s"
      borderRadius={16}
      padding="s"
    >
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text variant="label" marginBottom="m">
          {format(data.date, "PP")}
        </Text>
        <BorderlessButton onPress={onPress}>
          <Box alignItems="center" justifyContent="center" marginBottom="m">
            <Icon
              name="ellipsis-vertical"
              size={14}
              color={theme.colors.text}
            />
          </Box>
        </BorderlessButton>
      </Box>
      <Text
        variant="header"
        textAlign="center"
        numberOfLines={2}
        marginBottom="m"
        fontWeight="600"
        style={styles.title}
      >
        {data.name}
      </Text>
      <ProgressBar value={data.progress} marginBottom="l" />
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <AvatarsList data={data.users} />
        <Label text={`${data.daysLeft} Days Left`} />
      </Box>
    </TaskProgressCard>
  );
}

export default Card;
