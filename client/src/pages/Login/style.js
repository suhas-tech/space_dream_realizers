import styled from "styled-components";

export const LoginWrapper = styled.div`
    height: calc(100vh - 260px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.primary};
    position: relative;
`;

export const BoxContainer = styled.div`
    min-height: 400px;
    width: 100%;
    width: 700px;
    display: grid;
    grid-template-columns: 40% 60%;
    background-color: #fff;

    & .left {
        background-color: #f9b503;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & .heading {
            color: #fff;
            font-size: 28px;
            font-weight: 600;
        }
    }

    & .right {
        padding: 20px;
    }

    & .login-header {
        font-size: 28px;
        font-weight: 600;
        text-align: center;
    }

    & .form {
        margin-top: 30px;
    }
`;

export const TextFieldWrapper = styled.div`
    margin: 20px 30px;
`;

export const LoginButtonWrapper  = styled.div`
margin: 20px 30px;
`;
