import styled, { css } from "styled-components";

export const HeaderWrapper = styled.header`
    // background-color: #FFED01;
    color: #000;
    display: flex;
    align-items: center;
    padding: 0 15px;
    // background-color: #fffbe4;
`;

export const Nav = styled.nav`
    .selectedLink {
        // border-bottom: 2px solid ${(props) => props.theme.colors.black};
        color: #000;
        display:flex;
        align-self:center;
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

export const LogoWrapper = styled.div`
    display: flex;
    margin-right: 10px;
    padding: 5px;
    height: 60px;
    // position: absolute;
    // background-color: #fff;
    // top: 20px;
    img {
        height: 109px;
        z-index: 3;
    }
`;

export const FooterWrapper = styled.footer`
    background-color: #000;
    // background-image: linear-gradient(to bottom right, #f0e49b, #ffcd00);
    padding: 20px 0;
    color: #fff;
    min-height: 60px;
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
    color: #f4f4ff;

    font-weight: 600;
    padding-top: 20px;
    opacity: 0.7;
    @media (max-width: 425px) {
        text-align: center;
    }
`;

export const TwoColumnWrapper = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    justify-content: space-between;

    & .one-column {
        display: flex;
        align-items: center;
    }

    & .two-column {
        text-align: right;
        display: flex;
        align-items: center;
        & .title {
            font-weight: 600;
            font-size: 28px;
        }
        & .address {
            font-size: 20px;
        }
    }

    & .footer-logo img {
        width: 180px;
        height: 180px;
        background-color: #fff;
        padding: 20px;
        border-radius: 4px;
    }

    @media (max-width: 1080px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & .two-column {
            text-align: center;
            display: flex;
            align-items: center;
            & .title {
                font-weight: 600;
                font-size: 28px;
            }
            & .address {
                font-size: 20px;
            }
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
    border: 1px solid ${(props) => props.theme.colors.black};
    border-radius: 6px;
    padding: 8px 20px;
    margin: 7px 0;
    margin-right: 10px;
    cursor: pointer;
    height: 25px;
    font-weight: 600;
`;

export const PlayArea = styled.div`
    min-height: calc(100vh - 260px);
`;

export const TextWrapper = styled.div`
    display:flex;
    flex-direction: column;
    @media (max-width: 500px) {
       display:none;
    }

`;