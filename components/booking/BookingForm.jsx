import { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import { Box } from '@mui/material';

const BookingForm = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    animate(boxRef.current, {
      translateY: [0, 30],
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 1000,
      delay: 500,
      easing: 'easeOutExpo',
    });
  }, []);

  return (
    <Box ref={boxRef} sx={{ width: 300, height: 200, backgroundColor: 'gray', borderRadius: '10px' }} />
  );
};

export default BookingForm;
