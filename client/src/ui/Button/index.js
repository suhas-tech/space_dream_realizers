import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MaterialUIButton from "@material-ui/core/Button";

import THEME from "@theme/theme";

const ColorButton = withStyles(() => ({
    root: {
        color: THEME.colors.white,
        backgroundColor: THEME.colors.primary,
        "&:hover": {
            backgroundColor: THEME.colors.primary,
        },
    },
}))(MaterialUIButton);

const Button = (props) => {
    return (
        <ColorButton size="large" fullWidth variant="contained" color="primary">
            {props.children}
        </ColorButton>
    );
};

export default Button;
