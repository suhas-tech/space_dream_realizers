import React from "react";
import { Container } from "@theme/common";
import {
    FooterWrapper,
    SocialIconsWrapper,
    TwoColumnWrapper,
    CreatedByLabel,
} from "./style";

import NP_STUDIO from "@images/npStudio.png";
import YouTube from "@svg/YouTube";
import Instagram from "@svg/Instagram";
import Twitter from "@svg/Twitter";
import Facebook from "@svg/Facebook";

const Footer = () => {
    return (
        <FooterWrapper>
            <Container className="h-100">
                <TwoColumnWrapper>
                    <div className="one-column">
                        <div className="footer-logo">
                            <img src={NP_STUDIO} alt="Logo" />
                        </div>
                        <div>
                        <SocialIconsWrapper>
                            <div
                                onClick={() => {
                                    window.open(
                                        "https://youtube.com/channel/UCiHET6ltJyANAI7P_m8JWNw",
                                        "_blank"
                                    );
                                }}
                                className="icon"
                            >
                                <YouTube />
                            </div>
                            <div
                                onClick={() => {
                                    window.open(
                                        "https://www.instagram.com/nickypintostudio/?hl=en",
                                        "_blank"
                                    );
                                }}
                                className="icon"
                            >
                                <Instagram />
                            </div>
                            <div
                                onClick={() => {
                                    window.open(
                                        "https://twitter.com/pinto_studio?s=08",
                                        "_blank"
                                    );
                                }}
                                className="icon"
                            >
                                <Twitter />
                            </div>
                            <div
                                onClick={() => {
                                    window.open(
                                        "https://www.facebook.com/NickyPintoStudio",
                                        "_blank"
                                    );
                                }}
                                className="icon"
                            >
                                <Facebook />
                            </div>
                        </SocialIconsWrapper>
                        <CreatedByLabel>CREATED BY SUHAS</CreatedByLabel>
                        </div>
                    </div>
                    <div className="two-column">
                        <div className="quotes">
                            <div>
                                “When you dance, you can enjoy the luxury of
                                being you.”
                            </div>
                            <div>
                                <b>Paulo Coelho</b>
                            </div>
                        </div>
                    </div>
                </TwoColumnWrapper>
            </Container>
        </FooterWrapper>
    );
};

export default Footer;
