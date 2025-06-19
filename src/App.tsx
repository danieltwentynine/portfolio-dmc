import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EstiloGlobal, { Container } from "./styles/index";
import { theme } from "./theme/theme";
import DockExample from "./pages/DockExample";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <EstiloGlobal />
      <Container>
        <Header />
        <Hero />
        <DockExample />
      </Container>
    </ThemeProvider>
  );
}

export default App;