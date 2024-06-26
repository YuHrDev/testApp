import { Text, type TextProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { useTheme } from "@/theme";
import styles from "./styles/ThemedText";
import { useMemo } from "react";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  const { fontSize } = useTheme();

  const { defaultStyle, title, defaultSemiBold, subtitle, link } = useMemo(
    () => styles(fontSize),
    [fontSize]
  );

  return (
    <Text
      style={[
        { color },
        type === "default" ? defaultStyle : undefined,
        type === "title" ? title : undefined,
        type === "defaultSemiBold" ? defaultSemiBold : undefined,
        type === "subtitle" ? subtitle : undefined,
        type === "link" ? link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}
