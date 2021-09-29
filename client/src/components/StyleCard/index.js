import React from "react";

import { CardWrapper } from "./style";

const StyleCard = (props) => {
    const { name } = props;
    return (
        <CardWrapper name={name}>
            <div class="card">
                <div class="image-box">
                    <div className="text">{name[0]}</div>
                </div>
                <div class="content-box">
                    <h2>{name}</h2>
                </div>
            </div>
        </CardWrapper>
    );
};

export default StyleCard;
