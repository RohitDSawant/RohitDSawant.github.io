import { Box, Heading, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { FaGithub, FaLinkedinIn, FaMailBulk, FaPhoneAlt } from 'react-icons/fa';
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
            📩 Contact Me
          </Heading>
        </Box>
        <br />
        <br />
        <br />
        <Box id="contact_grid">
          <a
            data-aos="fade-left"
            target={'_blank'}
            href="https://github.com/RohitDSawant"
          >
            <Heading as={"p"}>
              {' '}
              <FaGithub />
            </Heading>
          </a>
          <a
            data-aos="fade-left"
            target={'_blank'}
            href="https://www.linkedin.com/in/rohit-sawant-a1b636177"
          >
            <Heading as={"p"}>
              <FaLinkedinIn />
            </Heading>
          </a>
          <a
            data-aos="fade-right"
            target={'_blank'}
            href={`mailto: rohits1547@gmail.com`}
          >
            <Heading as={"p"}>
              <FaMailBulk />
            </Heading>
          </a>
          <a data-aos="fade-right" target={'_blank'} href={`tel:9967722208`}>
            <Heading as={"p"}>
              <FaPhoneAlt />
            </Heading>
          </a>
        </Box>
      </Box>
    </div>
  );
};
