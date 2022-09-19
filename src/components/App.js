import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './NavBar';
import Header from './Header';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';
import Accents from './Accents';

import { useRef } from 'react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const projectsRef = useRef(null);
  const scrollOnClick = () => {
    // console.log(projectsRef.current)
    projectsRef.current.scrollIntoView({ behaviour: 'smooth', margin: '64px' });
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NavBar />
      <Accents />
      <Header scrollOnClick={ scrollOnClick } />
      <Projects projectsRef={ projectsRef } />
      <Skills />
      <Footer />
    </ThemeProvider>
  );
}

export default App;