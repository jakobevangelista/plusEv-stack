"use client";

import * as React from "react";
import { useSignIn, useSignUp } from "@clerk/nextjs";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function OauthSignIn() {
  const { signIn } = useSignIn();
  const { signUp } = useSignUp();

  if (!signIn || !signUp) return null;

  const signInWith = (e: React.FormEvent) => {
    e.preventDefault();

    const email = (e.target as HTMLFormElement).email.value;

    console.log("EMAIL: ", email);
    signIn
      .authenticateWithRedirect({
        identifier: email,
        strategy: "saml",
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err.errors);
        alert("An error occurred. Please try again.", err);
        console.error(err, null, 2);
      });
  };

  // Render a button for each supported SAML provider
  // you want to add to your app
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login With Enterprise SSO</CardTitle>
      </CardHeader>
      <form onSubmit={(e) => signInWith(e)}>
        <Input type="email" name="email" placeholder="Enter email address" />
        <button>Sign in with SAML</button>
      </form>
    </Card>
  );
}
