import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs, deleteSmurf } from "../actions";
import Card from "./Card"

const SmurfList = props => {
    // useEffect(() => {
    //     props.getSmurfs()
    // }, [smurf])

    if (props.isFetching) {
        return <h3>Tra La, La La La La</h3>
    }

    return (
        <div>
            <button onClick={() => props.getSmurfs()}>Fetch Smurfs!</button>
           
            <div>
            {props.error && <p>{props.error}</p>}
                {props.smurfs && props.smurfs.map(smurf => (
                <Card key={smurf.id} smurf={smurf}
                    />
                ))}

            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        isDeleting: state.isDeleting,
        error: state.error,

    }
}

export default connect(mapStateToProps, { getSmurfs, deleteSmurf })(SmurfList);