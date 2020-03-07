import React, { useState } from 'react';

const SmurfList = props => {

    console.log('Form', props)
    
    const startingState = { name: '', age: '', height: ''}
    
    const [allSmurfs, setAllSmurfs] = useState(startingState);

    const handleChange = event => {
        setAllSmurfs({...allSmurfs, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(JSON.stringify(allSmurfs))
        props.addSmurfs(allSmurfs)
        setAllSmurfs(startingState);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' 
                       name='name' 
                       placeholder='Name' 
                       value={allSmurfs.name} 
                       onChange={handleChange}    
                       />
                <input type='number' 
                       name='age' 
                       placeholder='Age' 
                       value={allSmurfs.age} 
                       onChange={handleChange}
                       />
                <input type='text' 
                       name='height' 
                       placeholder='Height in cm' 
                       value={allSmurfs.height} 
                       onChange={handleChange}
                       />
                <button type='sumbit'>Add Smurf</button>
            </form>
        </div>
    )
}

export default SmurfList;