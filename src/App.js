import React from 'react';
import { ChakraProvider , theme} from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import Home from './components/Home';
import "../src/App.css"
import About from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <ChakraProvider theme={theme}>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        
    </ChakraProvider>
  );
}

export default App;
