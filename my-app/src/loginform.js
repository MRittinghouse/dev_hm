import React from 'react';

function loginForm() {

    const [state, setState] = React.useState({
        username:"", 
        passcode:""
    });

    return (
        <form>
            <label>
                Username
                <input 
                type="text" 
                name="username" 
                value={state.username} 
                onChange={handleChange}
                />
            </label>
            <label>
                Password
                <input 
                type="text" 
                name="passcode" 
                value={state.passcode} 
                onChange={handleChange}
                />
            </label>
        </form>
    );
}

function handleChange(evt) {
    const value = evt.target.value;
    setState({
        ...state, 
        [evt.target.name]:value
    });
}





export default loginForm;

