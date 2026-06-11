import { useLanguage } from "../../context/LanguageContext";
import SessionTitle from "../SessionTitle";
import {
  AboutContainer,
  AboutList,
  CenteredWrapper,
  TitleAbout,
  SummaryBlock,
  ExperienceItem,
  CompanyMeta,
  BulletList,
} from "./styles";

function About() {
  const { t } = useLanguage();

  return (
    <>
      <TitleAbout>
        <SessionTitle session={3}>{t.about.title}</SessionTitle>
      </TitleAbout>
      <CenteredWrapper>
        <AboutContainer id="about">
          <SummaryBlock data-aos="fade-up" data-aos-duration="1000">
            {t.about.summary}
          </SummaryBlock>

          <AboutList>
            <li data-aos="fade-up" data-aos-duration="1000">
              <h2>{t.about.education}</h2>
              <p>
                {t.about.educationLine1}
                <br />
                {t.about.educationLine2}
              </p>
            </li>

            <li data-aos="fade-up" data-aos-duration="1000">
              <h2>{t.about.experience}</h2>
              {t.about.jobs.map((job, i) => (
                <ExperienceItem
                  key={i}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={i * 80}
                >
                  <span className="corner tl" />
                  <span className="corner tr" />
                  <span className="corner bl" />
                  <span className="corner br" />
                  <h3>{job.role}</h3>
                  <CompanyMeta>
                    {job.company} &middot; {job.period} &middot; {job.location}
                  </CompanyMeta>
                  <BulletList>
                    {job.bullets.map((bullet, j) => (
                      <li key={j}>{bullet}</li>
                    ))}
                  </BulletList>
                </ExperienceItem>
              ))}
            </li>
          </AboutList>
        </AboutContainer>
      </CenteredWrapper>
    </>
  );
}

export default About;
