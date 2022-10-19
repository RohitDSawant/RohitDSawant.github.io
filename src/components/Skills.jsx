import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import bgvideos from "../assets/videos.mp4"


export const Skills = () => {
  return (
    <div>
      <Box id='skills'>
        <br />
        <Heading size={"2xl"} textAlign="center">: Tech Stack : </Heading>
        <br />
        <br />
        <Box id="skills-grid">
          <Box>
            <img
              src="https://pngpress.com/wp-content/uploads/2020/04/HTML-logo.png"
              alt=""
            />
            <Text>HTML</Text>
          </Box>
          <Box>
            <img
              src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png"
              alt=""
            />
            <Text>CSS</Text>
          </Box>
          <Box>
            <img
              src="https://pluspng.com/img-png/javascript-vector-png-javascript-vector-logo-600.png"
              alt=""
            />
            <Text>JAVASCRIPT</Text>
          </Box>
          <Box>
            <img
              src="https://1.bp.blogspot.com/-sqAjIvOtpXI/XYoCmqOyMwI/AAAAAAAAJig/CowR8wgEauEs-RXN2IPmLYkC7NHoHuA3gCLcBGAsYHQ/s320/node-js-logo.png"
              alt=""
            />
            <Text>NODE JS</Text>
          </Box>
          <Box>
            <img
              src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem-700x626.png"
              alt=""
            />
            <Text>REACT</Text>
          </Box>
          <Box>
            <img
              src="https://next-dapp.warashibe.market/static/images/redux.png"
              alt=""
            />
            <Text>REDUX</Text>
          </Box>
          <Box>
            <img
              src="https://seeklogo.com/images/N/netlify-logo-758722CDF4-seeklogo.com.png"
              alt=""
            />
            <Text>NETLIFY</Text>
          </Box>
          <Box>
            <img
              src="https://daffyta.github.io/assets/img/icono/git.png"
              alt=""
            />
            <Text>GIT</Text>
          </Box>
          <Box>
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png"
              alt=""
            />
            <Text>TYPESCRIPT</Text>
          </Box>
          <Box>
            <img
              src="https://framalibre.org/sites/default/files/leslogos/mongodb-logo.jpg"
              alt=""
            />
            <Text>MONGO DB</Text>
          </Box>
          <Box style={{"textAlign":"center"}}>
            <img
              src="https://www.learnsimpli.com/wp-content/uploads/2021/05/Data-structure-and-algorithms.png"
              alt=""
            />
            <Text>DATA STRUCTURES & ALGORITHMS</Text>
          </Box>
          <Box style={{"textAlign":"center"}}>
            <img
              src="https://viget.imgix.net/jest.png?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=400&ixlib=php-2.1.1&q=90&w=400&s=54af7e4aca75c4546f9cb219ebc8afad"
              alt=""
            />
            <Text>JEST</Text>
          </Box>
          
        </Box>
      </Box>
    </div>
    
  );
};
