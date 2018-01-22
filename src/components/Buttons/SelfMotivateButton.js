import React from 'react';

const SelfMotivateButton = ({num, string, name}) => {
    const motivate = (event) =>{
        alert(`${string} ${name}!`)
    }

    return(
        <div>
            <button onClick={motivate}>{num}</button>
        </div>
    );
};

export default SelfMotivateButton