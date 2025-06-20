import imcImg from "../../img/imc.png";
import githubImg from "../../img/github.png";
import aniversarioImg from "../../img/aniversario.png"
import calcImg from "../../img/calculadoraBasica.png"
import tarefasImg from "../../img/tarefas.png";
import fightImg from "../../img/fightClub.png";
import disneyImg from "../../img/disney.png";
import yooyleImg from "../../img/yooyle.png";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Container,
  Title,
  Description,
  Button,
  Card,
  Content,
  TechList,
  ProjectTitle,
  ProjectDescription,
  Image,
  CardContainer,
} from "./styles";
// You need to import or define Image as well
import { useEffect } from "react";

const projects = [
  {
    image: imcImg,
    title: "IMC App",
    description: "A web app to measure your body's IMC",
    tech: ["React", "Styled Components", "TypeScript"],
    link: "https://imc-dmc.vercel.app/",
  },
  {
    image: githubImg,
    title: "GitHub Viewer",
    description: "A web app to view your github repository",
    tech: ["React", "Styled Components", "TypeScript"],
    link: "https://github-perfil-dmc.vercel.app/",
  },
  {
    image: aniversarioImg,
    title: "My Birthday Countdown",
    description: "A web app to view the countdown to my birthday",
    tech: ["React", "Styled Components", "TypeScript"],
    link: "https://my-birthday-theta.vercel.app/",
  },
  {
    image: calcImg,
    title: "Simple Calculator",
    description: "A simple web app to calculate numbers",
    tech: ["React", "Styled Components", "TypeScript"],
    link: "https://calculator-vue-gold.vercel.app/",
  },
  {
    image: tarefasImg,
    title: "Simple To Do List",
    description: "A simple web app to create a to-do list.",
    tech: ["React", "Styled Components", "TypeScript"],
    link: "https://todolist-vue-gray.vercel.app/",
  },
  {
    image: fightImg,
    title: "Fight Club",
    description: "A landing page showcasing the movie Fight Club",
    tech: ["React", "Styled Components", "TypeScript"],
    link: "https://fight-club-bydanielcardoso.vercel.app/",
  },
  {
    image: disneyImg,
    title: "Disney Plus",
    description: "A landing page cloning Disneyplus's website.",
    tech: ["React", "Styled Components", "TypeScript"],
    link: "https://clone-disneyplus-xi-ten.vercel.app/",
  },
  {
    image: yooyleImg,
    title: "YooYle",
    description: "An alternative web search",
    tech: ["React", "Styled Components", "TypeScript"],
    link: "https://yooyle-search.vercel.app/",
  },
];

export const initAOS = () => {
  AOS.init({
    duration: 1000,
    once: true,
  });
};

function Projects() {
  useEffect(() => {
    initAOS();
  }, []);

  return (
    <Container>
      <Title data-aos="fade-up" data-aos-duration="1000">
        PROJECTS
      </Title>
      <Description data-aos="fade-up" data-aos-duration="1000">
        Check out the web apps I've created!
      </Description>

      <CardContainer id="projects">
        {projects.map(({ image, title, description, tech, link }, index) => (
          <Card key={index} data-aos="zoom-in-up" data-aos-duration="1000">
            <Image src={image} alt={`${title} preview`} />
            <Content>
              <ProjectTitle>{title}</ProjectTitle>
              <ProjectDescription>{description}</ProjectDescription>
              <TechList>
                {tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </TechList>
              <Button href={link} target="_blank" rel="noopener noreferrer">
                Visit
              </Button>
            </Content>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
}

export default Projects;
