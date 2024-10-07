//this is a refactored version of the form!
//pretty fancy, yeah

import { useState } from "react";

export default function App() {
  //we can store the input data into state
  //   const [username, setUsername] = useState("");
  //   const [location, setLocation] = useState("");
  //   const [job, setJob] = useState("");

  //we have simplified our state from 3 different states to 1
  const [formValues, setFormValues] = useState({
    username: "",
    location: "",
    job: "",
  });

  //vanilla JS
  //   const formData = new FormData(form);
  //   const formValues = Object.fromEntries(formData);

  //I need one event handler to track the change of my form values
  // I need to use the same state for all the inputs

  function handleFormValuesChange(event) {
    //keywords: spread operator, event object, bracket and dot object notation
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }
  //   function handleUsernameChange(event) {
  //     setUsername(event.target.value);
  //     console.log(event.target.value);
  //   }

  //   function handleLocationChange(event) {
  //     setLocation(event.target.value);
  //     console.log(event.target.value);
  //   }

  //   function handleJobChange(event) {
  //     setJob(event.target.value);
  //     console.log(event.target.value);
  //   }

  //event handler
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formValues);
    //you will send the data to the server in here
  }

  return (
    <>
      <h1>Refactored Form</h1>

      <h2>DRY code (Don&apos;t Repeat Yourself)</h2>
      {/* event listener --> onSubmit */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Write your full name"
          required
          value={formValues.username}
          onChange={handleFormValuesChange}
        />
        {/* event listener --> onChange */}

        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Write your current location"
          required
          value={formValues.location}
          onChange={handleFormValuesChange}
        />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          id="job"
          name="job"
          placeholder="Write your current job, student, or unemployed"
          required
          value={formValues.job}
          onChange={handleFormValuesChange}
        />
        <button type="submit">
          Submit your data! All aboard the data train
        </button>
      </form>
      <p>Current username: {formValues.username}</p>
      <p>Current location: {formValues.location}</p>
      <p>Current job: {formValues.job}</p>
    </>
  );
}
