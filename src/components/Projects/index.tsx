import yooyleImg from "../../img/yooyle.png";
import listaDeContatoImg from "../../img/listaDeContatos.png";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Container,
  Title,
  Description,
  CardContainer,
  Cards,
  CardItem,
} from "./styles";
// You need to import or define Image as well
import { useEffect } from "react";

// const projects = [
//   {
//     image: yooyleImg,
//     title: "YooYle",
//     description: "An alternative web search",
//     tech: ["HTML5", "CSS3", "Javascript"],
//     link: "https://yooyle-search.vercel.app/",
//   },
//   {
//     image: listaDeContatoImg,
//     title: "Lista De Contatos",
//     description: "Uma página web para criar listas de contato",
//     tech: ["React", "Styled Components", "TypeScript"],
//     link: "https://lista-de-contatos-dmc.vercel.app/",
//   },
// ];

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
        <Cards>
          <CardItem data-aos="zoom-in-up" data-aos-duration="1000">
            <ul>
              <li>
                <h3>Daniel's Portfolio</h3>
              </li>
              <li>
                <p>My portfolio - this one!</p>
              </li>
              <li>
                <span>
                  HTML5 - StyledComponents - React - TS - AOS - ReactBits
                </span>
              </li>
              <li>
                <a href="https://portfolio-dmc.vercel.app/" target="_blank">
                  Visit
                </a>
                <a
                  href="https://github.com/danieltwentynine/portfolio-dmc"
                  target="_blank"
                >
                  Github
                </a>
              </li>
            </ul>
          </CardItem>
          <CardItem data-aos="zoom-in-up" data-aos-duration="1000">
            <ul>
              <li>
                <h3>YooYle Search</h3>
              </li>
              <li>
                <p>
                  Frontend-only project focusing on the fundamentals of HTML,
                  CSS and JS.
                </p>
              </li>
              <li>
                <span>HTML5 - CSS3 - SCSS - JS</span>
              </li>
              <li>
                <a href="https://yooyle-search.vercel.app/" target="_blank">
                  Visit
                </a>
                <a
                  href="https://github.com/danieltwentynine/yooyle"
                  target="_blank"
                >
                  Github
                </a>
              </li>
            </ul>
          </CardItem>
          <CardItem data-aos="zoom-in-up" data-aos-duration="1000">
            <ul>
              <li>
                <h3>Contact List</h3>
              </li>
              <li>
                <p>A web app to create contact lists.</p>
              </li>
              <li>
                <span>HTML5 - StyledComponents - React - TS - Redux</span>
              </li>
              <li>
                <a
                  href="https://lista-de-contatos-dmc.vercel.app/"
                  target="_blank"
                >
                  Visit
                </a>
                <a
                  href="https://github.com/danieltwentynine/lista-de-contatos-dmc"
                  target="_blank"
                >
                  Github
                </a>
              </li>
            </ul>
          </CardItem>
        </Cards>
        {/* {projects.map(({ image, title, description, tech, link }, index) => (
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
        ))} */}
      </CardContainer>
    </Container>
  );
}

export default Projects;
