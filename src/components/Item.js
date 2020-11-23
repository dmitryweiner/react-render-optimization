import React from 'react';

export default class Item extends React.Component {
    render() {
        const { id } = this.props;
        //console.count(`Rendering Item ${id}`);
        return <li>{id}</li>;
    }
}
