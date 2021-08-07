import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations'
import { Container } from 'semantic-ui-react'
import Typist from 'react-typist';
import InfoSection from '../components/InfoSection';

// custom styles
const HomeContainer = styled.div`
    background: #00FFFF;
    ${'' /* background: #59d2fe; */}
    height: 100vh;
    width: 100%;
    overflow-y: hidden;
    position: relative;
    font-size: 16px;  
`;

const HeaderWrapper = styled.div`
    position: relative;
    margin: 3% auto 4% auto;
    text-align: center;
    color: white;
`;

const fadeAnimation = keyframes`${fadeInUp}`;

const MainHeader = styled.h1 `
    animation: 1.5s ${fadeAnimation};
    font-size: 8rem;
`;

const SubHeaderContainer = styled.div`
    position: relative;
    ${'' /* background: black; */}
    width: 100%;
    height: 50px;
    margin-top: -2%;
`;

const SubHeader= styled.h2`
   font-weight: 900;
   font-size: 30px;
   color: #fff;
`;


function Home() {

    return (
        <>
        <HomeContainer>
        <Container>

            <HeaderWrapper>
                <MainHeader>careSp<span style={{'fontSize': '80px'}}>🤒</span>t.</MainHeader>
            
            <SubHeaderContainer>
            <SubHeader>
                <Typist avgTypingDelay={55} stdTypingDelay={0} cursor={{show: false,blink: false,element: ' ',hideWhenDone: true,hideWhenDoneDelay: 1000,}}>
                    <Typist.Delay ms={1500} />
                        ML Powered Medical Diagnosis.
                </Typist>
            </SubHeader>
            </SubHeaderContainer>
            </HeaderWrapper>
        
            <InfoSection>

            </InfoSection>
            
            </Container>

        </HomeContainer>
    </>    
    );
}
export default Home;






