import React, { Component } from "react";
import styled from "react-emotion";
import { Link } from "gatsby";

const FooterStyled = styled("footer")`
    justify-content: center;
    align-content: center;
    text-align: center;
    padding: 10px 5px 5px;
`;

class Footer extends Component {
    render() {
        const { config } = this.props;
        const { copyright } = config;
        if (!copyright) {
            return null;
        }
        return (
            <FooterStyled>
                <h4>{copyright}</h4>
                <h4>
                    <Link to="/privacy">Privacy Policy</Link>
                </h4>
                <h4>
                    Based on{" "}
                    <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
                        Gatsby Advanced Starter
                    </a>
                    .
                </h4>
            </FooterStyled>
        );
    }
}

export default Footer;
