import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import EstiloGlobal, { Container } from "./styles/index";
import { theme } from "./theme/theme";
import AOS from "aos";
import "aos/dist/aos.css";
import TargetCursor from "./components/Cursor/TargetCursor";
import Squares from "./components/Background/Squares";
import Footer from "./components/Footer";
import About from "./components/About";
import NavButtons from "./components/NavButtons";
import IntroSequence from "./components/IntroSequence";
import ParticleTrail from "./components/ParticleTrail";
import AudioToggle from "./components/AudioToggle";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { ThemeToggleProvider } from "./context/ThemeToggleContext";

function AppInner() {
  const { lang } = useLanguage();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [lang]);

  return (
    <ThemeProvider theme={theme}>
      <EstiloGlobal />
      <IntroSequence />
      <NavButtons />
      <AudioToggle />
      <ParticleTrail />
      <TargetCursor spinDuration={4} hideDefaultCursor={true} />
      <Container>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            zIndex: -1,
            opacity: 0.06,
          }}
        >
          <Squares
            speed={0.5}
            squareSize={40}
            direction="diagonal"
            borderColor="rgba(196, 158, 82, 0.3)"
            hoverFillColor="rgba(196, 158, 82, 0.05)"
          />
        </div>
        <Hero />
        <Projects />
      </Container>
      <Skills />
      <About />
      <Footer />
    </ThemeProvider>
  );
}

function App() {
  return (
    <ThemeToggleProvider>
      <LanguageProvider>
        <AppInner />
      </LanguageProvider>
    </ThemeToggleProvider>
  );
}

export default App;
