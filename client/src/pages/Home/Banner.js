import React from "react";
// import { Carousel } from "react-carousel-minimal";
import BANNER_PARADISE from "@images/paradise_banner.jpg";
import BANNER_PLAM from "@images/plam_banner.jpg";
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
                    <img src={BANNER_PARADISE} />
                </div>
                <div>
                    <img src={BANNER_PLAM} />
                </div>
            </Carousel>
        </CarouselWrapper>
    );
};

export default Banner;
