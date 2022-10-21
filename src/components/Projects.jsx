import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import manageengine from '../assets/manageengine.gif';
import triptoto from "../assets/tripoto.gif"
import tata from '../assets/tata.gif';
import nykaa from '../assets/nykaa.gif';
import AOS from 'aos';


export const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <section id="projects">
        <Box>
          {/* <br /> */}
          <Heading data-aos="fade-up" as={"h3"} size={'2xl'}>: Projects :</Heading>
          </Box>
          <br />
          <br />
          <br />
          <Box id="project_grid">
            <Box 
            data-aos="zoom-in-up"
            data-aos-delay="30"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out-cubic">
              <Box id="screen">
                <img src={tata} alt="" />
              </Box>
              <Box id="sep" > ⭕ </Box>
              <br />
              <Box>
                <Heading style={{"marginBottom":"10px"}}>TATA 1mg -Clone</Heading>
                <Text style={{"marginBottom":"10px"}}>
                  TATA 1mg is India's Largest Online E-Pharmacy Platform which provides services including e-pharmacy, diagnostics, e-consultation and health content. Cloned this website with a collaborative team of 4 Web Developers.                  
                </Text>
                <Box id="tech_stack">
                <Heading as={"h3"} size={"md"} >Tech Stacks: </Heading>
                  <img src="https://pngpress.com/wp-content/uploads/2020/04/HTML-logo.png" alt="" />
                  <img src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png" alt="" />
                  <img src="https://pluspng.com/img-png/javascript-vector-png-javascript-vector-logo-600.png" alt="" />
                </Box>
               <Box className="btn">
                  <a href="https://github.com/RohitDSawant/TATA-1mg-Project"><Button><i class="fa-brands fa-square-github"></i></Button></a>
                  <a href="https://tata1mg-clone.netlify.app/"><Button><i class="fa-sharp fa-solid fa-desktop"></i></Button></a>
               </Box>
              </Box>
            </Box>
            <Box
            data-aos="zoom-in-up"
            data-aos-delay="30"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out-cubic">
              <Box id="screen">
                <img src={nykaa} alt="" />
              </Box>
              <Box id="sep" > ⭕ </Box>
              <br />
              <Box>
                <Heading style={{"marginBottom":"10px"}}>NYKAA -Clone</Heading>
                <Text style={{"marginBottom":"10px"}}>
                  NYKAA is the first Indian Women Unicorn Startup Company whee you ca buy large variety of Beauty ,Wellness, Fashion Products & Cosmetices. Cloned Website in 4 Days with all E-Commerce Functionalities.
                </Text>
                <Box id="tech_stack">
                <Heading as={"h3"} size={"md"} >Tech Stacks: </Heading>
                  <img src="https://pngpress.com/wp-content/uploads/2020/04/HTML-logo.png" alt="" />
                  <img src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png" alt="" />
                  <img src="https://pluspng.com/img-png/javascript-vector-png-javascript-vector-logo-600.png" alt="" />
                </Box>
               <Box className="btn">
                  <a href=""><Button><i class="fa-brands fa-square-github"></i></Button></a>
                  <a href=""><Button><i class="fa-sharp fa-solid fa-desktop"></i></Button></a>
               </Box>
              </Box>
            </Box>
            <Box
            data-aos="zoom-in-up"
            data-aos-delay="30"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out-cubic">
              <Box id="screen">
                <img src={manageengine} alt="" />
              </Box>
              <Box id="sep" > ⭕ </Box>
              <br />
              <Box>
                <Heading style={{"marginBottom":"10px"}}>ManageEngine -Clone</Heading>
                <Text style={{"marginBottom":"10px"}}>
                ManageEngine is a product division of Zoho Corporation (formerly AdventNet) and includes proprietary software solutions for IT management in small and medium-sized businesses.
                 Cloned this website with a collaborative team of 4 Web Developers.                  
                </Text>
                <Box id="tech_stack">
                <Heading as={"h3"} size={"md"} >Tech Stacks: </Heading>
                  <img src="https://pngpress.com/wp-content/uploads/2020/04/HTML-logo.png" alt="" />
                  <img src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png" alt="" />
                  <img src="https://pluspng.com/img-png/javascript-vector-png-javascript-vector-logo-600.png" alt="" />
                </Box>
               <Box className="btn">
                  <a href="https://github.com/IamSanjayGupta/cheerful-apparatus-8895"><Button><i class="fa-brands fa-square-github"></i></Button></a>
                  <a href="https://iamsanjaygupta.github.io/cheerful-apparatus-8895/"><Button><i class="fa-sharp fa-solid fa-desktop"></i></Button></a>
               </Box>
              </Box>
            </Box>
            <Box 
            data-aos="zoom-in-up"
            data-aos-delay="30"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out-cubic">
              <Box id="screen">
                <img src={triptoto} alt="" />
              </Box>
              <Box id="sep" > ⭕ </Box>
              <br />
              <Box>
                <Heading style={{"marginBottom":"10px"}}>Tripoto -Clone</Heading>
                <Text style={{"marginBottom":"10px"}}>
                Tripoto is a platform to share and discover amazing travel stories and itineraries. At Tripoto we are bringing together travelers from around the world to share and discover real, actionable, crowd sourced travel stories.
                 Cloned this website with a collaborative team of 4 Web Developers.                  
                </Text>
                <Box id="tech_stack">
                <Heading as={"h3"} size={"md"} >Tech Stacks: </Heading>
                  <img src="https://pngpress.com/wp-content/uploads/2020/04/HTML-logo.png" alt="" />
                  <img src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png" alt="" />
                  <img src="https://pluspng.com/img-png/javascript-vector-png-javascript-vector-logo-600.png" alt="" />
                  <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem-700x626.png" alt="" />
                  <img src="https://next-dapp.warashibe.market/static/images/redux.png" alt="" />
                </Box>
               <Box className="btn">
                  <a href="https://github.com/HackerSushant76/flowery-ear-2957"><Button><i class="fa-brands fa-square-github"></i></Button></a>
                  <a href="https://rct211-tripoto-clone.netlify.app/"><Button><i class="fa-sharp fa-solid fa-desktop"></i></Button></a>
               </Box>
              </Box>
            </Box>
          </Box>
          <br /><br />
        
      </section>
    </div>
  );
};
