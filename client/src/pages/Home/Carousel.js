import React from "react";

import { CarouselSection, CarouselItem } from "./style";
import "react-alice-carousel/lib/alice-carousel.css";
import Building from "../../svg/Building";

import Hill_Streak from "@images/Hill_Streak.jpg";
import Theresa_Garden_Streak from "@images/Theresa_Garden_Streak.jpg";
import VAZWIN_STREAK from "@images/VAZWIN_STREAK.jpg";
import Victoria from "@images/Victoria.jpg";

import HI_STREAK from "@images/hi-streak.jpeg";
import Silver_Streak from "@images/silver_streak.jpeg";
import tranquil_streak from "@images/tranquil-streak.jpeg";
import Unique_Streak from "@images/Unique_Streak.jpeg";
import Serene_Streak from "@images/serene-streak.jpeg"; 

import InfiniteCarousel from "react-leaf-carousel";

const Carousel = () => {
    return (
        <CarouselSection>
            <div className="title">
                <Building />
                <div className="text"> COMPLETED PROJECTS </div>
            </div>
            <div className="image-section">
                <InfiniteCarousel
                    breakpoints={[
                        {
                            breakpoint: 400,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            },
                        },
                        {
                            breakpoint: 500,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                            },
                        },
                    ]}
                    dots={true}
                    showSides={true}
                    sidesOpacity={0.5}
                    sideSize={0.1}
                    slidesToScroll={4}
                    slidesToShow={4}
                    scrollOnDevice={true}
                >
                    <CarouselItem>
                        <img alt="" src={Hill_Streak} />
                        <div className="label">HILL STREAK</div>
                    </CarouselItem>
                    <CarouselItem>
                        <img alt="" src={Theresa_Garden_Streak} />
                        <div className="label">THERASA GARDEN</div>
                    </CarouselItem>
                    <CarouselItem>
                        <img alt="" src={VAZWIN_STREAK} />
                        <div className="label">VAZWIN STREAK</div>
                    </CarouselItem>
                    <CarouselItem>
                        <img alt="" src={Victoria} />
                        <div className="label">VICTORIA</div>
                    </CarouselItem>
                    <CarouselItem>
                        <img alt="" src={HI_STREAK} />
                        <div className="label">HI STREAK</div>
                    </CarouselItem>
                    <CarouselItem>
                        <img alt="" src={Silver_Streak} />
                        <div className="label">SILVER STREAK</div>
                    </CarouselItem>
                    <CarouselItem>
                        <img alt="" src={tranquil_streak} />
                        <div className="label">TRANQUIL STREAK</div>
                    </CarouselItem>
                    <CarouselItem>
                        <img alt="" src={Unique_Streak} />
                        <div className="label">UNIQUE STREAK</div>
                    </CarouselItem>
                    <CarouselItem>
                        <img alt="" src={Serene_Streak} />
                        <div className="label">SERENE STREAK</div>
                    </CarouselItem>
                    {/* Serene_Streak */}
                </InfiniteCarousel>
            </div>
        </CarouselSection>
    );
};

export default Carousel;
