import styled, { css } from "styled-components";

export const HeaderWrapper = styled.header`
    background-color: ${(props) => props.theme.colors.primary};
    color: #fff;
    display: flex;
    padding: 0 15px;
`;

export const Nav = styled.nav`
    .selectedLink {
        border-bottom: 2px solid ${(props) => props.theme.colors.secondary};
        color: #fff;
    }

    display: flex;
    justify-content: flex-end;

    .navLink {
        display: block;
        padding: 15px 20px;
        font-weight: 600;
        letter-spacing: 1px;
        &:hover {
            text-decoration: none;
        }
    }

    @media (max-width: 425px) {
        display: none;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
    padding: 5px;
    border: 1px solid #fff;
    border-radius: 4px;
    img {
        width: 55px;
        height: 55px;
    }
`;

export const FooterWrapper = styled.footer`
    background-color: #000;
    color: #fff;
    min-height: 200px;
    position: relative;
    .h-100 {
        height: 100%;
    }
`;

export const SocialIconsWrapper = styled.div`
    margin: 0 auto;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 30px 30px 30px 30px;
    & .icon {
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
    @media (max-width: 425px) {
    }
`;

export const CreatedByLabel = styled.p`
    color: #f4f4ff88;

    font-weight: 600;
    padding-top: 20px;

    @media (max-width: 425px) {
        text-align: center;
    }
`;

export const TwoColumnWrapper = styled.div`
    display: grid;
    grid-template-columns: 180px auto;
    & .one-column {
        display: flex;
        align-items: center;
    }

    & .two-column {
        font-style: italic;
        display: flex;
        align-self: center;
        justify-content: flex-end;
    }
    & .footer-logo img {
        height: 180px;
    }

    & .quotes {
        font-weight: 600;
        text-align: right;
        opacity: 0.7;
    }

    @media (max-width: 1080px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & .quotes {
            margin: 20px 0;
            text-align: center;
        }
    }
`;

export const NavLogin = styled.div`
    margin-left: auto;
    display: flex;
`;

export const NavButton = styled.div`
    font-weight: 600;
    &.login {
        border: 1px solid ${(props) => props.theme.colors.secondary};
        border-radius: 4px;
        padding: 8px 20px;
        margin: 7px 0;
        margin-right: 10px;
        cursor: pointer;
    }

    &.register {
        background-color: ${(props) => props.theme.colors.secondary};
        border-radius: 4px;
        color: #000;
        padding: 8px 20px;
        margin: 7px 0;
        cursor: pointer;
    }
`;

export const ContactUs = styled.div`
    border: 1px solid ${(props) => props.theme.colors.white};
    border-radius: 4px;
    padding: 8px 20px;
    margin: 7px 0;
    margin-right: 10px;
    cursor: pointer;
`;

export const PlayArea = styled.div`
    min-height: calc(100vh - 260px);
`;
