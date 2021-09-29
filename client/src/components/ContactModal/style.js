import styled from "styled-components";

import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export const CustomDialogTitle = styled(DialogTitle)`
    background-color: #090c19;
    color: #fff;
    border-bottom: 1px solid #fff;
`;

export const CustomDialogContent = styled(DialogContent)`
    background-color: #090c19;
    color: #fff;
    padding: 20px;
`;

export const CustomDialogActions = styled(DialogActions)`
    background-color: #090c19;
    color: #fff;
`;

export const DialogContentText = styled.p`
    color: #fff;
    opacity: 0.8;
    font-size: 12px;
`;

export const ContactInfo = styled.div`
    margin: 10px 0;
    line-height: 1.67;

    & .icon {
        color: #2f75ff;
    }
    & .item {
        display: grid;
        grid-template-columns: 40px auto;
        max-width: 300px;
        padding: 10px 20px;
        margin: 10px 0;

        border: 2px solid #2f75ff;
        border-radius: 6px;
    }

    & .large-text {
        font-size: 18px;
        font-weight: 600;
    }

    & small {
        color: #2f75ff;
    }
`;
