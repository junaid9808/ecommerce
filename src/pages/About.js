import React from "react";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  useGoogleLogin,
} from "@react-oauth/google";
import { useSelector } from "react-redux";

export default function About() {
  const data = useSelector((state) => {
    return state.loginUser;
  });
  console.log("selecter", data);
  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log("Google login successful", tokenResponse);
      // You can now use the tokenResponse to authenticate the user in your app
    },
    onError: () => {
      console.error("Google login failed");
      // Handle login errors here
    },
    flow: "auth-code", // Use 'auth-code' for the authorization code flow
  });
  return (
    <>
      <button onClick={() => googleLogin()}>Sign in with Google 🚀</button>
    </>
  );
}
