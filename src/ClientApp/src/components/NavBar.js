import React, { Component } from "react";
import { Glyphicon, Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';

export class NavBar extends Component {

    render() {
        return (
            <Navbar collapseOnSelect fluid inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to={'/'}>
                            <Glyphicon glyph='home' />
                        </LinkContainer>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to={'/post-editor'} exact>
                            <NavItem>
                                <Glyphicon glyph='pencil' />
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav pullRight>
                        <LinkContainer to={'/'}>
                            <NavItem>
                                <Glyphicon glyph='log-in' />
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}