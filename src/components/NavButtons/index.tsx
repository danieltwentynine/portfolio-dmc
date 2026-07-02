import { Moon, Sun, Monitor, Globe } from "lucide-react";
import { useThemeMode } from "../../context/ThemeToggleContext";
import { useLanguage } from "../../context/LanguageContext";
import { ButtonsWrapper, ToggleBtn } from "./styles";

function NavButtons() {
  const { mode, toggle: toggleTheme } = useThemeMode();
  const { lang, toggleLang } = useLanguage();

  const themeIcon =
    mode === "dark" ? <Moon size={13} /> : mode === "light" ? <Sun size={13} /> : <Monitor size={13} />;

  return (
    <ButtonsWrapper>
      <ToggleBtn onClick={toggleLang} title="Toggle language" className="cursor-target">
        <Globe size={13} />
        {lang === "en" ? "PT" : "EN"}
      </ToggleBtn>
      <ToggleBtn
        onClick={toggleTheme}
        title={`Theme: ${mode}`}
        aria-label={`Theme: ${mode}`}
        className="cursor-target"
      >
        {themeIcon}
      </ToggleBtn>
    </ButtonsWrapper>
  );
}

export default NavButtons;
