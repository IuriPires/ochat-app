import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { isSignedIn, signOut } = useAuth();

  if (!isSignedIn) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <SafeAreaView
      className="flex-1 items-center justify-center bg-black"
      style={{ backgroundColor: "#000" }}
    >
      <Text className="text-xl font-bold text-blue-500">
        Welcome to the app!
      </Text>
      <TouchableOpacity onPress={() => signOut()}>
        <Text className="text-white">Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
