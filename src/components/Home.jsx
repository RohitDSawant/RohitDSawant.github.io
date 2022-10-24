import { Box, Button, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import resume from '../assets/Rohit_Sawant_Resume.pdf';
import AOS from 'aos';

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="home">
      <Box>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            marginTop: '10%',
            marginBottom: '5%',
          }}
        >
          <Box data-aos="fade-left">
            <Text id="hi">Hi, I am Rohit Sawant</Text>
          </Box>
          <br />
          <br />
          <Box data-aos="zoom-in" >
            <Text id="fsd">FULL STACK WEB DEVELOPER </Text>
          </Box>
        </Box>
        <br />
        <a href={resume} download>
          <Button
            onClick={() => {
              window.open(resume);
            }}
            id="resume"
          >
            RESUME
          </Button>
        </a>
      </Box>
    </div>
  );
}

export default Home;
