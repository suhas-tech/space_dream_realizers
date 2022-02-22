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
        padding-top: 65px;
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

export const CarouselWrapper = styled.div`
    margin-bottom: -7px;
    & img {
        width: 100%;
        height: 100%;
    }

    & img {
        width: 100%;
        height: auto;
        aspect-ratio: 389/144;
    }
`;

export const TextUnderConstruction = styled.div`
    font-size: 28px;
    color: black;
    text-align: center;
    font-weight: 600;
    padding: 20px;
`;

export const ConstrcutionSection = styled.div`
    // max-height: 600px;
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
    margin-bottom: 20px;
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
        // width: 95%;
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
                opacity: 0;
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
                margin-top: -207px;
                text-align: center;
                padding: 30px 30px;
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
            font-size: 38px;
            font-weight: 700;
            color: #0d0925;
            margin-bottom: 5px;
        }

        @media screen and (max-width: 767px) {
            &__title {
                font-size: 28px;
                font-weight: 700;
                color: #0d0925;
                margin-bottom: 5px;
            }
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
                margin-bottom: 20px;
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

export const SplitConatiner = styled.div`
    &.bg-white {
        background-color: #fff;
    }

    &.bg-grey {
        background-color: #ededed;
    }
    & > div {
        display: grid;
        grid-template-columns: 45% 55%;
        min-height: 300px;
    }

    @media (max-width: 1180px) {
    }
    @media (max-width: 980px) {
    }
    @media (max-width: 880px) {
        & > div {
            display: block;
        }
    }
    @media (max-width: 768px) {
        & > div {
            display: block;
        }
    }
    @media (max-width: 500px) {
        & > div {
            display: block;
        }
    }

    & .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & .grey-background {
        // background-color: #ededed;
    }

    & .content {
        padding: 20px;
    }

    & img {
        width: 300px;
        height: 300px;
        padding: 30px 0;
    }
    & .main-title {
        font-size: 28px;
        font-weight: 800;
        color: #000;
        -webkit-text-stroke: 1px #000;
        letter-spacing: 2px;
    }

    & .title {
        font-size: 28px;
        font-weight: 800;
        color: #000;
  
        letter-spacing: 2px;
    }

    & .title svg {
        height: 28px;

        @media (max-width: 500px) {
            height: 16px;
        }
    }

    & .location {
        margin-top: 10px;
        display: flex;
        align-items: center;
        font-weight: 500;
    }

    & .location-icon {
        margin-right: 10px;
    }

    & .floor-count-wrapper {
        display: flex;
        font-weight: 600;
        align-items: center;
        margin-top: 15px;
    }

    & .floor-count {
        display: flex;
        border: 2px solid #2980ba;
        margin-left: 10px;
        border-radius: 50%;
        padding: 6px;
        height: 20px;
        width: 20px;
        justify-content: center;
    }
`;

export const FloorInfoButton = styled.div`
    padding: 6px 6px;
    background-color: #fff;
    color: #2980ba;
    border: 2px solid #2980ba;
    display: flex;
    // max-width: 300px;
    align-items: center;
    margin-top: 10px;
    border-radius: 6px;
    margin-right: 10px;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    justify-content: space-between;
    &:hover {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);
    }
    & .icon-left {
        margin-right: 6px;
        display: flex;
        align-items: center;
    }

    & .text {
        font-weight: 600;
    }

    & .icon-arrow {
        margin-left: 6px;
        display: flex;
        align-items: center;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    &:hover .icon-arrow {
        position: relative;
        left: 4px;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
`;

export const FloorInfoButtonWrapper = styled.div`
    display: flex;
    @media (max-width: 500px) {
        display: block;
    }
`;

export const AmenitiesSection = styled.div`
    margin-top: 20px;
    & .title {
        font-size: 20px;
        color: #404040;
        font-weight: 600;
    }
`;

export const AmenitiesIcons = styled.div`
    display: grid;
    grid-template-columns: 90px 90px 90px 90px 100px;

    grid-gap: 10px;
    & .icon-wrapper {
    }

    & .icon {
        text-align: center;
    }

    & .icon-text {
        font-size: 14px;
        text-align: center;
    }

    @media (max-width: 500px) {
        grid-template-columns: 100px 100px 100px;
    }

    @media (max-width: 321px) {
        grid-template-columns: 100px 100px;
    }
`;

export const ViewMoreWrapper = styled.div`
    font-weight: 600;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 10px;
    & .count {
        font-size: 30px;
    }

    & .more-text {
        font-size: 24px;
    }

    & .link {
        color: #0e4da4;
        text-decoration: underline;
    }
`;

export const ContactBackground = styled.div`
    background-color: #00062b;
    min-height: 400px;
`;

export const ContactFormWrapper = styled.div`
    padding: 20px;

    & .title {
        font-size: 40px;
        text-transform: uppercase;
        color: #fff;
        font-weight: 600;

        @media (max-width: 500px) {
            font-size: 20px;
        }
    }

    & .footer {
        margin-top: 25px;

        & .error-section {
            margin-bottom: 20px;
            display: flex;
            min-width: 250px;
        }
        > button {
            max-width: 250px;
            width: 100%;
        }
    }
`;

export const Label = styled.p`
    font-size: 18px;
    font-weight: 600;
    padding: 10px 0;
    color: #fff;
`;

export const Input = styled.input`
    background-color: #fff;
    font-size: 22px;

    padding: 6px;
    @media (max-width: 500px) {
        min-width: 100%;
    }
`;

export const FormGrid = styled.div`
    display: grid;
    grid-template-columns: 400px 400px;
    grid-gap: 20px 40px;
    & .flex {
        display: flex;
    }
    @media (max-width: 767px) {
        display: block;
    }
`;

export const CheckBoxSection = styled.div`
    padding: 6px 0;
    & .MuiFormControlLabel-root {
        color: #fff;
    }
    & .MuiButtonBase-root {
        color: #fff;
    }
`;

export const CarouselSection = styled.div`
    & .title {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 0;
    }

    & .title .text {
        font-size: 28px;
        font-weight: 600;

        @media (max-width: 500px) {
            font-size: 24px;
        }
    }
`;

export const CarouselItem = styled.div`
    position: relative;
    cursor: pointer;
    & .label {
        position: absolute;
        font-size: 20px;
        background-color: #ffffffd9;
        padding: 6px 15px;
        bottom: 20px;
        right: 0;
        font-weight: 600;

        @media (max-width: 500px) {
            font-size: 14px;
        }
    }
    &:hover .content-overlay {
        opacity: 1;
    }
    & .content-overlay {
        background: rgba(0, 0, 0, 0.7);
        position: absolute;
        height: 99%;
        width: 100%;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        opacity: 0;
        -webkit-transition: all 0.4s ease-in-out 0s;
        -moz-transition: all 0.4s ease-in-out 0s;
        transition: all 0.4s ease-in-out 0s;
    }

    .content-details {
        position: absolute;
        text-align: center;
        padding-left: 1em;
        padding-right: 1em;
        width: 100%;
        top: 50%;
        left: 50%;
        opacity: 0;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        -webkit-transition: all 0.3s ease-in-out 0s;
        -moz-transition: all 0.3s ease-in-out 0s;
        transition: all 0.3s ease-in-out 0s;
    }

    &:hover .content-details {
        top: 50%;
        left: 50%;
        opacity: 1;
    }

    & .content-details h3 {
        color: #fff;
        font-weight: 500;
        letter-spacing: 0.15em;
        margin-bottom: 0.5em;
        text-transform: uppercase;
    }

    .content-details div {
        color: #fff;
    }

    .fadeIn-bottom {
        top: 80%;
    }

    & .button {
        font-weight: 600;
        font-size: 22px;
        border: 1px solid #fff;
        border-radius: 6px;
        max-width: 200px;
        margin: 0 auto;
        padding: 10px 0;
        cursor: pointer;
        &:hover {
            background-color: #ffffff30;
        }
    }
`;

export const ImageHolder = styled.div`
    height: 65vh;
    & img {
        width: 100%;
        height: 100%;
        max-height: 65vh;
        object-fit:contain;
    }
`;

export const AmenitiesWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media screen and (max-width: 768px) {
        grid-template-columns: 100%;
    }

    &.two-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 1020px) {
        &.two-section {
            display: grid;
            grid-template-columns: 1fr;
        }
    }
`;

export const AmenitiesOneWrapper = styled.div`
    display: grid;

    & .title {
        color: #00052b;
        padding: 10px;
    }
`;

export const AmenitiesContainer = styled.div`
    max-width: 1180px;
    margin: 0 auto;
`;

export const AmenitiesContainerColor = styled.div`
    background-color: #00062b;
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    color: #000;
    padding: 0px;
    max-height: 0;
    transition: max-height 0.15s,  padding 0.15s ease-out;
    overflow: hidden;
  

    &.show {
        padding: 20px;
        max-height: 600px;
        transition: max-height 0.25s,  padding 0.15s ease-in  ;
    }
`;

export const AmenitiesTitle = styled.div`
    color: #000;
    text-decoration: underline;
    padding: 10px;
    font-size: 26px;
    font-weight: 600;
`;

export const AmenitiesItem = styled.div`
    & .number {
        width: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        background-color: #00052b;
        color: #fff;
        @media screen and (max-width: 768px) {
            display: none;
        }
    }

    & .label {
        padding: 1px 10px 10px 1px;
        text-transform: uppercase;
    }
    display: flex;
    align-items: center;
    margin: 1px 10px;
    font-weight: 600;
`;

export const DialogTitleStyled = styled.div`
    background-color: #00052b;
    color: #fff;
    padding: 10px;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        display: block;

        & .button {
            display: flex;
            justify-content: center;
        }
    }
`;
