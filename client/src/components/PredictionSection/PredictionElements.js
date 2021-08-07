import styled, { keyframes } from 'styled-components';
import { fadeInRight, fadeInLeft } from 'react-animations'

export const PredictionContainer = styled.div `
    display: flex;
    height: 100vh;
    width: 100%;
    background: #00FFFF;
    position: relative;
    overflow: hidden;
    align-items: center;
    justify-content: center;
`;

export const PredictionWrapper = styled.div `
    display: flex;
    height: 650px;
    width: 1300px;
    ${'' /* background: black; */}
    z-index: 3;
    position: relative;
    align-items: center;
    justify-content: center;
`;

export const InfoBox = styled.div `
    height: 525px;
    width: 600px;
    ${'' /* background: black; */}
    ${'' /* border: 4px solid orange; */}
    margin: 0 3% 0 3%;
`;

// styles for left pane (list of symptoms)

const fadeInLeftAnimation = keyframes`${fadeInLeft}`;

export const SymptomSelectionWrapper = styled.div `
    animation: 1s ${fadeInLeftAnimation};  
    height: 100%;
    width: 100%; 
    display: grid;
    grid-gap: 15px;
    grid-template-areas: 
        "col1 col2 col3,
        col4 col5 col6,
        col7 col8 col9";
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
`;

export const Column1 = styled.div `
    grid-area: 'col1';
    background: #fff;
    height: 100%;
    width: 100%;
    width: 100%;
    display: flex;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    
    
    &:hover {
        transform: scale(1.07);
        transition: all ease-in-out 0.2s;
        cursor: pointer;
    }
`;

export const Column2 = styled.div `
    grid-area: 'col2';
    background: #fff;
    height: 100%;
    width: 100%;
    display: flex;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    

    
    &:hover {
        transform: scale(1.07);
        transition: all ease-in-out 0.2s;
        cursor: pointer;
    }
    
`;


export const Column3 = styled.div `
    grid-area: 'col3';
    background: #fff;
    height: 100%;
    width: 100%;
    display: flex;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    

    &:hover {
        transform: scale(1.07);
        transition: all ease-in-out 0.2s;
        cursor: pointer;
    }
`;



export const Column4 = styled.div `
    grid-area: 'col4';
    background: #fff;
    height: 100%;
    width: 100%;
    display: flex;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    

    &:hover {
        transform: scale(1.07);
        transition: all ease-in-out 0.2s;
        cursor: pointer;
    }
`;



export const Column5 = styled.div `
    grid-area: 'col5';
    background: #fff;
    height: 100%;
    width: 100%;
    display: flex;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    

    &:hover {
        transform: scale(1.07);
        transition: all ease-in-out 0.2s;
        cursor: pointer;
    }
`;


export const Column6 = styled.div `
    grid-area: 'col6';
    background: #fff;
    height: 100%;
    width: 100%;
    display: flex;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    
    &:hover {
        transform: scale(1.07);
        transition: all ease-in-out 0.2s;
        cursor: pointer;
    }
`;



export const Column7 = styled.div `
    grid-area: 'col7';
    background: #fff;
    height: 100%;
    width: 100%;
    display: flex;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    

    &:hover {
        transform: scale(1.07);
        transition: all ease-in-out 0.2s;
        cursor: pointer;
    }
`;


export const Column8 = styled.div `
    grid-area: 'col8';
    background: #fff;
    height: 100%;
    width: 100%;
    display: flex;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    
    &:hover {
        transform: scale(1.07);
        transition: all ease-in-out 0.2s;
        cursor: pointer;
    }
`;


export const Column9 = styled.div `
    grid-area: 'col9';
    background: #fff;
    height: 100%;
    width: 100%;
    display: flex;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    
    &:hover {
        transform: scale(1.07);
        transition: all ease-in-out 0.2s;
        cursor: pointer;
    }
`;

export const GridHeaderContainer = styled.div `
    display: flex;
`;

export const GridHeader = styled.h1 `
    font-size: 25px;
    color: rgba(0,0,0,.6);
    
    
`;



export const MapSymptomsBox = styled.div `
    height: 525px;
    width: 572px;
    margin: 0 3% 0 0;
    border-radius: 10px;
    background: white;
    display: flex;
    flex-direction: column;
    z-index: 10;
    position: absolute;
    
`;

export const MapTop = styled.div `
    height: 12%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
 
`;

export const Header = styled.h1 `
    padding-top: 4%; 
    padding-left: 4%;

`;

export const Cross = styled.div `
    padding-right: 3%;
    padding-top: 3%;
`;


export const MapDataContainer = styled.div `
    height: 88%;
    width: 100%;
   
`;

// Styles for right pane (selected symptoms)
const fadeInRightAnimation = keyframes`${fadeInRight}`;

export const SymptomCheckedWrapper = styled.div `
    animation: 1s ${fadeInRightAnimation};
    display: flex;
    flex-direction: column;
    ${'' /* background: cyan; */}
    height: 100%;
    width: 100%;
`;

export const SymptomCheckedBox = styled.div `
    height: 70%;
    background: white;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export const SymptomCheckedInfo = styled.div `
    padding: 5%;
`;


export const ButtonContainer = styled.div `
    background: transparent;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
   
`;

export const ButtonWrapper = styled.div `
    display: flex;
    ${'' /* background: black; */}
    height: 80%;
    width: 100%;
    flex-direction: row;
    padding: 20px 0 20px 0;
    justify-content: center;
`;







export const DiseaseDisplayWrapper = styled.div `
    animation: 1s ${fadeInRightAnimation};
    display: flex;
    flex-direction: column;
    background: white;
    height: 100%;
    width: 100%;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    background: rgba(255, 255, 255, 0.8);
   
    
    
    
`;

export const DisplayHead = styled.div `
    height: 15%;
    width: 100%;
    background: #E1C340;
    ${'' /* background: #00FFFF; */}
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    ${'' /* color: white; */}
    color: rgba(0,0,0,1);


`;

export const MainHeader = styled.h1 `
    font-size: 22px;
    padding-left: 3%;
    padding-top: 2%;
    margin-bottom: 0%;
`;

export const SmallHeader = styled.h6 `
    font-size: 14px;
    padding-left: 3%;
    color: rgba(0,0,0,.6);

`;




export const DisplayButtonContainer = styled.div `
    height: 8%;
    width: 100%;
    background: #E1C340;
    ${'' /* background: #00FFFF; */}
    display: flex;
`;

export const DisplayButtonWrapper = styled.div `
    height: 8%;
    width: 100%;
    display: flex;
    font-size: 18px;
    justify-content: center;
    
`

export const DisplayButton = styled.div `
    flex-direction: row;
    margin-top: -1%;
    margin-left: 3%;
    margin-right: 3%;
    cursor: pointer;
    padding-bottom: 5%;
    padding-left: 1%;
    padding-right: 1%;
    padding-top: 2%;
    ${'' /* background: #00FFFF; */}
    ${'' /* color: #fff; */}
    color: rgba(0,0,0,1);
    font-weight: bold;
    height: 8%;


    ${'' /* &.active {
        border-bottom: 3px solid #E1C340;
    } */}
`;





// body
export const DisplayBody = styled.div `
    height: 57%;
    width: 100%;
    ${'' /* background: gray; */}
`;

export const Headline = styled.h4 `
    font-size: 18px;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 2%;
`;

export const Body = styled.p `
    padding-left: 5%;
    padding-right: 5%;
    font-size: 16px;
    margin-top: -1%;
`;



export const DisplayShortBody = styled.div `
    height: 32%;
    width: 100%;
    ${'' /* background: purple; */}
    margin-top: -3%;
    padding-left: 2%;
    padding-right: 2%;
`;







