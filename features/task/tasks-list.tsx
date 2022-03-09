import * as React from "react";
import { Alert } from "react-native";
import Box from "../../style-system/box";
import Text from "../../style-system/text";
import Card from "./card";
import { getData } from "./data";

function TasksList(): JSX.Element {
  const [data] = React.useState(getData());

  function handleDeletePress(id: string): void {
    Alert.alert(`Delete task ${id}`);
  }

  return (
    <Box>
      <Text variant="subheader" marginHorizontal="l" marginBottom="m">
        Tasks
      </Text>
      {data.map(item => (
        <Card
          key={item.id}
          data={item}
          onDeletePress={(): void => handleDeletePress(item.id)}
        />
      ))}
    </Box>
  );
}

export default TasksList;
