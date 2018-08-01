import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import {
    Grid,
    HeaderArea,
    SidebarArea,
    ContentArea,
    Sidebar2Area,
    FooterArea
} from "../layout/grid";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
    render() {
        const postEdges = this.props.data.allMarkdownRemark.edges;
        return (
            <Layout location={this.props.location}>
                <Grid>
                    <Helmet title={config.siteTitle} />
                    <SEO />
                    <HeaderArea>
                        <button />
                    </HeaderArea>
                    <SidebarArea />
                    <ContentArea>
                        <PostListing postEdges={postEdges} />
                    </ContentArea>
                    <Sidebar2Area />
                    <FooterArea />
                </Grid>
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
