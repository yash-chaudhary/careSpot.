import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2,
        TextWrapper, BtnWrap, ImgWrap, Img } from "./InfoElements";
import img from '../../images/doctor_img_orange.svg'
import styled from 'styled-components';
import { Button, Icon, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


const StyledButton = styled(Button)`
    border: solid white 3px;
    margin-top: 5%;
`;

const SmallTextWrapper = styled.div`
    max-width: 1100px;
    padding-top: 0;
    padding: 0 24px;
    text-align: center;
    margin-top: 1%;
`;


const InfoSection = () => {
    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow imgStart={false}>
                        <Column1>
                            <TextWrapper>

                            
                              <Label style={{'fontSize': '16px', 'width':'250px', 'marginBottom': '8%', 'marginTop': '20%', 'background': '#fff'}}><Icon name='bug'/>  Select your symptoms</Label>

                                <Label style={{'fontSize': '16px', 'width':'250px', 'marginLeft': '-0.5px', 'marginBottom': '8%', 'background': '#fff'}}><Icon  name='code'/>Receive  your ML diagnosis</Label>   

                                <Label style={{'fontSize': '16px', 'width':'250px', 'marginLeft': '-0.5px', 'marginBottom': '8%', 'background': '#fff'}}><Icon name='stethoscope'/>{' '} Learn about your diagnosis</Label>

                                <BtnWrap>

                                <Link to='/prediction'>
                                    <StyledButton animated size={'huge'} style={{'background':'#E1C340', 'width': '250px', 'height': '75px', 'marginTop': '10%', 'marginBottom': '-15%'}}>
                                    <StyledButton.Content  visible style={{'color':'#fff', 'fontWeight': '900', 'fontSize': '30px', 'paddingLeft': '15px'}}>Get Started</StyledButton.Content>
                                    <StyledButton.Content style={{'color':'#fff'}} hidden>
                                    <Icon name='arrow right' style={{'fontSize':'30px'}} />
                                    </StyledButton.Content>
                                </StyledButton> 
                                </Link>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={'image of doctors'} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>

                <SmallTextWrapper>
                <small style={{'color': '#708090'}}>Disclaimer: Although the information here is accurate always consult a medical professional after you receive your AI predicted diagnosis.</small>
                <br></br>
                <a href="https://www.linkedin.com/in/yash-chaudhary-563b15209/" rel="noreferrer" target="_blank" style={{'textDecoration':'None', 'marginTop': '10px'}}>
                    <small style={{'color':'#000000', 'fontWeight':'900'}}>Imagined by YC</small>
                </a>
                </SmallTextWrapper>

                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection;
