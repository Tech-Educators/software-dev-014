import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <>
      <h1>Sign-in to the most wonderful website in the world</h1>
      <SignIn />
    </>
  );
}
