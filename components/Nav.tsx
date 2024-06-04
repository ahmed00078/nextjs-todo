import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import React from "react";
import { ModeToggle } from "./ModeToggle";

const Nav = () => {
    return (
        <nav className="container flex items-center justify-between mt-5 mb-5">
            <ModeToggle />
            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
                <SignInButton />
            </SignedOut>
        </nav>
    );
};

export default Nav;
