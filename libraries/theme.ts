import { createTheme } from "@shopify/restyle";

const palette = {
  primary: "#101d40",
  secondary: "#151a2d",
  tertiary: "#2d2267",
  purpleDark: "#753E82",
  blueDark: "#545AAA",
  greenDark: "#49817B",
  brownDark: "#883F1B",
  grayDark: "#807382",

  purpleLight: "#8C6FF7",
  purplePrimary: "#5A31F4",

  greenLight: "#56DCBA",
  greenPrimary: "#0ECD9D",

  // primary: "#350D37",
  black: "#000",
  white: "#FFF",
  gray1: "#8A8C98",
  gray2: "#2B334A",
  gray3: "#5C6272",
  gray4: "#616061",
  gray5: "#F8F8F8"
};
const theme = createTheme({
  colors: {
    backgroundGradient1: palette.primary,
    backgroundGradient2: palette.secondary,
    backgroundGradient3: palette.tertiary,
    softText: palette.gray1,
    inputBackground: palette.gray2,
    inputColor: palette.gray3,
    progressBarBackground: palette.black,
    progressBarForeground: palette.white,
    labelBackground: palette.white,
    bigLabelForeground: palette.black,
    taskProgressCardForeground1: palette.purpleDark,
    taskProgressCardForeground2: palette.blueDark,
    taskProgressCardForeground3: palette.greenDark,
    taskProgressCardForeground4: palette.brownDark,
    taskProgressCardForeground5: palette.grayDark,

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
    input: {
      fontFamily: "System",
      fontWeight: "normal",
      fontSize: 16,
      lineHeight: 18
    },
    header: {
      fontFamily: "System",
      fontWeight: "bold",
      fontSize: 20,
      lineHeight: 24,
      color: "text"
    },
    subheader: {
      fontFamily: "System",
      fontWeight: "normal",
      fontSize: 20,
      lineHeight: 24,
      color: "text"
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
    },
    label: {
      fontFamily: "System",
      fontWeight: "300",
      fontSize: 11,
      lineHeight: 13,
      color: "text"
    },
    bigLabel: {
      fontFamily: "System",
      fontWeight: "bold",
      fontSize: 11,
      lineHeight: 13,
      color: "bigLabelForeground"
    }
  },
  taskProgressVariants: {
    "1": {
      backgroundColor: "taskProgressCardForeground1"
    },
    "2": {
      backgroundColor: "taskProgressCardForeground2"
    },
    "3": {
      backgroundColor: "taskProgressCardForeground3"
    },
    "4": {
      backgroundColor: "taskProgressCardForeground4"
    },
    "5": {
      backgroundColor: "taskProgressCardForeground5"
    }
  }
});

export type Theme = typeof theme;
export default theme;
