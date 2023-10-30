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
        value={stance}
        onChange={(event) => setStance(event.target.value)}
      >
        <option value="regular">Regular</option>
        <option value="switch">Switch</option>
      </select>

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
