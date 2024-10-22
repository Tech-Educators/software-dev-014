import { SignUp } from "@clerk/nextjs";

export default async function SignUpPage() {
  return (
    <>
      <h1>Sign-up for a welcome package. It&apos;s NPM</h1>
      <SignUp />
    </>
  );
}
