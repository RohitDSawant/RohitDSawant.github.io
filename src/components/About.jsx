import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import img from '../assets/profile.png';

function About() {
  return (
    <div>
      <section id="about">
        <Box id="about-para">
          <Box>
            <Heading as={"h1"} size={"2xl"}> About Me: </Heading>
            <br />
            <p>
              Self-motivated and hardworking Devloper seeking an opportunity to
              work in a challenging environment to prove my skills and utilize
              my knowledge & intelligence in the organization's growth.
            </p>
          </Box>
          <Box>
            <img src={img} alt="" />
          </Box>
        </Box>
      </section>
    </div>
  );
}

export default About;
