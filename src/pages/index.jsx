import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing";

class Index extends React.Component {
    render() {
        const postEdges = this.props.data.allMarkdownRemark.edges;
        return (
            <Layout location={this.props.location}>
                <PostListing postEdges={postEdges} />
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
