import React from 'react';

const DiagnosisResults = ({ results = [] }) => {  // Default to an empty array
  return (
    <div className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Diagnosis Results</h2>
      {results.length > 0 ? (
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          {results.map((result, index) => (
            <li key={index} className="mb-2">
              <strong className="text-gray-800 dark:text-gray-100">Date:</strong> {result.date} - 
              <strong className="text-gray-800 dark:text-gray-100"> Diagnosis:</strong> {result.result} - 
              <strong className="text-gray-800 dark:text-gray-100"> This is the percentange confidence level in this diagnosis :</strong> {result.confidence}%
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 dark:text-gray-400">No diagnosis available. Please make a prediction.</p>
      )}
    </div>
  );
};

export default DiagnosisResults;
