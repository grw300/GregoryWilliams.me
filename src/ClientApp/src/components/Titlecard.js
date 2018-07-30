import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";

export class Titlecard extends Component {
    displayName = Titlecard.name

    render() {
        return (
            <Jumbotron>
                <h1>Gregory Williams.me</h1>
                <p>
                    The personal website of Gregory Williams.
                    <br />
                    Software Engineer based in Austin, TX.
                </p>
            </Jumbotron>
        );
    }
}