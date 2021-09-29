import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";

import {
    CustomDialogTitle,
    CustomDialogContent,
    CustomDialogActions,
    DialogContentText,
    ContactInfo,
} from "./style";

import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import PinDropIcon from "@material-ui/icons/PinDrop";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ContactModal = (props) => {
    const { open, handleClose } = props;
    return (
        <Dialog
            fullWidth={true}
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <CustomDialogTitle>Contact Information</CustomDialogTitle>
            <CustomDialogContent>
                <div>
                    <DialogContentText>
                        We know you have queries thats why we are here! Drop us
                        a message on whatsApp or call us. Send us a mail to get
                        quotes. As we said, we are always happy to hear you out!
                    </DialogContentText>
                    <ContactInfo>
                        <div className="item">
                            <div className="icon">
                                <PhoneIcon />{" "}
                            </div>
                            <div className="text">
                                +91 709-055-9999 <small>INDIA</small>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <PhoneIcon />{" "}
                            </div>
                            <div className="text">
                                +1&nbsp;&nbsp; 416-856-9402{" "}
                                <small>CANADA</small>
                            </div>
                        </div>

                        <div className="item">
                            <div className="icon">
                                <MailIcon />{" "}
                            </div>
                            <div className="text">
                                nickypintostudio@gmail.com
                            </div>
                        </div>

                        <div className="item">
                            <div className="icon">
                                <PinDropIcon />{" "}
                            </div>
                            <div className="text">
                                <p className="large-text">NP Studio</p>
                                Behind Retreat House Church, Jeppu, Mangalore -
                                575002
                            </div>
                        </div>
                    </ContactInfo>
                </div>
            </CustomDialogContent>
            <CustomDialogActions>
                <Button
                    onClick={handleClose}
                    style={{ color: "#2f75ff", border: "1px solid #2f75ff " }}
                >
                    Close
                </Button>
            </CustomDialogActions>
        </Dialog>
    );
};

export default ContactModal;
