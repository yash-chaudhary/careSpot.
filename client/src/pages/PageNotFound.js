import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import styled from 'styled-components';
import image404 from '../images/404_img.jpeg'

// Custom styles

const ImageContainer = styled.div `
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
`
const ImageAsset = styled.img `
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`;

const TextWrapper = styled.div `
    width: 50%;
    height: 100vh;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
`;

const Heading404 = styled.h1 `
    top: 0;
    color: white;
    font-size: 275px;
    z-index: 3;
    font-weight: 900;
    margin: 0 0 0 5%;
    position: relative;
`;

const TextContent = styled.p `
    top: 0;
    color: white;
    z-index: 4;
    font-size: 24px;
    font-weight: 900;
    margin: 0 0 0 5%;
    position: relative;
`;

const TimerBox = styled.div `
    top: 0;
    z-index: 4;
    width: 260px;
    height: 50px;
    background-color: transparent;
    position: relative;
    border: solid white 3px;
    border-radius: 5px;
    margin: 5% 0 5% 5%;

`;

const TimerBoxText = styled.p `
    color: white;
    font-size: 20px;
    padding-left: 6%;
    padding-top: 3%;
`;

const HomePageLink = styled(Link) `
    color: white;
    font-size: 20px;
    font-weight: 900;
    margin-left: 5%;

`;

function PageNotFound() {
  
    const [timeLeft, setTimeLeft] = useState(6)
    const [timesUp, setTimesUp] = useState(false)

    useEffect(() => {
        if (timeLeft > 0) {
            setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        } else if (timeLeft === 0) {
            setTimesUp(true)
        }
    },[timeLeft]);
    
    return (
        <ImageContainer>
            
            <ImageAsset src={image404}></ImageAsset>
            
                <TextWrapper>

                <Heading404>404</Heading404>

                <TextContent>No life out here yet, let's bring you home!</TextContent>
                
                <TimerBox> 
                        {timeLeft === 10 ?
                        <div>
                            <TimerBoxText>Back Home In: &nbsp;&nbsp;<strong>00:00:{timeLeft}</strong></TimerBoxText>
                        </div>
                        :
                        <div>
                            <TimerBoxText>Back Home In: &nbsp;&nbsp;<strong>00:00:0{timeLeft}</strong></TimerBoxText>
                        </div>
                        }
 
                        {timesUp ? <Redirect to='/' /> : null}    
                </TimerBox>

                <HomePageLink to='/'>
                    Lightspeed Jump Home 
                   
                </HomePageLink>
                &nbsp; <small style={{'fontSize':'14px', 'color':'#fff'}}>(if you cbs waiting 😊)</small>

                </TextWrapper>

        </ImageContainer>
    );
}

export default PageNotFound;