import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs, deleteSmurf } from "../actions";

const SmurfList = props => {
    useEffect(() => {
        props.getSmurfs()
    }, [])

    if (props.isFetching) {
        return <h3>Tra La, La La La La</h3>
    }

    return (
        <div>
            <button onClick={() => props.getSmurfs()}>Fetch Smurfs!</button>
            {/* {props.smurfs &&
        props.smurfs.map(smurf => (
          <div key={smurf.id}>
            <h1>Name: {smurf.name}</h1>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
          </div>
        ))} */}
            <div>
                {props.error && <p>{props.error}</p>}
                {props.smurfs && props.smurfs.map(smurf => (
                    <div key={smurf.id}>
                        <h1>Name: {smurf.name}</h1>
                        <p>Age: {smurf.age}</p>
                        <p>Height: {smurf.height}</p>
                    </div>
                ))}

                <button onClick={() => props.deleteSmurf()}>UnSmurf</button>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error,

    }
}

export default connect(mapStateToProps, { getSmurfs, deleteSmurf })(SmurfList);