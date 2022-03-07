import { BoxProps, useTheme } from "@shopify/restyle";
import hexToRgba from "hex-to-rgba";
import * as React from "react";
import type { Theme } from "../libraries/theme";
import Box from "./box";
import Text from "./text";

type Props = {
  value: number;
} & BoxProps<Theme>;

function ProgressBar({ value, ...rest }: Props): JSX.Element {
  const theme = useTheme<Theme>();

  return (
    <Box {...rest}>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text variant="label" lineHeight={20}>
          Progress
        </Text>
        <Text variant="label" lineHeight={20}>{`${value}%`}</Text>
      </Box>
      <Box
        height={6}
        borderRadius={25}
        overflow="hidden"
        style={{
          backgroundColor: hexToRgba(theme.colors.progressBarBackground, "0.4")
        }}
      >
        <Box
          width={`${value}%`}
          height={6}
          backgroundColor="progressBarForeground"
        />
      </Box>
    </Box>
  );
}

export default ProgressBar;
