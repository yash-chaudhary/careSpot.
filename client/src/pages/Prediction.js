import React, { useState } from "react";
import { diseaseInfo } from '../ScrapedData.js';
import { PredictionContainer, PredictionWrapper, InfoBox, SymptomSelectionWrapper,
        SymptomCheckedWrapper, SymptomCheckedBox, SymptomCheckedInfo, ButtonContainer, ButtonWrapper,
        MapSymptomsBox, Column1, Column2, Column3, Column4, Column5, Column6, Column7, Column8, Column9,
        MapTop, MapDataContainer, Header, Cross, GridHeaderContainer, GridHeader, DiseaseDisplayWrapper,
        DisplayHead, DisplayButtonContainer, DisplayBody, DisplayShortBody, MainHeader, SmallHeader,
        DisplayButtonWrapper, DisplayButton, Headline, Body } from "../components/PredictionSection/PredictionElements";
import { Button, Icon, Label, Divider, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const LinkHome = styled(Link) `
    text-decoration: none;
    outline: none;
    color: inherit;

    &:hover {
        text-decoration: none;
        color: inherit;
        cursor:pointer;  
    }
`;


function Prediction() {
  
  // ---------------------------------------------------------- All symptom data to be analysed for backend response -------------------------------------------------

  // Symptoms object to be transformed and prepared for backend ML computation of user diagnosis prediction
  const api_data = {"data":[{'itching': "0",'skin_rash': "0",'nodal_skin_eruptions': "0",'continuous_sneezing': "0",'shivering': "0",
  'chills': "0",'joint_pain': "0",'stomach_pain': "0",'acidity': "0",'ulcers_on_tongue': "0",'muscle_wasting': "0",'vomiting': "0",
  'burning_micturition': "0",'spotting_ urination': "0",'fatigue': "0",'weight_gain': "0",'anxiety': "0",'cold_hands_and_feets': "0",
  'mood_swings': "0",'weight_loss': "0",'restlessness': "0",'lethargy': "0",'patches_in_throat': "0",'irregular_sugar_level': "0",
  'cough': "0",'high_fever': "0",'sunken_eyes': "0",'breathlessness': "0",'sweating': "0",'dehydration': "0",'indigestion': "0",
  'headache': "0",'yellowish_skin': "0",'dark_urine': "0",'nausea': "0",'loss_of_appetite': "0",'pain_behind_the_eyes': "0",'back_pain': "0",
  'constipation': "0",'abdominal_pain': "0",'diarrhoea': "0",'mild_fever': "0",'yellow_urine': "0",'yellowing_of_eyes': "0",
  'acute_liver_failure': "0",'fluid_overload': "0",'swelling_of_stomach': "0",'swelled_lymph_nodes': "0",'malaise': "0",
  'blurred_and_distorted_vision': "0",'phlegm': "0",'throat_irritation': "0",'redness_of_eyes': "0",'sinus_pressure': "0",'runny_nose': "0",
  'congestion': "0",'chest_pain': "0",'weakness_in_limbs': "0",'fast_heart_rate': "0",'pain_during_bowel_movements': "0",
  'pain_in_anal_region': "0",'bloody_stool': "0",'irritation_in_anus': "0",'neck_pain': "0",'dizziness': "0",'cramps': "0",'bruising': "0",
  'obesity': "0",'swollen_legs': "0",'swollen_blood_vessels': "0",'puffy_face_and_eyes': "0",'enlarged_thyroid': "0",'brittle_nails': "0",
  'swollen_extremeties': "0",'excessive_hunger': "0",'extra_marital_contacts': "0",'drying_and_tingling_lips': "0",'slurred_speech': "0",
  'knee_pain': "0",'hip_joint_pain': "0",'muscle_weakness': "0",'stiff_neck': "0",'swelling_joints': "0",'movement_stiffness': "0",
  'spinning_movements': "0",'loss_of_balance': "0",'unsteadiness': "0",'weakness_of_one_body_side': "0",'loss_of_smell': "0",
  'bladder_discomfort': "0",'foul_smell_of urine': "0",'continuous_feel_of_urine': "0",'passage_of_gases': "0",'internal_itching': "0",
  'toxic_look_(typhos)': "0",'depression': "0",'irritability': "0",'muscle_pain': "0",'altered_sensorium': "0",'red_spots_over_body': "0",
  'belly_pain': "0",'abnormal_menstruation': "0",'dischromic _patches': "0",'watering_from_eyes': "0",'increased_appetite': "0",'polyuria': "0",
  'family_history': "0",'mucoid_sputum': "0",'rusty_sputum': "0",'lack_of_concentration': "0",'visual_disturbances': "0",
  'receiving_blood_transfusion': "0",'receiving_unsterile_injections': "0",'coma': "0",'stomach_bleeding': "0",'distention_of_abdomen': "0",
  'history_of_alcohol_consumption': "0",'fluid_overload_1': "0",'blood_in_sputum': "0",'prominent_veins_on_calf': "0",'palpitations': "0",
  'painful_walking': "0",'pus_filled_pimples': "0",'blackheads': "0",'scurring': "0",'skin_peeling': "0",'silver_like_dusting': "0",
  'small_dents_in_nails': "0",'inflammatory_nails': "0",'blister': "0",'red_sore_around_nose': "0",'yellow_crust_ooze': "0",},],}

  
  // Object managing the state of all symptoms that the user interfaces with
  const [symptomState, setSymptomState] = useState({'itching': [false, 'Itching'],'skin_rash': [false, 'Skin rash'],
  'nodal_skin_eruptions': [false, 'Nodal skin eruptions'],'continuous_sneezing': [false, 'Continuous sneezing'],'shivering': [false, 'Shivering'],
  'chills': [false, 'Chills'],'joint_pain': [false, 'Joint pain'],'stomach_pain': [false, 'Stomach pain' ],'acidity': [false, 'Acidity'],
  'ulcers_on_tongue': [false, 'Ulcers on tongue'],'muscle_wasting': [false, 'Muscle wasting'],'vomiting': [false, 'Vomiting'],
  'burning_micturition': [false, 'Burning micturition'],'spotting_ urination': [false, 'Spotting urination'],'fatigue': [false, 'Fatigue'],
  'weight_gain': [false, 'Weight gain'],'anxiety': [false, 'Anxiety'],'cold_hands_and_feets': [false, 'Cold hands and feets'],
  'mood_swings': [false, 'Mood swings'],'weight_loss': [false, 'Weight loss'],'restlessness': [false, 'Restlessness'],'lethargy': [false, 'Lethargy'],
  'patches_in_throat': [false, 'Patches in throat'],'irregular_sugar_level': [false, 'Irregular sugar level'],'cough': [false, 'Cough'],
  'high_fever': [false, 'High fever'],'sunken_eyes': [false, 'Sunken eyes' ],'breathlessness': [false, 'Breathlessness'],
  'sweating': [false,  'Sweating'],'dehydration': [false, 'Dehydration'],'indigestion': [false, 'Indigestion'],'headache': [false, 'Headache'],
  'yellowish_skin': [false, 'Yellowish skin'],'dark_urine': [false, 'Dark urine'],'nausea': [false, 'Nausea'],'loss_of_appetite': [false,  'Loss of appetite'],
  'pain_behind_the_eyes': [false, 'Pain behind the eyes'],'back_pain': [false, 'Back pain'],'constipation': [false, 'Constipation'],
  'abdominal_pain': [false, 'Abdominal pain'],'diarrhoea': [false, 'Diarrhoea'],'mild_fever': [false, 'Mild fever'],'yellow_urine': [false, 'Yellow urine'],
  'yellowing_of_eyes': [false, 'Yellowing of eyes'],'acute_liver_failure': [false, 'Acute liver failure'],'fluid_overload': [false, 'Fluid overload'],
  'swelling_of_stomach': [false, 'Swelling of stomach'],'swelled_lymph_nodes': [false, 'Swelled lymph nodes'],'malaise': [false, 'Malaise'],
  'blurred_and_distorted_vision': [false, 'Blurred and distorted vision'],'phlegm': [false, 'Phlegm'],'throat_irritation': [false, 'Throat irritation'],
  'redness_of_eyes': [false, 'Redness of eyes'],'sinus_pressure': [false, 'Sinus pressure'],'runny_nose': [false, 'Running nose'],
  'congestion': [false, 'Congestion'],'chest_pain': [false, 'Chest pain'],'weakness_in_limbs': [false, 'Weakness in limbs'],
  'fast_heart_rate': [false, 'Fast heart rate'],'pain_during_bowel_movements': [false, 'Pain during bowel movements'],
  'pain_in_anal_region': [false, 'Pain in anal region'],'bloody_stool': [false, 'Bloody stool'],'irritation_in_anus': [false, 'Irritation in anus'],
  'neck_pain': [false, 'Neck pain'],'dizziness': [false, 'Dizziness'],'cramps': [false, 'Cramps'],'bruising': [false, 'Bruising'],
  'obesity': [false, 'Obesity'],'swollen_legs': [false, 'Swollen legs'],'swollen_blood_vessels': [false, 'Swollen blood vessels'],
  'puffy_face_and_eyes': [false, 'Puffy face and eyes'],'enlarged_thyroid': [false, 'Enlarged thyroid'],'brittle_nails': [false, 'Brittle nails'],
  'swollen_extremeties': [false, 'Swollen extremities'],'excessive_hunger': [false, 'Excessive hunger'],'extra_marital_contacts': [false, 'Extra marital contacts'],
  'drying_and_tingling_lips': [false, 'Drying and tingling lips'],'slurred_speech': [false, 'Slurred speech'],'knee_pain': [false, 'Knee pain'],
  'hip_joint_pain': [false, 'Hip joint pain'],'muscle_weakness': [false, 'Muscle weakness'],'stiff_neck': [false, 'Stiff neck'],
  'swelling_joints': [false, 'Swelling joints'],'movement_stiffness': [false, 'Movement stiffness'],'spinning_movements': [false, 'Spinning movements'],
  'loss_of_balance': [false, 'Loss of balance'],'unsteadiness': [false, 'Unsteadiness'],'weakness_of_one_body_side': [false, 'Weakness of one body side'],
  'loss_of_smell': [false, 'Loss of smell'],'bladder_discomfort': [false, 'Bladder discomfort'],'foul_smell_of urine': [false, 'Foul smell of urine'],
  'continuous_feel_of_urine': [false, 'Continuous feel of urine'],'passage_of_gases': [false, 'Passage of gases'],'internal_itching': [false, 'Internal itching'],
  'toxic_look_(typhos)': [false, 'Toxic look (typhos)'],'depression': [false, 'Depression'],'irritability': [false, 'Irritability'],
  'muscle_pain': [false, 'Muscle pain'],'altered_sensorium': [false, 'Altered sensorism'],'red_spots_over_body': [false, 'Red spots over body'],
  'belly_pain': [false, 'Belly pain'],'abnormal_menstruation': [false, 'Abnormal menstruation'],'dischromic _patches': [false, 'Dischromic patches'],
  'watering_from_eyes': [false, 'Watering from eyes'],'increased_appetite': [false, 'Increased appetite'],'polyuria': [false, 'Polyuria'],
  'family_history': [false, 'Family history'],'mucoid_sputum': [false, 'Mucoid sputum'],'rusty_sputum': [false, 'Rusty sputum'],
  'lack_of_concentration': [false, 'Lack of concentration'],'visual_disturbances': [false, 'Visual disturbances'],
  'receiving_blood_transfusion': [false, 'Receiving blood transfusion'],'receiving_unsterile_injections': [false, 'Receiving unsterile injections'],
  'coma': [false, 'Coma'],'stomach_bleeding': [false, 'Stomach bleeding'],'distention_of_abdomen': [false, 'Distention of abdomen'],
  'history_of_alcohol_consumption': [false, 'History of alcohol consumption'],'fluid_overload_1': [false, 'Fluid overload 2'],
  'blood_in_sputum': [false, 'Blood in sputum'],'prominent_veins_on_calf': [false, 'Prominent veins on calf'],'palpitations': [false, 'Palpitations'],
  'painful_walking': [false, 'Painful walking'],'pus_filled_pimples': [false, 'Pus filled pimples'],'blackheads': [false, 'Blackheads'],
  'scurring': [false, 'Scurring'],'skin_peeling': [false, 'Skin peeling'],'silver_like_dusting': [false, 'Silver like dustings'],
  'small_dents_in_nails': [false, 'Small dents in nails'],'inflammatory_nails': [false, 'Inflammatory nails'],'blister': [false, 'Blister'],
  'red_sore_around_nose': [false, 'Red sore around nose'],'yellow_crust_ooze': [false, 'Yellow crust ooze'],});

  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------

  // Function that manages which symptoms have been clicked on
  function handleChange(e) {
    const { name, value } = e.target
    setSymptomState(prevState => ({
      ...prevState,
      [name]: [!symptomState[name][0], value]
    }));
  }


  // Function that erases all current symptom selections
  function symptomSelectionRedo() {
    for (const [key, value] of Object.entries(symptomState)) {
      setSymptomState(prevState => ({
        ...prevState,
        [key]: [false, value[1]]
      }));
    }
  }


  // Function that deletes specific symptom selection
  function handleSypmSelectDel(e) {
    // Gets the value of symptom to be deleted, have to use this method
    // since JSX element already has name attribute used
    const values = e.target.getAttribute("value").split(',')
    const symptomName = values[0]
    const symptomValue = values[2]
    setSymptomState(prevState => ({
      ...prevState,
      [symptomName]: [!symptomState[symptomName][0], symptomValue]
    }));
  }

  
  // Stores current prediction
  const [prediction, setPrediction] = useState({})
 
  // Call to backend API to send selected symptoms from user and retreive disease diagnosis
  async function handleClick() {

    // Uses symptom state to change API request data depending on what is true and false
    for (const [key, value] of Object.entries(symptomState)) {
      if (value[0] === true) {
        api_data["data"][0][key] = "1"
      } else if (value[0] === false) {
        api_data["data"][0][key] = "0"
      } 
    }
     
    // Fetches API response based on request parameters
    const options = {
      method: "POST",
      mode: 'cors',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(api_data)
    }
 
    const response = await fetch('/prediction', options)
    const data = await response.json()

    // Stores prediction in state
    setPrediction(data.result[0])

     // Shows diease prediction page
    setIsLoaded(true)
     
     // Set all button states for selection to false for better user navigation
     setCol1State(false)
     setCol2State(false)
     setCol3State(false)
     setCol4State(false)
     setCol5State(false)
     setCol6State(false)
     setCol7State(false)
     setCol8State(false)
     setCol9State(false)
  }

  // State for to display prediction outcome
  const [isLoaded, setIsLoaded] = useState(false)

  // Function that handles render if prediction button has been clicked
  function handleNewPrediction() {
    setIsLoaded(false)
    setIsOverview(true)
    setIsSymptoms(false)
    setIsTreatments(false)
    setSpecialists(false)
  }
  
  // States for which symptom category click
  const [col1State, setCol1State] = useState(false);
  const [col2State, setCol2State] = useState(false);
  const [col3State, setCol3State] = useState(false);
  const [col4State, setCol4State] = useState(false);
  const [col5State, setCol5State] = useState(false);
  const [col6State, setCol6State] = useState(false);
  const [col7State, setCol7State] = useState(false);
  const [col8State, setCol8State] = useState(false);
  const [col9State, setCol9State] = useState(false); 

  // Handler functions for symptom category click
  function handleClickCol1() {
      setCol1State(!col1State)
  }
  function handleClickCol2() {
    setCol2State(!col2State)
  }
  function handleClickCol3() {
    setCol3State(!col3State)
  }
  function handleClickCol4() {
    setCol4State(!col4State)
  }
  function handleClickCol5() {
    setCol5State(!col5State)
  }
  function handleClickCol6() {
    setCol6State(!col6State)
  }
  function handleClickCol7() {
    setCol7State(!col7State)
  }
  function handleClickCol8() {
    setCol8State(!col8State)
  }
  function handleClickCol9() {
    setCol9State(!col9State)
  }

  // State for to disease prediction information
  const [isOverview, setIsOverview] = useState(true)
  const [isSymptoms, setIsSymptoms] = useState(false)
  const [isTreatments, setIsTreatments] = useState(false)
  const [isSpecialists, setSpecialists] = useState(false)

   // Handler functions for diease information button click
  function handleOverviewClick() {
    setIsOverview(true)
    setIsSymptoms(false)
    setIsTreatments(false)
    setSpecialists(false)
  }

  function handleSymptomsClick() {
    setIsOverview(false)
    setIsSymptoms(true)
    setIsTreatments(false)
    setSpecialists(false)
  }
    
  function handleTreatmentClick() {
    setIsOverview(false)
    setIsSymptoms(false)
    setIsTreatments(true)
    setSpecialists(false)
  }

  function handleSpecialistsClick() {
    setIsOverview(false)
    setIsSymptoms(false)
    setIsTreatments(false)
    setSpecialists(true)
  }


  return (

    <>
    {!isLoaded ?

    <PredictionContainer>
        <PredictionWrapper>
            <InfoBox>
                <SymptomSelectionWrapper>
                
                {col1State ? 
                    <MapSymptomsBox>
                        <MapTop>
                            <Header>Skin & Nail Symptoms</Header>
                            <Cross onClick={handleClickCol1}>
                                <Button icon>
                                    <Icon size={'large'} name='delete'/>
                                </Button>
                            </Cross>
                        </MapTop>

                        <MapDataContainer>
                          <SymptomCheckedInfo>
                            <Button name='itching' value='Itching' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['itching'][0] ? '#E1C340' : null, 'color': symptomState['itching'][0] ? '#fff' : null}} onClick={handleChange}>Itching</Button>
                            <Button name='skin_rash' value='Skin rash' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['skin_rash'][0] ? '#E1C340' : null, 'color': symptomState['skin_rash'][0] ? '#fff' : null}} onClick={handleChange}>Skin rash</Button>
                            <Button name='nodal_skin_eruptions' value='Nodal skin eruptions' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['nodal_skin_eruptions'][0] ? '#E1C340' : null, 'color': symptomState['nodal_skin_eruptions'][0] ? '#fff' : null}} onClick={handleChange}>Nodal skin eruptions</Button>
                            <Button name='yellowish_skin' value='Yellowish skin' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['yellowish_skin'][0] ? '#E1C340' : null, 'color': symptomState['yellowish_skin'][0] ? '#fff' : null}} onClick={handleChange}>Yellowish skin</Button>
                            <Button name='dischromic _patches' value='Dischromic patches' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['dischromic _patches'][0] ? '#E1C340' : null, 'color': symptomState['dischromic _patches'][0] ? '#fff' : null}} onClick={handleChange}>Dischromic patches</Button>
                            <Button name='silver_like_dusting' value='Silver-like dusting' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['silver_like_dusting'][0] ? '#E1C340' : null, 'color': symptomState['silver_like_dusting'][0] ? '#fff' : null}} onClick={handleChange}>Silver-like dusting</Button>
                            <Button name='small_dents_in_nails' value='Small dents in nails' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['small_dents_in_nails'][0] ? '#E1C340' : null, 'color': symptomState['small_dents_in_nails'][0] ? '#fff' : null}} onClick={handleChange}>Small dents in nails</Button>
                            <Button name='inflammatory_nails' value='Inflammatory nails' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['inflammatory_nails'][0] ? '#E1C340' : null, 'color': symptomState['inflammatory_nails'][0] ? '#fff' : null}} onClick={handleChange}>Inflammatory nails</Button>
                            <Button name='skin_peeling' value='Skin peeling' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['skin_peeling'][0] ? '#E1C340' : null, 'color': symptomState['skin_peeling'][0] ? '#fff' : null}} onClick={handleChange}>Skin peeling</Button>
                            <Button name='pus_filled_pimples' value='Pus-filled pimples' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['pus_filled_pimples'][0] ? '#E1C340' : null, 'color': symptomState['pus_filled_pimples'][0] ? '#fff' : null}} onClick={handleChange}>Pus-filled pimples</Button>
                            <Button name='blackheads' value='Blackheads' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['blackheads'][0] ? '#E1C340' : null, 'color': symptomState['blackheads'][0] ? '#fff' : null}} onClick={handleChange}>Blackheads</Button>
                            <Button name='brittle_nails' value='Brittle nails' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['brittle_nails'][0] ? '#E1C340' : null, 'color': symptomState['brittle_nails'][0] ? '#fff' : null}} onClick={handleChange}>Brittle nails</Button>
                            <Button name='red_spots_over_body' value='Red spots over body' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['red_spots_over_body'][0] ? '#E1C340' : null, 'color': symptomState['red_spots_over_body'][0] ? '#fff' : null}} onClick={handleChange}>Red spots over body</Button>
                            <Button name='prominent_veins_on_calf' value='Prominent veins on calf' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['prominent_veins_on_calf'][0] ? '#E1C340' : null, 'color': symptomState['prominent_veins_on_calf'][0] ? '#fff' : null}} onClick={handleChange}>Prominent veins on calf</Button>
                            <Button name='scurring' value='Scurring' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['scurring'][0] ? '#E1C340' : null, 'color': symptomState['scurring'][0] ? '#fff' : null}} onClick={handleChange}>Scurring</Button>
                            <Button name='swollen_blood_vessels' value='Swollen blood vessels' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['swollen_blood_vessels'][0] ? '#E1C340' : null, 'color': symptomState['swollen_blood_vessels'][0] ? '#fff' : null}} onClick={handleChange}>Swollen blood vessels</Button>
                            <Button name='blister' value='Blister' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['blister'][0] ? '#E1C340' : null, 'color': symptomState['blister'][0] ? '#fff' : null}} onClick={handleChange}>Blister</Button>
                            <Button name='enlarged_thyroid' value='Enlarged thyroid' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['enlarged_thyroid'][0] ? '#E1C340' : null, 'color': symptomState['enlarged_thyroid'][0] ? '#fff' : null}} onClick={handleChange}>Enlarged thyroid</Button>
                          </SymptomCheckedInfo>
                        </MapDataContainer>
                    </MapSymptomsBox>
                :
                    <Column1 onClick={handleClickCol1}>
                        <GridHeaderContainer>
                          <GridHeader>
                              Skin & Nails
                          </GridHeader>
                        </GridHeaderContainer>
                    </Column1>
                }

                {col2State ? 
                    <MapSymptomsBox>
                        <MapTop>
                            <Header>Aches & Pain Symptoms</Header>
                            <Cross onClick={handleClickCol2}>
                                <Button icon>
                                    <Icon size={'large'} name='delete'/>
                                </Button>
                            </Cross>
                        </MapTop>

                        <MapDataContainer>
                        <SymptomCheckedInfo>
                            <Button name='joint_pain' value='Joint pain' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['joint_pain'][0] ? '#E1C340' : null, 'color': symptomState['joint_pain'][0] ? '#fff' : null}} onClick={handleChange}>Joint Pain</Button>
                            <Button name='stomach_pain' value='Stomach pain' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['stomach_pain'][0] ? '#E1C340' : null, 'color': symptomState['stomach_pain'][0] ? '#fff' : null}} onClick={handleChange}>Stomach Pain</Button>
                            <Button name='muscle_wasting' value='Muscle wasting' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['muscle_wasting'][0] ? '#E1C340' : null, 'color': symptomState['muscle_wasting'][0] ? '#fff' : null}} onClick={handleChange}>Muscle wasting</Button>
                            <Button name='back_pain' value='Back pain' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['back_pain'][0] ? '#E1C340' : null, 'color': symptomState['back_pain'][0] ? '#fff' : null}} onClick={handleChange}>Back pain</Button>
                            <Button name='abdominal_pain' value='Abdominal pain' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['abdominal_pain'][0] ? '#E1C340' : null, 'color': symptomState['abdominal_pain'][0] ? '#fff' : null}} onClick={handleChange}>Abdominal pain</Button>
                            <Button name='chest_pain' value='Chest pain' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['chest_pain'][0] ? '#E1C340' : null, 'color': symptomState['chest_pain'][0] ? '#fff' : null}} onClick={handleChange}>Chest pain</Button>
                            <Button name='weakness_in_limbs' value='Weakness in limbs' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['weakness_in_limbs'][0] ? '#E1C340' : null, 'color': symptomState['weakness_in_limbs'][0] ? '#fff' : null}} onClick={handleChange}>Weakness in limbs</Button>
                            <Button name='neck_pain' value='Neck pain' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['neck_pain'][0] ? '#E1C340' : null, 'color': symptomState['neck_pain'][0] ? '#fff' : null}} onClick={handleChange}>Neck pain</Button>
                            <Button name='knee_pain' value='Knee pain' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['knee_pain'][0] ? '#E1C340' : null, 'color': symptomState['knee_pain'][0] ? '#fff' : null}} onClick={handleChange}>Knee pain</Button>
                            <Button name='hip_joint_pain' value='Hip joint pain' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['hip_joint_pain'][0] ? '#E1C340' : null, 'color': symptomState['hip_joint_pain'][0] ? '#fff' : null}} onClick={handleChange}>Hip joint pain</Button>
                            <Button name='muscle_weakness' value='Muscle weakness' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['muscle_weakness'][0] ? '#E1C340' : null, 'color': symptomState['muscle_weakness'][0] ? '#fff' : null}} onClick={handleChange}>Muscle weakness</Button>
                            <Button name='stiff_neck' value='Stiff neck' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['stiff_neck'][0] ? '#E1C340' : null, 'color': symptomState['stiff_neck'][0] ? '#fff' : null}} onClick={handleChange}>Stiff neck</Button>
                            <Button name='swelling_joints' value='Swelling joints' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['swelling_joints'][0] ? '#E1C340' : null, 'color': symptomState['swelling_joints'][0] ? '#fff' : null}} onClick={handleChange}>Swelling joints</Button>
                            <Button name='movement_stiffness' value='Movement stiffness' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['movement_stiffness'][0] ? '#E1C340' : null, 'color': symptomState['movement_stiffness'][0] ? '#fff' : null}} onClick={handleChange}>Movement stiffness</Button>
                            <Button name='spinning_movements' value='Spinning movements' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['spinning_movements'][0] ? '#E1C340' : null, 'color': symptomState['spinning_movements'][0] ? '#fff' : null}} onClick={handleChange}>Spinning movements</Button>
                            <Button name='loss_of_balance' value='Loss of balance' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['loss_of_balance'][0] ? '#E1C340' : null, 'color': symptomState['loss_of_balance'][0] ? '#fff' : null}} onClick={handleChange}>Loss of balance</Button>
                            <Button name='unsteadiness' value='Unsteadiness' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['unsteadiness'][0] ? '#E1C340' : null, 'color': symptomState['unsteadiness'][0] ? '#fff' : null}} onClick={handleChange}>Unsteadiness</Button>
                            <Button name='muscle_pain' value='Muscle pain' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['muscle_pain'][0] ? '#E1C340' : null, 'color': symptomState['muscle_pain'][0] ? '#fff' : null}} onClick={handleChange}>Muscle pain</Button>
                            <Button name='painful_walking' value='painful walking' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['painful_walking'][0] ? '#E1C340' : null, 'color': symptomState['painful_walking'][0] ? '#fff' : null}} onClick={handleChange}>Painful walking</Button>
                          </SymptomCheckedInfo>
                        </MapDataContainer>

                    </MapSymptomsBox>
                :
                    <Column2 onClick={handleClickCol2}>
                      <GridHeaderContainer>
                          <GridHeader>
                          Aches & Pains
                          </GridHeader>
                        </GridHeaderContainer>
                    </Column2>
                }

                {col3State ? 
                    <MapSymptomsBox>
                        <MapTop>
                            <Header>Cold-like Symptoms</Header>
                            <Cross onClick={handleClickCol3}>
                                <Button icon>
                                    <Icon size={'large'} name='delete'/>
                                </Button>
                            </Cross>
                        </MapTop>

                        <MapDataContainer>
                        <SymptomCheckedInfo>
                            <Button name='shivering' value='Shivering' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['shivering'][0] ? '#E1C340' : null, 'color': symptomState['shivering'][0] ? '#fff' : null}} onClick={handleChange}>Shivering</Button>
                            <Button name='chills' value='Chills' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['chills'][0] ? '#E1C340' : null, 'color': symptomState['chills'][0] ? '#fff' : null}} onClick={handleChange}>Chills</Button>
                            <Button name='cold_hands_and_feets' value='Cold hands and feets' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['cold_hands_and_feets'][0] ? '#E1C340' : null, 'color': symptomState['cold_hands_and_feets'][0] ? '#fff' : null}} onClick={handleChange}>Cold hands and feets</Button>
                            <Button name='cough' value='Cough' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['cough'][0] ? '#E1C340' : null, 'color': symptomState['cough'][0] ? '#fff' : null}} onClick={handleChange}>Cough</Button>
                            <Button name='vomiting' value='Vomiting' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['vomiting'][0] ? '#E1C340' : null, 'color': symptomState['vomiting'][0] ? '#fff' : null}} onClick={handleChange}>Vomiting</Button>
                            <Button name='continuous_sneezing' value='Continuous sneezing' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['continuous_sneezing'][0] ? '#E1C340' : null, 'color': symptomState['continuous_sneezing'][0] ? '#fff' : null}} onClick={handleChange}>Continuous sneezing</Button>
                            <Button name='high_fever' value='High fever' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['high_fever'][0] ? '#E1C340' : null, 'color': symptomState['high_fever'][0] ? '#fff' : null}} onClick={handleChange}>High fever</Button>
                            <Button name='patches_in_throat' value='Patches in throat' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['patches_in_throat'][0] ? '#E1C340' : null, 'color': symptomState['patches_in_throat'][0] ? '#fff' : null}} onClick={handleChange}>Patches in throat</Button>
                            <Button name='mild_fever' value='Mild fever' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['mild_fever'][0] ? '#E1C340' : null, 'color': symptomState['mild_fever'][0] ? '#fff' : null}} onClick={handleChange}>Mild fever</Button>
                            <Button name='phlegm' value='Phlegm' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['phlegm'][0] ? '#E1C340' : null, 'color': symptomState['phlegm'][0] ? '#fff' : null}} onClick={handleChange}>Phlegm</Button>
                            <Button name='malaise' value='Malaise' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['malaise'][0] ? '#E1C340' : null, 'color': symptomState['malaise'][0] ? '#fff' : null}} onClick={handleChange}>Malaise</Button>
                            <Button name='swelled_lymph_nodes' value='Swelled lymph nodes' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['swelled_lymph_nodes'][0] ? '#E1C340' : null, 'color': symptomState['swelled_lymph_nodes'][0] ? '#fff' : null}} onClick={handleChange}>Swelled lymph nodes</Button>
                            <Button name='throat_irritation' value='Throat irritation' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['throat_irritation'][0] ? '#E1C340' : null, 'color': symptomState['throat_irritation'][0] ? '#fff' : null}} onClick={handleChange}>Throat irritation</Button>
                            <Button name='runny_nose' value='Runny nose' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['runny_nose'][0] ? '#E1C340' : null, 'color': symptomState['runny_nose'][0] ? '#fff' : null}} onClick={handleChange}>Runny nose</Button>
                            <Button name='congestion' value='Congestion' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['congestion'][0] ? '#E1C340' : null, 'color': symptomState['congestion'][0] ? '#fff' : null}} onClick={handleChange}>Congestion</Button>
                            <Button name='ulcers_on_tongue' value='Ulcers on tongue' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['ulcers_on_tongue'][0] ? '#E1C340' : null, 'color': symptomState['ulcers_on_tongue'][0] ? '#fff' : null}} onClick={handleChange}>Ulcers on tongue</Button>
                            <Button name='mucoid_sputum' value='Mucoid sputum' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['mucoid_sputum'][0] ? '#E1C340' : null, 'color': symptomState['mucoid_sputum'][0] ? '#fff' : null}} onClick={handleChange}>Mucoid sputum</Button>
                            <Button name='rusty_sputum' value='Rusty sputum' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['rusty_sputum'][0] ? '#E1C340' : null, 'color': symptomState['rusty_sputum'][0] ? '#fff' : null}} onClick={handleChange}>Rusty sputum</Button>
                            <Button name='blood_in_sputum' value='Blood in sputum' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['blood_in_sputum'][0] ? '#E1C340' : null, 'color': symptomState['blood_in_sputum'][0] ? '#fff' : null}} onClick={handleChange}>Blood in sputum</Button>
                            <Button name='yellow_crust_ooze' value='Yellow crust ooze' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['yellow_crust_ooze'][0] ? '#E1C340' : null, 'color': symptomState['yellow_crust_ooze'][0] ? '#fff' : null}} onClick={handleChange}>Yellow crust ooze</Button>
                            <Button name='pain_behind_the_eyes' value='Pain behind the eyes' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['pain_behind_the_eyes'][0] ? '#E1C340' : null, 'color': symptomState['pain_behind_the_eyes'][0] ? '#fff' : null}} onClick={handleChange}>Pain behind the eyes</Button>
                            <Button name='redness_of_eyes' value='Redness of eyes' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['redness_of_eyes'][0] ? '#E1C340' : null, 'color': symptomState['redness_of_eyes'][0] ? '#fff' : null}} onClick={handleChange}>Redness of eyes</Button>
                            <Button name='sinus_pressure' value='Sinus pressure' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['sinus_pressure'][0] ? '#E1C340' : null, 'color': symptomState['sinus_pressure'][0] ? '#fff' : null}} onClick={handleChange}>Sinus pressure</Button>
                            <Button name='loss_of_smell' value='Loss of smell' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['loss_of_smell'][0] ? '#E1C340' : null, 'color': symptomState['loss_of_smell'][0] ? '#fff' : null}} onClick={handleChange}>Loss of smell</Button>
                            <Button name='watering_from_eyes' value='Watery eyes' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['watering_from_eyes'][0] ? '#E1C340' : null, 'color': symptomState['watering_from_eyes'][0] ? '#fff' : null}} onClick={handleChange}>Watery eyes</Button>
                            <Button name='red_sore_around_nose' value='Red sore around nose' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['red_sore_around_nose'][0] ? '#E1C340' : null, 'color': symptomState['red_sore_around_nose'][0] ? '#fff' : null}} onClick={handleChange}>Red sore around nose</Button>
                          </SymptomCheckedInfo>
                        </MapDataContainer>
                    </MapSymptomsBox>
                :
                    <Column3 onClick={handleClickCol3}>
                        <GridHeaderContainer>
                          <GridHeader>
                            Cold-like
                          </GridHeader>
                        </GridHeaderContainer>
                    </Column3>
                }

                {col4State ? 
                    <MapSymptomsBox>
                        <MapTop>
                            <Header>Tummy Symptoms</Header>
                            <Cross onClick={handleClickCol4}>
                                <Button icon>
                                    <Icon size={'large'} name='delete'/>
                                </Button>
                            </Cross>
                        </MapTop>

                        <MapDataContainer>
                        <SymptomCheckedInfo>
                            <Button name='obesity' value='Obesity' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['obesity'][0] ? '#E1C340' : null, 'color': symptomState['obesity'][0] ? '#fff' : null}} onClick={handleChange}>Obesity</Button>
                            <Button name='acidity' value='Acidity' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['acidity'][0] ? '#E1C340' : null, 'color': symptomState['acidity'][0] ? '#fff' : null}} onClick={handleChange}>Acidity</Button>
                            <Button name='weight_gain' value='Weight gain' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['weight_gain'][0] ? '#E1C340' : null, 'color': symptomState['weight_gain'][0] ? '#fff' : null}} onClick={handleChange}>Weight gain</Button>
                            <Button name='weight_loss' value='Weight loss' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['weight_loss'][0] ? '#E1C340' : null, 'color': symptomState['weight_loss'][0] ? '#fff' : null}} onClick={handleChange}>Weight loss</Button>
                            <Button name='indigestion' value='Indigestion' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['indigestion'][0] ? '#E1C340' : null, 'color': symptomState['indigestion'][0] ? '#fff' : null}} onClick={handleChange}>Indigestion</Button>
                            <Button name='constipation' value='Constipation' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['constipation'][0] ? '#E1C340' : null, 'color': symptomState['constipation'][0] ? '#fff' : null}} onClick={handleChange}>Constipation</Button>
                            <Button name='diarrhoea' value='Diarrhoea' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['diarrhoea'][0] ? '#E1C340' : null, 'color': symptomState['diarrhoea'][0] ? '#fff' : null}} onClick={handleChange}>Diarrhoea</Button>
                            <Button name='nausea' value='Nausea' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['nausea'][0] ? '#E1C340' : null, 'color': symptomState['nausea'][0] ? '#fff' : null}} onClick={handleChange}>Nausea</Button>
                            <Button name='loss_of_appetite' value='Loss of appetite' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['loss_of_appetite'][0] ? '#E1C340' : null, 'color': symptomState['loss_of_appetite'][0] ? '#fff' : null}} onClick={handleChange}>Loss of appetite</Button>
                            <Button name='pain_during_bowel_movements' value='Pain during bowel movements' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['pain_during_bowel_movements'][0] ? '#E1C340' : null, 'color': symptomState['pain_during_bowel_movements'][0] ? '#fff' : null}} onClick={handleChange}>Pain during bowel movements</Button>
                            <Button name='pain_in_anal_region' value='Pain in anal region' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['pain_in_anal_region'][0] ? '#E1C340' : null, 'color': symptomState['pain_in_anal_region'][0] ? '#fff' : null}} onClick={handleChange}>Pain in anal region</Button>
                            <Button name='bloody_stool' value='Bloody stool' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['bloody_stool'][0] ? '#E1C340' : null, 'color': symptomState['bloody_stool'][0] ? '#fff' : null}} onClick={handleChange}>Bloody stool</Button>
                            <Button name='irritation_in_anus' value='Irritation in anus' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['irritation_in_anus'][0] ? '#E1C340' : null, 'color': symptomState['irritation_in_anus'][0] ? '#fff' : null}} onClick={handleChange}>Irritation in anus</Button>
                            <Button name='excessive_hunger' value='Excessive hunger' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['excessive_hunger'][0] ? '#E1C340' : null, 'color': symptomState['excessive_hunger'][0] ? '#fff' : null}} onClick={handleChange}>Excessive hunger</Button>
                            <Button name='increased_appetite' value='Increased appetite' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['increased_appetite'][0] ? '#E1C340' : null, 'color': symptomState['increased_appetite'][0] ? '#fff' : null}} onClick={handleChange}>Increased appetite</Button>
                            <Button name='passage_of_gases' value='Passage of gases' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['passage_of_gases'][0] ? '#E1C340' : null, 'color': symptomState['passage_of_gases'][0] ? '#fff' : null}} onClick={handleChange}>Passage of gases</Button>
                          </SymptomCheckedInfo>
                        </MapDataContainer>
                    </MapSymptomsBox>
                :
                    <Column4 onClick={handleClickCol4}>
                        <GridHeaderContainer>
                          <GridHeader>
                            Tummy
                          </GridHeader>
                        </GridHeaderContainer>
                    </Column4>
                }

                {col5State ? 
                    <MapSymptomsBox>
                        <MapTop>
                            <Header>Mental Symptoms</Header>
                            <Cross onClick={handleClickCol5}>
                                <Button icon>
                                    <Icon size={'large'} name='delete'/>
                                </Button>
                            </Cross>
                        </MapTop>

                        <MapDataContainer>
                        <SymptomCheckedInfo>
                            <Button name='fatigue' value='Fatigue' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['fatigue'][0] ? '#E1C340' : null, 'color': symptomState['fatigue'][0] ? '#fff' : null}} onClick={handleChange}>Fatigue</Button>
                            <Button name='anxiety' value='Anxiety' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['anxiety'][0] ? '#E1C340' : null, 'color': symptomState['anxiety'][0] ? '#fff' : null}} onClick={handleChange}>Anxiety</Button>
                            <Button name='mood_swings' value='Mood swings' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['mood_swings'][0] ? '#E1C340' : null, 'color': symptomState['mood_swings'][0] ? '#fff' : null}} onClick={handleChange}>Mood swings</Button>
                            <Button name='restlessness' value='Restlessness' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['restlessness'][0] ? '#E1C340' : null, 'color': symptomState['restlessness'][0] ? '#fff' : null}} onClick={handleChange}>Restlessness</Button>
                            <Button name='lethargy' value='Lethargy' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['lethargy'][0] ? '#E1C340' : null, 'color': symptomState['lethargy'][0] ? '#fff' : null}} onClick={handleChange}>Lethargy</Button>
                            <Button name='breathlessness' value='Breathlessness' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['breathlessness'][0] ? '#E1C340' : null, 'color': symptomState['breathlessness'][0] ? '#fff' : null}} onClick={handleChange}>Breathlessness</Button>
                            <Button name='sweating' value='Sweating' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['sweating'][0] ? '#E1C340' : null, 'color': symptomState['sweating'][0] ? '#fff' : null}} onClick={handleChange}>Sweating</Button>
                            <Button name='dehydration' value='Dehydration' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['dehydration'][0] ? '#E1C340' : null, 'color': symptomState['dehydration'][0] ? '#fff' : null}} onClick={handleChange}>Dehydration</Button>
                            <Button name='headache' value='Headache' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['headache'][0] ? '#E1C340' : null, 'color': symptomState['headache'][0] ? '#fff' : null}} onClick={handleChange}>Headache</Button>
                            <Button name='fast_heart_rate' value='Fast heart rate' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['fast_heart_rate'][0] ? '#E1C340' : null, 'color': symptomState['fast_heart_rate'][0] ? '#fff' : null}} onClick={handleChange}>Fast heart rate</Button>
                            <Button name='dizziness' value='Dizziness' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['dizziness'][0] ? '#E1C340' : null, 'color': symptomState['dizziness'][0] ? '#fff' : null}} onClick={handleChange}>Dizziness</Button>
                            <Button name='cramps' value='Cramps' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['cramps'][0] ? '#E1C340' : null, 'color': symptomState['cramps'][0] ? '#fff' : null}} onClick={handleChange}>Cramps</Button>
                            <Button name='depression' value='Depression' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['depression'][0] ? '#E1C340' : null, 'color': symptomState['depression'][0] ? '#fff' : null}} onClick={handleChange}>Depression</Button>
                            <Button name='irritability' value='Irritability' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['irritability'][0] ? '#E1C340' : null, 'color': symptomState['irritability'][0] ? '#fff' : null}} onClick={handleChange}>Irritability</Button>
                            <Button name='increased_appetite' value='Increased appetite' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['increased_appetite'][0] ? '#E1C340' : null, 'color': symptomState['increased_appetite'][0] ? '#fff' : null}} onClick={handleChange}>Increased appetite</Button>
                            <Button name='chest_pain' value='Chest pain' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['chest_pain'][0] ? '#E1C340' : null, 'color': symptomState['chest_pain'][0] ? '#fff' : null}} onClick={handleChange}>Chest pain</Button>
                            <Button name='lack_of_concentration' value='Lack of concentration' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['lack_of_concentration'][0] ? '#E1C340' : null, 'color': symptomState['lack_of_concentration'][0] ? '#fff' : null}} onClick={handleChange}>Lack of concentration</Button>
                            <Button name='palpitations' value='Palpitations' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['palpitations'][0] ? '#E1C340' : null, 'color': symptomState['palpitations'][0] ? '#fff' : null}} onClick={handleChange}>Palpitations</Button>
                          </SymptomCheckedInfo>
                        </MapDataContainer>
                    </MapSymptomsBox>
                :
                    <Column5 onClick={handleClickCol5}>
                      <GridHeaderContainer>
                          <GridHeader>
                            Mental
                          </GridHeader>
                        </GridHeaderContainer>
                    </Column5>
                }

                {col6State ? 
                    <MapSymptomsBox>
                        <MapTop>
                            <Header>STI/STD Symptoms</Header>
                            <Cross onClick={handleClickCol6}>
                                <Button icon>
                                    <Icon size={'large'} name='delete'/>
                                </Button>
                            </Cross>
                        </MapTop>

                        <MapDataContainer>
                        <SymptomCheckedInfo>
                            <Button name='burning_micturition' value='Burning micturition' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['burning_micturition'][0] ? '#E1C340' : null, 'color': symptomState['burning_micturition'][0] ? '#fff' : null}} onClick={handleChange}>Burning micturition</Button>
                            <Button name='spotting_ urination' value='Spotting urination' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['spotting_ urination'][0] ? '#E1C340' : null, 'color': symptomState['spotting_ urination'][0] ? '#fff' : null}} onClick={handleChange}>Spotting urination</Button>
                            <Button name='dark_urine' value='Dark urine' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['dark_urine'][0] ? '#E1C340' : null, 'color': symptomState['dark_urine'][0] ? '#fff' : null}} onClick={handleChange}>Dark urine</Button>
                            <Button name='yellow_urine' value='Yellow urine' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['yellow_urine'][0] ? '#E1C340' : null, 'color': symptomState['yellow_urine'][0] ? '#fff' : null}} onClick={handleChange}>Yellow urine</Button>
                            <Button name='bladder_discomfort' value='Bladder discomfort' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['bladder_discomfort'][0] ? '#E1C340' : null, 'color': symptomState['bladder_discomfort'][0] ? '#fff' : null}} onClick={handleChange}>Bladder discomfort</Button>
                            <Button name='foul_smell_of urine' value='Foul smell of urine' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['foul_smell_of urine'][0] ? '#E1C340' : null, 'color': symptomState['foul_smell_of urine'][0] ? '#fff' : null}} onClick={handleChange}>Foul smell of urine</Button>
                            <Button name='continuous_feel_of_urine' value='Continuous feel of urine' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['continuous_feel_of_urine'][0] ? '#E1C340' : null, 'color': symptomState['continuous_feel_of_urine'][0] ? '#fff' : null}} onClick={handleChange}>Continuous feel of urine</Button>
                            <Button name='extra_marital_contacts' value='Extra marital contacts' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['extra_marital_contacts'][0] ? '#E1C340' : null, 'color': symptomState['extra_marital_contacts'][0] ? '#fff' : null}} onClick={handleChange}>Extra marital contacts</Button>
                            <Button name='abnormal_menstruation' value='Abnormal menstruation' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['abnormal_menstruation'][0] ? '#E1C340' : null, 'color': symptomState['abnormal_menstruation'][0] ? '#fff' : null}} onClick={handleChange}>Abnormal menstruation</Button>
                          </SymptomCheckedInfo>
                        </MapDataContainer>
                    </MapSymptomsBox>
                :
                    <Column6 onClick={handleClickCol6}>
                    <GridHeaderContainer>
                          <GridHeader>
                            STI/STD
                          </GridHeader>
                        </GridHeaderContainer>
                    </Column6>
                }

                {col7State ? 
                    <MapSymptomsBox>
                        <MapTop>
                            <Header> Liver Symptoms</Header>
                            <Cross onClick={handleClickCol7}>
                                <Button icon>
                                    <Icon size={'large'} name='delete'/>
                                </Button>
                            </Cross>
                        </MapTop>

                        <MapDataContainer>
                        <SymptomCheckedInfo>
                            <Button name='history_of_alcohol_consumption' value='History of alcohol consumption' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['history_of_alcohol_consumption'][0] ? '#E1C340' : null, 'color': symptomState['history_of_alcohol_consumption'][0] ? '#fff' : null}} onClick={handleChange}>History of alcohol consumption</Button>
                            <Button name='yellow_urine' value='Yellow urine' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['yellow_urine'][0] ? '#E1C340' : null, 'color': symptomState['yellow_urine'][0] ? '#fff' : null}} onClick={handleChange}>Yellow urine</Button>
                            <Button name='yellowish_skin' value='Yellowish skin' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['yellowish_skin'][0] ? '#E1C340' : null, 'color': symptomState['yellowish_skin'][0] ? '#fff' : null}} onClick={handleChange}>Yellowish skin</Button>
                            <Button name='yellowing_of_eyes' value='Yellowing of eyes' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['yellowing_of_eyes'][0] ? '#E1C340' : null, 'color': symptomState['yellowing_of_eyes'][0] ? '#fff' : null}} onClick={handleChange}>Yellowing of eyes</Button>
                            <Button name='toxic_look_(typhos)' value='Toxic look (typhos)' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['toxic_look_(typhos)'][0] ? '#E1C340' : null, 'color': symptomState['toxic_look_(typhos)'][0] ? '#fff' : null}} onClick={handleChange}>Toxic look (typhos)</Button>
                            <Button name='altered_sensorium' value='Altered sensorium' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['altered_sensorium'][0] ? '#E1C340' : null, 'color': symptomState['altered_sensorium'][0] ? '#fff' : null}} onClick={handleChange}>Altered sensorium</Button>
                            <Button name='belly_pain' value='Belly pain' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['belly_pain'][0] ? '#E1C340' : null, 'color': symptomState['belly_pain'][0] ? '#fff' : null}} onClick={handleChange}>Belly pain</Button>
                            <Button name='visual_disturbances' value='Visual disturbances' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['visual_disturbances'][0] ? '#E1C340' : null, 'color': symptomState['visual_disturbances'][0] ? '#fff' : null}} onClick={handleChange}>Visual disturbances</Button>
                            <Button name='receiving_blood_transfusion' value='Receiving blood transfusion' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['receiving_blood_transfusion'][0] ? '#E1C340' : null, 'color': symptomState['receiving_blood_transfusion'][0] ? '#fff' : null}} onClick={handleChange}>Receiving blood transfusion</Button>
                            <Button name='receiving_unsterile_injections' value='Receiving unsterile injections' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['receiving_unsterile_injections'][0] ? '#E1C340' : null, 'color': symptomState['receiving_unsterile_injections'][0] ? '#fff' : null}} onClick={handleChange}>Receiving unsterile injections</Button>
                            <Button name='coma' value='Coma' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['coma'][0] ? '#E1C340' : null, 'color': symptomState['coma'][0] ? '#fff' : null}} onClick={handleChange}>Coma</Button>
                            <Button name='stomach_bleeding' value='Stomach bleeding' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['stomach_bleeding'][0] ? '#E1C340' : null, 'color': symptomState['stomach_bleeding'][0] ? '#fff' : null}} onClick={handleChange}>Stomach bleeding</Button>
                            <Button name='distention_of_abdomen' value='Distention of abdomen' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['distention_of_abdomen'][0] ? '#E1C340' : null, 'color': symptomState['distention_of_abdomen'][0] ? '#fff' : null}} onClick={handleChange}>Distention of abdomen</Button>
                            <Button name='acute_liver_failure' value='Acute liver failure' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['acute_liver_failure'][0] ? '#E1C340' : null, 'color': symptomState['acute_liver_failure'][0] ? '#fff' : null}} onClick={handleChange}>Acute liver failure</Button>
                            <Button name='blurred_and_distorted_vision' value='Blurred and distorted vision' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['blurred_and_distorted_vision'][0] ? '#E1C340' : null, 'color': symptomState['blurred_and_distorted_vision'][0] ? '#fff' : null}} onClick={handleChange}>Blurred and distorted vision</Button>
                            <Button name='bruising' value='Bruising' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['bruising'][0] ? '#E1C340' : null, 'color': symptomState['bruising'][0] ? '#fff' : null}} onClick={handleChange}>Bruising</Button>
                            <Button name='swollen_legs' value='Swollen legs' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['swollen_legs'][0] ? '#E1C340' : null, 'color': symptomState['swollen_legs'][0] ? '#fff' : null}} onClick={handleChange}>Swollen_legs</Button>
                            <Button name='puffy_face_and_eyes' value='Puffy face and eyes' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['puffy_face_and_eyes'][0] ? '#E1C340' : null, 'color': symptomState['puffy_face_and_eyes'][0] ? '#fff' : null}} onClick={handleChange}>Puffy face and eyes</Button>
                            <Button name='internal_itching' value='Internal itching' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['internal_itching'][0] ? '#E1C340' : null, 'color': symptomState['internal_itching'][0] ? '#fff' : null}} onClick={handleChange}>Internal itching</Button>
                            <Button name='swollen_extremeties' value='Swollen extremeties' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['swollen_extremeties'][0] ? '#E1C340' : null, 'color': symptomState['swollen_extremeties'][0] ? '#fff' : null}} onClick={handleChange}>Swollen extremeties</Button>
                          </SymptomCheckedInfo>
                        </MapDataContainer>
                    </MapSymptomsBox>
                :
                    <Column7 onClick={handleClickCol7}>
                      <GridHeaderContainer>
                          <GridHeader>
                            Liver
                          </GridHeader>
                        </GridHeaderContainer>
                    </Column7>
                }

                {col8State ? 
                    <MapSymptomsBox>
                        <MapTop>
                            <Header>Diabetes Symptoms</Header>
                            <Cross onClick={handleClickCol8}>
                                <Button icon>
                                    <Icon size={'large'} name='delete'/>
                                </Button>
                            </Cross>
                        </MapTop>

                        <MapDataContainer>
                        <SymptomCheckedInfo>
                            <Button name='polyuria' value='Polyuria' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['polyuria'][0] ? '#E1C340' : null, 'color': symptomState['polyuria'][0] ? '#fff' : null}} onClick={handleChange}>Polyuria</Button>
                            <Button name='irregular_sugar_level' value='Irregular sugar level' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['irregular_sugar_level'][0] ? '#E1C340' : null, 'color': symptomState['irregular_sugar_level'][0] ? '#fff' : null}} onClick={handleChange}>Irregular sugar level</Button>
                            <Button name='sunken_eyes' value='Sunken eyes' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['sunken_eyes'][0] ? '#E1C340' : null, 'color': symptomState['sunken_eyes'][0] ? '#fff' : null}} onClick={handleChange}>Sunken eyes</Button>
                            <Button name='weight_loss' value='Weight loss' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['weight_loss'][0] ? '#E1C340' : null, 'color': symptomState['weight_loss'][0] ? '#fff' : null}} onClick={handleChange}>Weight loss</Button>
                            <Button name='fluid_overload' value='Fluid overload' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['fluid_overload'][0] ? '#E1C340' : null, 'color': symptomState['fluid_overload'][0] ? '#fff' : null}} onClick={handleChange}>Fluid overload</Button>
                            <Button name='swelling_of_stomach' value='Swelling of stomach' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['swelling_of_stomach'][0] ? '#E1C340' : null, 'color': symptomState['swelling_of_stomach'][0] ? '#fff' : null}} onClick={handleChange}>Swelling of stomach</Button>
                            <Button name='drying_and_tingling_lips' value='Drying and tingling lips' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['drying_and_tingling_lips'][0] ? '#E1C340' : null, 'color': symptomState['drying_and_tingling_lips'][0] ? '#fff' : null}} onClick={handleChange}>Drying and tingling lips</Button>
                            <Button name='slurred_speech' value='Slurred speech' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['slurred_speech'][0] ? '#E1C340' : null, 'color': symptomState['slurred_speech'][0] ? '#fff' : null}} onClick={handleChange}>Slurred speech</Button>
                            <Button name='family_history' value='Family history' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['family_history'][0] ? '#E1C340' : null, 'color': symptomState['family_history'][0] ? '#fff' : null}} onClick={handleChange}>Family history</Button>
                            <Button name='fluid_overload_1' value='Fluid overload 1' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['fluid_overload_1'][0] ? '#E1C340' : null, 'color': symptomState['fluid_overload_1'][0] ? '#fff' : null}} onClick={handleChange}>Fluid overload 1</Button>
                            <Button name='swollen_blood_vessels' value='Swollen blood vessels' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['swollen_blood_vessels'][0] ? '#E1C340' : null, 'color': symptomState['swollen_blood_vessels'][0] ? '#fff' : null}} onClick={handleChange}>Swollen blood vessels</Button>
                            <Button name='swollen_extremeties' value='Swollen extremeties' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['swollen_extremeties'][0] ? '#E1C340' : null, 'color': symptomState['swollen_extremeties'][0] ? '#fff' : null}} onClick={handleChange}>Swollen extremeties</Button>
                            <Button name='enlarged_thyroid' value='Enlarged thyroid' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['enlarged_thyroid'][0] ? '#E1C340' : null, 'color': symptomState['enlarged_thyroid'][0] ? '#fff' : null}} onClick={handleChange}>Enlarged thyroid</Button>
                        </SymptomCheckedInfo>

                        </MapDataContainer>
                    </MapSymptomsBox>
                :
                    <Column8 onClick={handleClickCol8}>
                      <GridHeaderContainer>
                          <GridHeader>
                            Diabetics
                          </GridHeader>
                        </GridHeaderContainer>
                    </Column8>
                }

                {col9State ? 
                    <MapSymptomsBox>
                        <MapTop>
                            <Header> Heart Symptoms</Header>
                            <Cross onClick={handleClickCol9}>
                                <Button icon>
                                    <Icon size={'large'} name='delete'/>
                                </Button>
                            </Cross>
                        </MapTop>

                        <MapDataContainer>
                        <SymptomCheckedInfo>
                            <Button name='puffy_face_and_eyes' value='Puffy face and eyes' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['puffy_face_and_eyes'][0] ? '#E1C340' : null, 'color': symptomState['puffy_face_and_eyes'][0] ? '#fff' : null}} onClick={handleChange}>Puffy face and eyes</Button>
                            <Button name='swollen_legs' value='Swollen legs' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['swollen_legs'][0] ? '#E1C340' : null, 'color': symptomState['swollen_legs'][0] ? '#fff' : null}} onClick={handleChange}>Swollen legs</Button>
                            <Button name='slurred_speech' value='Slurred speech' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['slurred_speech'][0] ? '#E1C340' : null, 'color': symptomState['slurred_speech'][0] ? '#fff' : null}} onClick={handleChange}>Slurred speech</Button>
                            <Button name='weakness_of_one_body_side' value='Weakness of one body side' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['weakness_of_one_body_side'][0] ? '#E1C340' : null, 'color': symptomState['weakness_of_one_body_side'][0] ? '#fff' : null}} onClick={handleChange}>Weakness of one body side</Button>
                            <Button name='family_history' value='Family history' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['family_history'][0] ? '#E1C340' : null, 'color': symptomState['family_history'][0] ? '#fff' : null}} onClick={handleChange}>Family history</Button>
                            <Button name='swollen_blood_vessels' value='Swollen blood vessels' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['swollen_blood_vessels'][0] ? '#E1C340' : null, 'color': symptomState['swollen_blood_vessels'][0] ? '#fff' : null}} onClick={handleChange}>Swollen blood vessels</Button>
                            <Button name='swollen_extremeties' value='Swollen extremeties' style={{'fontSize': '15px', 'margin': '1%', 'background': symptomState['swollen_extremeties'][0] ? '#E1C340' : null, 'color': symptomState['swollen_extremeties'][0] ? '#fff' : null}} onClick={handleChange}>Swollen extremeties</Button>
                        </SymptomCheckedInfo>
                        </MapDataContainer>
                    </MapSymptomsBox>
                :
                    <Column9 onClick={handleClickCol9}>
                      <GridHeaderContainer>
                          <GridHeader>
                            Heart
                          </GridHeader>
                        </GridHeaderContainer>
                    </Column9>
                }

                </SymptomSelectionWrapper>
            </InfoBox>

            <InfoBox>
                <SymptomCheckedWrapper>
                    <SymptomCheckedBox>
                        <SymptomCheckedInfo>

                          {
                            Object.entries(symptomState).map(item => {
                              return item[1][0] ?
                                  <Label key={item[0]} style={{'fontSize': '18px', 'margin': '1%'}} >
                                  {item[1][1]}
                                  <Icon name='delete' value={item} onClick={handleSypmSelectDel}/>
                                </Label> 
                                : null })
                          }
                             
                     </SymptomCheckedInfo>
                    </SymptomCheckedBox>

                    <ButtonContainer>
                        <ButtonWrapper>
                            <Button animated='vertical' style={{'fontSize':'30px', 'background':'#fff'}}>
                                <LinkHome to='/'>
                                <Button.Content hidden style={{'fontSize':'25px', }}>Home</Button.Content>

                                <Button.Content visible>
                                <Icon name='home' />
                                </Button.Content>
                                </LinkHome>
                            </Button>
                        
                            <Button animated='vertical' style={{'fontSize':'30px', 'background':'#fff'}} onClick={symptomSelectionRedo}>
                                <Button.Content hidden style={{'fontSize':'25px'}}>Redo</Button.Content>
                                <Button.Content visible>
                                <Icon name='redo' />
                            </Button.Content>
                            </Button>

                            <Button animated style={{'width':'50%', 'fontSize': '25px', 'background':'#E1C340', 'color': '#fff'}} onClick={handleClick}> 
                                <Button.Content visible> Diagnose Me!</Button.Content>
                                <Button.Content style={{'color':'#fff'}} hidden>
                                <Icon name='arrow right' style={{'fontSize':'30px'}} />
                                </Button.Content>
                            </Button>
                    
                        </ButtonWrapper>
                    </ButtonContainer>
                </SymptomCheckedWrapper>
            </InfoBox>
        </PredictionWrapper>
    </PredictionContainer>

    :

      <PredictionContainer>
          <PredictionWrapper>
              <InfoBox>
                  <SymptomCheckedWrapper>
                      <SymptomCheckedBox>
                          <SymptomCheckedInfo>

                  {
                     
                     Object.entries(symptomState).map(item => {
                       return item[1][0] ?
                            <Label style={{'fontSize': '18px', 'margin': '1%'}}>
                           {item[1][1]}
                         </Label> 
                         : null })
                  }

                     </SymptomCheckedInfo>
                    </SymptomCheckedBox>

                    <ButtonContainer>
                        <ButtonWrapper>
                            <Button animated='vertical' style={{'fontSize':'30px', 'background':'#fff'}}>
                                <LinkHome to='/'>
                                <Button.Content hidden style={{'fontSize':'25px', }}>Home</Button.Content>

                                <Button.Content visible>
                                <Icon name='home' />
                                </Button.Content>
                                </LinkHome>
                            </Button>
                        
                            <Button disabled animated='vertical' style={{'fontSize':'30px', 'background':'#fff'}} onClick={symptomSelectionRedo}>
                                <Button.Content hidden style={{'fontSize':'25px'}}>Redo</Button.Content>
                                <Button.Content visible>
                                <Icon name='redo' />
                            </Button.Content>
                            </Button>

                            <Button animated style={{'width':'50%', 'fontSize': '25px', 'background':'#E1C340', 'color': '#fff'}} onClick={handleNewPrediction}> 
                                <Button.Content visible> New Diagnosis</Button.Content>
                                <Button.Content style={{'color':'#fff'}} hidden>
                                <Icon name='arrow right' style={{'fontSize':'30px'}} />
                                </Button.Content>
                            </Button>
                        </ButtonWrapper>
                    </ButtonContainer>
                </SymptomCheckedWrapper>
            </InfoBox>

            <InfoBox>
            <DiseaseDisplayWrapper>

               <DisplayHead>
                  <MainHeader>
                      Predicted Diagnosis: <span style={{'background': '#00FFFF', 'padding': '1%', 'border-radius': '5px'}}>{diseaseInfo[0][prediction].disease}</span>
                  </MainHeader>
                  <SmallHeader>
                      Also called: {diseaseInfo[0][prediction].also_called}
                  </SmallHeader>
               </DisplayHead>

               <DisplayButtonContainer>
                <DisplayButtonWrapper>
                    <DisplayButton style={{'background': isOverview ? '#00FFFF' : null, 'border-radius': '5px'}} onClick={handleOverviewClick}>Overview</DisplayButton>
                    <DisplayButton style={{'background': isSymptoms ? '#00FFFF' : null, 'border-radius': '5px'}} onClick={handleSymptomsClick}>Symptoms</DisplayButton>
                    <DisplayButton style={{'background': isTreatments ? '#00FFFF' : null, 'border-radius': '5px'}} onClick={handleTreatmentClick}>Treatments</DisplayButton>
                    <DisplayButton style={{'background': isSpecialists ? '#00FFFF' : null, 'border-radius': '5px'}} onClick={handleSpecialistsClick}>Specialists</DisplayButton>
                </DisplayButtonWrapper>
               </DisplayButtonContainer>

              
            { isOverview ?
              <div style={{'height': '77%'}}>
               <DisplayBody>
                  <Headline>
                      {diseaseInfo[0][prediction].overview.long_exp[0]}
                  </Headline>

                  <Body>
                    {diseaseInfo[0][prediction].overview.long_exp[1]}
                  </Body>
               </DisplayBody>
                                
              <Divider></Divider>

               <DisplayShortBody>
                {
                  diseaseInfo[0][prediction].overview.short_exp.map((item, i)=>(
                    <Label key={i} style={{'fontSize': '14px', 'margin': '1%', 'backgroundColor': '#00FFFF'}}>{item}</Label>
                  ))
                }
               </DisplayShortBody>
              </div>
               : null }

               { isSymptoms ?
              <div style={{'height': '77%'}}>
               <DisplayBody>
                  <Headline>
                      {diseaseInfo[0][prediction].symptoms.long_exp.headline}
                  </Headline>

                  <Body>
                    {diseaseInfo[0][prediction].symptoms.long_exp.text}
                  </Body>

                  <Headline style={{'marginTop':'-1%'}}>
                      People may experience:
                  </Headline>
         
               <List celled style={{'paddingLeft': '4%', 'paddingRight': '4%'}}>
                {
                  diseaseInfo[0][prediction].symptoms.short_exp.map((item, i)=>(
                    <List.Item key={i} style={{'marginBottom': '1%'}}>
                        <List.Content>
                          <List.Header style={{'fontSize':'16px'}}>{item[0]}</List.Header>
                            {item[1]}
                        </List.Content>
                    </List.Item>
                  ))
                }
                </List>
                </DisplayBody>
              </div>
               : null }

              { isTreatments ?
              <div style={{'height': '77%'}}>
               <DisplayBody>
                  <Headline>
                      {diseaseInfo[0][prediction].treatments.text.headline}
                  </Headline>

                  <Body>
                    {diseaseInfo[0][prediction].treatments.text.text}
                  </Body>

                  <Headline style={{'marginTop':'-1%'}}>
                      Medication:
                  </Headline>

                  <Body>
                    {diseaseInfo[0][prediction].treatments.medication}
                  </Body>
                </DisplayBody>
              </div>
               : null }

              { isSpecialists ?

              <div style={{'height': '77%'}}>
               <DisplayBody>
                <Headline>You may want to see:</Headline>

               <List celled style={{'paddingLeft': '4%', 'paddingRight': '4%'}}>
                {
                  diseaseInfo[0][prediction].specialists.map((item, i)=>(
                    <List.Item key={i} style={{'marginBottom': '3%'}}>
                        <List.Content>
                          <List.Header style={{'fontSize':'16px', 'marginBottom': '1%'}}>{item[0]}</List.Header>
                            {item[1]}
                        </List.Content>
                    </List.Item>
                  ))
                }
                </List>
               </DisplayBody>
              </div>
               : null }
           
            </DiseaseDisplayWrapper>
            </InfoBox>

        </PredictionWrapper>
    </PredictionContainer>
    }

</>
 
  );
}

export default Prediction;



  


        