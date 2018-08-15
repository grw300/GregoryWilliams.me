import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "react-emotion";

const HeaderStyled = styled("div")`
    display: flex;
    justify-content: flex-end;
`;

class Header extends Component {
    render() {
        return (
            <HeaderStyled>
                <Link to="/about">
                    <h3>About</h3>
                </Link>
            </HeaderStyled>
        );
    }
}

export default Header;
