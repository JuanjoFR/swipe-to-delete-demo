import {
  createRestyleComponent,
  createVariant,
  spacing,
  SpacingProps,
  VariantProps
} from "@shopify/restyle";
import { Theme } from "../libraries/theme";

type Props = SpacingProps<Theme> & VariantProps<Theme, "taskProgressVariants">;
const TaskProgressCard = createRestyleComponent<Props, Theme>([
  spacing,
  createVariant({ themeKey: "taskProgressVariants" })
]);

export default TaskProgressCard;
