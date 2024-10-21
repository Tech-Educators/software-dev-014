//when we have a fast route with a very slow element, we want to render the fast content and leave the slow element for last
import SlowCoaster from "@/components/SlowCoaster";
//we are going to set up Suspense to only wait for the slow component to render
import { Suspense } from "react";

export default function FastRoute() {
  return (
    <>
      <h1>I am super fast unlike my friend below. What a slow coaster</h1>
      {/* we wrap the slow element with Suspense, so the rest of the page loads as expected */}
      <Suspense
        fallback={
          <>
            <h2 className="text-indigo-300">
              Still loading, come back in a bit
            </h2>
          </>
        }
      >
        <SlowCoaster />
      </Suspense>
    </>
  );
}
