import React from "react";
import FacebookProvider, { Comments } from "react-facebook";
import urljoin from "url-join";
import config from "../../data/SiteConfig";

class FacebookComments extends React.Component {
    render() {
        const { postNode } = this.props;
        if (!config.siteFBAppID) {
            return null;
        }
        const url = urljoin(config.siteUrl, postNode.fields.slug);
        return (
            <FacebookProvider appId={config.siteFBAppID}>
                <Comments href={url} width="100%" />
            </FacebookProvider>
        );
    }
}

export default FacebookComments;
