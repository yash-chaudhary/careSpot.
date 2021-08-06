# MSA AI Project
Check out the final project here: {website link goes here}

## The Idea
### Problem Statement
>The dawn of COVID-19 has made people more invested in their personal health. If they display symptoms of COVID-19, they are ordered to quarantine to avoid the       risk of infecting others. But what about other diseases? Unless you’re medically inclined, it incredibly hard to have certainty in a diagnosis you find with a web   search, given the symptoms you’re experiencing. Therefore, the problem is that the average person knows the symptoms they are feeling but do not have the medical   knowledge to determine a possible diagnosis. The pandemic has shown that people need accurate information and data to be assured about the health of themselves     and others. 
>
>Machine learning is able to automate the diagnosis process by leveraging datasets that state the symptoms and their subsequent diagnosis to predict the disease that a patient may have. Using supervised learning we can predict the diagnosis (label) from a list of patient symptoms (features) using different classification models. The use of AI will not only educate the public on the diseases they might have but it can also double as a “second opinion” for patients and doctors.

## The Approach
### Data Phase
>In the data phase, data was sourced from kaggle at https://www.kaggle.com/kaushil268/disease-prediction-using-machine-learning which was then traced back to its original source at https://people.dbmi.columbia.edu/~friedma/Projects/DiseaseSymptomKB/index.html. It was important that this data was reputable and accurate. Other datasets were also sourced however the predicted diseases for other datasets were not reminiscent of what a general patient would be diagnosed with, i.e. the dieases were very extreme diagnosis. Moreover, pre-processing, a data mining technique was carried out to remove any tainted data points such as empty columns and rows and specific cells, to transform the data into a more understandable format. Originally I thought I would remove duplicate data rows pertaining to diseases, however in the end I concluded that these duplicate row of data would mean that these specific symptoms define a specific diagnosis.
>
>Since a classification model was to be trained with this data, The 132 features (all the symptoms) had to be defined as present of not present for a disease diagnosis. Hence for a diagnosis, all 1's defined a specific symptoms to be related to the disease diagnosis and all 0's define other symptoms as not related to the disease diagnosis. The labels (disease diagnosis) were turned into discrete numerical values representing the different diseae diagnoses. Lastly, initial data investigations were performed using exploratory data analysis (EDA) to find any preliminary trends between different features (symptoms) before formal machine learning was carried out.

### Model Phase
>After the data phase, classification machine learning models were ready to be trained on the cleaned dataset. The dataset had been split into training and testing data where the testing data was not the same as the training data. Initially Jupyter Notebooks were used to train and test models. Naive Bayes, Random Forest and Decesion Tree classification models were used on the datasets.
>
>In the end I used Azure Machine Learning Studio, more specifically Automated ML to fit machine learning models to the dataset. Automated ML leverages the scalability of cloud compute to automatically try multiple pre-processing techniques and model-training algorithms in parallel to find the best performing supervised classifcation machine learning model for your data. I was able to compare the performance of each model and find out AutomatedML's reasoning for the best model they picked. AutomatedML makes my final product highly scalable since if new data comes in, many models can be trained and tested on these new datasets very easily. And since retraining and model evaluation is a critical step in the machine learning lifecyle, I can't think of a more seamless way of continually improving the machine learning models that will be used in production.

### Production Phase
>To properly leverage machine model, a fullstack web application was created around the core machine learning capability. AutomatedML allowed me to choose the best performing model and deploy this model as a REST endpoint, so essentially I was able to send a request (list of symptoms selected by the user) to this REST endpoint and retrieve a response (predicted disease diagnosis) that would be displayed to the end user. On the backend, a Flask app handled all the logic of requesting information from the REST endpoint. A React.js frontend was used to interact with the user and display their predicted diagnosis based on the symptoms they selected and supporting information on the diseases scraped from Google's disease knowledge base. The REST endpoint makes this application highly scalable as many users are able to select their symptoms and retrieve a response. The server end of REST is stateless, which means that the server doesn't have to store anything across requests. This means that there doesn't have to be (much) communication between servers, making it horizontally scalable. Using a Flask allows the app to be more extensible as other Azure Cognitive Services such as Speech to Text or Translator can be embedded in the application to make it more inclusive for everyone to use. 

## Solution Architecture
![Image of Solution Architecture Diagram](https://github.com/yash-chaudhary/careSpot/blob/main/Assets/Solution_Architecture_Diagram.png)

## Implementation
Link to final project: {website link goes here}

// ------ Add DEMO recording here -------

### Requirements (flask app)
Package | Version
------------ | -------------
flask | 2.0.1
python-dotenv | 0.18.0
requests | 2.26.0
flask-cors | 3.0.10
azureml-train-automl-runtime | 1.32.0
inference-schema | 1.3.0
azureml-interpret | 1.32.0
azureml-defaults | 1.32.0
numpy | 1.16.0
pandas | 0.25.1
scikit-learn | 0.22.1
py-xgboost | 0.90 
fbprophet| 0.5
holidays| 0.9.11
psutil | 5.2.2

Installing requirements:
```
cd server
pip install -r requirements.txt
```

Run app locally:
```
cd server
python server.py
```

### Requirements (react app)
Package | Version
------------ | -------------
@testing-library/jest-dom | 5.14.1
@testing-library/react | 11.2.7
@testing-library/user-event | 12.8.3
axios| 0.21.1
react| 17.0.2
react-animations | 1.0.0
react-dom | 17.0.2
react-router-dom| 5.2.0
react-scripts| 4.0.3
react-typist| 2.0.5
semantic-ui-css| 2.4.1
semantic-ui-react| 2.0.3
styled-components | 5.3.0
web-vitals | 1.1.2

Installing requirements:
```
cd client
npm install
```

Run app locally:
```
cd client
npm start
```



