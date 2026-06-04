import { Container, Title, Description, CardGrid, CardItem } from "./styles";

const projects = [
  {
    title: "Daniel's Portfolio",
    description: "My portfolio — this one!",
    tech: ["React", "TypeScript", "Styled Components", "GSAP", "AOS"],
    live: "https://portfolio-dmc.vercel.app/",
    github: "https://github.com/danieltwentynine/portfolio-dmc",
  },
  {
    title: "YooYle Search",
    description:
      "Frontend-only project focusing on the fundamentals of HTML, CSS and JS.",
    tech: ["HTML5", "CSS3", "SCSS", "JavaScript"],
    live: "https://yooyle-search.vercel.app/",
    github: "https://github.com/danieltwentynine/yooyle",
  },
  {
    title: "E-Food",
    description: "A website to order food online.",
    tech: ["React", "TypeScript", "Styled Components", "AJAX"],
    live: "https://dmc-food.vercel.app",
    github: "https://github.com/danieltwentynine/dmc-food",
  },
];

function Projects() {
  return (
    <Container>
      <Title data-aos="fade-up" data-aos-duration="1000">
        PROJECTS
      </Title>
      <Description data-aos="fade-up" data-aos-duration="1000">
        Check out the web apps I've created!
      </Description>

      <CardGrid id="projects">
        {projects.map(({ title, description, tech, live, github }) => (
          <CardItem
            key={title}
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="cursor-target"
          >
            <h3>{title}</h3>
            <p>{description}</p>
            <ul className="tech-list">
              {tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="links">
              <a href={live} target="_blank" rel="noopener noreferrer">
                Visit
              </a>
              <a href={github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </CardItem>
        ))}
      </CardGrid>
    </Container>
  );
}

export default Projects;
