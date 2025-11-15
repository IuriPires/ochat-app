import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Button } from "@/components/ui/button";
import { AppleSignInButton } from "@/components/ui/sign-in-with-apple";
import { useRouter } from "expo-router";
import { Text } from "react-native";

export default function Page() {
  const router = useRouter();

  return (
    <ThemedView className="flex-1 bg-black" lightColor="#000" darkColor="#000">
      <ThemedView
        className="flex-1 bg-black justify-end gap-4"
        lightColor="#000"
        darkColor="#000"
      >
        <AppleSignInButton />

        <Button
          size="lg"
          className="bg-white rounded-2xl mb-2"
          onPress={() => router.push("/form-sign-in")}
        >
          <ThemedText className="text-black font-normal">
            Entrar com e-mail
          </ThemedText>
        </Button>
      </ThemedView>
      <Text className="text-white font-thin mb-2 text-s text-center">
        Ao fornecer o seu email, concorda com a nossa Política de Privacidade,
        Termos e Condições e e-mails promocionais
      </Text>
    </ThemedView>
  );
}
