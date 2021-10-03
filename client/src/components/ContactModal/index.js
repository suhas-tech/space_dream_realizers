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
                            <div className="text">0824 - 4259999</div>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <PhoneIcon />{" "}
                            </div>
                            <div className="text">+91 9845125224</div>
                        </div>

                        <div className="item">
                            <div className="icon">
                                <MailIcon />{" "}
                            </div>
                            <div className="text">dreamrealizers@gmail.com</div>
                        </div>

                        <div className="item">
                            <div className="icon">
                                <PinDropIcon />{" "}
                            </div>
                            <div className="text">
                                <p className="large-text">Space</p>
                                <div>
                                    Raintree, 2nd Floor, Next to SCS Hospital,
                                </div>
                                <div>
                                    Above Bhima Jewellery, Bendoor, Mangalore 2
                                </div>
                            </div>
                        </div>
                    </ContactInfo>
                </div>
            </CustomDialogContent>
            <CustomDialogActions>
                <Button
                    onClick={handleClose}
                    style={{
                        color: "#000",
                        border: "1px solid #000 ",
                        "font-weight": "600",
                    }}
                >
                    Close
                </Button>
            </CustomDialogActions>
        </Dialog>
    );
};

export default ContactModal;
