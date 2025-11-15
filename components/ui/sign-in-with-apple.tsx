import { useSignInWithApple } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { AppleIcon } from "lucide-react-native";
import { Alert, Platform } from "react-native";
import { ThemedText } from "../themed-text";
import { Button } from "./button";

interface AppleSignInButtonProps {
  onSignInComplete?: () => void;
}

export function AppleSignInButton({
  onSignInComplete,
}: AppleSignInButtonProps) {
  const { startAppleAuthenticationFlow } = useSignInWithApple();
  const router = useRouter();

  // Only render on iOS
  if (Platform.OS !== "ios") {
    return null;
  }

  const handleAppleSignIn = async () => {
    try {
      const { createdSessionId, setActive } =
        await startAppleAuthenticationFlow();

      if (createdSessionId && setActive) {
        // Set the created session as the active session
        await setActive({ session: createdSessionId });

        // Once the session is set as active,
        // if a callback function is provided, call it.
        // Otherwise, redirect to the home page.
        onSignInComplete ? onSignInComplete() : router.replace("/");
      }
    } catch (err: any) {
      // User canceled the sign-in flow
      if (err.code === "ERR_REQUEST_CANCELED") return;

      Alert.alert(
        "Error",
        err.message || "An error occurred during Apple Sign-In"
      );
      console.error("Apple Sign-In error:", JSON.stringify(err, null, 2));
    }
  };

  return (
    <Button
      onPress={handleAppleSignIn}
      className="bg-white rounded-2xl active:bg-slate-100"
      size="lg"
    >
      <AppleIcon fill="#000" />
      <ThemedText>Continuar com Apple</ThemedText>
    </Button>
  );
}
