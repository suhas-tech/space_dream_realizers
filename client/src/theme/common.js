import styled, { css } from "styled-components";

export const Container = styled.div`
    max-width: 1180px;
    margin: 0 auto;
    @media (max-width: 1180px) {
        max-width: 980px;
    }
    @media (max-width: 980px) {
        max-width: 880px;
    }
    @media (max-width: 880px) {
        max-width: 767px;
    }
    @media (max-width: 768px) {
        max-width: 100%;
        margin: 0 80px;
    }
    @media (max-width: 500px) {
        max-width: 100%;
        margin: 0 30px;
    }
`;





export const PositionRelative = styled.div`
    position: relative;
`;

export const MarginAuto = styled.div`
    margin: 0 auto;
`;

export const PageHeader = styled.div`
    background-color: #000;
    padding: 40px 0;
`;

export const BlackBackground = styled.div`
    background-color: #000;
    padding: 80px 0;
`;

export const SecondBackground = styled.div`
    background-color: ${(props) => props.theme.colors.primaryColor};
    padding: 80px 0;
`;

export const FormContainer = styled.div`
    border-radius: 30px;
    margin: 0 auto;
    color: black;
    margin-top: 20px;
    padding: 20px;
`;
