import React from 'react';

const EducationContent = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Heart Disease Management and Educational Content</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Heart disease refers to various conditions that affect the heart's structure and function. It can lead to serious health complications and requires effective management.
      </p>
      <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">Common Symptoms</h3>
      <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
        <li>Chest pain or discomfort</li>
        <li>Shortness of breath</li>
        <li>Fatigue during physical activity</li>
        <li>Irregular heartbeat</li>
      </ul>
      <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">Treatment Options</h3>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Treatment may include lifestyle changes, medications, and procedures such as angioplasty or surgery, depending on the severity and type of heart disease.
      </p>
      <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">When to See a Doctor</h3>
      <p className="text-gray-700 dark:text-gray-300">
        Seek medical attention if you experience persistent symptoms like chest pain, severe shortness of breath, or if your symptoms worsen over time.
      </p>
    </div>
  );
};

export default EducationContent;
