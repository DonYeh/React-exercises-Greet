// Greet lowercase: accepts a name as a prop, displays it as all lowercase

import React from 'react';

function GreetLowercase(props) {
    const lowercasedName = props.name.toLowerCase()
    // console.log(lowercasedName);
    // console.log(props.name);
    // console.log(props.name.toLowerCase);
    return (
        <h1> hello {lowercasedName}</h1>
    );
}




export default GreetLowercase;