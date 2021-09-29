import React from "react";

import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { LoginWrapper, BoxContainer, LoginButtonWrapper, TextFieldWrapper } from "./style";

import Button from "@ui/Button";

const Login = () => {
    return (
        <LoginWrapper>
            <Box boxShadow={3} m={1} p={1}>
                <BoxContainer>
                    <div className="left">
                        <div className="heading"> WELCOME BACK</div>
                    </div>
                    <div className="right">
                        <div className="login-header"> Sign in to STUDIO</div>
                        <div className="form">
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
                            <LoginButtonWrapper>
                                <Button>
                                    Sign in
                                </Button>
                            </LoginButtonWrapper>
                        </div>
                    </div>
                </BoxContainer>
            </Box>
        </LoginWrapper>
    );
};

export default Login;
