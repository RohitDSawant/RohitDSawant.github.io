import { Box, Heading, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import AOS from 'aos';

export const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="contact">
      <br />
      <br />
      <Box>
        <Box>
          <Heading data-aos="zoom-in-up" size={'2xl'} textAlign="center">
            : Contact Me :
          </Heading>
        </Box>
        <br />
        <br />
        <br />
        <Box id="contact_grid">
          <a href="https://github.com/RohitDSawant">
            <Box data-aos="fade-left">
              <i class="fa-brands fa-github"></i>
            </Box>
          </a>
          <a href="https://www.linkedin.com/in/rohit-sawant-a1b636177">
            <Box data-aos="fade-left">
              <i class="fa-brands fa-linkedin"></i>
            </Box>
          </a>
          <a href={`mailto: rohits1547@gmail.com`}>
            <Box data-aos="fade-right">
              <i class="fa-regular fa-envelope"></i>
            </Box>{' '}
          </a>
          <a href={`tel:9967722208`}>
            <Box
              data-aos="fade-right"
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <i class="fa-sharp fa-solid fa-phone"></i>
            </Box>
          </a>
        </Box>
      </Box>
    </div>
  );
};
