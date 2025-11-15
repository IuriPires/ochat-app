import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function Page() {
  return (
    <ThemedView className="flex-1">
      <ThemedText className="text-blue-600">Sign in</ThemedText>
    </ThemedView>
  );
}
