import React, { Component } from "react";
import Helmet from "react-helmet";
import Privacy from "../components/Privacy";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
    render() {
        return (
            <div className="privacy-container">
                <Helmet title={`Privacy | ${config.siteTitle}`} />
                <Privacy />
            </div>
        );
    }
}

export default AboutPage;
