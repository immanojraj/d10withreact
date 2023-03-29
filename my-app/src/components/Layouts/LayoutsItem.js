import React from 'react';

class Layoutitem extends React.Component {
    render() {
        return (
            <>
            <h2>{this.props.attributes.title}</h2>
            <div dangerouslySetInnerHTML={{__html: this.props.attributes.body.value}} />
            </>
        );
    }
}

export default Layoutitem;