import { Box, Button, Heading } from '@chakra-ui/react';
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
        
        <br />
        <Box  style={{"display":"flex","flexDirection":"column","textAlign":"center","marginTop":"10%","marginBottom":"5%"}}>
        <Heading  as={"h1"} size={"3xl"} >Hi, I am Rohit Sawant</Heading>
        <br />
        <br />
        <Heading as={"h1"} size={"4xl"}>FULL STACK WEB DEVELOPER </Heading>
        </Box>


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
