import React, { useState } from "react";
import { connect } from "react-redux";
import { createSmurf } from "../actions";

const Form = props => {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: Date.now()
  });

  const handleChange = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
      e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          name="name"
          id=""
          type="text"
          placeholder="Name Your Smurf"
          onChange={e => handleChange(e)}
          value={newSmurf.name}
        />

        <input
          name="age"
          id=""
          type="text"
          placeholder="Smurf Age"
          onChange={e => handleChange(e)}
          value={newSmurf.age}
        />

        <input
          name="height"
          id=""
          type="text"
          placeholder="Smurf Height"
          onChange={e => handleChange(e)}
          value={newSmurf.height}
        />

        <button type="submit" onClick={() => props.createSmurf(newSmurf)}>
          Add Your Smurf!
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    addingSmurf: state.addingSmurf
  };
};

export default connect(mapStateToProps, { createSmurf })(Form);