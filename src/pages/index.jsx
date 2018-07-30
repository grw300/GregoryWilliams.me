import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import Footer from "../components/Footer/Footer";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
    render() {
        const postEdges = this.props.data.allMarkdownRemark.edges;
        return (
            <Layout location={this.props.location}>
                <div className="index-container">
                    <Helmet title={config.siteTitle} />
                    <SEO />
                    <PostListing postEdges={postEdges} />
                    <Footer config={config} />
                </div>
            </Layout>
        );
    }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(
            limit: 2000
            sort: { fields: [fields___date], order: DESC }
        ) {
            edges {
                node {
                    fields {
                        slug
                        date
                    }
                    excerpt
                    timeToRead
                    frontmatter {
                        title
                        summary
                        tags
                        cover
                        date
                    }
                }
            }
        }
    }
`;
