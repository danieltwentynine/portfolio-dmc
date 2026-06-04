import { useState } from "react";
import {
  ContactForm,
  FooterContainer,
  FooterList,
  SocialLinks,
  PageLinks,
  ErrorMsg,
  SuccessMsg,
} from "./styles";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLanguage } from "../../context/LanguageContext";
import { Language, Translations } from "../../i18n/translations";

type FormFields = { name: string; email: string; message: string };

function ContactFormBlock({
  t,
  lang,
}: {
  t: Translations;
  lang: Language;
}) {
  const [submitted, setSubmitted] = useState(false);

  const schema = z.object({
    name: z.string().min(2, t.footer.nameError),
    email: z.string().email(t.footer.emailError),
    message: z.string().min(10, t.footer.messageError),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormFields) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name: data.name, email: data.email, message: data.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      alert(t.footer.error);
    }
  };

  return (
    <ContactForm key={lang} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div>
        <input
          type="text"
          placeholder={t.footer.namePlaceholder}
          aria-label={t.footer.namePlaceholder}
          {...register("name")}
        />
        {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
      </div>
      <div>
        <input
          type="email"
          placeholder={t.footer.emailPlaceholder}
          aria-label={t.footer.emailPlaceholder}
          {...register("email")}
        />
        {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
      </div>
      <div>
        <textarea
          rows={5}
          placeholder={t.footer.messagePlaceholder}
          aria-label={t.footer.messagePlaceholder}
          {...register("message")}
        />
        {errors.message && <ErrorMsg>{errors.message.message}</ErrorMsg>}
      </div>
      {submitted && <SuccessMsg>{t.footer.success}</SuccessMsg>}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? t.footer.sending : t.footer.send}
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
              <a href="#">{t.nav.home}</a>
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
                href="https://x.com/0nepercentdan"
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
