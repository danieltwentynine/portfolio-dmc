import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import EstiloGlobal, { Container } from "./styles/index";
import { theme } from "./theme/theme";
import AOS from "aos";
import "aos/dist/aos.css";
import Squares from "./components/Background/Squares";
import Footer from "./components/Footer";
import About from "./components/About";
import NavButtons from "./components/NavButtons";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { ThemeToggleProvider } from "./context/ThemeToggleContext";
import { useGrainOverlay } from "./hooks/useGrainOverlay";
import { usePrefersReducedMotion } from "./hooks/usePrefersReducedMotion";

function AppInner() {
  const { lang } = useLanguage();
  const reducedMotion = usePrefersReducedMotion();
  useGrainOverlay();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, disable: reducedMotion });
  }, [reducedMotion]);

  useEffect(() => {
    if (!reducedMotion) {
      AOS.refreshHard();
    }
  }, [lang, reducedMotion]);

  return (
    <ThemeProvider theme={theme}>
      <EstiloGlobal />
      <NavButtons />
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
            pointerEvents: "none",
          }}
        >
          <Squares animated={!reducedMotion} />
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
