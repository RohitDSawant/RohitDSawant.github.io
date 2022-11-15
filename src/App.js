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
// import { SoftSkills } from './components/SoftSkills';
// import { Tools } from './components/Tools';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider>
       <ColorModeScript initialColorMode={theme.config.initialColorMode}></ColorModeScript>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        {/* <Tools/>
        <SoftSkills/> */}
        <Projects/>
        <GitCalender/>
        <Contact/>
        </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
