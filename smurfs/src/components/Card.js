import React from 'react';
import { connect } from 'react-redux'
import { deleteSmurf } from '../actions';

const Card = (props) => {

    return (
        <div>
                
                        <h1>Name: {props.smurf.name}</h1>
                        <p>Age: {props.smurf.age}</p>
                        <p>Height: {props.smurf.height}</p>
                        <button onClick={() => props.deleteSmurf(props.smurf.id)}>UnSmurf</button>
                    
            

                {/* <button onClick={() => props.deleteSmurf(props.smurf.id)}>UnSmurf</button> */}
            </div>
    )
}

export default connect(null, {deleteSmurf})(Card);