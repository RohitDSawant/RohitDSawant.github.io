import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import GitHubCalendar from 'react-github-calendar';

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
          <Box
            data-aos="fade-right"
            data-aos-delay="30"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out-cubic"
          >
            <GitHubCalendar username="rohitdsawant" />
          </Box>
        </p>
        <br />
        <Box
          data-aos="fade-left"
          data-aos-delay="30"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out-cubic"
          id="stats"
        >
          <img
            src="http://github-profile-summary-cards.vercel.app/api/cards/stats?username=RohitDSawant&theme=github"
            alt="RohitDSawant"
          />
          <img
            src="http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=RohitDSawant&theme=github&utcOffset=8"
            alt=""
          />
        </Box>

        {/* </p> */}
      </Box>
    </div>
  );
};
