import React, { useState } from "react"; // Import useState
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Import Context and Layouts
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import PrivateLayout from "./components/PrivateLayout";
import PublicLayout from "./components/PublicLayout";

// Import Pages
import Dashboard from "./pages/Dashboard";
import Prediction from "./pages/Prediction";
import DiagnosisResults from "./pages/DiagnosisResults";
import TreatmentAdvice from "./pages/TreatmentAdvice";
import EducationContent from "./pages/EducationContent";
import AboutUs from "./pages/AboutUs"; // Import AboutUs
import LoginSignUp from "./pages/LoginSignUp";
import NotFound from "./pages/NotFound";

const App = () => {
  const [results, setResults] = useState([]); // State to hold diagnosis results

  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/login" element={<LoginSignUp />} />
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Route>

          {/* Private Routes */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <PrivateLayout />
              </PrivateRoute>
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/prediction" element={<Prediction setResults={setResults} />} /> {/* Pass setResults to Prediction */}
            <Route path="/diagnosis-results" element={<DiagnosisResults results={results} />} /> {/* Pass results */}
            <Route path="/treatment-advice" element={<TreatmentAdvice />} />
            <Route path="/education-content" element={<EducationContent />} />
            <Route path="/about" element={<AboutUs />} /> {/* Add AboutUs Route */}
            {/* Add more protected routes here */}
          </Route>

          {/* Catch-All Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
