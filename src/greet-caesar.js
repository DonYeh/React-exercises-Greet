// Greet caesar: accepts a name as a prop, displays the caesare cipher version


import React from 'react';

function GreetCaesar(props) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    // const lowercasedName = props.name.toLowerCase()
    let cipheredName = '';
    // console.log(lowercasedName);
    // console.log(props.name);
    // console.log(props.name.toLowerCase);
    // console.log(typeof (lowercasedName)) //string
    // const leetedName = 
    console.log(props.name);
    for (let i = 0; i < props.name.length; i++) {
        cipheredName = cipheredName + rotate(alphabet, props.name[i]);
    }

    return (
        <h1> ello {cipheredName} </h1>
    );
}

function rotate(alphabetArr, original) {
    let cipheredValue = original;
    let index = alphabetArr.indexOf(original);
    if (index !== -1) {
        index = index + 13;
        if (index >= alphabetArr.length) {
            index = index - alphabetArr.length
        }
        cipheredValue = alphabetArr[index];
    }
    return cipheredValue;
}

// function leetLookupArray(char) {
//     let val = char;
//     console.log('inside leetlookuparray');
//     console.log(val);
//     console.log('-===02384014808');
//     let letters = 'aegiost'.toLowerCase().split('');
//     let numbers = '4361057'.toLowerCase().split('');
//     // let val = char;

//     // if (char in letters) {
//     //     console.log(char);
//     //     console.log('inside the if')
//     //     val = numbers[letters.indexOf(char)];
//     // }

//     if (letters.includes(char)) {
//         console.log(char);
//         console.log('inside the if')
//         val = numbers[letters.indexOf(char)];
//     }

//     return val

// }
// console.log('=============');
// console.log(leetLookupArray)
// console.log(val);


export default GreetCaesar;