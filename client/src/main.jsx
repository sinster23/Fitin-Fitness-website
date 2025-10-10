import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from '../pages/SignUp.jsx';
import SignIn from '../pages/SignIn.jsx';
import Contact from '../pages/Contact.jsx';
import VerifyEmail from '../pages/VerifyEmail.jsx';
import AuthSuccess from '../pages/AuthSuccess.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Public routes - No authentication required */}
        <Route path="/" element={<App />} />
        
        {/* Auth routes - Redirect logged-in users to appropriate dashboard */}
        <Route 
          path="/signup" 
          element={
              <SignUp />
          } 
        />

        <Route 
          path="/signin" 
          element={
              <SignIn />
          } 
        />

        {/* Contact page */}
        <Route 
          path="/contact" 
          element={
              <Contact />
          } 
        />

          {/* Verification page */}
        <Route path="/auth/success" element={<AuthSuccess />} />

        {/* Email Verification page */}
        <Route path="/verify/:token" element={<VerifyEmail />} /> 
      </Routes>  
    </BrowserRouter>      
  </StrictMode>,
)
