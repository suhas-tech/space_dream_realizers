import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Carousel from "react-material-ui-carousel";

import {ImageHolder} from "./style";

const FloorPlanModal = (props) => {
    const { open, handleClose, data } = props;

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="md"
            fullWidth
        >
            <DialogTitle id="alert-dialog-title">{data.title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Carousel
                        indicatorIconButtonProps={{
                            style: {
                                padding: "10px", 
                            },
                        }}
                        indicatorContainerProps={{
                            style: {
                                position: "absolute",
                                bottom: "6px",
                            },
                        }}
                    >
                        {data.data.map((item) => {
                            return (
                                <ImageHolder>
                                    <img src={item.img} />
                                </ImageHolder>
                            );
                        })}
                    </Carousel>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
               
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default FloorPlanModal;
