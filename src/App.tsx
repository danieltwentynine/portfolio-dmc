import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EstiloGlobal from "./styles/index";
import variaveis from "./styles/variaveis";

// Usando as variáveis existentes como tema
const theme = {
  colors: {
    primary: "#ff5500",
    background: variaveis.preto,
    text: variaveis.branco,
    highlight: variaveis.highlightAzul,
    gray: variaveis.cinza
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <EstiloGlobal />
      <Header />
      <Hero />
    </ThemeProvider>
  );
}

export default App;