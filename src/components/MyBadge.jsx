import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';

class MyBadge extends Component {
    render() {
        return (
            <Badge variant={ this.props.variant }>
                { this.props.text }
            </Badge>
        );
    }
}

export default MyBadge;