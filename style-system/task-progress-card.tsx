import {
  BoxProps,
  createRestyleComponent,
  createVariant,
  spacing,
  VariantProps
} from "@shopify/restyle";
import * as React from "react";
import { Theme } from "../libraries/theme";

type Props = React.PropsWithChildren<
  BoxProps<Theme> & VariantProps<Theme, "taskProgressVariants">
>;
const TaskProgressCard = createRestyleComponent<Props, Theme>([
  spacing,
  createVariant({ themeKey: "taskProgressVariants" })
]);

export default TaskProgressCard;
