// import logo from './logo.svg';
import { Container } from './App.styled';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Statistics from './components/Statistics/Statistics';
import CalculateButton from './components/Calculator/CalculatorBtn';
import Services from "../src/components/Services/Services";
import Footer from './components/Footer/Footer';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Container>
      <Header/>
      <Hero/>
  <Statistics/>
<Services/>
< CalculateButton />
  <Footer/>
    </Container>
    </ThemeProvider>
  );
}

export default App;
