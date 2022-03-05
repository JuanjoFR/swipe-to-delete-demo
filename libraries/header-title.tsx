import * as React from "react";
import Box from "../style-system/box";
import Text from "../style-system/text";

function HeaderTitle(): JSX.Element {
  return (
    <Box alignItems={"center"} justifyContent="center">
      <Text variant="screenHeaderLine1">Hi, Natasyah</Text>
      <Text variant="screenHeaderLine2" marginTop="s">
        Monday, 28
      </Text>
    </Box>
  );
}

export default HeaderTitle;
