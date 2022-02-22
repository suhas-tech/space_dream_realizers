import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import AmenitiesConfig from "./AmenitiesConfig.json";
import {
    AmenitiesItem,
    AmenitiesWrapper,
    DialogTitleStyled,
    AmenitiesOneWrapper,
} from "./style";

export default function AmenitiesDialog(props) {
    const { open, data, handleClose } = props;

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="amenities-dialog-title"
            aria-describedby="amenities-dialog-description"
        >
            <DialogTitle
                style={{ margin: "0", padding: "0" }}
                id="amenities-dialog-title"
            >
                <DialogTitleStyled>
                    <div> {AmenitiesConfig[data].title}</div>
                    <div className="button">
                        <Button style={{color: "#fff"}} onClick={handleClose} color="primary">
                            Close
                        </Button>
                    </div>
                </DialogTitleStyled>
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="amenities-dialog-description">
                    {data == "PLAM_STREAK" && (
                        <AmenitiesWrapper>
                            {AmenitiesConfig[data].list.map((item, index) => {
                                return (
                                    <AmenitiesItem>
                                        <div className="number">{index}</div>

                                        <div className="label"> {item}</div>
                                    </AmenitiesItem>
                                );
                            })}
                        </AmenitiesWrapper>
                    )}

                    {data == "PARADISE_STREAK" && (
                        <AmenitiesOneWrapper>
                            <div className="title">
                                {AmenitiesConfig[data].commercial.title}
                            </div>
                            {AmenitiesConfig[data].commercial.list.map(
                                (item, index) => {
                                    return (
                                        <AmenitiesItem>
                                            <div className="number">
                                                {index}
                                            </div>

                                            <div className="label"> {item}</div>
                                        </AmenitiesItem>
                                    );
                                }
                            )}

                            <div className="title">
                                {AmenitiesConfig[data].residency.title}
                            </div>
                            {AmenitiesConfig[data].residency.list.map(
                                (item, index) => {
                                    return (
                                        <AmenitiesItem>
                                            <div className="number">
                                                {index}
                                            </div>

                                            <div className="label"> {item}</div>
                                        </AmenitiesItem>
                                    );
                                }
                            )}
                        </AmenitiesOneWrapper>
                    )}
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
}
