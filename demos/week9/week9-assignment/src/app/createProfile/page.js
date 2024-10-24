//!You can nest this route in any other route, if you want. The user should only see this route after being redirected from the sign-up page
//The sign-up page needs the following elements:
//connection with db
//auth() and userId
//a form to collect the user's profile data
//sql query to insert the user's data into the database
//we need to redirect the user to the homepage once they submit the profile form
//A suggestion: you could have a try and catch for your sql query
export default function createProfilePage() {
  return (
    <>
      <h1>Create Profile Page</h1>
    </>
  );
}
