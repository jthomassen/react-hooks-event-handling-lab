import React from 'react';

function Keypad(){
    function handleChange() {
        console.log('Entering password...')
    }
    
    return (
    <div>
        <input 
            type="text"
            onChange={handleChange}
        />
    </div>
    )
}

export default Keypad 
