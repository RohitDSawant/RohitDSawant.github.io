import { Box, Heading, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import AOS from 'aos';


 const Tools = () => {

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div>
     
        <br />
        <Heading data-aos="fade-up" size={"2xl"} textAlign="center"> 🧰 Tools  </Heading>
        <br />
        <br />
        <br />
        <Box id="skills-grid">
          <Box 
          data-aos="fade-right"
            data-aos-delay="40"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out-cubic"
            >
            <img
              src="https://pngimg.com/uploads/github/github_PNG40.png"
              alt=""
            />
            <Text>GITHUB</Text>
          </Box>          
          <Box 
          data-aos="fade-right"
            data-aos-delay="40"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out-cubic"
             style={{"textAlign":"center"}}>
            <img
              src="https://149503944.v2.pressablecdn.com/wp-content/uploads/2019/10/portfolio-vercel-300x270.png"
              alt=""
            />
            <Text>VERCEL</Text>
          </Box> 
          <Box 
          data-aos="fade-right"
            data-aos-delay="40"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out-cubic"
             style={{"textAlign":"center"}}>
            <img
              src="https://viget.imgix.net/jest.png?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=400&ixlib=php-2.1.1&q=90&w=400&s=54af7e4aca75c4546f9cb219ebc8afad"
              alt=""
            />
            <Text>JEST</Text>
          </Box> 
          <Box 
          data-aos="fade-right"
            data-aos-delay="40"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out-cubic"
             style={{"textAlign":"center"}}>
            <img
              src="https://ohdoylerules.com/images/npm-logo.svg"
              alt=""
            />
            <Text>NPM</Text>
          </Box>  
          <Box 
          data-aos="fade-right"
            data-aos-delay="40"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out-cubic"
             style={{"textAlign":"center"}}>
            <img
              src="https://lever-client-logos.s3.us-west-2.amazonaws.com/932ff883-77c1-4d50-af81-5253e940b6b7-1625854088356.png"
              alt=""
            />
            <Text>RENDER</Text>
          </Box>         
        </Box>
        <br />
        <br />
      
    </div>
    
  );
};

export default Tools
