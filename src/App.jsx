import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomePage from '../page/HomePage';
import BookingPage from '../page/BookingPage';
import ThankYouPage from '../page/ThankYouPage';

const App = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header /> {/* แสดง Header ทุกหน้า */}
      
      <Box sx={{ flex: 1 }}>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} /> {/* หน้า Content เป็น Home Page */}
          
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/ThankYouPage" element={<ThankYouPage />}/>
        </Routes>
      </Box>
      
      <Footer /> {/* แสดง Footer ทุกหน้า */}
    </Box>
  );
};

export default App;








