import { Box, Heading } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import img from '../assets/profile.jpg';
import AOS from 'aos';

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section id="about">
        <Box id="about-para">
          <Box>
            <Heading
              data-aos="fade-left"
              data-aos-delay="30"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out-cubic"
              as={'h1'}
              size={'2xl'}
            >
             
              About Me:
            </Heading>
            <br />
            <p 
            data-aos="flip-right"
            data-aos-delay="30"
            data-aos-duration="1800"
            data-aos-easing="ease-in-out-cubic">
              Self-motivated and hardworking Full Stack Devloper familiar with
              React, Redux, MongoDB etc. Seeking an opportunity to work in a
              challenging environment to prove my skills and utilize my
              knowledge & intelligence in the organization's growth.
            </p>
          </Box>
          <Box>
            <img 
            data-aos="zoom-in-up"
            data-aos-delay="30"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out-cubic"
            id="profile" src={img} alt="" />
          </Box>
        </Box>
      </section>
    </div>
  );
}

export default About;
