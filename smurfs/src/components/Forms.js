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
      props.createSmurf(newSmurf)
      
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          name="name"
          id=""
          type="text"
          placeholder="Name Your Smurf"
          onChange={handleChange}
          value={newSmurf.name}
        />

        <input
          name="age"
          id=""
          type="number"
          placeholder="Smurf Age"
          onChange={handleChange}
          value={newSmurf.age}
        />

        <input
          name="height"
          id=""
          type="text"
          placeholder="Smurf Height"
          onChange={handleChange}
          value={newSmurf.height}
        />

        <button type="submit" onClick={submitForm}>
          Add Your Smurf!
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    createSmurf: state.createSmurf
  };
};

export default connect(mapStateToProps, { createSmurf })(Form);