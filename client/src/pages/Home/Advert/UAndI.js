import React from "react";

import { Container } from "@theme/common";

import Button from "@material-ui/core/Button";

import BreatheIndia from "@images/breatheIndia.png";
import UAILogo from "@images/UAILogo.png";

import {
    AdvertSection,
    AdvertContainer,
    SectionTitle,
    RegisterBodySection,
    Logo,
    ContentWrapper,
    BreatheIndiaImage,
} from "../style";

const UAndI = () => {
    return (
        <AdvertSection>
            <BreatheIndiaImage src={BreatheIndia} />
            <AdvertContainer />
            <Container>
                <ContentWrapper>
                    <Logo>
                        <img src={UAILogo} />
                    </Logo>
                    <div className="content">
                        <div className="heading">Breathe India</div>
                        <div>
                            In the current scenario in India, those affected by
                            Covid-19 are facing an uphill battle. There are
                            severe shortages in key medical supplies like oxygen
                            cylinders for those who are battling the virus from
                            their homes. There is also a drastic lack of
                            information on availability of hospital beds and
                            ambulance services.
                        </div>
                        <div className="action">
                            <Button
                                fullWidth
                                onClick={() => {
                                    window.open(
                                        "https://www.ketto.org/fundraiser/covid-relief-381634",
                                        "window"
                                    );
                                }}
                                style={{
                                    color: "#fff",
                                    fontWeight: "600",
                                    backgroundColor: "#DA2329 ",
                                }}
                            >
                                Click here
                            </Button>
                        </div>
                    </div>
                </ContentWrapper>
            </Container>
        </AdvertSection>
    );
};

export default UAndI;
