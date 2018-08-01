import React, { Component } from "react";
import styled from "react-emotion";

const AboutStyled = styled("div")`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    min-height: 300px;
`;

class About extends Component {
    render() {
        return (
            <AboutStyled>
                <h1>
                    Edit About component or pages/about.jsx to include your
                    information.
                </h1>
            </AboutStyled>
        );
    }
}

export default About;
