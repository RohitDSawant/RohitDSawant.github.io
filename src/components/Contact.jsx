import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export const Contact = () => {
  return (
    <div id='contact'>
      <br />
      <br />
      <Box>
        <Box>
          <Heading size={'2xl'} textAlign="center"> : Contact Me :</Heading>
        </Box>
        <br />
        <br />
        <Box id="contact_grid">
          <Box>
            <a href="https://github.com/RohitDSawant"></a><i class="fa-brands fa-github"></i>
          </Box>
          <Box>
            <a href="https://www.linkedin.com/in/rohit-sawant-a1b636177"></a><i class="fa-brands fa-linkedin"></i> 
          </Box>
          <Box>
            <a href={`mailto: rohits1547@gmail.com`}><i class="fa-regular fa-envelope"></i></a>
          </Box>
          <Box style={{"display":"flex", "alignItems":"center", "gap":"10px"}}>
         <a href={`tel:9967722208`}> <i class="fa-sharp fa-solid fa-phone"></i></a>
            {/* <Text> +91 9967722208</Text> */}
          </Box>
        </Box>
      </Box>
    </div>
  );
};
