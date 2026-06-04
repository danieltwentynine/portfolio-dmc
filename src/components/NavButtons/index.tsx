import { Moon, Sun, Globe } from "lucide-react";
import { useThemeMode } from "../../context/ThemeToggleContext";
import { useLanguage } from "../../context/LanguageContext";
import { ButtonsWrapper, ToggleBtn } from "./styles";

function NavButtons() {
  const { mode, toggle: toggleTheme } = useThemeMode();
  const { lang, toggleLang } = useLanguage();

  return (
    <ButtonsWrapper>
      <ToggleBtn onClick={toggleLang} title="Toggle language" className="cursor-target">
        <Globe size={13} />
        {lang === "en" ? "PT" : "EN"}
      </ToggleBtn>
      <ToggleBtn onClick={toggleTheme} title="Toggle theme" className="cursor-target">
        {mode === "dark" ? <Sun size={13} /> : <Moon size={13} />}
      </ToggleBtn>
    </ButtonsWrapper>
  );
}

export default NavButtons;
