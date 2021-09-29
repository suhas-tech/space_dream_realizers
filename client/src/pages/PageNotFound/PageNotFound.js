import React from "react";
import { useHistory } from "react-router-dom";

import { MessageBox, PageNotFoundWrapper, Area, GoToHome } from "./style";

const PageNotFound = () => {
    const history = useHistory();

    return (
        <PageNotFoundWrapper>
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
            <MessageBox>
                <p className="mainText">404</p>
                <p className="subtext">
                    <span>PAGE NOT FOUND</span>
                </p>
                <GoToHome>
                    To start dancing. Go to home page{" "}
                    <a
                        onClick={() => {
                            history.push("/");
                        }}
                    >
                        {" "}
                        Click here
                    </a>
                </GoToHome>
            </MessageBox>
        </PageNotFoundWrapper>
    );
};

export default PageNotFound;
