import React, { useState } from "react";
import { BrowserRouter as Router, NavLink, useHistory } from "react-router-dom";

import {
    HeaderWrapper,
    Nav,
    LogoWrapper,
    NavLogin,
    NavButton,
    ContactUs,
    TextWrapper
} from "./style";

import LOGO from "@images/logo.png";

import ContactModal from "@components/ContactModal";
import Logo from "../svg/Logo";
import Space from "../svg/Space";
import Dream from "../svg/Dream";

// Dream
const Header = (props) => {
    const history = useHistory();

    const [contactOpen, updateContactOpen] = useState(false);

    const handleClose = () => {
        updateContactOpen(false);
    };

    return (
        <HeaderWrapper>
            <LogoWrapper onClick={() => history.push("/")}>
                <Logo />
            </LogoWrapper>

            <TextWrapper>
                <Space />
                <Dream/>
            </TextWrapper>

            <NavLogin>
                <ContactUs onClick={() => updateContactOpen(true)}>
                    Contact us
                </ContactUs>
            </NavLogin>
            <ContactModal open={contactOpen} handleClose={handleClose} />
        </HeaderWrapper>
    );
};

export default Header;
