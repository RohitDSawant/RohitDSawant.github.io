import { Box, Button, Heading } from '@chakra-ui/react';
import React from 'react';
import bgvideos from '../assets/videos.mp4';

function Home() {
  return (
    <div id="home">
      <Box>
        <Box paddingTop={'15%'} textAlign={'left'}>
          <Heading textAlign={'center'} as="h3" size={'2xl'}>
          👋 Hi, Myself Rohit Sawant
          </Heading>
          <br />
          <br />
          <Heading textAlign={'center'} as={'h1'} size={'4xl'}>
            FULL STACK WEB DEVELOPER
          </Heading>
          <br />
          <br />
          <br />
          <Button id="resume">RESUME</Button>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
