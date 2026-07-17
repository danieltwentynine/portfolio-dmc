import { LuMoon as Moon, LuSun as Sun, LuMonitor as Monitor, LuGlobe as Globe } from "react-icons/lu";
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
      <ToggleBtn onClick={toggleLang} title="Toggle language">
        <Globe size={13} />
        {lang === "en" ? "PT" : "EN"}
      </ToggleBtn>
      <ToggleBtn
        onClick={toggleTheme}
        title={`Theme: ${mode}`}
        aria-label={`Theme: ${mode}`}
      >
        {themeIcon}
      </ToggleBtn>
    </ButtonsWrapper>
  );
}

export default NavButtons;
