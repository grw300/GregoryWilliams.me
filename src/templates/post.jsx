import React from "react";
import Helmet from "react-helmet";
import styled from "react-emotion";
import { graphql } from "gatsby";
import Layout from "../layout";
import UserInfo from "../components/UserInfo/UserInfo";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import FacebookComments from "../components/FacebookComments";

const PostMeta = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export default class PostTemplate extends React.Component {
    render() {
        const { slug } = this.props.pageContext;
        const postNode = this.props.data.markdownRemark;
        const post = postNode.frontmatter;
        if (!post.id) {
            post.id = slug;
        }
        if (!post.category_id) {
            post.category_id = config.postDefaultCategoryID;
        }
        return (
            <Layout location={this.props.location}>
                <div>
                    <Helmet>
                        <title>{`${post.title} | ${config.siteTitle}`}</title>
                    </Helmet>
                    <SEO postPath={slug} postNode={postNode} postSEO />
                    <div>
                        <h1>{post.title}</h1>
                        <h2>{post.summary}</h2>
                        <img alt={post.category} src={post.cover} />
                        <div
                            dangerouslySetInnerHTML={{ __html: postNode.html }}
                        />
                        <PostMeta>
                            <PostTags tags={post.tags} />
                            <SocialLinks postPath={slug} postNode={postNode} />
                        </PostMeta>
                        <UserInfo config={config} />
                        <FacebookComments postNode={postNode} />
                    </div>
                </div>
            </Layout>
        );
    }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            timeToRead
            excerpt
            frontmatter {
                title
                cover
                summary
                date
                category
                tags
            }
            fields {
                nextTitle
                nextSlug
                prevTitle
                prevSlug
                slug
                date
            }
        }
    }
`;
