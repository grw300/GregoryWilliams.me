import React from "react";
import FacebookProvider, { Comments } from "react-facebook";
import urljoin from "url-join";
import config from "../../data/SiteConfig";

const FacebookComments = props => {
    const { postNode } = props;

    const url = urljoin(config.siteUrl, postNode.fields.slug);

    return (
        <FacebookProvider appId={config.siteFBAppID}>
            <Comments href={url} width="100%" />
        </FacebookProvider>
    );
};

export default FacebookComments;
