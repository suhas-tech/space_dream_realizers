import React, { useState } from "react";

import { Container } from "@theme/common";

import Banner from "./Banner";

import {
    SplitConatiner,
    FloorInfoButton,
    FloorInfoButtonWrapper,
    AmenitiesSection,
    AmenitiesIcons,
    ViewMoreWrapper,
} from "./style";

import Plam_Streak from "@images/Plam_Streak.png";
import Paradise_streak from "@images/Paradise_streak.png";
import PlamText from "./PlamText";
import ParadiseText from "./ParadiseText";
import Location from "../../svg/Location";
import FloorPlan from "../../svg/FloorPlan";
import Arrow from "../../svg/Arrow";
import FloorSize from "../../svg/FloorSize";

import KidsPool from "./Icons/KidsPool";
import PlayArea from "./Icons/PlayArea";
import MainPool from "./Icons/MainPool";
import Seating from "./Icons/Seating";

import ContactForm from "./ContactForm";
import Carousel from "./Carousel";
import FloorPlanModal from "./FloorPlanModal";
import FloorSizeModal from "./FloorSizeModal";

import PLAM_FLOOR_PLAN from "@images/plam_floor_plan.jpg";
import PARADISE_FLOOR_PLAN_1 from "@images/paradise_floor_1.jpg";
import PARADISE_FLOOR_PLAN_2 from "@images/paradise_floor_2.jpg";
import PARADISE_FLOOR_PLAN_3 from "@images/paradise_floor_3.jpg";

import config from "./config.json";

console.log(config, "config");
const Home = (props) => {
    const [floorPlanData, updateFloorPlanData] = useState(null);

    const [floorSizeData, updateFloorSizeData] = useState(null);

    return (
        <React.Fragment>
            <Banner />

            <SplitConatiner className="bg-white">
                <Container>
                    <div className="image-container">
                        <img src={Plam_Streak} />
                    </div>
                    <div className="content grey-background">
                        <div className="title">
                            <PlamText />
                        </div>
                        <div className="location">
                            <div className="location-icon">
                                <Location />
                            </div>
                            <div>Bejai, Mangalore</div>
                        </div>
                        <div className="floor-count-wrapper">
                            <div>NO OF FLOORS</div>
                            <div className="floor-count">9</div>
                        </div>
                        <FloorInfoButtonWrapper>
                            <FloorInfoButton
                                onClick={() => {
                                    updateFloorPlanData({
                                        title: "Plam Floor plan",
                                        data: [
                                            {
                                                label: "typical floor plan",
                                                img: PLAM_FLOOR_PLAN,
                                            },
                                        ],
                                    });
                                }}
                            >
                                <div className="icon-left">
                                    <FloorPlan />
                                </div>

                                <div className="text">FLOOR PLAN</div>
                                <div className="icon-arrow">
                                    <Arrow />
                                </div>
                            </FloorInfoButton>
                            <FloorInfoButton
                                onClick={() => {
                                    updateFloorSizeData(
                                        config.PLAM_STREAK_SIZE
                                    );
                                }}
                            >
                                <div className="icon-left">
                                    <FloorSize />
                                </div>

                                <div className="text">FLOOR SIZE</div>
                                <div className="icon-arrow">
                                    <Arrow />
                                </div>
                            </FloorInfoButton>
                        </FloorInfoButtonWrapper>
                        <AmenitiesSection>
                            <div className="title">AMENITIES</div>
                            <AmenitiesIcons>
                                <div className="icon-wrapper">
                                    <div className="icon">
                                        <KidsPool />
                                    </div>
                                    <div className="icon-text">Kids Pool</div>
                                </div>
                                <div className="icon-wrapper">
                                    <div className="icon">
                                        <PlayArea />
                                    </div>
                                    <div className="icon-text">Play Area</div>
                                </div>

                                <div className="icon-wrapper">
                                    <div className="icon">
                                        <MainPool />
                                    </div>
                                    <div className="icon-text">Main Pool</div>
                                </div>

                                <div className="icon-wrapper">
                                    <div className="icon">
                                        <Seating />
                                    </div>
                                    <div className="icon-text">
                                        Seating Area
                                    </div>
                                </div>

                                <ViewMoreWrapper>
                                    <div className="count">+14</div>
                                    <div className="more-text">More</div>
                                    <div className="link">View more</div>
                                </ViewMoreWrapper>
                            </AmenitiesIcons>
                        </AmenitiesSection>
                    </div>
                </Container>
            </SplitConatiner>
            <SplitConatiner className="bg-grey">
                <Container>
                    <div className="image-container grey-background">
                        <img src={Paradise_streak} />
                    </div>
                    <div className="content ">
                        <div className="title">
                            <ParadiseText />
                        </div>
                        <div className="location">
                            <div className="location-icon">
                                <Location />
                            </div>
                            <div>Bejai, Mangalore</div>
                        </div>
                        <div className="floor-count-wrapper">
                            <div>NO OF FLOORS</div>
                            <div className="floor-count">9</div>
                        </div>
                        <FloorInfoButtonWrapper>
                            <FloorInfoButton
                                onClick={() => {
                                    updateFloorPlanData({
                                        title: "Paradise Floor plan",
                                        data: [
                                            {
                                                label: "typical floor plan",
                                                img: PARADISE_FLOOR_PLAN_1,
                                            },
                                            {
                                                label: "typical floor plan",
                                                img: PARADISE_FLOOR_PLAN_2,
                                            },
                                            {
                                                label: "typical floor plan",
                                                img: PARADISE_FLOOR_PLAN_3,
                                            },
                                        ],
                                    });
                                }}
                            >
                                <div className="icon-left">
                                    <FloorPlan />
                                </div>

                                <div className="text">FLOOR PLAN</div>
                                <div className="icon-arrow">
                                    <Arrow />
                                </div>
                            </FloorInfoButton>
                            <FloorInfoButton
                                onClick={() => {
                                    updateFloorSizeData(
                                        config.PARADISE_STREAK_SIZE
                                    );
                                }}
                            >
                                <div className="icon-left">
                                    <FloorSize />
                                </div>

                                <div className="text">FLOOR SIZE</div>
                                <div className="icon-arrow">
                                    <Arrow />
                                </div>
                            </FloorInfoButton>
                        </FloorInfoButtonWrapper>
                        <AmenitiesSection>
                            <div className="title">AMENITIES</div>
                            <AmenitiesIcons>
                                <div className="icon-wrapper">
                                    <div className="icon">
                                        <KidsPool />
                                    </div>
                                    <div className="icon-text">Kids Pool</div>
                                </div>
                                <div className="icon-wrapper">
                                    <div className="icon">
                                        <PlayArea />
                                    </div>
                                    <div className="icon-text">Play Area</div>
                                </div>

                                <div className="icon-wrapper">
                                    <div className="icon">
                                        <MainPool />
                                    </div>
                                    <div className="icon-text">Main Pool</div>
                                </div>

                                <div className="icon-wrapper">
                                    <div className="icon">
                                        <Seating />
                                    </div>
                                    <div className="icon-text">
                                        Seating Area
                                    </div>
                                </div>

                                <ViewMoreWrapper>
                                    <div className="count">+14</div>
                                    <div className="more-text">More</div>
                                    <div className="link">View more</div>
                                </ViewMoreWrapper>
                            </AmenitiesIcons>
                        </AmenitiesSection>
                    </div>
                </Container>
            </SplitConatiner>
            <ContactForm />
            <Carousel />
            {floorPlanData && (
                <FloorPlanModal
                    open={!!floorPlanData}
                    data={floorPlanData}
                    handleClose={() => updateFloorPlanData(null)}
                />
            )}
            {floorSizeData && (
                <FloorSizeModal
                    open={!!floorSizeData}
                    data={floorSizeData}
                    handleClose={() => updateFloorSizeData(null)}
                />
            )}
        </React.Fragment>
    );
};

export default Home;
