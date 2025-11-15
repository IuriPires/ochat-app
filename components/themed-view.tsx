import { type ViewProps } from "react-native";
import { SafeAreaView, type Edge } from "react-native-safe-area-context";

import { useThemeColor } from "@/hooks/use-theme-color";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  edges?: Edge[];
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  edges = ["top", "bottom", "left", "right"],
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <SafeAreaView
      style={[style, { backgroundColor }]}
      edges={edges}
      {...otherProps}
    />
  );
}
