from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import pandas as pd

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the trained model and scaler
model = joblib.load('C:\\Users\\Karim\\Desktop\\interview\\model\\heart_disease_model.joblib')
scaler = joblib.load('C:\\Users\\Karim\\Desktop\\interview\\model\\scaler.joblib')

@app.route('/predict', methods=['POST'])
def predict():
    # Get JSON data from the request
    data = request.json

    # Extract features and convert to a DataFrame with correct column names
    feature_names = ['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 
                     'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal']
    features_df = pd.DataFrame([data['features']], columns=feature_names)

    # Scale the features
    scaled_features = scaler.transform(features_df)

    # Make prediction and get probability
    prediction = model.predict(scaled_features)
    probability = model.predict_proba(scaled_features)[0][1]  # Probability of the positive class (heart disease)

    # Ensure probability is within the correct range [0, 1]
    normalized_probability = np.clip(probability, 0, 1)  # Clips probability within the range of 0 and 1

    # Return the prediction and normalized probability
    return jsonify({
        'prediction': int(prediction[0]),
        'probability': normalized_probability
    })

if __name__ == '__main__':
    app.run(debug=True)
