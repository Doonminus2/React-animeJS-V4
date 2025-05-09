import React, { useEffect, useRef } from "react";
import { Box, Typography, Container } from "@mui/material";

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    if (!footerRef.current) return;

    import('animejs').then(({ animate }) => {

      // เข้า (fade + slide up)
      animate({
        targets: footerRef.current,
        translateY: [100, 0],   // ปรับให้เห็นชัดขึ้น
        opacity: [0, 1],
        duration: 1200,
        easing: "easeOutElastic(1, .8)", // เปลี่ยน easing ให้ดู bounce + smooth
      });

      // loop breathing animation (scale + rotate แบบรู้สึกได้)
      animate({
        targets: footerRef.current,
        scale: [1, 1.05],   // scale เข้าออก
        rotate: [-2, 2],    // หมุนซ้ายขวานิดหน่อย
        duration: 2500,
        direction: "alternate",
        loop: true,
        easing: "easeInOutSine",
      });
    });
  }, []);

  return (
    <Box
      ref={footerRef}
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        py: 5,
        mt: 5,
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h6" component="p">
          &copy; 2025 BorntoDev. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;






