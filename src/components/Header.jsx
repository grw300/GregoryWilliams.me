import React, { Component } from "react";
import Link from "gatsby-link";
import styled from "react-emotion";

class Header extends React.Component {
    render() {
        return (
            <Link to="/">
                <h3>GregoryWilliams.me</h3>
            </Link>
        );
    }
}

export default Header;
