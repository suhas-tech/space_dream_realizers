import React, { useState } from "react";
import { BrowserRouter as Router, NavLink, useHistory } from "react-router-dom";

import {
    HeaderWrapper,
    Nav,
    Logo,
    NavLogin,
    NavButton,
    ContactUs,
} from "./style";

import NP_LOGO from "@images/npLogo.png";

import ContactModal from "@components/ContactModal";

import NP from "@svg/NP";

const Header = (props) => {
    const history = useHistory();

    const [contactOpen, updateContactOpen] = useState(false);

    const handleClose = () => {
        updateContactOpen(false);
    };

    return (
        <HeaderWrapper>
            {/* <Logo onClick={() => history.push("/")}>
                <NP />
            </Logo> */}

            <Nav>
                <NavLink
                    exact
                    className="navLink"
                    activeClassName="selectedLink"
                    to="/"
                >
                    Home
                </NavLink>
            </Nav>

            <NavLogin>
                {/* <NavButton
                    onClick={() => history.push("/login")}
                    className="login"
                >
                    Sign in 
                </NavButton>
                <NavButton
                    onClick={() => history.push("/register")}
                    className="register"
                >
                    Register
                </NavButton> */}
                <ContactUs onClick={() => updateContactOpen(true)}>
                    Contact us
                </ContactUs>
            </NavLogin>
            <ContactModal open={contactOpen} handleClose={handleClose} />
        </HeaderWrapper>
    );
};

export default Header;
