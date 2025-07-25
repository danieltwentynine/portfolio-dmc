import { AboutContainer, AboutList, CenteredWrapper, TitleAbout } from "./styles";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
}

function About() {
    return (
      <>
        <TitleAbout data-aos="fade-up" data-aos-duration="1000">
          About Me
        </TitleAbout>
        <CenteredWrapper>
          <AboutContainer id="about">
            <AboutList>
              <li data-aos="fade-up" data-aos-duration="1000">
                <h2>Education</h2>
                <p>
                  • Majoring in Computer Engineering at UNASP-HT, Brazil
                  <br />• 2021 - 2026
                </p>
              </li>
              <li data-aos="fade-up" data-aos-duration="1000">
                <h2>Experience</h2>
                <p>
                  <h3>Information Technology Analyst</h3>
                  <br />• Besten Consultoria - Part-time
                  <br />• Jan 2025 to Present
                  <br />• São Paulo, São Paulo, Brazil - Hybrid
                </p>
                <p>
                  <h3>HelpDesk Specialist</h3>
                  <br />• IATec Instituto de Tecnologia Adventista - Full-time
                  <br />• Feb 2023 to Feb 2024
                  <br />• Hortolândia, São Paulo, Brazil - On-site
                </p>
              </li>
            </AboutList>
          </AboutContainer>
        </CenteredWrapper>
      </>
    );
}

export default About