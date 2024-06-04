import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function Page() {
  return (
    <div className="center-container">
      <SignIn afterSignInUrl={'/'}/>
    </div>
  );
}