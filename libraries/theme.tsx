import { createTheme } from "@shopify/restyle";

const palette = {
  purpleLight: "#8C6FF7",
  purplePrimary: "#5A31F4",
  purpleDark: "#3F22AB",

  greenLight: "#56DCBA",
  greenPrimary: "#0ECD9D",
  greenDark: "#0A906E",

  primary: "#350D37",
  black: "#000",
  white: "#FFF",
  gray1: "#DDDDDD",
  gray2: "#606060",
  gray3: "#868686",
  gray4: "#616061",
  gray5: "#F8F8F8"
};
const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    mainForeground: palette.black,
    text: palette.gray4,
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
    screenHeader: {
      fontFamily: "System",
      fontWeight: "bold",
      fontSize: 22,
      lineHeight: 26,
      color: "mainBackground"
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

export default theme;
