import { SignIn } from "@clerk/nextjs";

export default async function SignInPage() {
  return (
    <>
      <h1>Sign-in to the most wonderful website in the world</h1>
      <SignIn />
    </>
  );
}
