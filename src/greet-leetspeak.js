// Greet leetspeak: accepts a name as a prop, displays it in leetspeak

import React from 'react';

class GreetLeetSpeak extends React.Component {

    const alphabets = {
        a: "4",
        b: "8",
        e: "3",
        g: "6",
        i: "1",
        o: "0",
        p: "9",
        s: "5",
        t: "7",
        z: "2"
    },


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1></h1>
        )
    }

}

export default GreetLeetSpeak;