import React, { Component } from "react";
import styled from "react-emotion";
import { Link } from "gatsby";
import UserLinks from "./UserLinks/UserLinks";

const FooterStyled = styled("footer")`
    justify-content: center;
    align-content: center;
    padding: 10px 5px 5px;
`;

const NoticeContainer = styled("div")`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    margin-top: 25px;
    @media (max-width: 640px) {
        justify-content: space-around;
    }
    h4 {
        text-align: center;
        margin: 0;
    }
`;

class Footer extends Component {
    render() {
        const { config } = this.props;
        const url = config.siteRss;
        const { copyright } = config;
        if (!copyright) {
            return null;
        }
        return (
            <FooterStyled>
                <UserLinks config={config} labeled />
                <NoticeContainer>
                    <h4>{copyright}</h4>
                    <Link to="/privacy">Privacy</Link>
                    <Link to={url}>
                        <button>Subscribe</button>
                    </Link>
                    <h4>
                        Based on{" "}
                        <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
                            Gatsby Advanced Starter
                        </a>
                        .
                    </h4>
                </NoticeContainer>
            </FooterStyled>
        );
    }
}

export default Footer;
