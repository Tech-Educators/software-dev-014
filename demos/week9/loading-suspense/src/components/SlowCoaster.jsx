//I am going to make this coaster artificially slow
async function delay(timeout) {
  //we are creating this Promise here to make our code slow
  return new Promise((resolve) => setTimeout(resolve, timeout));
}

export default async function SlowCoaster() {
  await delay(10000);
  return (
    <>
      <h1>
        I am a bit slow, and I am not that good, but I am trustworthy. I&apos;ll
        get there!
      </h1>
    </>
  );
}
