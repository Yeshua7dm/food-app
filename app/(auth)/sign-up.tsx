import CustomButton from "@/components/button";
import CustomInput from "@/components/input";
import { createUser } from "@/lib/appwrite";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, View } from "react-native";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    const { name, email, password } = form;
    if (!name || !email || !password)
      return Alert.alert(
        "Error!",
        "Please enter valid full name, email and password"
      );
    setIsSubmitting(true);

    try {
      // call appwrite function here

      await createUser({ email, password, name });
      router.replace("/");
    } catch (error) {
      let errorMessage = "An error occurred while signing up";
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
        label="Full Name"
        placeholder="Enter your full name"
        onChangeText={(text) => {
          setForm((prev) => ({ ...prev, name: text }));
        }}
        keyboardType="default"
        value={form.name}
      />
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
        title="Sign Up"
        isLoading={isSubmitting}
        onPress={handleSubmit}
      />
      <View className="flex-row items-center justify-center gap-2 mt-5">
        <Text className="base-regular text-gray-100">
          Already have an account?
        </Text>
        <Link href={"/sign-in"} className="text-primary">
          Sign In
        </Link>
      </View>
    </View>
  );
};

export default SignUp;
