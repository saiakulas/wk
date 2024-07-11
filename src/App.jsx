import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Candidate from './pages/candidate';
import { AuthContext, AuthProvider } from './pages/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<ProtectedRoute redirectTo="/candidate/home" inverse><Login /></ProtectedRoute>} />
          <Route path="/candidate/home" element={<ProtectedRoute><Candidate /></ProtectedRoute>} />
          {/* Redirect all other unmatched routes to the home page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

const ProtectedRoute = ({ children, redirectTo = "/login", inverse = false }) => {
  const { isLoggedIn } = useContext(AuthContext);

  if (inverse ? isLoggedIn : !isLoggedIn) {
    return <Navigate to={redirectTo} />;
  }

  return children;
};

export default App;
