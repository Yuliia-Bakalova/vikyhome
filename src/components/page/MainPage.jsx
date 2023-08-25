import React from 'react';
import { Container } from './MainPage.styled';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Statistics from '../Statistics/Statistics';
import CalculateButton from '../Calculator/CalculatorBtn';
import Services from "../Services/Services";
import PhotoGallery from '../BeforeAfter/PhotoGallery';
import Footer from '../Footer/Footer';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';

const MainPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Hero />
        <Statistics />
        <Services />
        <CalculateButton />
        <PhotoGallery />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default MainPage;