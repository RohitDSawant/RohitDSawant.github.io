import React from 'react';
import { ChakraProvider , ColorModeProvider, ColorModeScript, theme} from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import Home from './components/Home';
import "../src/App.css"
import About from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { GitCalender } from './components/GithubCalender';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider>
       <ColorModeScript initialColorMode={theme.config.initialColorMode}></ColorModeScript>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <GitCalender/>
        <Contact/>
        </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
