import React from "react";
import { Container } from "@theme/common";
import {
    FooterWrapper,
    SocialIconsWrapper,
    TwoColumnWrapper,
    CreatedByLabel,
} from "./style";

// import NP_STUDIO from "@images/npStudio.png";
import YouTube from "@svg/YouTube";
import Instagram from "@svg/Instagram";
import Twitter from "@svg/Twitter";
import Facebook from "@svg/Facebook";
import LOGO from "@images/logo.png";

const Footer = () => {
    return (
        <FooterWrapper>
            <Container className="h-100">
                <TwoColumnWrapper>
                    <div className="one-column">
                        <div className="footer-logo">
                            <img src={LOGO} alt="Logo" />
                        </div>
                        <div></div>
                    </div>
                    <div className="two-column">
                        <div>
                            <div className="title">GET IN TOUCH </div>
                            <div className="address">
                                <div>
                                    Raintree, 2nd Floor, Next to SCS Hospital,
                                </div>
                                <div>
                                    Above Bhima Jewellery, Bendoor, Mangalore 2
                                </div>
                                <div> Ph: 0824 - 4259999, +91 9845125224</div>
                                <div> E-mail: dreamrealizers@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </TwoColumnWrapper>
                <CreatedByLabel>CREATED BY SUHAS</CreatedByLabel>
            </Container>
        </FooterWrapper>
    );
};

export default Footer;
