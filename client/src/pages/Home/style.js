import styled from "styled-components";

export const HomeBanner = styled.div`
    width: 100%;
    position: relative;
    background-color: ${(props) => props.theme.colors.primary};
    color: #fff;
    display: flex;
    justify-content: center;
    max-height: 500px;
    min-height: 350px;
    padding: 20px;
    & .logo {
        display: flex;
        align-items: center;
        > img {
            max-height: 250px;
            object-fit: contain;
        }
    }
    & .picture {
        display: flex;
        align-items: center;
        > img {
            height: 350px;
            width: 310px;
            object-fit: contain;
        }
    }

    @media (max-width: 1080px) {
        min-height: 300px;
        & .logo {
            > img {
                max-height: 200px;
                object-fit: contain;
            }
        }
        & .picture {
            > img {
                height: 250px;
                width: 210px;
                object-fit: contain;
            }
        }
    }

    @media (max-width: 767px) {
        min-height: 200px;
        & .logo {
            > img {
                max-height: 100px;
                object-fit: contain;
            }
        }
        & .picture {
            > img {
                height: 150px;
                width: 210px;
                object-fit: contain;
            }
        }
    }

    @media (max-width: 425px) {
        min-height: 200px;
        & .logo {
            > img {
                max-height: 80px;
                object-fit: contain;
            }
        }
        & .picture {
            > img {
                height: 130px;
                width: 210px;
                object-fit: contain;
            }
        }
    }
`;

export const TranslateLeft = styled.img`
    transform: translateZ(-939px) perspective(1210px) rotateY(-327deg) scale(1)
        translateY(10.2847px);
    -webkit-box-shadow: -12px 3px 26px -8px rgba(0, 0, 0, 0.65);
    -moz-box-shadow: -12px 3px 26px -8px rgba(0, 0, 0, 0.65);
    box-shadow: -12px 3px 26px -8px rgba(0, 0, 0, 0.65);
`;

export const TranslateRight = styled.img`
    transform: translateZ(-939px) perspective(1210px) rotateY(327deg) scale(1)
        translateY(10.2847px);
    -webkit-box-shadow: -12px 3px 26px -8px rgba(0, 0, 0, 0.65);
    -moz-box-shadow: -12px 3px 26px -8px rgba(0, 0, 0, 0.65);
    box-shadow: -12px 3px 26px -8px rgba(0, 0, 0, 0.65);
`;

export const Section = styled.div`
    padding: 60px 0;
    position: relative;

    &.green-background {
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.white};
    }

    &.register-background {
        background-color: ${(props) => props.theme.colors.tertiary};
        color: ${(props) => props.theme.colors.white};
    }
`;

export const AdvertSection = styled.div`
    position: relative;
    max-height: 300px;
    overflow: hidden;



    @media (max-width: 768px) {
        height: 400px;
        max-height: 100%;
        text-align: center;
    }
    @media (max-width: 500px) {
        height: 480px;
        max-height: 100%;
        text-align: center;
    }
`;

export const SectionTitle = styled.div`
    margin: 10px auto 20px;
    font-size: 36px;
    font-weight: 800;
    display: flex;
    padding-bottom: 10px;

    &.center {
        justify-content: center;
    }
`;

export const SectionDescription = styled.div`
    margin: 10px auto 10px;
    font-size: 22px;
    display: flex;
    padding-bottom: 10px;

    &.center {
        justify-content: center;
        text-align: center;
    }
`;

export const SectionBody = styled.div`
    margin: 10px 0 20px;
    font-size: 18px;
    color: ${(props) => props.theme.colors.black};
    opacity: 0.8;
    font-weight: 500;
    display: grid;
    grid-template-columns: auto 40%;
    align-items: center;
    & .highlight {
        font-size: 20px;
        font-weight: 600;
    }

    & p {
        margin: 25px 0;
    }
    & .image {
        width: 100%;
        height: 100%;
    }

    & .image img {
        width: 100%;
        object-fit: cover;
    }

    @media (max-width: 767px) {
        display: flex;

        & .image {
            display: none;
        }

        & .image img {
            width: 100%;
            object-fit: cover;
        }
    }
`;

export const StyleCardSection = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    justify-content: space-between;
    grid-gap: 20px;
`;

export const MoreText = styled.div`
    font-size: 60px;
    font-weight: 600;
    text-align: right;
`;

export const VideosWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
    & > div {
        transform: translateZ(-939px) perspective(1210px) rotateY(-327deg)
            scale(1) translateY(10.2847px);
    }

    @media (max-width: 425px) {
        & > div {
            transform: none;
        }
    }
`;

export const Area = styled.div`
    .area {
        background: #4e54c8;
        background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
        width: 100%;
    }

    .circles {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .circles li {
        position: absolute;
        display: block;
        list-style: none;
        width: 20px;
        height: 20px;
        background: rgba(255, 255, 255, 0.2);
        animation: animate 25s linear infinite;
        bottom: -150px;
    }

    .circles li:nth-child(1) {
        left: 25%;
        width: 80px;
        height: 80px;
        animation-delay: 0s;
    }

    .circles li:nth-child(2) {
        left: 10%;
        width: 20px;
        height: 20px;
        animation-delay: 2s;
        animation-duration: 12s;
    }

    .circles li:nth-child(3) {
        left: 70%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
    }

    .circles li:nth-child(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        animation-delay: 0s;
        animation-duration: 18s;
    }

    .circles li:nth-child(5) {
        left: 65%;
        width: 20px;
        height: 20px;
        animation-delay: 0s;
    }

    .circles li:nth-child(6) {
        left: 75%;
        width: 110px;
        height: 110px;
        animation-delay: 3s;
    }

    .circles li:nth-child(7) {
        left: 35%;
        width: 150px;
        height: 150px;
        animation-delay: 7s;
    }

    .circles li:nth-child(8) {
        left: 50%;
        width: 25px;
        height: 25px;
        animation-delay: 15s;
        animation-duration: 45s;
    }

    .circles li:nth-child(9) {
        left: 20%;
        width: 15px;
        height: 15px;
        animation-delay: 2s;
        animation-duration: 35s;
    }

    .circles li:nth-child(10) {
        left: 85%;
        width: 150px;
        height: 150px;
        animation-delay: 0s;
        animation-duration: 11s;
    }

    @keyframes animate {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
            border-radius: 0;
        }

        100% {
            transform: translateY(-1000px) rotate(720deg);
            opacity: 0;
            border-radius: 50%;
        }
    }
`;

export const InstructorWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
    margin: auto;
`;

export const InstructorCard = styled.div`
    & > img {
        width: 100%;
        height: 100%;
        border-radius: 6px;
        object-fit: cover;
    }
    border-radius: 6px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    position: relative;
    overflow: hidden;

    & .nameTag {
        background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 1) 100%
        );
        padding: 90px 0 10px;
        position: absolute;
        bottom: 0;
        width: 100%;
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        text-align: center;
    }
`;

export const RegisterBodySection = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    justify-content: space-between;
    grid-gap: 20px;

    & > div {
        border: 1px solid #fff;
        padding: 20px;
        display: flex;
        justify-content: space-between;
    }

    & .title {
        font-size: 28px;
        font-weight: 600;
    }
`;

export const TestimonialsSection = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-content: space-between;
    grid-gap: 20px;

    & > .box .message {
        border: 1px solid #fff;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        border-radius: 10px;
        position: relative;
    }

    & .message::after {
        content: "";
        position: absolute;
        right: 30px;
        bottom: -24px;
        width: 0;
        height: 0;
        border: 15px solid transparent;
        border-width: 12px 15px;
        border-top-color: #fff;
    }
    & .name {
        margin: 20px;
        text-align: right;
        font-weight: 600;
    }
`;

export const BatchInfoWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
`;

export const BatchInfoCard = styled.div`
    border: 1px solid #fff;
    border-top: 6px solid ${(props) => props.theme.colors.tertiary};
    border-radius: 6px;
    padding: 20px 20px 0;
    color: #fff;
    display: flex;
    flex-direction: column;
    ul {
        list-style: circle;
        margin-left: 20px;
    }
    & .genre {
        font-size: 16px;
        /* min-height: 90px; */
        b {
            font-weight: 600;
        }

        & ul {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        }
    }

    & .timing {
        min-height: 75px;
        margin-top: auto;
        margin-bottom: 20px;
        padding-top: 10px;
        & ul {
            font-size: 14px;
        }
    }

    & .italic {
        font-style: italic;
        font-size: 10px;
        display: inline-block;
    }

    & .dancer {
        margin: auto -20px 0;
        padding: 10px 20px 10px;
        border-top: 1px solid #fff;
        border-radius: 0 0 6px 6px;
        background-color: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.primary};
        text-align: right;
        font-size: 20px;
        font-style: italic;

        b {
            font-weight: 800;
        }
    }
`;

export const AdvertContainer = styled.div`
    &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: inline-block;

        background: linear-gradient(
            to bottom,
            rgb(0 0 0 / 89%) 0%,
            rgb(5 25 65 / 92%) 100%
        );
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#002f4b', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */
    }
`;

export const BreatheIndiaImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: top;
    @media (max-width: 500px) {
        max-height: 100%;
        left: 0;
    }
`;

export const Logo = styled.div`
    /* width: 100px; */
    /* height: 100%; */
    height: 250px;

    @media (max-width: 768px) {
        height: 150px;
    }
    @media (max-width: 500px) {
        height: 100px;
    }

    > img {
        /* width: 100%; */
        height: 100%;
        object-fit: contain;
    }
`;

export const ContentWrapper = styled.div`
    max-width: 1180px;
    margin: 0 auto;
    @media (max-width: 1180px) {
        max-width: 980px;
    }
    @media (max-width: 980px) {
        max-width: 880px;
    }
    @media (max-width: 880px) {
        max-width: 767px;
    }
    @media (max-width: 768px) {
        max-width: 100%;
        left: 0;
        flex-direction: column;
    }
    @media (max-width: 500px) {
        max-width: 100%;
        left: 0;
    }

    display: flex;
    align-items: center;
    z-index: 2;
    position: absolute;
    top: 0;
    margin: 20px;

    & .content {
        color: #fff;
        height: 100%;
        & .heading {
            font-size: 32px;
            font-weight: 600;
        }

        & .action {
            margin-top: 20px;
            max-width: 250px;

            @media (max-width: 960px) {
                display: flex;
                justify-content: center;
                max-width: 100%;
            }
        }
    }
`;
