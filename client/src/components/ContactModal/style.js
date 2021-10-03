import styled from "styled-components";

import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export const CustomDialogTitle = styled(DialogTitle)`
    background-color: #fff;
    color: #000;
    font-weight:600;
    border-bottom: 1px solid #000;
`;

export const CustomDialogContent = styled(DialogContent)`
    background-color: #fff;
    font-weight:600;
    color: #000;
    padding: 20px;
`;

export const CustomDialogActions = styled(DialogActions)`
    background-color: #fff;
    color: #000;
    font-weight:600;

`;

export const DialogContentText = styled.p`
    color: #000;
    font-size: 14px;
    font-weight:600;

`;

export const ContactInfo = styled.div`
    margin: 10px 0;
    line-height: 1.67;

    & .icon {
        color: #ffcd00;
    }
    & .item {
        display: grid;
        grid-template-columns: 40px auto;
        max-width: 300px;
        padding: 10px 20px;
        margin: 10px 0;

        border: 2px solid #ffcd00;
        border-radius: 6px;
    }

    & .large-text {
        font-size: 18px;
        font-weight: 600;
    }

    & small {
        color: #ffcd00;
    }
`;
