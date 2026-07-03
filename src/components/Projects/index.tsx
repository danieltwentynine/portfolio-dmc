import { useLanguage } from "../../context/LanguageContext";
import SessionTitle from "../SessionTitle";
import { Container, Description, CardGrid, CardItem } from "./styles";

const projectsMeta = [
  {
    tech: ["Python", "yt-dlp", "Whisper", "Ollama"],
    github: "https://github.com/danieltwentynine/yt-analyzer",
  },
  {
    tech: ["WhatsApp Business API", "n8n", "OpenAI API"],
    corporate: true,
  },
  {
    tech: ["React", "TypeScript", "Styled Components", "AJAX"],
    live: "https://dmc-food.vercel.app",
    github: "https://github.com/danieltwentynine/dmc-food",
  },
];

function Projects() {
  const { t } = useLanguage();

  return (
    <Container>
      <SessionTitle session={1}>{t.projects.title}</SessionTitle>
      <Description data-aos="fade-up" data-aos-duration="1000">
        {t.projects.description}
      </Description>

      <CardGrid id="projects">
        {t.projects.list.map((info, i) => {
          const meta = projectsMeta[i];
          return (
            <CardItem key={i} data-aos="zoom-in-up" data-aos-duration="1000">
              <h3>{info.title}</h3>
              <p>{info.description}</p>
              <ul className="tech-list">
                {meta.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="links">
                {"corporate" in meta && meta.corporate ? (
                  <span className="corporate-badge">{t.projects.corporate}</span>
                ) : (
                  <>
                    {"live" in meta && meta.live && (
                      <a href={meta.live} target="_blank" rel="noopener noreferrer">
                        {t.projects.visit}
                      </a>
                    )}
                    {"github" in meta && meta.github && (
                      <a href={meta.github} target="_blank" rel="noopener noreferrer">
                        {t.projects.github}
                      </a>
                    )}
                  </>
                )}
              </div>
            </CardItem>
          );
        })}
      </CardGrid>
    </Container>
  );
}

export default Projects;
