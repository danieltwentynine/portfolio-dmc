import { useState } from "react";
import {
  ContactForm,
  FooterContainer,
  FooterList,
  SocialLinks,
  PageLinks,
  SuccessMsg,
  FormUnavailable,
  HoneypotField,
} from "./styles";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../../context/LanguageContext";
import { Language, Translations } from "../../i18n/translations";
import { isEmailJsConfigured } from "../../utils/emailjs";

const emailJsReady = isEmailJsConfigured();

function ContactFormBlock({
  t,
  lang,
}: {
  t: Translations;
  lang: Language;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (String(data.get("website") ?? "").trim()) return;

    setSending(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: String(data.get("name")).trim(),
          email: String(data.get("email")).trim(),
          message: String(data.get("message")).trim(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      alert(t.footer.error);
    } finally {
      setSending(false);
    }
  };

  if (!emailJsReady) {
    return <FormUnavailable>{t.footer.unavailable}</FormUnavailable>;
  }

  return (
    <ContactForm key={lang} onSubmit={onSubmit}>
      <HoneypotField aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </HoneypotField>
      <div>
        <input
          type="text"
          name="name"
          placeholder={t.footer.namePlaceholder}
          aria-label={t.footer.namePlaceholder}
          required
          minLength={2}
          maxLength={100}
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder={t.footer.emailPlaceholder}
          aria-label={t.footer.emailPlaceholder}
          required
          maxLength={254}
        />
      </div>
      <div>
        <textarea
          rows={5}
          name="message"
          placeholder={t.footer.messagePlaceholder}
          aria-label={t.footer.messagePlaceholder}
          required
          minLength={10}
          maxLength={2000}
        />
      </div>
      {submitted && <SuccessMsg>{t.footer.success}</SuccessMsg>}
      <button type="submit" disabled={sending}>
        {sending ? t.footer.sending : t.footer.send}
      </button>
    </ContactForm>
  );
}

function Footer() {
  const { t, lang } = useLanguage();

  return (
    <FooterContainer>
      <FooterList>
        <li>
          <ContactFormBlock key={lang} t={t} lang={lang} />
        </li>
        <li>
          <PageLinks>
            <li>
              <a href="#top">{t.nav.home}</a>
            </li>
            <li>
              <a href="#projects">{t.nav.projects}</a>
            </li>
            <li>
              <a href="#skills">{t.nav.skills}</a>
            </li>
            <li>
              <a href="#about">{t.nav.about}</a>
            </li>
          </PageLinks>
          <SocialLinks>
            <li>
              <a
                href="https://www.linkedin.com/in/dn13lmc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://x.com/pickyhipster"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>
            </li>
            <li>
              <a
                href="https://github.com/danieltwentynine"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a href="mailto:danielmcardoso2016@protonmail.com">Email</a>
            </li>
          </SocialLinks>
        </li>
      </FooterList>
      <p>{t.footer.copyright}</p>
    </FooterContainer>
  );
}

export default Footer;
