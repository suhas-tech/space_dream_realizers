import React from "react";

import { Container } from "@theme/common";

import {
    HomeBanner,
    Section,
    SectionTitle,
    SectionDescription,
    SectionBody,
    StyleCardSection,
    MoreText,
    VideosWrapper,
    InstructorWrapper,
    Area,
    InstructorCard,
    RegisterBodySection,
    TestimonialsSection,
    BatchInfoWrapper,
    BatchInfoCard,
} from "./style";

import NP_LOGO from "@images/npLogo.png";
import NP_PIC from "@images/NP.png";
import PREVIEW from "@images/danceIllustrator.png";

import Instructor1 from "@images/Instructor1.jpg";
import Instructor2 from "@images/Instructor2.jpg";
import Instructor3 from "@images/Instructor3.jpg";
import Instructor4 from "@images/Instructor4.jpg";
import Instructor5 from "@images/Instructor5.jpg";

import StyleCard from "@components/StyleCard";

import UAndI from "./Advert/UAndI";

import { danceStyles, youTubeVideos, testimonials } from "./constant";

import Button from "@material-ui/core/Button";

import YouTube from "react-youtube";

const Home = (props) => {
    const opts = {
        height: "195",
        width: "320",
        playerVars: {
            autoplay: 0,
            iv_load_policy: 3,
            rel: 0,
        },
    };

    return (
        <React.Fragment>
            <HomeBanner>
                <div className="logo">
                    <img src={NP_LOGO} alt="Logo" />
                </div>
                <div className="picture">
                    <img src={NP_PIC} alt="Logo" />
                </div>
                <Area>
                    <ul class="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </Area>
            </HomeBanner>

            <Section>
                <Container>
                    <SectionTitle>WHAT DO WE DO HERE?</SectionTitle>
                    <SectionBody>
                        <div className="text">
                            <p className="highlight">
                                We strive to help accomplish your goals one step
                                at a time
                            </p>
                            <p>At Nicky Pinto Studio, we Vibe differently!</p>

                            <p>
                                We are a community of professional and inspiring
                                instructors who offer a fun, exciting & engaging
                                way of learning varied dance styles. We take
                                part in your dance journey by helping you
                                associate with instructors of your choice with
                                whom you feel at ease and excited to learn from.
                                We will also work with your schedule and budget
                                to ensure that the sessions are both, convenient
                                and affordable.
                            </p>
                            <p>
                                When we begin, we like to teach beginners the
                                fundamentals of Hip Hop, Contemporary and House.
                                This will include sessions on how to groove,
                                warm-up, body control, freestyle and musicality,
                                as well as an introduction on choreography to a
                                song and perform it.
                            </p>
                            <p>
                                We've developed unique lesson plans that have
                                proven effective. From shuffle to contemporary,
                                bollywood to open style, and much more, we'll
                                get you dancing in no time. Sessions are
                                available online through Zoom.
                            </p>
                        </div>
                        <div className="image">
                            <img src={PREVIEW} alt="Logo" />
                        </div>
                    </SectionBody>
                </Container>
            </Section>

            <Section className="green-background">
                <Container>
                    <SectionTitle>OUR STYLES</SectionTitle>
                    <StyleCardSection>
                        {danceStyles.map((item) => {
                            return <StyleCard {...item} />;
                        })}
                    </StyleCardSection>
                    <MoreText>{"& more..."}</MoreText>
                </Container>
            </Section>
            <Section>
                <Container>
                    <SectionTitle>OUR INSTRUCTORS</SectionTitle>
                    <InstructorWrapper>
                        <InstructorCard>
                            <img src={Instructor1} alt="Logo" />
                            <div className="nameTag">Trisha Rai</div>
                        </InstructorCard>
                        <InstructorCard>
                            <img src={Instructor2} alt="Logo" />
                            <div className="nameTag">Jerusha Maben</div>
                        </InstructorCard>
                        <InstructorCard>
                            <img src={Instructor3} alt="Logo" />
                            <div className="nameTag">Sejal Alva</div>
                        </InstructorCard>
                        <InstructorCard>
                            <img src={Instructor4} alt="Logo" />
                            <div className="nameTag">Suneira Mendonsa</div>
                        </InstructorCard>
                        <InstructorCard>
                            <img src={Instructor5} alt="Logo" />
                            <div className="nameTag">Gavin Rodrigues</div>
                        </InstructorCard>
                    </InstructorWrapper>
                </Container>
            </Section>
            <Section className="green-background">
                <Container>
                    <SectionTitle>BATCH INFO</SectionTitle>
                    <BatchInfoWrapper>
                        <BatchInfoCard>
                            <div className="genre">
                                <b style={{ "font-size": "22px" }}>
                                    {" "}
                                    Kids Batch
                                </b>
                            </div>
                            <div className="timing">
                                <p> Timings</p>
                                <b>
                                    <ul>
                                        <li>
                                            Wed & Fri 4.30 PM to 5.30 PM
                                            <p className="italic">
                                                [India IST]
                                            </p>
                                        </li>
                                    </ul>
                                </b>
                            </div>
                            <div className="dancer">
                                by <b>Trisha</b>
                            </div>
                        </BatchInfoCard>
                        <BatchInfoCard>
                            <div className="genre">
                                <p> Genre</p>
                                <b>
                                    <ul>
                                        <li>Open Style</li>
                                        <li>Bollywood</li>
                                    </ul>
                                </b>
                            </div>
                            <div className="timing">
                                <p> Timings</p>
                                <b>
                                    <ul>
                                        <li>
                                            Tue & Thu 4.30 - 5.30 PM{" "}
                                            <p className="italic">
                                                [India IST]
                                            </p>
                                        </li>
                                        <li>
                                            Sat & Sun 3 - 4 PM{" "}
                                            <p className="italic">
                                                {" "}
                                                [Saskatoon CST- UTC6]
                                            </p>
                                        </li>
                                        <li>
                                            Sat & Sun 5 - 6 PM{" "}
                                            <p className="italic">
                                                [Toronto EDT - UTC4]
                                            </p>
                                        </li>
                                    </ul>
                                </b>
                            </div>
                            <div className="dancer">
                                by <b>Trisha</b>
                            </div>
                        </BatchInfoCard>
                        <BatchInfoCard>
                            <div className="genre">
                                <p> Genre</p>
                                <b>
                                    <ul>
                                        <li>Shuffle</li>
                                    </ul>
                                </b>
                            </div>
                            <div className="timing">
                                <p> Timings</p>
                                <b>
                                    <ul>
                                        <li>
                                            Tue & Thu 5.45 - 6.45 PM{" "}
                                            <p className="italic">
                                                [India IST]
                                            </p>
                                        </li>
                                        <li>
                                            Tue & Thu 3 - 4 PM{" "}
                                            <p className="italic">
                                                {" "}
                                                [Saskatoon CST- UTC6]
                                            </p>
                                        </li>
                                        <li>
                                            Tue & Thu 5 - 6 PM{" "}
                                            <p className="italic">
                                                [Toronto EDT - UTC4]
                                            </p>
                                        </li>
                                    </ul>
                                </b>
                            </div>
                            <div className="dancer">
                                by <b>Jerusha</b>
                            </div>
                        </BatchInfoCard>
                        <BatchInfoCard>
                            <div className="genre">
                                <p> Genre</p>
                                <b>
                                    <ul>
                                        <li>Heels</li>
                                        <li>Contemporary</li>
                                        <li>Bollywood</li>
                                    </ul>
                                </b>
                            </div>
                            <div className="timing">
                                <p> Timings</p>
                                <b>
                                    <ul>
                                        <li>
                                            Wed & Fri 5.30 - 6.30 PM{" "}
                                            <p className="italic">
                                                [India IST]
                                            </p>
                                        </li>
                                        <li>
                                            Wed & Fri 3 - 4 PM{" "}
                                            <p className="italic">
                                                {" "}
                                                [Saskatoon CST- UTC6]
                                            </p>
                                        </li>
                                        <li>
                                            Wed & Fri 5 - 6 PM{" "}
                                            <p className="italic">
                                                [Toronto EDT - UTC4]
                                            </p>
                                        </li>
                                    </ul>
                                </b>
                            </div>
                            <div className="dancer">
                                by <b>Sejal</b>
                            </div>
                        </BatchInfoCard>
                        <BatchInfoCard>
                            <div className="genre">
                                <p> Genre</p>
                                <b>
                                    <ul>
                                        <li>Fitness</li>
                                    </ul>
                                </b>
                            </div>
                            <div className="timing">
                                <p> Timings</p>
                                <b>
                                    <ul>
                                        <li>
                                            Mon Wed & Fri 7 - 8 PM{" "}
                                            <p className="italic">
                                                [India IST]
                                            </p>
                                        </li>
                                    </ul>
                                </b>
                            </div>
                            <div className="dancer">
                                by <b>Suneira</b>
                            </div>
                        </BatchInfoCard>
                        <BatchInfoCard>
                            <div className="genre">
                                <p> Genre</p>
                                <b>
                                    <ul>
                                        <li>Bollywood</li>
                                        <li>Open Style</li>
                                    </ul>
                                </b>
                            </div>
                            <div className="timing">
                                <p> Timings</p>
                                <b>
                                    <ul>
                                        <li>
                                            Saturday 5 PM - 6 PM{" "}
                                            <p className="italic">
                                                [India IST]
                                            </p>
                                        </li>
                                        <li>
                                            Sunday 9 AM - 10 AM{" "}
                                            <p className="italic">
                                                [India IST]
                                            </p>
                                        </li>
                                    </ul>
                                </b>
                            </div>
                            <div className="dancer">
                                by <b>Gavin</b>
                            </div>
                        </BatchInfoCard>
                    </BatchInfoWrapper>
                </Container>
            </Section>
            <Section className="register-background">
                <Container>
                    <SectionTitle className="center">
                        REGISTER NOW!
                    </SectionTitle>
                    <RegisterBodySection>
                        <div>
                            <p className="title"> India batch </p>
                            <Button
                                onClick={() => {
                                    window.open(
                                        "https://forms.gle/fA9tmC7cfXiE3S8z6",
                                        "window",
                                        "toolbar=no, menubar=no, resizable=yes"
                                    );
                                }}
                                style={{
                                    color: "#fff",
                                    backgroundColor: "#090c19 ",
                                }}
                            >
                                Click here
                            </Button>
                        </div>
                        <div>
                            <p className="title"> Canada batch </p>
                            <Button
                                onClick={() => {
                                    window.open(
                                        "https://forms.gle/tzbrACBpMtdNRCrj9",
                                        "window",
                                        "toolbar=no, menubar=no, resizable=yes"
                                    );
                                }}
                                style={{
                                    color: "#fff",
                                    backgroundColor: "#090c19 ",
                                }}
                            >
                                Click here
                            </Button>
                        </div>
                    </RegisterBodySection>
                </Container>
            </Section>
            <Section>
                <Container>
                    <SectionTitle>CHECKOUT OUR VIDEOS</SectionTitle>
                    <VideosWrapper>
                        {youTubeVideos.map((item) => {
                            return (
                                <div>
                                    {" "}
                                    <YouTube videoId={item.id} opts={opts} />
                                </div>
                            );
                        })}
                    </VideosWrapper>
                </Container>
            </Section>
            <UAndI />

            <Section className="register-background">
                <Container>
                    <SectionTitle className="center">Testimonials</SectionTitle>
                    <SectionDescription className="center">
                        Our students love us! Read what they have to say.
                    </SectionDescription>
                    <TestimonialsSection>
                        {testimonials.map((testimonial) => {
                            return (
                                <div className="box">
                                    <div className="message">
                                        {testimonial.message}
                                    </div>
                                    <div className="name">
                                        {testimonial.name}
                                    </div>
                                </div>
                            );
                        })}
                    </TestimonialsSection>
                </Container>
            </Section>
        </React.Fragment>
    );
};

export default Home;
