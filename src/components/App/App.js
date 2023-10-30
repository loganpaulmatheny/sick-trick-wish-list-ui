import "./App.css";
import React from "react";
import Tricks from "../Tricks/Tricks";
import Form from "../Form/Form";
import { useState, useEffect } from "react";
// import { getTricksApiCall } from "../../apiCalls.js";

function App() {
  const [tricks, setTricks] = useState([]);
  const [error, setError] = useState("");

  // const dummyTricks = [
  //   {
  //     stance: "regular",
  //     name: "treflip",
  //     obstacle: "flat ground",
  //     tutorial: "https://www.youtube.com/watch?v=XGw3YkQmNig",
  //     id: 1,
  //   },
  //   {
  //     stance: "switch",
  //     name: "heelflip",
  //     obstacle: "stairs",
  //     tutorial: "https://www.youtube.com/watch?v=9N9swrZU1HA",
  //     id: 2,
  //   },
  //   {
  //     stance: "regular",
  //     name: "frontside 50-50, backside 180 out",
  //     obstacle: "ledge",
  //     tutorial: "https://www.youtube.com/watch?v=9N9swrZU1HA",
  //     id: 3,
  //   },
  // ];

  function getTricks() {
    fetch("http://localhost:3001/api/v1/tricks")
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        setTricks(data);
      })
      .catch((error) => {
        console.log(error.message);
        if (error.message === "404") {
          setError("Try checking your URL");
        } else {
          setError("There may be an error on our end, please try again later");
        }
      });
  }

  useEffect(() => getTricks(), []);

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Form />
      <Tricks tricks={tricks} />
    </div>
  );
}

export default App;
