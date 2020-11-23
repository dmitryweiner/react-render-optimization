import React from 'react';

export default class PureItem extends React.PureComponent {
    render() {
        const { id } = this.props;
        //console.count(`Rendering PureItem ${id}`);
        return <li>{id}</li>;
    }
}
