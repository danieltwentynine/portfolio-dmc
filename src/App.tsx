import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import EstiloGlobal, { Container, MovingLines } from "./styles/index";
import { theme } from "./theme/theme";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <EstiloGlobal />
      <Container>
        <Header />
        <Hero />
        <Projects />
      </Container>
    </ThemeProvider>
  );
}

export default App;