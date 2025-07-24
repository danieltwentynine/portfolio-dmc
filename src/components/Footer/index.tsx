    import React, { useEffect } from "react";
    import { ContactForm, FooterContainer, FooterList, Links, PageLinks } from "./styles";

    import emailjs from "emailjs-com";

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        emailjs
          .sendForm(
            "service_qfhm91g",
            "template_sfxkc73",
            e.currentTarget,
            "Az4hkMKg715Nf9iy6"
          )
          .then(
            (result) => {
              alert("Message sent!");
            },
            (error) => {
              alert("Failed to send. Try again later.");
            }
          );

        e.currentTarget.reset();
    }

    function Footer() {
        return (
            <FooterContainer>
                <FooterList>
                <li>
                    <ContactForm>
                        <input type="text" name="name" placeholder="Your Name: " required/>
                        <input type="email" name="email" placeholder="Your E-mail:" required/>
                        <textarea name="message" placeholder="Hello Daniel..." required></textarea>
                        <button type="submit">Send</button>
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
                    <Links>
                    <li>
                        <a
                        href="https://www.linkedin.com/in/--dmc-dev/"
                        target="_blank"
                        >
                        LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com/0nepercentdan" target="_blank">
                        X
                        </a>
                    </li>
                    <li>
                        <a
                        href="https://github.com/danieltwentynine"
                        target="_blank"
                        >
                        Github
                        </a>
                    </li>
                    </Links>
                </li>
                </FooterList>
                <p>© 2025 Daniel M Cardoso</p>
            </FooterContainer>
        );
    }

    export default Footer
