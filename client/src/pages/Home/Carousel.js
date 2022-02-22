import React, { useState } from "react";

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
import FloorPlanModal from "./FloorPlanModal";

import InfiniteCarousel from "react-leaf-carousel";

import {
    HILL_STREAK_PLAN,
    FORTUNE_STREAK_PLAN,
    HI_STREAK_PLAN,
    SILVER_STREAK_PLAN,
    TRANQUIL_STREAK_PLAN,
    UNIQUE_STREAK_PLAN,
    THERESA_GARDEN_STREAK_PLAN,
    VAZWIN_STREAK_PLAN,
    VICTORIA_PLAN,
} from "./getImages";

const Carousel = () => {
    const [floorPlanData, updateFloorPlanData] = useState(null);

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
                        <div class="content-overlay"></div>
                        <img alt="" src={Hill_Streak} />
                        <div className="label">HILL STREAK</div>
                        <div className="content-details fadeIn-top">
                            <div
                                className="button"
                                onClick={() => {
                                    updateFloorPlanData({
                                        title: "Hill Streak Floor plan",
                                        data: HILL_STREAK_PLAN,
                                    });
                                }}
                            >
                                View Floor Plan
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="content-overlay"></div>
                        <img alt="" src={Theresa_Garden_Streak} />
                        <div className="label">THERASA GARDEN</div>
                        <div className="content-details fadeIn-top">
                            <div
                                className="button"
                                onClick={() => {
                                    updateFloorPlanData({
                                        title: "Therasa Garden Floor plan",
                                        data: THERESA_GARDEN_STREAK_PLAN,
                                    });
                                }}
                            >
                                View Floor Plan
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="content-overlay"></div>
                        <img alt="" src={VAZWIN_STREAK} />
                        <div className="label">VAZWIN STREAK</div>
                        <div className="content-details fadeIn-top">
                            <div
                                className="button"
                                onClick={() => {
                                    updateFloorPlanData({
                                        title: "Vazwin Streak Floor plan",
                                        data: VAZWIN_STREAK_PLAN,
                                    });
                                }}
                            >
                                View Floor Plan
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="content-overlay"></div>
                        <img alt="" src={Victoria} />
                        <div className="label">VICTORIA</div>
                        <div className="content-details fadeIn-top">
                            <div
                                className="button"
                                onClick={() => {
                                    updateFloorPlanData({
                                        title: "Vazwin Streak Floor plan",
                                        data: VICTORIA_PLAN,
                                    });
                                }}
                            >
                                View Floor Plan
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="content-overlay"></div>
                        <img alt="" src={HI_STREAK} />
                        <div className="label">HI STREAK</div>
                        <div className="content-details fadeIn-top">
                            <div
                                className="button"
                                onClick={() => {
                                    updateFloorPlanData({
                                        title: "Hi Streak Floor plan",
                                        data: HI_STREAK_PLAN,
                                    });
                                }}
                            >
                                View Floor Plan
                            </div>
                        </div>
                    </CarouselItem>
                    {/* <CarouselItem>
                        <img alt="" src={Silver_Streak} />
                        <div className="label">SILVER STREAK</div>
                    </CarouselItem> */}
                    <CarouselItem>
                        <div class="content-overlay"></div>
                        <img alt="" src={tranquil_streak} />
                        <div className="label">TRANQUIL STREAK</div>
                        <div class="content-details fadeIn-top">
                            <div
                                className="button"
                                onClick={() => {
                                    updateFloorPlanData({
                                        title: "Tranquil Streak Floor plan",
                                        data: TRANQUIL_STREAK_PLAN,
                                    });
                                }}
                            >
                                View Floor Plan
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="content-overlay"></div>
                        <img alt="" src={Unique_Streak} />
                        <div className="label">UNIQUE STREAK</div>
                        <div class="content-details fadeIn-top">
                            <div
                                className="button"
                                onClick={() => {
                                    updateFloorPlanData({
                                        title: "Unique Streak Floor plan",
                                        data: UNIQUE_STREAK_PLAN,
                                    });
                                }}
                            >
                                View Floor Plan
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="content-overlay"></div>
                        <img alt="" src={Serene_Streak} />
                        <div className="label">SERENE STREAK</div>
                        <div class="content-details fadeIn-top">
                            <div
                                className="button"
                                onClick={() => {
                                    updateFloorPlanData({
                                        title: "Serene Streak Floor plan",
                                        data: SERENE_STREAK_PLAN,
                                    });
                                }}
                            >
                                View Floor Plan
                            </div>
                        </div>
                    </CarouselItem>
                    {/* Serene_Streak */}
                </InfiniteCarousel>
            </div>
            {floorPlanData && (
                <FloorPlanModal
                    open={!!floorPlanData}
                    data={floorPlanData}
                    handleClose={() => updateFloorPlanData(null)}
                />
            )}
        </CarouselSection>
    );
};

export default Carousel;
