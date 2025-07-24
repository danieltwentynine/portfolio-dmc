import { ThemeProvider } from "styled-components";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import EstiloGlobal, { Container } from "./styles/index";
import { theme } from "./theme/theme";
import AOS from "aos";
import "aos/dist/aos.css";
import TargetCursor from "./components/Cursor/TargetCursor";
import Squares from "./components/Background/Squares";
import Footer from "./components/Footer";
AOS.init();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <EstiloGlobal />
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
                opacity: 0.1,
              }}
            >
              <Squares
                speed={0.5}
                squareSize={40}
                direction="diagonal"
                borderColor="#fff"
                hoverFillColor="#222"
              />
            </div>
        <Hero />
        <Projects />
      </Container>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;