import './App.css';
import React, { useState } from 'react';
import List from './components/List';
import PureList from './components/PureList';

const MAX_ITEMS = 10;

class Child extends React.PureComponent {
    render() {
        console.log('Rerender Child');
        return <button onClick={this.props.handler}>Click me</button>;
    }
}
class Parent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        this.state = {
            flag: false
        };
    }
    handler() {
        console.log(this);
    }
    render() {
        return (
            <div>
                <input
                    type="checkbox"
                    checked={this.state.flag}
                    onChange={e => this.setState({ flag: e.target.checked })}
                />
                <Child handler={this.handler} />
            </div>
        );
    }
}

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
            <Parent />
            <button onClick={changeRandomItem}>Change random item</button>
            <div className="columns-wrapper">
                <div className="column">
                    <h3>List without components</h3>
                    <ul>
                        {list.map(item => (
                            <li key={item.id}>{item.id}</li>
                        ))}
                    </ul>
                </div>
                <div className="column">
                    <h3>List with React.Component</h3>
                    <List list={list} />
                </div>
                <div className="column">
                    <h3>List with React.PureComponent</h3>
                    <PureList list={list} />
                </div>
            </div>
        </div>
    );
}

export default App;
