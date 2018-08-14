import React, { Component } from "react";
import styled from "react-emotion";
import { Link } from "gatsby";
import UserLinks from "./UserLinks/UserLinks";

const SidebarStyled = styled("div")`
    text-align: center;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: 10px 5px 5px;
`;

class Sidebar extends Component {
    render() {
        const { config } = this.props;
        const url = config.siteRss;
        const { copyright } = config;
        if (!copyright) {
            return null;
        }
        return (
            <SidebarStyled>
                <UserLinks config={config} labeled />
                <Link to={url}>
                    <button>Subscribe</button>
                </Link>
            </SidebarStyled>
        );
    }
}

export default Sidebar;
