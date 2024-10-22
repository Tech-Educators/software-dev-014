//I am going to Clerk components here to manage my authentication tasks
//All of these components work in the server
import {
  UserButton,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

//we are going to import auth() to have access to authentication credentails from the user
import { auth } from "@clerk/nextjs/server";

export default function Header() {
  //we can destructure the userId from clerk auth
  //this userId can be saved to your database, so you can match user with posts (one to many)
  const { userId } = auth();

  return (
    <>
      {/* when the user is signed in, i will show the user button */}
      <SignedIn>
        <UserButton />
      </SignedIn>
      {/* we only want to show the SignInButton and SignUpButton when the user is
      signed out */}
      <SignedOut>
        <SignInButton mode="modal">Sign In</SignInButton>
        <SignUpButton>Sign Up</SignUpButton>
      </SignedOut>
    </>
  );
}
