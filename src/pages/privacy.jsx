import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Privacy from "../components/Privacy";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
    render() {
        return (
            <Layout location={this.props.location}>
                <div className="privacy-container">
                    <Helmet title={`Privacy | ${config.siteTitle}`} />
                    <Privacy />
                </div>
            </Layout>
        );
    }
}

export default AboutPage;
