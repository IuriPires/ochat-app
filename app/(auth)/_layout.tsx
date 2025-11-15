import { useColorScheme } from "@/hooks/use-color-scheme";
import { useAuth } from "@clerk/clerk-expo";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Redirect, Stack } from "expo-router";
export default function AuthRoutesLayout() {
  const { isSignedIn } = useAuth();
  const colorScheme = useColorScheme();

  if (isSignedIn) {
    return <Redirect href={"/"} />;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}
