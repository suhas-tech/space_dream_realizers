import React, { useState } from "react";

import { Container } from "@theme/common";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";


import {
    ContactBackground,
    ContactFormWrapper,
    Label,
    Input,
    FormGrid,
    CheckBoxSection,
} from "./style";

const ContactForm = () => {
    const DataConfig = {
        name: "",
        mail: "",
        phone: "",
        mailMe: false,
        callMe: false,
        whatsappMe: false,
    };

    const [data, updateData] = useState(DataConfig);

    const inputChange = (value, name) => {
        console.log(value, name);

        updateData({
            ...data,
            [name]: value,
        });
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
                                <Input
                                    id="phone"
                                    name="phone"
                                    onChange={(e) =>
                                        inputChange(e.target.value, "phone")
                                    }
                                    value={data.phone}
                                />
                            </div>
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
                        <CheckBoxSection>
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
                        </CheckBoxSection>
                    </div>
                    <div className="footer">
                        <Button style={{"min-width": "300px"}} variant="contained" color="primary">
                            Submit
                        </Button>
                    </div>
                </ContactFormWrapper>
            </Container>
        </ContactBackground>
    );
};

export default ContactForm;
