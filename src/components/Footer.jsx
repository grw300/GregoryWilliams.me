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
                <p>
                    <Link to="/privacy">Privacy Policy</Link>
                </p>
                <p>
                    Based on{" "}
                    <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
                        Gatsby Advanced Starter
                    </a>
                </p>
                <p>{copyright}</p>
            </FooterStyled>
        );
    }
}

export default Footer;
