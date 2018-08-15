import styled from "react-emotion";

export const Grid = styled("div")`
    display: grid;
    grid-gap: 16px;
    width: 100%;
    min-height: 100vh;
    margin-left: auto;
    margin-right: auto;
    grid-template-rows: auto auto 1fr auto;
    grid-template-areas:
        "header"
        "sidebar"
        "content"
        "footer";

    /* Portrait tablets and large phones */
    @media only screen and (min-width: 600px) {
        grid-template-rows: auto 1fr auto;
        grid-template-columns: 1fr 4fr;
        grid-template-areas:
            "header   header"
            "sidebar  content"
            "footer   content";
    }

    /* Medium devices (landscape tablets) */
    @media only screen and (min-width: 900px) {
        grid-gap: 20px;
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
export const FooterArea = styled("div")`
    grid-area: footer;
`;
