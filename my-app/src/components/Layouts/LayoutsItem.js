import React from 'react';
import config from '../../config';

class Layoutitem extends React.Component {
    render() {
        const itineraryStopNodesWithImages = `${config.base}jsonapi/node/layouts?include=field_layout_image`;
        return (
            <>
            <h2>{this.props.attributes.title}</h2>
            <div dangerouslySetInnerHTML={{__html: this.props.attributes.body.value}} />
            <img src={itineraryStopNodesWithImages } alt={this.props.itineraryStopNodesWithImages}/>
            </>
        );
    }
}

export default Layoutitem;