import "../Form/Form.css";
import { useState } from "react";

function Form({ addTrick }) {
  const [stance, setStance] = useState("");
  const [name, setName] = useState("");
  const [obstacle, setObstacle] = useState("");
  const [tutorial, setTutorial] = useState("");
  const [formError, setFormError] = useState("");

  function submitTrick(event) {
    event.preventDefault();

    if (stance && name && obstacle && tutorial) {
      // notice checking for inputs
      const newTrick = {
        id: Date.now(),
        stance,
        name,
        obstacle,
        tutorial,
      };
      console.log(newTrick);
      addTrick(newTrick);
      clearInput();
    } else {
      setFormError("Form, incomplete - all inputs need to be filled in");
    }
    // if inputs are not present, show the user an error to fill out the form
  }

  function clearInput() {
    setStance("");
    setName("");
    setObstacle("");
    setTutorial("");
    setFormError("");
  }

  return (
    <div>
      <select
        name="stance"
        value={stance}
        onChange={(event) => setStance(event.target.value)}
      >
        <option value="Regular">Regular</option>
        <option value="Switch">Switch</option>
      </select>
      <input
        type="text"
        placeholder="Enter Trick Name"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <select
        name="obstacle"
        value={obstacle}
        onChange={(event) => setObstacle(event.target.value)}
      >
        <option value="Flatground">Flatground</option>
        <option value="Ledge">Ledge</option>
        <option value="Rail">Rail</option>
        <option value="Stairs">Stairs</option>
        <option value="Pool">Pool</option>
      </select>
      <input
        type="text"
        placeholder="Input tutorial"
        name="tutorial"
        value={tutorial}
        onChange={(event) => setTutorial(event.target.value)}
      />

      <button
        onClick={(event) => {
          // how would this behave if it was an onSubmit()
          submitTrick(event);
        }}
      >
        Submit Your Trick
      </button>
      {formError && <h2 className="form-error">{formError}</h2>}
    </div>
  );
}

export default Form;
