import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations'


// infosection styles
const fadeAnimation = keyframes`${fadeInUp}`;

export const InfoContainer = styled.div`
    animation: 1.5s ${fadeAnimation};
    color: #fff;
    ${'' /* background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')}; */}

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 400px;
    width: 100%;
    max-width: 1000px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    ${'' /* background: white; */}
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;

    /* positioning of css columns side by side */
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'` )};
    }
`;


export const Column1 = styled.div`
    margin-bottom: 10px;
    margin-left: 20%;
    padding: 0 15px;
    grid-area: col1;
    ${'' /* background: #000; */}
`;


export const Column2= styled.div`
    margin-bottom: 10px;
    padding: 0 15px;
    grid-area: col2;
   
`;



export const TextWrapper = styled.div`
    max-width: 550px;
    padding-top: 0;
    padding-bottom: 80px;
    margin-left: 20px;
`;


export const TopLine = styled.p`
    color: #000;
    font-size: 26px;
    line-height: 30px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 200px;
`;


export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #000;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;


export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #000;
`;



export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;


export const ImgWrap = styled.div`
    width: 500px;
    height: 100%;
    margin-right: 70px;
`;


export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;



