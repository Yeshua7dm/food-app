import CustomButton from "@/components/button";
import CustomInput from "@/components/input";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, View } from "react-native";

const SignIn = () => {
  const [isSubmtting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    if (!form.email || !form.password)
      return Alert.alert("Error!", "Please enter valid email and password");

    setIsSubmitting(true);
    try {
      // call appwrite function here
      Alert.alert("Success!", "You have successfully signed in");
      router.replace("/");
    } catch (error) {
      let errorMessage = "An error occurred while signing in";
      if (error instanceof Error) {
        errorMessage += ": " + error.message;
      }
      Alert.alert("Error!", errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      <CustomInput
        label="Email"
        placeholder="Enter your email address"
        keyboardType="email-address"
        onChangeText={(text) => {
          setForm((prev) => ({ ...prev, email: text }));
        }}
        value={form.email}
      />
      <CustomInput
        label="Password"
        placeholder="Enter your password"
        onChangeText={(text) => {
          setForm((prev) => ({ ...prev, password: text }));
        }}
        secureTextEntry={true}
        value={form.password}
      />
      <CustomButton
        title="Sign In"
        isLoading={isSubmtting}
        onPress={handleSubmit}
      />
      <View className="flex-row items-center justify-center gap-2 mt-5">
        <Text className="base-regular text-gray-100">
          Don&apos;t have an account?
        </Text>
        <Link href={"/sign-up"} className="text-primary">
          Sign Up
        </Link>
      </View>
    </View>
  );
};

export default SignIn;
