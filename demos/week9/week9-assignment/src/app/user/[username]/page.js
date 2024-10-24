//If you want to set up a profile page that renders data from clerk, you need:
//auth() --> userId
//currentUser --> username, email address, ...
//the data I render here comes from two places:
//Some data comes from currentUser (the data collected by Clerk), other data comes from the user table in Supabase(bio, other user data...)
export default async function UserPage() {
  //   const user = await currentUser();
  //you can console.log user to see what it looks like inside
  return (
    <>
      <h1>User Page</h1>
      {/* <h2>
        we can use optional chaining in case the user does not provide all the data we want to render
        Welcome, {user?.firstName}
        {user?.lastName}
      </h2>
      <p>{user?.emailAddresses[0].emailAddresses}</p> */}
    </>
  );
}
