// Greet leetspeak: accepts a name as a prop, displays it in leetspeak

import React from 'react';


function leetLookup(char) {
    let val = char;
    const dictionary = {
        A: 4,
        E: 3,
        G: 6,
        I: 1,
        O: 0,
        S: 5,
        T: 7
    }
    if (dictionary[char] !== undefined) {
        val = dictionary[char];
    }
}

function leetLookupArray(char) {
    let val = char;
    console.log('inside leetlookuparray');
    console.log(val);
    console.log('-===02384014808');
    let letters = 'aegiost'.toLowerCase().split('');
    let numbers = '4361057'.toLowerCase().split('');
    // let val = char;

    // if (char in letters) {
    //     console.log(char);
    //     console.log('inside the if')
    //     val = numbers[letters.indexOf(char)];
    // }

    if (letters.includes(char)) {
        console.log(char);
        console.log('inside the if')
        val = numbers[letters.indexOf(char)];
    }

    return val

}
console.log('=============');
console.log(leetLookupArray)
// console.log(val);
function GreetLeetSpeak(props) {
    const lowercasedName = props.name.toLowerCase()
    let leetedName = '';
    // console.log(lowercasedName);
    // console.log(props.name);
    // console.log(props.name.toLowerCase);
    // console.log(typeof (lowercasedName)) //string
    // const leetedName = 
    for (let i = 0; i < lowercasedName.length; i++) {
        leetedName = leetedName + leetLookupArray(lowercasedName[i])
    }

    return (
        <h1> hellos {leetedName} </h1>
    );
}

export default GreetLeetSpeak;


// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
