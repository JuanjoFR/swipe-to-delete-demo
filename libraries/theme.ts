import { createTheme } from "@shopify/restyle";

const palette = {
  primary: "#101d40",
  secondary: "#151a2d",
  tertiary: "#2d2267",
  purpleLight: "#8C6FF7",
  purplePrimary: "#5A31F4",
  purpleDark: "#3F22AB",

  greenLight: "#56DCBA",
  greenPrimary: "#0ECD9D",
  greenDark: "#0A906E",

  // primary: "#350D37",
  black: "#000",
  white: "#FFF",
  gray1: "#8A8C98",
  gray2: "#606060",
  gray3: "#868686",
  gray4: "#616061",
  gray5: "#F8F8F8"
};
const theme = createTheme({
  colors: {
    backgroundGradient1: palette.primary,
    backgroundGradient2: palette.secondary,
    backgroundGradient3: palette.tertiary,
    softText: palette.gray1,
    mainBackground: palette.white,
    mainForeground: palette.black,
    text: palette.white,
    boldText: palette.black,
    button: palette.primary,
    headerBackground: palette.primary,
    cardPrimaryBackground: palette.purplePrimary,
    buttonPrimaryBackground: palette.purplePrimary,
    tabBarActiveTint: palette.black,
    tabBarInactiveTint: palette.gray3,
    inputBorder: palette.gray1,
    listItemPressRegular: palette.gray1,
    listItemPressBold: palette.gray5,
    inputPress: palette.gray1,
    placeholderText: palette.gray2,
    separator: palette.gray1,
    iconBackground: palette.gray1,
    icon: palette.gray4,
    iconBold: palette.greenLight
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40
  },
  breakpoints: {
    phone: 0,
    tablet: 768
  },
  textVariants: {
    screenHeaderLine1: {
      fontFamily: "System",
      fontWeight: "normal",
      fontSize: 16,
      lineHeight: 18,
      color: "softText"
    },
    screenHeaderLine2: {
      fontFamily: "System",
      fontWeight: "bold",
      fontSize: 20,
      lineHeight: 24,
      color: "text"
    },
    header: {
      fontFamily: "System",
      fontWeight: "bold",
      fontSize: 16,
      lineHeight: 24,
      color: "mainForeground"
    },
    subheader: {
      fontFamily: "System",
      fontWeight: "600",
      fontSize: 28,
      lineHeight: 36,
      color: "mainForeground"
    },
    body: {
      fontFamily: "System",
      fontWeight: "normal",
      fontSize: 16,
      lineHeight: 24,
      color: "text"
    },
    boldBody: {
      fontFamily: "System",
      fontWeight: "bold",
      fontSize: 16,
      lineHeight: 24,
      color: "boldText"
    }
  }
});

export type Theme = typeof theme;
export default theme;