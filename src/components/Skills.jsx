import { Box, Heading, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import AOS from 'aos';
import Tools from './Tools';
import Soft from './SoftSkills';

export const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Box id="skills">
        <br />
        <Heading data-aos="fade-up" size={'2xl'} textAlign="center">
          {' '}
          🤹🏻 Tech Skills{' '}
        </Heading>
        <br />
        <br />
        <br />
        <Box id="skills-grid">
          <Box
            data-aos="fade-left"
            data-aos-delay="30"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out-cubic"
          >
            <img
              src="https://pngpress.com/wp-content/uploads/2020/04/HTML-logo.png"
              alt=""
            />
          </Box>
          <Box
            data-aos="fade-left"
            data-aos-delay="40"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out-cubic"
          >
            <img
              src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png"
              alt=""
            />
          </Box>
          <Box
            data-aos="fade-left"
            data-aos-delay="30"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out-cubic"
          >
            <img
              src="https://pluspng.com/img-png/javascript-vector-png-javascript-vector-logo-600.png"
              alt=""
            />
          </Box>
          <Box
            data-aos="fade-left"
            data-aos-delay="30"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out-cubic"
          >
            <img
              src="https://1.bp.blogspot.com/-sqAjIvOtpXI/XYoCmqOyMwI/AAAAAAAAJig/CowR8wgEauEs-RXN2IPmLYkC7NHoHuA3gCLcBGAsYHQ/s320/node-js-logo.png"
              alt=""
            />
          </Box>
          <Box
            data-aos="fade-left"
            data-aos-delay="30"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out-cubic"
          >
            <img
              src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem-700x626.png"
              alt=""
            />
          </Box>
          <Box
            data-aos="fade-right"
            data-aos-delay="30"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out-cubic"
          >
            <img
              src="https://next-dapp.warashibe.market/static/images/redux.png"
              alt=""
            />
          </Box>
          <Box
            data-aos="fade-right"
            data-aos-delay="40"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out-cubic"
          >
            <img
              src="https://images.opencollective.com/chakra-ui-pro/61bd1dd/logo.png"
              alt=""
            />
          </Box>

          <Box
            data-aos="fade-right"
            data-aos-delay="40"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out-cubic"
          >
            <img
              src="https://cdn.acodez.in/wp-content/uploads/2017/11/Express.js.jpg"
              alt=""
            />
          </Box>
          <Box
            data-aos="fade-right"
            data-aos-delay="40"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out-cubic"
          >
            <img
              src="https://framalibre.org/sites/default/files/leslogos/mongodb-logo.jpg"
              alt=""
            />
          </Box>
          <Box
            data-aos="fade-right"
            data-aos-delay="40"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out-cubic"
            style={{ textAlign: 'center' }}
          >
            <img
              src="https://www.learnsimpli.com/wp-content/uploads/2021/05/Data-structure-and-algorithms.png"
              alt=""
            />
          </Box>
        </Box>
      </Box>

      <Tools />
      <Soft />
    </div>
  );
};
