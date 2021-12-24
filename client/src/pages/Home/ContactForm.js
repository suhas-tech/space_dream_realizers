import React, { useState } from "react";

import { Container } from "@theme/common";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Alert from "@material-ui/lab/Alert";
import {
    ContactBackground,
    ContactFormWrapper,
    Label,
    Input,
    FormGrid,
    CheckBoxSection,
} from "./style";

import { submitContactRequest } from "../../apis/contact";

import countryCode from "./countryCode.json";

const validate = (data) => {
    let valid = null;

    if (
        data.mail &&
        !data.mail
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
    ) {
        valid = "Enter a valid mail id.";
    }

    if (!data.phone) {
        valid = "Enter a phone number.";
    }

    if (!data.name) {
        valid = "Enter a name.";
    }

    return valid;
};

const ContactForm = () => {
    const DataConfig = {
        name: "",
        mail: "",
        phone: "",
        code: {
            name: "India",
            dial_code: "+91",
            code: "IN",
        },
    };

    const [data, updateData] = useState(DataConfig);
    const [error, updateError] = useState(null);

    const [success, updateSuccess] = useState(false);

    const inputChange = (value, name) => {
        updateData({
            ...data,
            [name]: value,
        });
    };

    const submit = async () => {
        updateError(null);

        const valid = validate(data);
        if (!valid) {
            const result = await submitContactRequest(data);
            updateSuccess(result);
            updateData(DataConfig)
        } else {
            updateError(valid);
        }
    };

    return (
        <ContactBackground>
            <Container>
                <ContactFormWrapper>
                    <div className="title">Get a call back</div>
                    <div className="form">
                        <FormGrid>
                            <div>
                                <Label> Name </Label>
                                <Input
                                    id="name"
                                    name="name"
                                    onChange={(e) =>
                                        inputChange(e.target.value, "name")
                                    }
                                    value={data.name}
                                />
                            </div>
                            <div></div>
                        </FormGrid>
                        <FormGrid>
                            <div>
                                <Label> Contact Number </Label>
                                <div className="flex">
                                    <Autocomplete
                                        id="combo-box-demo"
                                        fullWidth
                                        options={countryCode}
                                        getOptionLabel={(option) =>
                                            `${option.dial_code}`
                                        }
                                        style={{ width: 140 }}
                                        onChange={(e, val) =>
                                            inputChange(val, "code")
                                        }
                                        value={data.code}
                                        renderInput={(params) => (
                                            <TextField
                                                style={{
                                                    "background-color": "#fff",
                                                }}
                                                {...params}
                                                label=""
                                                variant="outlined"
                                                fullWidth
                                                size="small"
                                            />
                                        )}
                                    />
                                    <Input
                                    type="number"
                                        id="phone"
                                        name="phone"
                                        onChange={(e) =>
                                            inputChange(e.target.value, "phone")
                                        }
                                        value={data.phone}
                                    />
                                </div>
                            </div>
                            {/* <div>
                                <Label> Contact Number </Label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    onChange={(e) =>
                                        inputChange(e.target.value, "phone")
                                    }
                                    value={data.phone}
                                />
                            </div> */}
                            <div>
                                <Label> Contact Mail </Label>
                                <Input
                                    onChange={(e) =>
                                        inputChange(e.target.value, "mail")
                                    }
                                    value={data.mail}
                                />
                            </div>
                        </FormGrid>

                        {/* <CheckBoxSection>
                            <Label> Reach me out through </Label>
                                <FormGroup row>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={data.callMe}
                                                onChange={(e) => {
                                                    e.stopPropagation();
                                                    inputChange(
                                                        e.target.checked,
                                                        "callMe"
                                                    );
                                                }}
                                                color="primary"
                                            />
                                        }
                                        label="Call Me"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={data.mailMe}
                                                onChange={(e) => {
                                                    e.stopPropagation();
                                                    inputChange(
                                                        e.target.checked,
                                                        "mailMe"
                                                    );
                                                }}
                                                name="mailMe"
                                                color="primary"
                                            />
                                        }
                                        label="Mail Me"
                                    />
                                      <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={data.whatsappMe}
                                                onChange={(e) => {
                                                    e.stopPropagation();
                                                    inputChange(
                                                        e.target.checked,
                                                        "whatsappMe"
                                                    );
                                                }}
                                                name="mailMe"
                                                color="primary"
                                            />
                                        }
                                        label="Whastapp Me"
                                    />
                                </FormGroup>
                        </CheckBoxSection> */}
                    </div>
                    <div className="footer">
                        {error && (
                            <div className="error-section">
                                <Alert severity="error">{error}</Alert>
                            </div>
                        )}
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={submit}
                        >
                            Submit
                        </Button>
                    </div>
                </ContactFormWrapper>
            </Container>
            <Dialog
                open={!!success}
                onClose={() => {
                    updateSuccess(null);
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Success</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Your request has been submitted successfully.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            updateSuccess(null);
                        }}
                        color="primary"
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </ContactBackground>
    );
};

export default ContactForm;
