import { View, type ViewProps } from "react-native";

/**
 * This component is used to wrap animated views that should only be animated on native.
 * For now, it just renders a regular View without animations to avoid import issues.
 * @param props - The props for the view.
 * @returns A regular View component.
 * @example
 * <NativeOnlyAnimatedView>
 *   <Text>Content here</Text>
 * </NativeOnlyAnimatedView>
 */
function NativeOnlyAnimatedView({
  entering,
  exiting,
  ...props
}: ViewProps & { entering?: any; exiting?: any }) {
  // Temporarily disabled animations to avoid reanimated import issues
  // Will use regular View for all platforms
  return <View {...props} />;
}

export { NativeOnlyAnimatedView };
