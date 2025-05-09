import React, { useState, useEffect, useRef } from 'react';
import { animate } from 'animejs';
import { Box, TextField, Button, Typography } from '@mui/material';

const BookingForm = () => {

 const formRef = useRef(null); // Reference สำหรับฟอร์มทั้งหมด

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  // Animation สำหรับ Box และฟอร์ม
  useEffect(() => {

    

    // การแอนิเมชันสำหรับฟอร์มทั้งหมด
    animate(formRef.current, {
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: 600,
      easing: 'easeOutExpo',
    });
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Box sx={{ width: '400px', margin: '0 auto', mt: 5, padding: 4, borderRadius: '10px', boxShadow: 3 }}>
      {/* Title */}
      <Typography variant="h5" sx={{ textAlign: 'center', mb: 3 }}>
        Your Information
      </Typography>

      {/* Form Fields */}
      <form ref={formRef}>
        <TextField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Special Requests or Notes (Optional)"
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          sx={{ mb: 2 }}
        />

        {/* Submit Button */}
        <Box sx={{ textAlign: 'right' }}>
          <Button variant="contained" color="primary" type="submit">
            Continue to Services 
          </Button>
        </Box>
      </form>

      
    </Box>
  );
};

export default BookingForm;



