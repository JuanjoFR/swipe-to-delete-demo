import { BoxProps, useTheme } from "@shopify/restyle";
import * as React from "react";
import { ScrollView } from "react-native";
import type { Theme } from "../../libraries/theme";
import Box from "../../style-system/box";
import Text from "../../style-system/text";
import Card from "./card";
import { getTasksProgress } from "./data";

type Props = BoxProps<Theme>;

const data = getTasksProgress();

function TaskProgressList(props: Props): JSX.Element {
  const theme = useTheme<Theme>();

  return (
    <Box {...props}>
      <Text variant="subheader" marginHorizontal="l" marginBottom="m">
        <Text>Progress </Text>
        <Text color="softText">{`(${data.length})`}</Text>
      </Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ paddingHorizontal: theme.spacing.m }}
        style={{ paddingBottom: theme.spacing.s }}
        indicatorStyle="white"
      >
        {data.map(
          (item): JSX.Element => (
            <Card key={item.id} variant={item.variant} data={item} />
          )
        )}
      </ScrollView>
    </Box>
  );
}

export default TaskProgressList;
