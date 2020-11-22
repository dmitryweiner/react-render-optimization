import React from 'react';
import PureItem from './PureItem';

export default class PureList extends React.PureComponent {
    render() {
        const { list } = this.props;
        //console.count('Rendering PureList');
        return (
            <ul>
                {list.map(item => (
                    <PureItem id={item.id} key={item.id} />
                ))}
            </ul>
        );
    }
}
