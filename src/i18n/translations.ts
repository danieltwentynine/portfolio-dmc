export type Language = "en" | "pt";

export const translations = {
  en: {
    hero: {
      subtitle: "Full Stack Developer | Automation Specialist",
    },
    nav: {
      home: "Home",
      projects: "Projects",
      skills: "Skills",
      about: "About",
    },
    projects: {
      title: "PROJECTS",
      description: "Check out some things I've built!",
      visit: "Visit",
      github: "GitHub",
      corporate: "Corporate Project",
      list: [
        {
          title: "Daniel's Portfolio",
          description:
            "This portfolio — built with React, TypeScript, and Styled Components.",
        },
        {
          title: "YouTube Analyzer",
          description:
            "CLI tool that downloads YouTube audio, transcribes with Whisper, and generates a summary, mind map, and metadata using a local LLM (Ollama/Mistral). No paid APIs.",
        },
        {
          title: "Internal Comms Automation",
          description:
            "End-to-end WhatsApp pipeline at Besten Consultoria: daily deliverable updates, event announcements, and birthday messages via WhatsApp Business API, n8n, and OpenAI.",
        },
        {
          title: "YooYle Search",
          description:
            "Frontend project focusing on HTML, CSS, and JavaScript fundamentals.",
        },
        {
          title: "E-Food",
          description: "A full-featured website to order food online.",
        },
      ],
    },
    about: {
      title: "About Me",
      summary:
        "Full stack developer and automation specialist with hands-on experience building modern web applications and integrating systems. Proficient in TypeScript, Node.js, and React, with practical experience in automation workflows (n8n, Make), REST API integration, and AI implementation in corporate environments.",
      education: "Education",
      educationLine1: "Computer Engineering — UNASP-HT, Brazil",
      educationLine2: "Feb 2021 – Dec 2026",
      experience: "Experience",
      jobs: [
        {
          role: "Automation Specialist & Full Stack Developer",
          company: "Besten Consultoria",
          period: "Jan 2025 – Feb 2026",
          location: "Barueri, SP · Hybrid",
          bullets: [
            "Built and maintained full stack web applications using HTML, CSS, TypeScript, and modern frameworks",
            "Automated internal communications by integrating WhatsApp Business API, n8n, and ChatGPT — covering deliverable updates, events, and birthdays",
            "Built and optimized process automation workflows with n8n and Make, reducing manual tasks",
            "Integrated external REST APIs, including OpenAI, into corporate systems",
            "Collaborated with clients to map processes and deliver custom solutions",
          ],
        },
        {
          role: "Helpdesk Analyst",
          company: "IATec – Instituto Adventista de Tecnologia",
          period: "Jan 2023 – Jan 2024",
          location: "Hortolândia, SP · On-site",
          bullets: [
            "Provided technical support to 200+ users in a corporate Windows/Mac/Linux environment",
            "Managed accounts, groups, and security policies via Active Directory",
            "Diagnosed and resolved hardware/software incidents, maintaining SLA",
            "Documented procedures and solutions for the team knowledge base",
          ],
        },
      ],
    },
    skills: {
      title: "SKILLS",
      categories: [
        {
          name: "Languages",
          items: ["TypeScript", "JavaScript", "Python", "C/C++"],
        },
        {
          name: "Frontend",
          items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
        },
        {
          name: "Backend",
          items: ["Node.js", "REST APIs", "tRPC", "Express"],
        },
        {
          name: "Automation & AI",
          items: [
            "n8n",
            "Make",
            "OpenAI API",
            "WhatsApp Business API",
            "LLM Integration",
            "Prompt Engineering",
          ],
        },
        {
          name: "Databases",
          items: ["PostgreSQL", "JSON Pipelines"],
        },
        {
          name: "Tools",
          items: ["Git", "GitHub", "Docker", "Linux", "VSCode"],
        },
      ],
    },
    footer: {
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your E-mail",
      messagePlaceholder: "Hello Daniel...",
      send: "Send",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Failed to send. Try again later.",
      nameError: "Name must be at least 2 characters",
      emailError: "Enter a valid email address",
      messageError: "Message must be at least 10 characters",
      copyright: "© 2025 Daniel M Cardoso",
    },
  },
  pt: {
    hero: {
      subtitle: "Desenvolvedor Full Stack | Especialista em Automação",
    },
    nav: {
      home: "Início",
      projects: "Projetos",
      skills: "Habilidades",
      about: "Sobre",
    },
    projects: {
      title: "PROJETOS",
      description: "Confira algumas coisas que construí!",
      visit: "Ver",
      github: "GitHub",
      corporate: "Projeto Corporativo",
      list: [
        {
          title: "Portfólio Daniel",
          description:
            "Este portfólio — construído com React, TypeScript e Styled Components.",
        },
        {
          title: "YouTube Analyzer",
          description:
            "CLI que baixa áudio do YouTube, transcreve com Whisper e gera resumo, mapa mental e metadados usando LLM local (Ollama/Mistral). Sem APIs pagas.",
        },
        {
          title: "Automação de Comunicação Interna",
          description:
            "Pipeline de automação via WhatsApp na Besten Consultoria: resumos de entregas diários, avisos de eventos e aniversários via WhatsApp Business API, n8n e OpenAI.",
        },
        {
          title: "YooYle Search",
          description:
            "Projeto frontend com foco nos fundamentos de HTML, CSS e JavaScript.",
        },
        {
          title: "E-Food",
          description: "Site completo para pedidos de comida online.",
        },
      ],
    },
    about: {
      title: "Sobre Mim",
      summary:
        "Desenvolvedor full stack e especialista em automação com experiência prática em aplicações web modernas e integração de sistemas. Proficiente em TypeScript, Node.js e React, com experiência em automação (n8n, Make), integração de APIs REST e implementação de IA em ambientes corporativos.",
      education: "Educação",
      educationLine1: "Engenharia da Computação — UNASP-HT, Brasil",
      educationLine2: "Fev 2021 – Dez 2026",
      experience: "Experiência",
      jobs: [
        {
          role: "Especialista em Automação & Dev Full Stack",
          company: "Besten Consultoria",
          period: "Jan 2025 – Fev 2026",
          location: "Barueri, SP · Híbrido",
          bullets: [
            "Construí e mantive aplicações web full stack com HTML, CSS, TypeScript e frameworks modernos",
            "Automatizei comunicações internas via WhatsApp Business API, n8n e ChatGPT — entregas, eventos e aniversários",
            "Desenvolvi workflows de automação com n8n e Make, reduzindo tarefas manuais repetitivas",
            "Integrei APIs REST externas, incluindo OpenAI, em sistemas corporativos",
            "Colaborei com clientes para mapear processos e entregar soluções customizadas",
          ],
        },
        {
          role: "Analista de Helpdesk",
          company: "IATec – Instituto Adventista de Tecnologia",
          period: "Jan 2023 – Jan 2024",
          location: "Hortolândia, SP · Presencial",
          bullets: [
            "Forneci suporte técnico a 200+ usuários em ambiente Windows/Mac/Linux",
            "Gerenciei contas, grupos e políticas de segurança via Active Directory",
            "Diagnostiquei e resolvi incidentes de hardware/software mantendo SLA",
            "Documentei procedimentos e soluções para a base de conhecimento da equipe",
          ],
        },
      ],
    },
    skills: {
      title: "HABILIDADES",
      categories: [
        {
          name: "Linguagens",
          items: ["TypeScript", "JavaScript", "Python", "C/C++"],
        },
        {
          name: "Frontend",
          items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
        },
        {
          name: "Backend",
          items: ["Node.js", "REST APIs", "tRPC", "Express"],
        },
        {
          name: "Automação & IA",
          items: [
            "n8n",
            "Make",
            "OpenAI API",
            "WhatsApp Business API",
            "Integração LLM",
            "Prompt Engineering",
          ],
        },
        {
          name: "Banco de Dados",
          items: ["PostgreSQL", "Pipelines JSON"],
        },
        {
          name: "Ferramentas",
          items: ["Git", "GitHub", "Docker", "Linux", "VSCode"],
        },
      ],
    },
    footer: {
      namePlaceholder: "Seu Nome",
      emailPlaceholder: "Seu E-mail",
      messagePlaceholder: "Olá Daniel...",
      send: "Enviar",
      sending: "Enviando...",
      success: "Mensagem enviada com sucesso!",
      error: "Falha ao enviar. Tente novamente.",
      nameError: "Nome deve ter pelo menos 2 caracteres",
      emailError: "Digite um endereço de e-mail válido",
      messageError: "Mensagem deve ter pelo menos 10 caracteres",
      copyright: "© 2025 Daniel M Cardoso",
    },
  },
};

export type Translations = typeof translations.en;
