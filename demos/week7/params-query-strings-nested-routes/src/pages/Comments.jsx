// this component is nested inside the :username dynamic route
// /profile/manny/comments
import commentsData from "../lib/commentsData.json";
//we are going to use query strings to organise our comments
import { useParams, Link, useSearchParams } from "react-router-dom";

// we are going to use useSearchParams to manipulate our query strings
// /profile/:username/comments?sort=asc
// /profile/:username/comments?sort=desc

export default function Comments() {
  const { username } = useParams();
  // we are destructuring the searchParams from the useSearchParams array
  const [searchParams] = useSearchParams();
  //   useSearchParams = [searchParams];

  // I need to tell searchParams what keyword I am going to use to organise my data
  const sort = searchParams.get("sort");

  //I need to build some logic that organises my data is ascending and descending order

  if (sort === "asc") {
    commentsData.sort();
  } else if (sort === "desc") {
    commentsData.sort().reverse();
  }

  return (
    <>
      <Link to={`/profile/${username}/comments?sort=asc`}>Sort ASC</Link>
      <Link to={`/profile/${username}/comments?sort=desc`}>Sort DESC</Link>
      <h1>Comments</h1>

      {commentsData.map((comment) => (
        <h3 key={comment}>{comment}</h3>
      ))}
    </>
  );
}
