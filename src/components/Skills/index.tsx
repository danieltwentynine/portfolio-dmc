import { useLanguage } from "../../context/LanguageContext";
import {
  SkillsSection,
  SectionTitle,
  SkillsGrid,
  CategoryCard,
  SkillPill,
} from "./styles";

function Skills() {
  const { t } = useLanguage();

  return (
    <SkillsSection id="skills">
      <SectionTitle data-aos="fade-up" data-aos-duration="1000">
        {t.skills.title}
      </SectionTitle>
      <SkillsGrid>
        {t.skills.categories.map((cat) => (
          <CategoryCard
            key={cat.name}
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
