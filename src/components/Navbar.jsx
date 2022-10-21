import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Spacer,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export const Navbar = () => {

  const { colorMode, toggleColorMode } = useColorMode()


  return (
    <div>
      <Box id="menu">
        <Menu>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <br />
          <Button colorScheme={"none"} color="navy" size={"xs"} onClick={toggleColorMode}>
            {colorMode === 'light' ? <i class="fa-regular fa-moon"></i> : <i class="fa-regular fa-sun"></i> }
          </Button>
        </Menu>
      </Box>

      {/* =========== */}
      <Flex id="navbar">
        <Box p="2">
          <a href="#home">
            <img
              id="R"
              src="https://i.pinimg.com/originals/e9/8b/5d/e98b5da9ca11e5ab90c8108d89ea4b26.jpg"
              alt=""
            />
          </a>
        </Box>
        <Spacer />
        <ButtonGroup gap="7">
          <a href="#about">
            <Button background={'none'} color={'black'}>
              <Text>About</Text>
            </Button>
          </a>
          <a href="#skills">
            <Button background={'none'} color={'black'}>
              <Text>Skills</Text>
            </Button>
          </a>
          <a href="#projects">
            <Button background={'none'} color={'black'}>
              <Text>Projects</Text>
            </Button>
          </a>
          <a href="#contact">
            <Button background={'none'} color={'black'}>
              <Text>Contact</Text>
            </Button>
          </a>
          <Button colorScheme={"none"} color="navy" size={"lg"} onClick={toggleColorMode}>
            {colorMode === 'light' ? <i class="fa-regular fa-moon"></i> : <i class="fa-regular fa-sun"></i> }
          </Button>
        </ButtonGroup>
      </Flex>
    </div>
  );
};
