import React, { useEffect } from 'react';
import { Card } from 'semantic-ui-react';

import './App.css';



const Smurfs = ({ getSmurfs, smurfs, isFetching}) => {
    

    useEffect(() => {
        getSmurfs();
    },[])

    console.log('Smurfs2', smurfs)

    if(isFetching){
        return <h3>Getting smurfs</h3>
    }
    
    return (
        
        <div>{smurfs.map((item, index) => {
            return (
                <div className='smurf-card' key={index}>
                    <Card>
                        <Card.Content>
                            <Card.Header>{item.name}</Card.Header>
                        </Card.Content>
                        <Card.Content>
                            <Card.Description>Age: {item.age}</Card.Description>
                            <Card.Description>Height: {item.height}</Card.Description>
                        </Card.Content>
                    </Card>
                </div>
            )
        })}</div>
    )
}

export default Smurfs;