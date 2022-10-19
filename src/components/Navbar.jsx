import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export const Navbar = () => {
  return (
    <div>
      <Box id="menu">
        <Menu>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </Menu>
      </Box>

      {/* =========== */}
      <Flex id="navbar">
        <Box p="2">
          <a href="#home">
            <Heading size="md">RS</Heading>
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
        </ButtonGroup>
      </Flex>
    </div>
  );
};
