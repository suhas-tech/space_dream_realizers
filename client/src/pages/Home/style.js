import styled, { keyframes } from "styled-components";

const infiniteScroll = keyframes`
0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}

100% {
    -webkit-transform: translate3d(0, -1692px, 0);
    transform: translate3d(0, -1692px, 0);
}

`;

export const Banner = styled.div`
    @media (max-width: 767px) {
        padding-top: 40px;
    }
    display: flex;
    justify-content: center;
    background-color: #f0e49b;
    flex-direction: column;
    svg {
        height: 450px;
        width: 100%;
    }

    & .image {
        display: flex;
        justify-content: center;
    }

    .example-box {
        background-image: linear-gradient(to bottom right, #f0e49b, #ffcd00);
        width: 100%;
        // height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
        background-size: cover;
        color: white;
        font-family: sans-serif;
        font-weight: 200;
        z-index: 1;
    }

    .example-box * {
        z-index: 2;
    }

    h1 {
        font-family: Montserrat, sans-serif;
        color: white;
        font-weight: 600;
        letter-spacing: 2px;
        text-transform: uppercase;
    }

    .background-shapes {
        content: "";
        position: absolute;
        z-index: 2;
        left: 0;
        top: 0;
        width: 100%;
        height: 5076px;
        background-size: 100%;
        animation: 120s ${infiniteScroll} linear infinite;
        background-repeat-x: repeat;
        background-image: url(https://cdn2.hubspot.net/hubfs/53/Pricing%202017%20Assets/marketing/Header_Circles-1.svg);
    }
`;

export const BetterExp = styled.div`
    font-weight: 600;
    color: black;
    text-align: center;
`;

export const TextUnderConstruction = styled.div`
    font-size: 28px;
    color: black;
    text-align: center;
    font-weight: 600;
    padding: 20px;
`;

export const ConstrcutionSection = styled.div`
    max-height: 600px;
    width: 100%;
    padding: 60px 0;
    background-color: #f5f5f5;
    color: #141414;

    &.bg-white {
        background-color: #fff;
    }
    & img {
        object-fit: contain;
        width: 100%;
        height: 100%;
        max-height: 600px;
    }

    & .content-area {
        display: grid;
        grid-template-columns: 300px auto;
    }
    & .imageSection {
    }
`;

export const ProjectInfo = styled.div`
    display: flex;
    justify-content: center;
    & > div {
        display: inline;
        width: 100%;
        // background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
        background-color: #00770030;
        padding: 15px 35px;
        // border-radius: 50px;
        color: #000;
        text-decoration: none;
        font-weight: 700;
        text-align: center;
        letter-spacing: 1px;
        font-size: 32px;
        text-shadow: 1px 1px #f0e49b;
    }
`;

export const BuildingSection = styled.div`
    .blog-slider {
        width: 95%;
        position: relative;
        max-width: 800px;
        margin: auto;
        background-image: linear-gradient(to bottom right, #f0e49b, #ffcd00);
        box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
        padding: 25px;
        border-radius: 25px;
        height: 550px;
        transition: all 0.3s;

        @media screen and (max-width: 992px) {
            max-width: 680px;
            height: 400px;
        }

        @media screen and (max-width: 768px) {
            min-height: 500px;
            height: auto;
            margin: 180px auto;
        }

        @media screen and (max-height: 500px) and (min-width: 992px) {
            height: 350px;
        }

        &__item {
            display: flex;
            align-items: center;

            @media screen and (max-width: 768px) {
                flex-direction: column;
            }

            &.swiper-slide-active {
                .blog-slider__img {
                    img {
                        opacity: 1;
                        transition-delay: 0.3s;
                    }
                }
                .blog-slider__content {
                    > * {
                        opacity: 1;
                        transform: none;
                    }
                }
            }
        }

        &__img {
            // width: 40%;
            width: 300px;
            flex-shrink: 0;
            height: 525px;
            background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
            box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
            border-radius: 20px;
            transform: translateX(-80px);

            overflow: hidden;

            &:after {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: linear-gradient(
                    147deg,
                    #fe8a39 0%,
                    #fd3838 74%
                );
                border-radius: 20px;
                opacity: 0.2;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
                // opacity: 0;
                z-index: 2;
                border-radius: 20px;
                transition: all 0.3s;
            }

            @media screen and (max-width: 992px) {
                // width: 45%;
            }
            @media screen and (max-width: 768px) {
                transform: translateY(-50%);
                width: 90%;
            }
            @media screen and (max-width: 576px) {
                width: 95%;
            }
            @media screen and (max-height: 500px) and (min-width: 992px) {
                height: 270px;
            }
        }

        &__content {
            // width: 60%;
            padding-right: 25px;
            @media screen and (max-width: 992px) {
                // width: 55%;
            }
            @media screen and (max-width: 768px) {
                margin-top: -80px;
                text-align: center;
                padding: 0 30px;
            }

            @media screen and (max-width: 576px) {
                padding: 0;
            }
            > * {
                // opacity: 0;
                transform: translateY(25px);
                transition: all 0.4s;
            }
        }

        &__code {
            color: #280000;
            margin-bottom: 15px;
            display: block;
            font-weight: 600;
        }

        &__title {
            font-size: 28px;
            font-weight: 700;
            color: #0d0925;
            margin-bottom: 5px;
        }

        &__text {
            color: #4e4a67;
            margin-bottom: 30px;
            line-height: 1.5em;
        }

        &__button {
            display: inline-flex;
            background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
            padding: 15px 35px;
            border-radius: 50px;
            color: #fff;
            box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);
            text-decoration: none;
            font-weight: 500;
            justify-content: center;
            text-align: center;
            letter-spacing: 1px;
            @media screen and (max-width: 576px) {
                width: 100%;
            }
        }
        .swiper-container-horizontal > .swiper-pagination-bullets,
        .swiper-pagination-custom,
        .swiper-pagination-fraction {
            bottom: 10px;
            left: 0;
            width: 100%;
        }
        &__pagination {
            position: absolute;
            z-index: 21;
            right: 20px;
            width: 11px !important;
            text-align: center;
            left: auto !important;
            top: 50%;
            bottom: auto !important;
            transform: translateY(-50%);
            @media screen and (max-width: 768px) {
                transform: translateX(-50%);
                left: 50% !important;
                top: 205px;
                width: 100% !important;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            &.swiper-pagination-bullets .swiper-pagination-bullet {
                margin: 8px 0;
                @media screen and (max-width: 768px) {
                    margin: 0 5px;
                }
            }

            .swiper-pagination-bullet {
                width: 11px;
                height: 11px;
                display: block;
                border-radius: 10px;
                background: #062744;
                opacity: 0.2;
                transition: all 0.3s;
                &-active {
                    opacity: 1;
                    background: #fd3838;
                    height: 30px;
                    box-shadow: 0px 0px 20px rgba(252, 56, 56, 0.3);

                    @media screen and (max-width: 768px) {
                        height: 11px;
                        width: 30px;
                    }
                }
            }
        }
    }
`;
