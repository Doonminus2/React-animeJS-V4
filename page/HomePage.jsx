import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import { Box, Typography } from '@mui/material';
import '../src/App.css';

const services = [
  {
    image: "https://picsum.photos/300/200?random=1",
    title: "Haircut & Styling",
    duration: "45 minutes",
    description: "Professional haircut with styling tailored to your preferences and face shape.",
    price: "$45",
  },
  {
    image: "https://picsum.photos/300/200?random=2",
    title: "Hair Coloring",
    duration: "90 minutes",
    description: "Full hair coloring service with premium products for vibrant, long-lasting results.",
    price: "$85",
  },
  {
    image: "https://picsum.photos/300/200?random=3",
    title: "Signature Facial",
    duration: "60 minutes",
    description: "Rejuvenating facial treatment that cleanses, exfoliates, and nourishes your skin.",
    price: "$75",
  },
  {
    image: "https://picsum.photos/300/200?random=4",
    title: "Relaxation Massage",
    duration: "60 minutes",
    description: "Soothing full-body massage to relieve tension and promote deep relaxation.",
    price: "$90",
  },
  {
    image: "https://picsum.photos/300/200?random=5",
    title: "Deluxe Manicure",
    duration: "45 minutes",
    description: "Comprehensive hand and nail care including soak, exfoliation, and polish application.",
    price: "$35",
  },
  {
    image: "https://picsum.photos/300/200?random=6",
    title: "Spa Pedicure",
    duration: "60 minutes",
    description: "Luxurious foot treatment with massage, exfoliation, and expert nail care.",
    price: "$45",
  },
];

const HomePage = () => {
  const titleRef = useRef(null);
  const clientTitleRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    requestAnimationFrame(() => {
      const spans = titleRef.current?.querySelectorAll('span');
      if (!spans) return;

      animate(spans, {
        y: [{ to: '-2.75rem', ease: 'outExpo', duration: 600 }, { to: 0, ease: 'outBounce', duration: 800, delay: 100 }],
        rotate: { from: '-1turn', delay: 0 },
        delay: (_, i) => i * 50,
        ease: 'inOutCirc',
        loopDelay: 1000,
        loop: true,
      });
    });

    requestAnimationFrame(() => {
      const spans = clientTitleRef.current?.querySelectorAll('span');
      if (!spans) return;

      animate(spans, {
        opacity: [{ to: 0, duration: 0 }, { to: 1, ease: 'outQuad', duration: 600 }],
        translateY: [20, 0],
        delay: (_, i) => i * 80,
        ease: 'outExpo',
      });
    });

    requestAnimationFrame(() => {
      const boxes = gridRef.current?.querySelectorAll('.image-box');
      if (!boxes) return;

      animate(boxes, {
        translateY: [-100, 0],
        opacity: [0, 1],
        scale: [{ to: 1.2, ease: 'outElastic(1, .5)', duration: 600 }, { to: 1, ease: 'outBounce', duration: 400 }],
        delay: (_, i) => i * 150,
        easing: 'easeOutExpo',
      });
    });
  }, []);

  const text = "OurServices".split("").map((char, index) => (
    <span key={index} style={{ display: 'inline-block' }}>{char}</span>
  ));

  const clientText = "What Our Clients Say".split("").map((char, index) => (
    <span key={index} style={{ display: 'inline-block' }}>{char}</span>
  ));

  return (
    <Box className="Content-container" sx={{ p: 4 }}>
      
      {/* Title OurServices */}
      <Box className='Head-Content' sx={{ textAlign: 'center' }}>
        <h1 ref={titleRef}>{text}</h1>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '200px' }}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          We offer a wide range of professional services to help you look and feel your best.
        </Typography>
        <Typography variant="body1">
          Our expert team is dedicated to providing exceptional care and results.
        </Typography>
      </Box>

      {/* Box Service Grid */}
      <Box ref={gridRef} className="flex flex-wrap justify-center gap-6 p-6">
        {services.map((service, index) => (
          <Box
            key={index}
            className="image-box bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 w-80"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <Box className="p-4 space-y-2">
              <Typography variant="h6">{service.title}</Typography>
              <Typography variant="body2" className="text-gray-500">⏱ {service.duration}</Typography>
              <Typography variant="body2">{service.description}</Typography>
              <Box className="flex items-center justify-between pt-2">
                <Typography variant="h6">{service.price}</Typography>
                <Typography variant="body2" className="text-orange-500 cursor-pointer hover:underline">
                  Book Now →
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* What Our Clients Say */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <h1 ref={clientTitleRef}>{clientText}</h1>
      </Box>

      <Typography variant="body1" sx={{ textAlign: 'center', mt: 2 }}>
        Don't just take our word for it. Here's what our satisfied clients have to say about their experiences.
      </Typography>
    </Box>
  );
};

export default HomePage;