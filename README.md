# Heart Disease Prediction Application

This web application predicts heart disease based on user-provided features. It uses a machine learning model to make predictions and includes interpretability features to explain the model’s decisions.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [How to Run the Application](#how-to-run-the-application)
- [How the Model Works](#how-the-model-works)
- [Contributing](#contributing)
- [License](#license)

## Features

- User-friendly interface for inputting patient features
- Heart disease prediction based on input features
- Probability score displayed with prediction
- Feature contribution analysis using SHAP for interpretability
- Responsive design for various devices

## Technologies Used

- **Frontend**: React, React Router, Tailwind CSS
- **Backend**: Flask, Joblib, SHAP, Scikit-learn
- **Database**: None (currently uses in-memory processing)
- **API**: RESTful API for predictions
- **Hosting**: Local environment (Flask for backend, Vercel for frontend)

## Setup Instructions




### Prerequisites

- Python 3.x
- Node.js and npm
- A local or virtual environment for Python

### Backend Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Vaniahchristian/Heart-Disease-Diagnosis-System.git
   cd Heart-Disease-Diagnosis-System/backend

2. **Install required Python packages**:
    ```bash
    pip install -r requirements.txt


    cd Heart-Disease-Diagnosis-System/backend

3. **Start the Flask server**:
   ```bash
   python app.py


4. **Easy set up**
    

    Run this frontend on vercel
    [Vercel Project Link](https://heart-disease-diagnosis-system-1.vercel.app): Heart Disease Diagnosis System on Vercel

    with the backend running locally and rontend running on vercel. you will be able to  see the project



### **Frontend Setup**

    ``bash
    cd ../heart-diagnosis-frontend


1. **Install required Node.js packages:**

   ```bash
     npm install
2. **Start the React development server:**
   ```bash

   npm start


### **How to Run the Application**

  Ensure both the backend and frontend servers are running.

  Open your web browser and navigate to http://localhost:3000.

  Fill out the form with the required patient features and click "Predict".

  The application displays the prediction result, probability, and feature contributions.

  if you click on the vercel link .just login with any details e.g (email : vierycalliper@gmail.com , password : 0754092850)

  NB: No need to create account

   Click on Heart disease prediction on the side bar and input the features
   
   All the predictions will be displayed in the Diagnosis Results.
   

 ### **How the Model Works**
   The heart disease prediction model is built through the following steps:

   Preprocessing: Normalization and encoding of categorical variables.

   Model Training: The model is trained with a supervised learning algorithm ( Logistic Regression).

   Model Evaluation: Evaluated with metrics such as accuracy, precision, recall, and F1-score.

   Predictions: Input features are scaled using the pre-trained scaler and passed to the model for prediction.


### **Contributing**
    Contributions are welcome! To contribute, please fork the repository and create a pull request with your changes.

### **Important Links**
   [Colab Model](https://colab.research.google.com/drive/19gvQ4v1JO2boiuvkoJG_A45YW1jU31dh?usp=sharing): Link to Colab Notebook

   [GitHub Repository](https://github.com/Vaniahchristian/Heart-Disease-Diagnosis-System): Heart Disease Diagnosis System

   [Vercel Project Link](https://heart-disease-diagnosis-system-1.vercel.app): Heart Disease Diagnosis System on Vercel
   