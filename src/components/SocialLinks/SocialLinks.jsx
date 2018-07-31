import React, { Component } from "react";
import styled from "react-emotion";
import {
    FacebookShareButton,
    TwitterShareButton,
    RedditShareButton,
    FacebookShareCount,
    RedditShareCount,
    FacebookIcon,
    TwitterIcon,
    RedditIcon
} from "react-share";
import urljoin from "url-join";
import config from "../../../data/SiteConfig";

const SocialLinksStyled = styled("div")`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin: 15px 0;
    > div {
        margin: 5px 15px;
    }
`;

const ShareCount = styled("div")`
    text-align: center;
`;

class SocialLinks extends Component {
    render() {
        const { postNode, postPath, mobile } = this.props;
        const post = postNode.frontmatter;
        const url = urljoin(config.siteUrl,  postPath);
        const iconSize = mobile ? 36 : 48;
        const filter = count => (count > 0 ? count : "");
        const renderShareCount = count => (
            <ShareCount>{filter(count)}</ShareCount>
        );

        return (
            <SocialLinksStyled>
                <RedditShareButton url={url} title={post.title}>
                    <RedditIcon round size={iconSize} />
                    <RedditShareCount url={url}>
                        {count => renderShareCount(count)}
                    </RedditShareCount>
                </RedditShareButton>
                <TwitterShareButton url={url} title={post.title}>
                    <TwitterIcon round size={iconSize} />
                </TwitterShareButton>
                <FacebookShareButton url={url} quote={postNode.excerpt}>
                    <FacebookIcon round size={iconSize} />
                    <FacebookShareCount url={url}>
                        {count => renderShareCount(count)}
                    </FacebookShareCount>
                </FacebookShareButton>
            </SocialLinksStyled>
        );
    }
}

export default SocialLinks;
