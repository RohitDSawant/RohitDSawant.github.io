import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import GithubCalender from 'react-github-calendar';

export const GitCalender = () => {
  return (
    <div id="github">
      <br />
      <Heading
        data-aos="zoom-in-up"
        textAlign={'center'}
        size="2xl"
        marginBottom={'2%'}
      >
        : <i class="fa-brands fa-square-github"></i> Activities :
      </Heading>
      <Box id="calender">
        <p align="center">
          <Box data-aos="fade-right"
              data-aos-delay="30"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out-cubic">
          <img
            src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=RohitDSawant&theme=2077"
            width="100%"
          />
          </Box>
        </p>
        <br />
        <Box data-aos="fade-left"
              data-aos-delay="30"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out-cubic" id="stats">
          <img 
            src="http://github-profile-summary-cards.vercel.app/api/cards/stats?username=RohitDSawant&theme=2077"
            alt="RohitDSawant"
          />
          <img
            src="http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=RohitDSawant&theme=2077&utcOffset=8"
            alt=""
          />
           <img
            src="http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=RohitDSawant&theme=2077&utcOffset=8"
            alt="RohitDSawant"
          />
        </Box>

        {/* </p> */}
      </Box>
    </div>
  );
};
