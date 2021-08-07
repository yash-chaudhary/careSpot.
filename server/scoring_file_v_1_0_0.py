# ---------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# ---------------------------------------------------------
import json
import logging
import os
import pickle
import numpy as np
import pandas as pd
import joblib

import azureml.automl.core
from azureml.automl.core.shared import logging_utilities, log_server
from azureml.telemetry import INSTRUMENTATION_KEY

from inference_schema.schema_decorators import input_schema, output_schema
from inference_schema.parameter_types.numpy_parameter_type import NumpyParameterType
from inference_schema.parameter_types.pandas_parameter_type import PandasParameterType


input_sample = pd.DataFrame({"itching": pd.Series([0], dtype="int64"), "skin_rash": pd.Series([0], dtype="int64"), "nodal_skin_eruptions": pd.Series([0], dtype="int64"), "continuous_sneezing": pd.Series([0], dtype="int64"), "shivering": pd.Series([0], dtype="int64"), "chills": pd.Series([0], dtype="int64"), "joint_pain": pd.Series([0], dtype="int64"), "stomach_pain": pd.Series([0], dtype="int64"), "acidity": pd.Series([0], dtype="int64"), "ulcers_on_tongue": pd.Series([0], dtype="int64"), "muscle_wasting": pd.Series([0], dtype="int64"), "vomiting": pd.Series([0], dtype="int64"), "burning_micturition": pd.Series([0], dtype="int64"), "spotting_ urination": pd.Series([0], dtype="int64"), "fatigue": pd.Series([0], dtype="int64"), "weight_gain": pd.Series([0], dtype="int64"), "anxiety": pd.Series([0], dtype="int64"), "cold_hands_and_feets": pd.Series([0], dtype="int64"), "mood_swings": pd.Series([0], dtype="int64"), "weight_loss": pd.Series([0], dtype="int64"), "restlessness": pd.Series([0], dtype="int64"), "lethargy": pd.Series([0], dtype="int64"), "patches_in_throat": pd.Series([0], dtype="int64"), "irregular_sugar_level": pd.Series([0], dtype="int64"), "cough": pd.Series([0], dtype="int64"), "high_fever": pd.Series([0], dtype="int64"), "sunken_eyes": pd.Series([0], dtype="int64"), "breathlessness": pd.Series([0], dtype="int64"), "sweating": pd.Series([0], dtype="int64"), "dehydration": pd.Series([0], dtype="int64"), "indigestion": pd.Series([0], dtype="int64"), "headache": pd.Series([0], dtype="int64"), "yellowish_skin": pd.Series([0], dtype="int64"), "dark_urine": pd.Series([0], dtype="int64"), "nausea": pd.Series([0], dtype="int64"), "loss_of_appetite": pd.Series([0], dtype="int64"), "pain_behind_the_eyes": pd.Series([0], dtype="int64"), "back_pain": pd.Series([0], dtype="int64"), "constipation": pd.Series([0], dtype="int64"), "abdominal_pain": pd.Series([0], dtype="int64"), "diarrhoea": pd.Series([0], dtype="int64"), "mild_fever": pd.Series([0], dtype="int64"), "yellow_urine": pd.Series([0], dtype="int64"), "yellowing_of_eyes": pd.Series([0], dtype="int64"), "acute_liver_failure": pd.Series([0], dtype="int64"), "fluid_overload": pd.Series([0], dtype="int64"), "swelling_of_stomach": pd.Series([0], dtype="int64"), "swelled_lymph_nodes": pd.Series([0], dtype="int64"), "malaise": pd.Series([0], dtype="int64"), "blurred_and_distorted_vision": pd.Series([0], dtype="int64"), "phlegm": pd.Series([0], dtype="int64"), "throat_irritation": pd.Series([0], dtype="int64"), "redness_of_eyes": pd.Series([0], dtype="int64"), "sinus_pressure": pd.Series([0], dtype="int64"), "runny_nose": pd.Series([0], dtype="int64"), "congestion": pd.Series([0], dtype="int64"), "chest_pain": pd.Series([0], dtype="int64"), "weakness_in_limbs": pd.Series([0], dtype="int64"), "fast_heart_rate": pd.Series([0], dtype="int64"), "pain_during_bowel_movements": pd.Series([0], dtype="int64"), "pain_in_anal_region": pd.Series([0], dtype="int64"), "bloody_stool": pd.Series([0], dtype="int64"), "irritation_in_anus": pd.Series([0], dtype="int64"), "neck_pain": pd.Series([0], dtype="int64"), "dizziness": pd.Series([0], dtype="int64"), "cramps": pd.Series([0], dtype="int64"), "bruising": pd.Series([0], dtype="int64"), "obesity": pd.Series([0], dtype="int64"), "swollen_legs": pd.Series([0], dtype="int64"), "swollen_blood_vessels": pd.Series([0], dtype="int64"), "puffy_face_and_eyes": pd.Series([0], dtype="int64"), "enlarged_thyroid": pd.Series([0], dtype="int64"), "brittle_nails": pd.Series([0], dtype="int64"), "swollen_extremeties": pd.Series([0], dtype="int64"), "excessive_hunger": pd.Series([0], dtype="int64"), "extra_marital_contacts": pd.Series([0], dtype="int64"), "drying_and_tingling_lips": pd.Series([0], dtype="int64"), "slurred_speech": pd.Series([0], dtype="int64"), "knee_pain": pd.Series([0], dtype="int64"), "hip_joint_pain": pd.Series([0], dtype="int64"), "muscle_weakness": pd.Series([0], dtype="int64"), "stiff_neck": pd.Series([0], dtype="int64"), "swelling_joints": pd.Series([0], dtype="int64"), "movement_stiffness": pd.Series([0], dtype="int64"), "spinning_movements": pd.Series([0], dtype="int64"), "loss_of_balance": pd.Series([0], dtype="int64"), "unsteadiness": pd.Series([0], dtype="int64"), "weakness_of_one_body_side": pd.Series([0], dtype="int64"), "loss_of_smell": pd.Series([0], dtype="int64"), "bladder_discomfort": pd.Series([0], dtype="int64"), "foul_smell_of urine": pd.Series([0], dtype="int64"), "continuous_feel_of_urine": pd.Series([0], dtype="int64"), "passage_of_gases": pd.Series([0], dtype="int64"), "internal_itching": pd.Series([0], dtype="int64"), "toxic_look_(typhos)": pd.Series([0], dtype="int64"), "depression": pd.Series([0], dtype="int64"), "irritability": pd.Series([0], dtype="int64"), "muscle_pain": pd.Series([0], dtype="int64"), "altered_sensorium": pd.Series([0], dtype="int64"), "red_spots_over_body": pd.Series([0], dtype="int64"), "belly_pain": pd.Series([0], dtype="int64"), "abnormal_menstruation": pd.Series([0], dtype="int64"), "dischromic _patches": pd.Series([0], dtype="int64"), "watering_from_eyes": pd.Series([0], dtype="int64"), "increased_appetite": pd.Series([0], dtype="int64"), "polyuria": pd.Series([0], dtype="int64"), "family_history": pd.Series([0], dtype="int64"), "mucoid_sputum": pd.Series([0], dtype="int64"), "rusty_sputum": pd.Series([0], dtype="int64"), "lack_of_concentration": pd.Series([0], dtype="int64"), "visual_disturbances": pd.Series([0], dtype="int64"), "receiving_blood_transfusion": pd.Series([0], dtype="int64"), "receiving_unsterile_injections": pd.Series([0], dtype="int64"), "coma": pd.Series([0], dtype="int64"), "stomach_bleeding": pd.Series([0], dtype="int64"), "distention_of_abdomen": pd.Series([0], dtype="int64"), "history_of_alcohol_consumption": pd.Series([0], dtype="int64"), "fluid_overload_1": pd.Series([0], dtype="int64"), "blood_in_sputum": pd.Series([0], dtype="int64"), "prominent_veins_on_calf": pd.Series([0], dtype="int64"), "palpitations": pd.Series([0], dtype="int64"), "painful_walking": pd.Series([0], dtype="int64"), "pus_filled_pimples": pd.Series([0], dtype="int64"), "blackheads": pd.Series([0], dtype="int64"), "scurring": pd.Series([0], dtype="int64"), "skin_peeling": pd.Series([0], dtype="int64"), "silver_like_dusting": pd.Series([0], dtype="int64"), "small_dents_in_nails": pd.Series([0], dtype="int64"), "inflammatory_nails": pd.Series([0], dtype="int64"), "blister": pd.Series([0], dtype="int64"), "red_sore_around_nose": pd.Series([0], dtype="int64"), "yellow_crust_ooze": pd.Series([0], dtype="int64")})
output_sample = np.array([0])
try:
    log_server.enable_telemetry(INSTRUMENTATION_KEY)
    log_server.set_verbosity('INFO')
    logger = logging.getLogger('azureml.automl.core.scoring_script')
except:
    pass


def init():
    global model
    # This name is model.id of model that we want to deploy deserialize the model file back
    # into a sklearn model
    model_path = os.path.join(os.getenv('AZUREML_MODEL_DIR'), 'model.pkl')
    path = os.path.normpath(model_path)
    path_split = path.split(os.sep)
    log_server.update_custom_dimensions({'model_name': path_split[-3], 'model_version': path_split[-2]})
    try:
        logger.info("Loading model from path.")
        model = joblib.load(model_path)
        logger.info("Loading successful.")
    except Exception as e:
        logging_utilities.log_traceback(e, logger)
        raise


@input_schema('data', PandasParameterType(input_sample))
@output_schema(NumpyParameterType(output_sample))
def run(data):
    try:
        result = model.predict(data)
        return json.dumps({"result": result.tolist()})
    except Exception as e:
        result = str(e)
        return json.dumps({"error": result})
