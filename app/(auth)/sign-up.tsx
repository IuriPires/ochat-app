import { useSignUp } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import * as React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  // Handle submission of sign-up form
  const onSignUpPress = async () => {
    if (!isLoaded) return;

    // Start sign-up process using email and password provided
    try {
      const signUpAttempt = await signUp.create({
        firstName,
        lastName,
        emailAddress,
        password,
      });

      console.log(signUpAttempt, "signUpAttempt");

      // Set the session as active immediately without email verification
      if (signUpAttempt.createdSessionId) {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.replace("/");
      }
    } catch (err) {
      // See https://clerk.com/docs/guides/development/custom-flows/error-handling
      // for more info on error handling
      console.error(err);
    }
  };

  return (
    <View>
      <>
        <Text>Sign up</Text>
        <TextInput
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Enter email"
          onChangeText={(email) => setEmailAddress(email)}
        />
        <TextInput
          autoCapitalize="none"
          value={firstName}
          placeholder="Enter name"
          onChangeText={(name) => setFirstName(name)}
        />
        <TextInput
          autoCapitalize="none"
          value={lastName}
          placeholder="Enter last name"
          onChangeText={(name) => setLastName(name)}
        />
        <TextInput
          value={password}
          placeholder="Enter password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        <TouchableOpacity onPress={onSignUpPress}>
          <Text>Continue</Text>
        </TouchableOpacity>
        <View style={{ display: "flex", flexDirection: "row", gap: 3 }}>
          <Text>Already have an account?</Text>
          <Link href="/sign-in">
            <Text>Sign in</Text>
          </Link>
        </View>
      </>
    </View>
  );
}
