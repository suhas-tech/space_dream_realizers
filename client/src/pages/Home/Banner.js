import React from "react";
// import { Carousel } from "react-carousel-minimal";
import BANNER_MARIAN from "@images/banner_marian.jpg";
// https://www.npmjs.com/package/react-material-ui-carousel
import Carousel from "react-material-ui-carousel";
import { CarouselWrapper } from "./style";

const Banner = ({ onChange, onClickItem, onClickThumb }) => {
    return (
        <CarouselWrapper>
            <Carousel
                indicatorIconButtonProps={{
                    style: {
                        padding: "10px", // 1
                    },
                }}
                indicatorContainerProps={{
                    style: {
                        position: "absolute", 
                        bottom: "6px"
                    },
                }}
            >
                <div>
                    <img src={BANNER_MARIAN} />
                </div>
                <div>
                    <img src={BANNER_MARIAN} />
                </div>
            </Carousel>
        </CarouselWrapper>
    );
};

export default Banner;
