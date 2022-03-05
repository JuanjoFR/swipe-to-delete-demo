import { format } from "date-fns";
import * as React from "react";
import Box from "./box";
import Text from "./text";

type Props = {
  profileName: string;
};

const today = new Date();

function HeaderTitle({ profileName }: Props): JSX.Element {
  return (
    <Box alignItems={"center"} justifyContent="center">
      <Text variant="screenHeaderLine1">{`Hi, ${profileName}`}</Text>
      <Text variant="screenHeaderLine2" marginTop="s">
        {format(today, "EEEE, dd")}
      </Text>
    </Box>
  );
}

export default HeaderTitle;
