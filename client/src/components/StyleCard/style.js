import styled from "styled-components";

export const CardWrapper = styled.div`
    position: relative;
  

    @media (min-width: 769px) {
        min-height:400px;
        & .card {
        position: relative;
        width:100%;
        height:100%;
        background: #232323;
        border-radius: 20px;
        overflow: hidden;
    }

 

    /* circle style */
    & .card::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background:   ${(props) => props.theme.colors.secondary};
        clip-path: circle(150px at 80% 20%);
        transition: 0.5s ease-in-out;
    }
    & .card:hover::before {
        clip-path: circle(300px at 80% -20%);
    }

    & .card:hover .image-box .text {
        color: #232323;
    }

    /* watermark */
    & .card::after {
        content: "${(props) => props.name}";
        position: absolute;
        top: 30%;
        left: -20%;
        font-size: 8em;
        font-weight: 800;
        font-style: italic;
        color: rgba(255, 255, 255, 0.04);
    }

    & .card .image-box {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10000;
        width: 100%;
        height: 220px;
        transition: 0.5s;
    }
    & .card:hover .image-box {
        top: 0;
        transform: translateY(0);
    }
    & .card .image-box .text {
        position: absolute;
        font-size: 190px;
        top: -15%;
        color: #fff;
        
        transition: color 0.5s ease;
    }

    & .card .content-box {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100px;
        text-align: center;
        transition: 1s;
        z-index: 10;
    }
    & .card:hover .content-box {
        height: 150px;
    }

    & .card .content-box  h2{
    font-size:36px;
    }
    }


    @media (max-width: 768px) {
        min-height:300px;
        & .card {
        position: relative;
        width:100%;
        height:300px;
        background: #232323;
        border-radius: 20px;
        overflow: hidden;
        border: 2px solid  ${(props) => props.theme.colors.secondary};

    }

 

 
    & .card:hover .image-box {
        top: 0;
        transform: translateY(0);
    }
    & .card .image-box .text {
        position: absolute;
        font-size: 190px;
        
        color: #fff;
        
        transition: color 0.5s ease;
    }

    & .card .content-box {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100px;
        text-align: center;
        transition: 1s;
        z-index: 10;
    }
    & .card:hover .content-box {
        height: 150px;
    }

    & .card .content-box  h2{
    font-size:36px;
    }
    }   
  
`;
