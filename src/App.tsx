import { useEffect, useRef, useState } from "react";
import "./styles.css";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { useGrainOverlay } from "./hooks/useGrainOverlay";
import { prefersReducedMotion } from "./hooks/usePrefersReducedMotion";
import { personal } from "./data/personal";
import photo from "./img/danielPhoto.jpg";

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
];

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

function Portrait() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const img = new Image();
    img.onload = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth || 340;
      const h = Math.round(w * 1.25);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = "#131315";
      ctx.fillRect(0, 0, w, h);
      // sample the photo (cover-crop to 4:5)
      const cols = 64;
      const rows = Math.round(cols * 1.25);
      const off = document.createElement("canvas");
      off.width = cols;
      off.height = rows;
      const octx = off.getContext("2d");
      if (!octx) return;
      const srcRatio = img.width / img.height;
      const dstRatio = cols / rows;
      let sw = img.width, sh = img.height, sx = 0, sy = 0;
      if (srcRatio > dstRatio) {
        sw = img.height * dstRatio;
        sx = (img.width - sw) / 2;
      } else {
        sh = img.width / dstRatio;
        sy = (img.height - sh) / 2;
      }
      octx.drawImage(img, sx, sy, sw, sh, 0, 0, cols, rows);
      const data = octx.getImageData(0, 0, cols, rows).data;
      const cellW = w / cols;
      const cellH = h / rows;
      const ramp = " .:-=+*#%@";
      ctx.font = `${Math.ceil(cellH)}px 'IBM Plex Mono', monospace`;
      ctx.textBaseline = "top";
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = (r * cols + c) * 4;
          const l = (0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2]) / 255;
          const ch = ramp[Math.min(ramp.length - 1, Math.floor(l * ramp.length))];
          if (ch === " ") continue;
          ctx.fillStyle = l > 0.82 ? "#e85a45" : `rgba(232,230,224,${(0.18 + l * 0.72).toFixed(2)})`;
          ctx.fillText(ch, c * cellW, r * cellH);
        }
      }
    };
    img.src = photo;
  }, []);

  return <canvas ref={ref} />;
}

function AppInner() {
  const { lang, t, setLang } = useLanguage();
  const active = useActiveChapter();
  useGrainOverlay();
  useReveals();

  return (
    <>
      <header className="masthead">
        <a href="#ch00" className="brand">{t.masthead}</a>
        <nav>
          <span className="file-tag">{t.fileLabel} DMC–2026</span>
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
              <div className="spec-row"><span className="k">{t.focus}</span><span className="v">TypeScript · React · Node.js · n8n · OpenAI</span></div>
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
            <Portrait />
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
                  <p className="desc">{p.description}</p>
                  <p className="stack"><span className="stack-label">{t.stackLabel}</span> — {meta.stack}</p>
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
              <span className="items">{c.items.join(" · ")}</span>
            </div>
          ))}
        </section>

        <section id="ch03">
          <div className="sec-head" data-reveal>
            <span className="no">03</span>
            <h2>{t.experienceName}</h2>
            <span className="sub">{t.experienceSub}</span>
          </div>
          <p className="lede" data-reveal>{t.aboutSummary}</p>
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
                  {job.bullets.map((b) => (
                    <li key={b}><span>{b}</span></li>
                  ))}
                </ul>
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
