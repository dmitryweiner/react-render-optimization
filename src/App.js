import './App.css';
import React, { useState } from 'react';

const MAX_ITEMS = 10000;

function App() {
    const arr = [];
    for (let i = 0; i < MAX_ITEMS; i++) {
        arr.push({
            id: Math.random().toString(32).substr(2)
        });
    }
    const [list, setList] = useState(arr);

    function changeRandomItem() {
        list[Math.floor(Math.random() * MAX_ITEMS)] = {
            id: Math.random().toString(32).substr(2)
        };
        setList([...list]);
    }

    return (
        <div className="App">
            <button onClick={changeRandomItem}>Change random item</button>
            <div className="columns-wrapper">
                <div className="column">
                    <ul>
                        {list.map(item => (
                            <li>{item.id}</li>
                        ))}
                    </ul>
                </div>
                <div className="column">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
                <div className="column">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
