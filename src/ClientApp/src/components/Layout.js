import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import { NavBar } from './NavBar';
import { Titlecard } from './Titlecard';

export class Layout extends Component {
    displayName = Layout.name

    render() {
        return (
            <Grid>
                <NavBar />
                <Titlecard />
                <Row>
                    {this.props.children}
                </Row>
            </Grid>
        );
    }
}
