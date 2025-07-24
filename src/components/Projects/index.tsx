import imcImg from "../../img/imc.png";
import githubImg from "../../img/github.png";
import aniversarioImg from "../../img/aniversario.png";
import calcImg from "../../img/calculadoraBasica.png";
import tarefasImg from "../../img/tarefas.png";
import fightImg from "../../img/fightClub.png";
import disneyImg from "../../img/disney.png";
import yooyleImg from "../../img/yooyle.png";
import listaDeContatoImg from "../../img/listaDeContatos.png";
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
    image: yooyleImg,
    title: "YooYle",
    description: "An alternative web search",
    tech: ["HTML5", "CSS3", "Javascript"],
    link: "https://yooyle-search.vercel.app/",
  },
  {
    image: listaDeContatoImg,
    title: "Lista De Contatos",
    description: "Uma página web para criar listas de contato",
    tech: ["React", "Styled Components", "TypeScript"],
    link: "https://lista-de-contatos-dmc.vercel.app/",
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
