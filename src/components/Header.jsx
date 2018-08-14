import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "react-emotion";

const HeaderStyled = styled("div")`
    display: flex;
    justify-content: space-between;
`;

class Header extends Component {
    render() {
        return (
            <HeaderStyled>
                <Link to="/">
                    <h3>GregoryWilliams.me</h3>
                </Link>
                <Link to="/about">
                    <h3>About</h3>
                </Link>
            </HeaderStyled>
        );
    }
}

export default Header;
