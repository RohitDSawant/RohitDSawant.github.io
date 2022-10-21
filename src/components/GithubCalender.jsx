import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import GithubCalender from 'react-github-calendar';

export const GitCalender = () => {
  return (
    <div id='github'>
        <br />
        <Heading data-aos= "zoom-in-up" textAlign={"center"} size="2xl" marginBottom={"2%"}>: <i class="fa-brands fa-square-github"></i>{" "} Activities :</Heading>
      <Box id='calender'>
        <GithubCalender  username="RohitDSawant" />
      </Box>
    </div>
  );
};
