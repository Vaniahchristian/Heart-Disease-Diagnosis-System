import React, { useState } from 'react';

function Prediction({ setResults }) {
  const [features, setFeatures] = useState({
    age: '',
    sex: '',
    cp: '',
    trestbps: '',
    chol: '',
    fbs: '',
    restecg: '',
    thalach: '',
    exang: '',
    oldpeak: '',
    slope: '',
    ca: '',
    thal: '',
  });

  const [prediction, setPrediction] = useState(null);
  const [probability, setProbability] = useState(null);

  // Handle input changes and update the features state
  const handleChange = (e) => {
    setFeatures({ ...features, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Determine the API endpoint based on the environment
    const apiUrl =
      window.location.hostname === "localhost"
        ? "http://127.0.0.1:5000/predict"
        : "https://heart-disease-diagnosis-system.onrender.com/predict";

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ features: Object.values(features).map(Number) }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setPrediction(data.prediction);

      // Clamp the probability between 0 and 1, then convert to percentage
      const clampedProbability = Math.min(Math.max(data.probability, 0), 1); // Ensure value is between 0 and 1
      setProbability(clampedProbability);

      // Ensure confidence is between 0 and 100
      const confidence = (clampedProbability * 100).toFixed(2); // Convert to percentage

      // Store prediction result in results
      const newResult = {
        date: new Date().toLocaleString(),
        result: data.prediction === 1 ? 'Heart Disease Detected' : 'No Heart Disease Detected',
        confidence: confidence,
      };
      setResults((prevResults) => [...prevResults, newResult]); // Update results state
    } catch (error) {
      console.error('Error during prediction:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Heart Disease Prediction</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        {Object.keys(features).map((key) => (
          <div key={key} className="mb-4">
            <label htmlFor={key} className="block text-gray-700 font-semibold mb-2">
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </label>
            <input
              type="number"
              id={key}
              name={key}
              value={features[key]}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md text-gray-800 focus:outline-none focus:border-blue-500"
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Predict
        </button>
      </form>

      {prediction !== null && (
        <div className="w-full max-w-md mx-auto mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Prediction Result:</h2>
          <p className="text-lg">
            {prediction === 1 ? 'Heart Disease Detected' : 'No Heart Disease Detected'}
          </p>
          <p className="text-lg">
            Probability:{' '}
            {probability !== null && probability !== undefined
              ? `${(probability * 100).toFixed(2)}%`
              : 'N/A'}
          </p>
        </div>
      )}
    </div>
  );
}

export default Prediction;
