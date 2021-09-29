import React from "react";

import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
OutlinedInput;
import {
    LoginWrapper,
    BoxContainer,
    LoginButtonWrapper,
    TextFieldWrapper,
} from "./style";

import Button from "@ui/Button";

const Register = () => {
    return (
        <LoginWrapper>
            <Box boxShadow={3} m={1} p={1}>
                <BoxContainer>
                    <div className="left">
                        <div className="heading"> WELCOME </div>
                    </div>
                    <div className="right">
                        <div className="login-header"> Sign up to STUDIO</div>
                        <div className="form">
                            <TextFieldWrapper>
                                <TextField
                                    fullWidth
                                    label="Full name"
                                    variant="outlined"
                                />
                            </TextFieldWrapper>
                            <TextFieldWrapper>
                                <TextField
                                    fullWidth
                                    label="Mail Id"
                                    variant="outlined"
                                />
                            </TextFieldWrapper>
                            <TextFieldWrapper>
                                <TextField
                                    type="password"
                                    fullWidth
                                    label="Password"
                                    variant="outlined"
                                />
                            </TextFieldWrapper>
                            <TextFieldWrapper>
                                <TextField
                                    type="password"
                                    fullWidth
                                    label="Confirm Password"
                                    variant="outlined"
                                />
                            </TextFieldWrapper>
                            <TextFieldWrapper>
                                <TextField
                                    fullWidth
                                    label="Phone number"
                                    id="outlined-start-adornment"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                +91
                                            </InputAdornment>
                                        ),
                                    }}
                                    variant="outlined"
                                />
                            </TextFieldWrapper>
                            <LoginButtonWrapper>
                                <Button>Sign up</Button>
                            </LoginButtonWrapper>
                        </div>
                    </div>
                </BoxContainer>
            </Box>
        </LoginWrapper>
    );
};

export default Register;
