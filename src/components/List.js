import React from 'react';
import Item from './Item';

export default class List extends React.Component {
    render() {
        const { list } = this.props;
        //console.count('Rendering List');
        return (
            <ul>
                {list.map(item => (
                    <Item id={item.id} key={item.id} />
                ))}
            </ul>
        );
    }
}
