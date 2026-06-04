import React, { useState } from "react";
import {
  ContactForm,
  FooterContainer,
  FooterList,
  SocialLinks,
  PageLinks,
  ErrorMsg,
  SuccessMsg,
} from "./styles";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

function Footer() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
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
      alert("Failed to send. Try again later.");
    }
  };

  return (
    <FooterContainer>
      <FooterList>
        <li>
          <ContactForm onSubmit={handleSubmit(onSubmit)} noValidate>
            <div>
              <input
                type="text"
                placeholder="Your Name"
                aria-label="Your Name"
                {...register("name")}
              />
              {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Your E-mail"
                aria-label="Your Email"
                {...register("email")}
              />
              {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
            </div>
            <div>
              <textarea
                rows={5}
                placeholder="Hello Daniel..."
                aria-label="Your Message"
                {...register("message")}
              />
              {errors.message && <ErrorMsg>{errors.message.message}</ErrorMsg>}
            </div>
            {submitted && <SuccessMsg>Message sent successfully!</SuccessMsg>}
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </ContactForm>
        </li>
        <li>
          <PageLinks>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </PageLinks>
          <SocialLinks>
            <li>
              <a href="https://www.linkedin.com/in/--dmc-dev/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://x.com/0nepercentdan" target="_blank" rel="noopener noreferrer">
                X
              </a>
            </li>
            <li>
              <a href="https://github.com/danieltwentynine" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </li>
          </SocialLinks>
        </li>
      </FooterList>
      <p>© 2025 Daniel M Cardoso</p>
    </FooterContainer>
  );
}

export default Footer;
