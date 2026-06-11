import { useLanguage } from "../../context/LanguageContext";
import SessionTitle from "../SessionTitle";
import {
  SkillsSection,
  SkillsGrid,
  CategoryCard,
  SkillPill,
} from "./styles";

function Skills() {
  const { t } = useLanguage();

  return (
    <SkillsSection id="skills">
      <SessionTitle session={2}>{t.skills.title}</SessionTitle>
      <SkillsGrid>
        {t.skills.categories.map((cat, i) => (
          <CategoryCard
            key={i}
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="cursor-target"
          >
            <span className="corner tl" />
            <span className="corner tr" />
            <span className="corner bl" />
            <span className="corner br" />
            <h3>{cat.name}</h3>
            <ul>
              {cat.items.map((skill) => (
                <SkillPill key={skill}>{skill}</SkillPill>
              ))}
            </ul>
          </CategoryCard>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
}

export default Skills;
