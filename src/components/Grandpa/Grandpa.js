import React from 'react';
import Anty from '../Anty/Anty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';


const Grandpa = () => {
    const house = 7;
    return (
        <div className='grandPa' style={{ display: 'flex' }}>
            <Father house={house}></Father>
            <Uncle house={house}></Uncle>
            <Anty house={house}></Anty>
        </div>
    );
};

export default Grandpa;