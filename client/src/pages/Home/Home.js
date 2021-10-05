import React from "react";

import { Container } from "@theme/common";
import {
    Banner,
    TextUnderConstruction,
    BetterExp,
    ConstrcutionSection,
    BuildingSection,
    ProjectInfo,
} from "./style";

import CONS from "@svg/Construction";
import PARADISE from "@images/paradise.jpg";
import PLAM from "@images/plamStreak.jpeg";


const Home = (props) => {
    return (
        <React.Fragment>
            <Banner>
                <div className="example-box">
                    <div class="background-shapes"></div>
                    <TextUnderConstruction>
                        The site is under Construction
                    </TextUnderConstruction>
                    <BetterExp>
                        We are coming soon with better experience to our site.
                        <div> We are here to fullfill your dreams </div>
                    </BetterExp>
                    <div className="image">
                        <CONS />
                    </div>
                </div>
            </Banner>
            <ProjectInfo>
                {" "}
                <div>AVAILABLE PROJECTS </div>{" "}
            </ProjectInfo>
            <ConstrcutionSection className="bg-white">
                <Container>
                    {/* <div className="content-area">
                        <div className="imageSection">
                            <img src={PARADISE} />
                        </div>
                    </div> */}

                    <BuildingSection>
                        <div class="blog-slider">
                            <div class="blog-slider__wrp swiper-wrapper">
                                <div class="blog-slider__item swiper-slide">
                                    <div class="blog-slider__img">
                                        {/* <img
                                    src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg"
                                    alt=""
                                /> */}

                                        <img src={PARADISE} />
                                    </div>
                                    <div class="blog-slider__content">
                                        <span class="blog-slider__code">
                                            Comercial and Residential
                                        </span>
                                        <div class="blog-slider__title">
                                            Marian Paradise Streak
                                        </div>
                                        <span class="blog-slider__code">
                                            Bejai main road, near Bejai Church
                                        </span>
                                        {/* <div class="blog-slider__text">
                                            Lorem ipsum dolor sit amet
                                            consectetur, adipisicing elit.
                                            Recusandae voluptate repellendus
                                            magni illo ea animi?{" "}
                                        </div> */}
                                        {/* <a href="#" class="blog-slider__button">
                                            Download Brochure
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BuildingSection>
                </Container>
            </ConstrcutionSection>
            <ConstrcutionSection>
                <Container>
                    {/* <div className="content-area">
                        <div className="imageSection">
                            <img src={PARADISE} />
                        </div>
                    </div> */}

                    <BuildingSection>
                        <div class="blog-slider">
                            <div class="blog-slider__wrp swiper-wrapper">
                                <div class="blog-slider__item swiper-slide">
                                    <div class="blog-slider__img">
                                        <img src={PLAM} />
                                    </div>
                                    <div class="blog-slider__content">
                                        <span class="blog-slider__code">
                                          Residential
                                        </span>
                                        <div class="blog-slider__title">
                                        Northern Sky   Plam Streak
                                        </div>
                                        <span class="blog-slider__code">
                                            Bejai, mangalore
                                        </span>
                                        {/* <div class="blog-slider__text">
                                            Lorem ipsum dolor sit amet
                                            consectetur, adipisicing elit.
                                            Recusandae voluptate repellendus
                                            magni illo ea animi?{" "}
                                        </div> */}
                                        {/* <a href="#" class="blog-slider__button">
                                            Download Brochure
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BuildingSection>
                </Container>
            </ConstrcutionSection>
        </React.Fragment>
    );
};

export default Home;
