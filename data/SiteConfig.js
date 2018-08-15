module.exports = {
    siteTitle: "GregoryWilliams.me", // Site title.
    siteTitleShort: "Greg's blog", // Short site title for home screen (PWA). Preferably should be under 12 characters to prevent truncation.
    siteTitleAlt: "Gregory Williams' personal blog website", // Alternative site title for SEO.
    siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
    siteUrl: "https://www.gregorywilliams.me", // Domain of your website.
    siteDescription:
        "The personal blog website of Gregory Williams, software engineer in Austin, TX.", // Website description used for RSS feeds/meta description tag.
    siteRss: "/rss.xml", // Path to the RSS file.
    siteFBAppID: "220944851889246", // FB Application ID for using app insights
    googleAnalyticsID: "UA-123016210-1", // GA tracking ID.
    postDefaultCategoryID: "Tech", // Default category for posts.
    dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
    dateFormat: "DD/MM/YYYY", // Date format for display.
    userName: "Gregory Williams", // Username to display in the author segment.
    userTwitter: "GregWill", // Optionally renders "Follow Me" in the UserInfo segment.
    userLocation: "Austin, TX", // User location to display in the author segment.
    userAvatar: "https://api.adorable.io/avatars/285/grw300@adorable.io.png", // User avatar to display in the author segment.
    userDescription: "Software engineer in Austin, TX working mostly in C#.", // User description to display in the author segment.
    // Links to social profiles/projects you want to display in the author segment/navigation bar.
    userLinks: [
        {
            label: "GitHub",
            url: "https://github.com/grw300",
            iconClassName: "fa fa-github"
        },
        {
            label: "Twitter",
            url: "https://twitter.com/GregWill",
            iconClassName: "fa fa-twitter"
        },
        {
            label: "Email",
            url: "mailto:grw300@gmail.com",
            iconClassName: "fa fa-envelope"
        }
    ],
    copyright: "© 2018 Gregory Williams", // Copyright string for the footer of the website and RSS feed.
    themeColor: "#c62828", // Used for setting manifest and progress theme colors.
    backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};
