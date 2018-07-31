import styled from "react-emotion";

export const Grid = styled("div")`
    display: grid;
    grid-gap: 16px;
    grid-template-areas:
        "header"
        "sidebar"
        "content"
        "sidebar2"
        "footer";

    /* Portrait tablets and large phones */
    @media only screen and (min-width: 600px) {
        grid-template-columns: 1fr 4fr;
        grid-template-areas:
            "header   header"
            "sidebar  content"
            "sidebar2 sidebar2"
            "footer   footer";
    }

    /* Medium devices (landscape tablets) */
    @media only screen and (min-width: 900px) {
        grid-gap: 20px;
        grid-template-columns: 1fr 4fr 1fr;
        grid-template-areas:
            "header  header  header"
            "sidebar content sidebar2"
            "footer  footer  footer";
        max-width: 1200px;
    }

    /* Large devices (laptops/desktops) */
    @media only screen and (min-width: 1200px) {
    }

    /* Extra large devices (large laptops and desktops) */
    @media only screen and (min-width: 1800px) {
    }
`;
export const HeaderArea = styled("div")`
    grid-area: header;
`;
export const SidebarArea = styled("div")`
    grid-area: sidebar;
`;
export const ContentArea = styled("div")`
    grid-area: content;
`;
export const Sidebar2Area = styled("div")`
    grid-area: sidebar2;
`;
export const FooterArea = styled("div")`
    grid-area: footer;
`;
