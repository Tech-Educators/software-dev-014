import { useParams, Outlet, Link } from "react-router-dom";

// useParams is a hook that we can use to manipulate the value of the dynamic params
// Outlet is a placeholder component that we will use to show the correct data to each user
//Link is a component to sort out the navigation

export default function UserProfile() {
  // I am destructuring the username property from the useParams hook to use it in our page
  let { username } = useParams();
  //   let username = useParams {
  //     username: "manny"
  //   }

  //   useParams().username
  return (
    <>
      <h1>User Profile</h1>
      {/* we are going to have links for the user to navigate to other pages */}
      <Link to="/">Home</Link>
      <Link to={`/profile/${username}`}>My profile</Link>

      <h2>Welcome, {username}</h2>
      <p>Here you can see your favourite ice screams</p>

      {/* Outlet is a placeholder component for each user's data */}
      <Outlet />
    </>
  );
}
