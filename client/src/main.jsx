import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from '../pages/SignUp.jsx';
import SignIn from '../pages/SignIn.jsx';
import Contact from '../pages/Contact.jsx';

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

        {/* About page */}
        <Route 
          path="/contact" 
          element={
              <Contact />
          } 
        />
      </Routes>  
    </BrowserRouter>      
  </StrictMode>,
)
