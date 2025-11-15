import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { Text, TouchableOpacity } from "react-native";

export default function Page() {
  const router = useRouter();

  return (
    <ThemedView
      className="flex-1 px-3 bg-black"
      lightColor="#000"
      darkColor="#000"
    >
      <TouchableOpacity
        className="py-3"
        onPress={() => router.back()}
        activeOpacity={0.7}
      >
        <ArrowLeft color="#fff" size={24} />
      </TouchableOpacity>

      <Text className="text-4xl py-4 text-white font-bold">Entre agora</Text>
      <Text className="text-xl text-white font-medium text-left">
        Desfrute do poder da inteligência artificial no seu dia a dia!
      </Text>

      <ThemedView
        className="flex-1 bg-black gap-4"
        lightColor="#000"
        darkColor="#000"
      >
        <Input
          className="bg-white h-12 rounded-xl text-black border-0"
          placeholder="E-mail"
          placeholderTextColor="#666"
          keyboardAppearance="dark"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Input
          className="bg-white h-12 rounded-xl text-black border-0"
          placeholder="Senha"
          placeholderTextColor="#666"
          keyboardAppearance="dark"
          secureTextEntry
        />
        <Button
          size="lg"
          className="bg-white rounded-xl mt-2 mb-4"
          onPress={() => {
            // Handle sign in
          }}
        >
          <ThemedText className="text-black font-semibold">
            Continuar
          </ThemedText>
        </Button>
      </ThemedView>
    </ThemedView>
  );
}
