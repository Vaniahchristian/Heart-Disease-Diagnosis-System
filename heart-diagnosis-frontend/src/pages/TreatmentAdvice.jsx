import React from 'react';

const TreatmentAdvice = ({ treatment, lifestyle, medication, followUp }) => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Personalized Treatment Advice</h2>

      {treatment ? (
        <>
          {/* General Treatment Overview */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">General Recommendations</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{treatment}</p>
          </div>

          {/* Lifestyle Changes */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-green-700 dark:text-green-300">Lifestyle Modifications</h3>
            {lifestyle ? (
              <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                {lifestyle.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">No specific lifestyle changes provided.</p>
            )}
          </div>

          {/* Medication Recommendations */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-red-700 dark:text-red-300">Medication & Treatment</h3>
            {medication ? (
              <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                {medication.map((med, index) => (
                  <li key={index}>{med}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">No specific medications provided.</p>
            )}
          </div>

          {/* Follow-Up & Monitoring */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300">Follow-Up & Monitoring</h3>
            {followUp ? (
              <p className="text-gray-700 dark:text-gray-300 mt-2">{followUp}</p>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">No follow-up recommendations provided.</p>
            )}
          </div>
        </>
      ) : (
        <p className="text-gray-500 dark:text-gray-400">
          No treatment advice available. Please get a diagnosis or consult with a healthcare provider.
        </p>
      )}
    </div>
  );
};

export default TreatmentAdvice;
