import Button from '../button/button';
import './table.scss';
import React, { useState } from 'react';

function Table () {
    console.log("Rerendered");

    const [count, setCount] = useState(0);
    const [buttonData, setData] = useState([
        { id: 0, label: 'First'},
        { id: 1, label: 'Second'},
        { id: 2, label: 'Third'},
        { id: 3, label: 'Fourth'},
        { id: 4, label: 'Fifth'},
        { id: 5, label: 'Sixth'}
    ]);

    function changeData() {
        console.log('ran')
        let newButtonData = buttonData;
        newButtonData[0].label = 'New Name';
        setData([...newButtonData]); // This will NOT work 
    }

    return(
        <div className='table-body'>
            <button onClick={() => setCount(count+1)}>Count: { count} </button>
            <button onClick={() => changeData()}>Change Button Data</button>
            { buttonData.map( data => (
                <Button key={data.id} id={data.id} label={data.label}></Button>
            ))}
        </div>
    )
}

export default Table;


