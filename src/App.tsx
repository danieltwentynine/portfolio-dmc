import { ReactNode, useEffect, useState } from "react";
import "./styles.css";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { useGrainOverlay } from "./hooks/useGrainOverlay";
import { prefersReducedMotion } from "./hooks/usePrefersReducedMotion";
import { useTheme } from "./hooks/useTheme";
import { personal } from "./data/personal";
import photoDark from "./img/portrait-photo-dark.webp";
import photoLight from "./img/portrait-photo-light.webp";

const CHAPTER_IDS = ["ch00", "ch01", "ch02", "ch03", "ch04", "ch05"];

// Language-independent project metadata; titles/descriptions live in i18n.
const PROJECT_META = [
  {
    stack: "Python · yt-dlp · Whisper · Ollama",
    github: "https://github.com/danieltwentynine/yt-analyzer",
    live: null,
    corporate: false,
  },
  {
    stack: "WhatsApp Business API · n8n · OpenAI API",
    github: null,
    live: null,
    corporate: true,
  },
  {
    stack: "TypeScript · React · Next.js · WebRTC · Signaling · WebSockets",
    github: "https://github.com/danieltwentynine/dagleitv",
    live: "https://dagleitv.vercel.app/",
    corporate: false,
  }
];

// Indexes into each `skillCategories[i].items` that stay visible when collapsed.
const SKILL_CORE = [[0, 1, 2], [0, 2, 5], [0, 1], [0, 2, 4], [2], [0, 2, 3]];

function useActiveChapter() {
  const [active, setActive] = useState("ch00");
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    CHAPTER_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return active;
}

function useReveals() {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    els.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(22px)";
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateY(0)";
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Collapse({ open, children }: { open: boolean; children: ReactNode }) {
  return (
    <div className={open ? "collapse open" : "collapse"} aria-hidden={!open}>
      <div>{children}</div>
    </div>
  );
}

function Toggle({ open, onClick, children }: { open: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button className="toggle" aria-expanded={open} onClick={onClick}>
      <span aria-hidden="true" className="icon">+</span>
      {children}
    </button>
  );
}

function AppInner() {
  const { lang, t, setLang } = useLanguage();
  const active = useActiveChapter();
  const [theme, toggleTheme] = useTheme();
  const light = theme === "light";
  // keys: "p<i>" project, "j<i>" job, "skills"
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const flip = (key: string) => () => setOpen((o) => ({ ...o, [key]: !o[key] }));
  const hiddenSkills = t.skillCategories.reduce((n, c, i) => n + c.items.length - SKILL_CORE[i].length, 0);
  const [brandName, brandRest] = t.masthead.split(" — ");
  useGrainOverlay();
  useReveals();

  return (
    <>
      <header className="masthead">
        <a href="#ch00" className="brand">
          {brandName}
          <span className="brand-rest">— {brandRest}</span>
        </a>
        <nav>
          <span className="file-tag">{t.fileLabel} DMC–2026</span>
          <button className="theme-toggle" onClick={toggleTheme} aria-label={light ? t.themeToDark : t.themeToLight}>
            <span aria-hidden="true">◐</span>
          </button>
          <div className="lang-switch">
            <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
            <button className={lang === "pt" ? "on" : ""} onClick={() => setLang("pt")}>PT</button>
          </div>
        </nav>
      </header>

      <nav className="rail">
        <span className="rail-head">{t.contents}</span>
        {t.chapters.map((name, i) => (
          <a key={CHAPTER_IDS[i]} href={`#${CHAPTER_IDS[i]}`} className={active === CHAPTER_IDS[i] ? "on" : ""}>
            <span className="num">{String(i).padStart(2, "0")}</span>
            {name}
          </a>
        ))}
      </nav>

      <main>
        <section id="ch00" className="hero">
          <div className="hero-grid-bg" />
          <div className="hero-left">
            <p className="dossier-line">
              {t.dossier}
              <span className="cursor" />
            </p>
            <h1>Daniel M<br />Cardoso</h1>
            <p className="hero-subtitle">{t.heroSubtitle}</p>
            <div className="spec">
              <div className="spec-row"><span className="k">{t.role}</span><span className="v">{t.roleValue}</span></div>
              <div className="spec-row"><span className="k">{t.base}</span><span className="v">{t.baseValue}</span></div>
              <div className="spec-row"><span className="k">{t.focus}</span><span className="v">TypeScript · React · Node.js · Next.js · Claude Code</span></div>
              <div className="spec-row">
                <span className="k">{t.contact}</span>
                <a href={`mailto:${personal.contact.email}`} className="v dotted">{personal.contact.email}</a>
              </div>
            </div>
          </div>
          <div className="portrait">
            <span aria-hidden="true" className="corner" style={{ top: -14, left: -14 }}>+</span>
            <span aria-hidden="true" className="corner" style={{ top: -14, right: -14 }}>+</span>
            <span aria-hidden="true" className="corner" style={{ bottom: 14, left: -14 }}>+</span>
            <span aria-hidden="true" className="corner" style={{ bottom: 14, right: -14 }}>+</span>
            <img src={light ? photoLight : photoDark} alt={t.figSubject} width={1360} height={1700} loading="lazy" />
            <div className="fig-caption">
              <span><span className="fig-no">FIG. 00</span> — {t.figSubject}</span>
              <span>{t.figSource}</span>
            </div>
          </div>
          <p className="scroll-hint">{t.scrollHint} ↓</p>
        </section>

        <section id="ch01">
          <div className="sec-head" data-reveal>
            <span className="no">01</span>
            <h2>{t.projectsName}</h2>
            <span className="sub">{t.projectsSub}</span>
          </div>
          {t.projects.map((p, i) => {
            const meta = PROJECT_META[i];
            return (
              <article key={p.title} className="project" data-reveal>
                <div className="project-meta">
                  <span className="rec">REC. {String(i + 1).padStart(2, "0")}</span>
                  {meta.corporate && <span className="tag">{t.corporateLabel}</span>}
                  {meta.live && (
                    <a href={meta.live} target="_blank" rel="noopener noreferrer">{t.liveLabel} ↗</a>
                  )}
                  {meta.github && (
                    <a href={meta.github} target="_blank" rel="noopener noreferrer">{t.sourceLabel} ↗</a>
                  )}
                </div>
                <div>
                  <h3>{p.title}</h3>
                  <p className="desc">{p.summary ?? p.description}</p>
                  {p.summary && (
                    <Collapse open={!!open[`p${i}`]}>
                      <p className="more">{p.description}</p>
                    </Collapse>
                  )}
                  <ul className="chips" aria-label={t.stackLabel}>
                    {meta.stack.split(" · ").map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  {p.summary && (
                    <Toggle open={!!open[`p${i}`]} onClick={flip(`p${i}`)}>
                      {open[`p${i}`] ? t.closeLabel : t.detailsLabel}
                    </Toggle>
                  )}
                </div>
              </article>
            );
          })}
        </section>

        <section id="ch02">
          <div className="sec-head" data-reveal>
            <span className="no">02</span>
            <h2>{t.skillsName}</h2>
            <span className="sub">{t.skillsSub}</span>
          </div>
          {t.skillCategories.map((c, i) => (
            <div key={c.name} className="skill-row" data-reveal>
              <span className="code">02.{i + 1}</span>
              <span className="name">{c.name}</span>
              <div>
                <ul className="chips">
                  {c.items.filter((_, j) => SKILL_CORE[i].includes(j)).map((s) => <li key={s}>{s}</li>)}
                </ul>
                <Collapse open={!!open.skills}>
                  <ul className="chips extra">
                    {c.items.filter((_, j) => !SKILL_CORE[i].includes(j)).map((s) => <li key={s}>{s}</li>)}
                  </ul>
                </Collapse>
              </div>
            </div>
          ))}
          <Toggle open={!!open.skills} onClick={flip("skills")}>
            {open.skills ? t.lessLabel : `${hiddenSkills} ${t.moreLabel}`}
          </Toggle>
        </section>

        <section id="ch03">
          <div className="sec-head" data-reveal>
            <span className="no">03</span>
            <h2>{t.experienceName}</h2>
            <span className="sub">{t.experienceSub}</span>
          </div>
          {t.jobs.map((job, i) => (
            <article key={job.role} className="job" data-reveal>
              <div className="job-when">
                <span>{personal.jobs[i]?.period[lang]}</span>
                <span className="loc">{job.location}</span>
              </div>
              <div>
                <h3>{job.role}</h3>
                <p className="company">{personal.jobs[i]?.company}</p>
                <ul>
                  {job.highlights.map((b) => (
                    <li key={b}><span>{b}</span></li>
                  ))}
                </ul>
                <Collapse open={!!open[`j${i}`]}>
                  <ul className="more">
                    {job.bullets.slice(2).map((b) => (
                      <li key={b}><span>{b}</span></li>
                    ))}
                  </ul>
                </Collapse>
                <Toggle open={!!open[`j${i}`]} onClick={flip(`j${i}`)}>
                  {open[`j${i}`] ? t.closeLabel : t.detailsLabel}
                </Toggle>
              </div>
            </article>
          ))}
        </section>

        <section id="ch04">
          <div className="sec-head" data-reveal>
            <span className="no">04</span>
            <h2>{t.educationName}</h2>
            <span className="sub">{t.educationSub}</span>
          </div>
          <article className="job" data-reveal>
            <div className="job-when">
              <span>{personal.education.period[lang]}</span>
              <span className="loc">{t.eduLocation}</span>
            </div>
            <div>
              <h3>{t.eduTitle}</h3>
              <p className="company">{personal.education.institution}</p>
            </div>
          </article>
        </section>

        <section id="ch05">
          <div className="sec-head" data-reveal>
            <span className="no">05</span>
            <h2>{t.contactName}</h2>
            <span className="sub">{t.contactSub}</span>
          </div>
          <p className="contact-headline" data-reveal>{t.contactHeadline}</p>
          <div className="contact-list" data-reveal>
            {personal.contact.links.map((c) => (
              <div key={c.k} className="contact-row">
                <span className="k">{c.k}</span>
                <a href={c.href} {...(c.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}>
                  {c.label} <span className="arrow">↗</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        <footer>
          <span>{t.copyright}</span>
          <span className="eof">{t.eofLabel} ■</span>
        </footer>
      </main>
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  );
}
