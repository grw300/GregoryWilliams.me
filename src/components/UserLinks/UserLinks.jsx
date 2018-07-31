import React, { Component } from "react";
import styled from "react-emotion";

const UserLinksStyled = styled("div")`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 100%;
`;

class UserLinks extends Component {
    getLinkElements() {
        const { userLinks } = this.props.config;
        const { labeled } = this.props;
        return userLinks.map(link => (
            <a
                target="_blank"
                rel="noopener noreferrer"
                key={link.label}
                href={link.url}
            >
                <button>{labeled ? link.label : ""}</button>
            </a>
        ));
    }
    render() {
        const { userLinks } = this.props.config;
        if (!userLinks) {
            return null;
        }
        return <UserLinksStyled>{this.getLinkElements()}</UserLinksStyled>;
    }
}

export default UserLinks;
