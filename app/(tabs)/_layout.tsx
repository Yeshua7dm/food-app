import { Redirect, Slot } from "expo-router";
import React from "react";

const Layout = () => {
  const isAuthenticated = true; // Replace with actual authentication logic
  if (!isAuthenticated) return <Redirect href="/sign-in" />;
  return <Slot />;
};

export default Layout;
