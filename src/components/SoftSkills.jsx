import { Box, Heading, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import AOS from 'aos';

const Soft = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Heading data-aos="fade-up" size={'2xl'} textAlign="center">
        ✅ Soft Skills
      </Heading>
      <br />
      <br />

      <Box id="soft-skill">
        <Box
          data-aos="fade-left"
          data-aos-delay="30"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out-cubic"
        >
          <img
            src="https://cdn2.iconfinder.com/data/icons/personality-traits-glyph-black/2048/7932_-_Fast_Learner-512.png"
            alt=""
          />
          <Text>QUICK LEARNER</Text>
        </Box>
        <Box
          data-aos="fade-left"
          data-aos-delay="30"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out-cubic"
        >
          <img
            src="https://images.vexels.com/media/users/3/127284/isolated/preview/553d1293f2f7c8cd10e8865f06acb29c-business-people-team-meeting-by-vexels.png"
            alt=""
          />
          <Text>TEAM PLAYER</Text>
        </Box>
        <Box
          data-aos="fade-up"
          data-aos-delay="30"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out-cubic"
        >
          <img
            src="https://workplaceinsight.net/wp-content/uploads/2017/04/Skills-250x250.png"
            alt=""
          />
          <Text>PROBLEM SOLVING MINDSET</Text>
        </Box>
        <Box
          data-aos="fade-right"
          data-aos-delay="30"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out-cubic"
        >
          <img
            src="https://th.bing.com/th/id/R.1d0f46a005e8364031caf29d32969ba0?rik=pN8h6njKBuxWyw&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon-bw%2fproactive-icon-4.png&ehk=5SrxLuouhF995ty0CQNt%2bFExh%2fj4uk69kayfxB6SG1E%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
          <Text>PROACTIVE</Text>
        </Box>
        <Box
          data-aos="fade-right"
          data-aos-delay="30"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out-cubic"
        >
          <img
            src="https://th.bing.com/th/id/R.29ab8b11d18f212c88e2e4193ba2c476?rik=dEC66wGLyBmMBw&riu=http%3a%2f%2fwww.audioexpertos.com%2fwp-content%2fuploads%2f2018%2f07%2fcontataci%c3%b3n-de-locutores-profesionales.png&ehk=iLG1hT0l37m89PXEv7w%2fcGqQef7onepHw8J8k4nYF%2bM%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
          <Text>GOOD LISTENER</Text>
        </Box>
      </Box>
    </div>
  );
};

export default Soft;
