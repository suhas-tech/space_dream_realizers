import React from "react";

import Routes from "./Routes";
import Header from "./Header";
import Footer from "./Footer";

import {PlayArea} from "./style";

const Router = (props) => {
    return (
        <React.Fragment>
            <Header />
            <PlayArea>
                <Routes />
            </PlayArea>
            <Footer />
        </React.Fragment>
    );
};

export default Router;
