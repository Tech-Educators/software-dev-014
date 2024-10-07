import { useState } from "react";
import RefactoredForm from "./components/RefactoredForm";
import "./App.css";

export default function App() {
  //we can store the input data into state
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [job, setJob] = useState("");

  //we need to link each state variable with its corresponding input
  //we are going to use onChange to track the changes in the input and save them in state
  //onChange needs an event handler and an event listener

  function handleUsernameChange(event) {
    setUsername(event.target.value);
    console.log(event.target.value);
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
    console.log(event.target.value);
  }

  function handleJobChange(event) {
    setJob(event.target.value);
    console.log(event.target.value);
  }

  //event handler
  function handleSubmit(event) {
    event.preventDefault();
    //you will send the data to the server in here
  }

  return (
    <>
      <h1>Forms in React</h1>
      <h2>Wet Form (Write Everything Twice)</h2>
      {/* event listener --> onSubmit */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Write your full name"
          required
          value={username}
          onChange={handleUsernameChange}
        />
        {/* event listener --> onChange */}

        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Write your current location"
          required
          value={location}
          onChange={handleLocationChange}
        />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          id="job"
          name="job"
          placeholder="Write your current job, student, or unemployed"
          required
          value={job}
          onChange={handleJobChange}
        />
        <button type="submit">
          Submit your data! All aboard the data train
        </button>
      </form>
      <p>Current username: {username}</p>
      <p>Current location: {location}</p>
      <p>Current job: {job}</p>
      <RefactoredForm />
    </>
  );
}
