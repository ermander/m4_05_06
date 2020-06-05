import React, { Component } from 'react';
import {Alert} from 'react-bootstrap';

class WarningSign extends Component {
    render() {
        return (
            <Alert variant={'danger'}>
                {this.props.text}
            </Alert>
        );
    }
}

export default WarningSign;



/*
Create a component MyBadge. You can pass with the property the text inside the badge and the color. This
component should use internally a Badge react-bootstrap component
*/