/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    trackColorTrue: "#81b0ff",
    trackColorFalse: "#767577",
    thumbColorEnabled: "#f5dd4b",
    thumbColorDisabled: "#f4f3f4",
    switch_ios_backgroundColor: "#3e3e3e",
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    trackColorTrue: "#81b0ff",
    trackColorFalse: "#767577",
    thumbColorEnabled: "#f5dd4b",
    thumbColorDisabled: "#f4f3f4",
    switch_ios_backgroundColor: "#3e3e3e",
  },
};
