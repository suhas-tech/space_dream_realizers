import React, { useState } from "react";

import { Container } from "@theme/common";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

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

    const inputChange = (value, name) => {
        updateData({
            ...data,
            [name]: value,
        });
    };

    const submit = async () => {
        const result = await submitContactRequest(data);
        console.log(result);
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
                                <Label> Contact Code </Label>
                                <Autocomplete
                                    id="combo-box-demo"
                                    fullWidth
                                    options={countryCode}
                                    getOptionLabel={(option) =>
                                        option.name + "-" + option.dial_code
                                    }
                                    // style={{ width: 300 }}
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
                            </div>
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
                        </FormGrid>
                        <FormGrid>
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
        </ContactBackground>
    );
};

export default ContactForm;
