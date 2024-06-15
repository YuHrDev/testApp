// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import { useTheme } from "@/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";

export function TabBarIcon({
  style,
  ...rest
}: IconProps<ComponentProps<typeof Ionicons>["name"]>) {
  const { iconSize } = useTheme();
  return (
    <Ionicons
      size={Number(iconSize)}
      style={[{ marginBottom: -3 }, style]}
      {...rest}
    />
  );
}
