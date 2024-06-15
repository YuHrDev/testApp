import { StyleSheet } from "react-native";
const themedTextStyles = (fontSize: string) =>
  StyleSheet.create({
    defaultStyle: {
      fontSize: Number(fontSize),
      lineHeight: 24,
    },
    defaultSemiBold: {
      fontSize: Number(fontSize),
      lineHeight: 24,
      fontWeight: "600",
    },
    title: {
      fontSize: 32,
      fontWeight: "bold",
      lineHeight: 32,
    },
    subtitle: {
      fontSize: 20,
      fontWeight: "bold",
    },
    link: {
      lineHeight: 30,
      fontSize: Number(fontSize),
      color: "#0a7ea4",
    },
  });
export default themedTextStyles;
