import type { TranslationStrings } from "./types";

export const ptBR: TranslationStrings = {
  nav: {
    home: "Início",
    blog: "Blog",
    theme: "Tema",
  },

  hero: {
    greeting: "Olá, eu sou",
  },
  description:
    "Desenvolvedor Full Stack focado em construir sistemas escaláveis, arquiteturas limpas e experiências de desenvolvedor de alta qualidade.",
  summary:
    "No final de 2023, decidi investir totalmente na minha educação e transicionar para a área de tecnologia. Desde então, tenho me dedicado em tempo integral a aprender e construir. Hoje, estou cursando um bacharelado em engenharia de software, trabalhando como desenvolvedor full-stack e até [competindo em hackathons por diversão](/#hackathons).",

  sections: {
    about: "Sobre",
    workExperience: "Experiência Profissional",
    education: "Formação Acadêmica",
    skills: "Habilidades",
  },

  work: {
    title: "Engenheiro de Software Full Stack",
    location: "Remoto",
    start: "Nov 2024",
    end: "Emprego atual",
    description:
      "Desenvolveu e manteve aplicações web escaláveis usando React, Next.js e NestJS. Dockerizou a arquitetura de microsserviços, melhorando a consistência de deploy e reduzindo problemas de ambiente. Implementou um design system e uma arquitetura baseada em funcionalidades para melhorar a manutenibilidade do código e a escalabilidade da equipe. Construiu aplicações mobile com React Native e TypeScript.",
    present: "Presente",
  },

  education: {
    degree0: "Desenvolvimento Web Full-stack",
    degree1: "Bacharelado em Engenharia de Software (BSE)",
    present: "Presente",
  },

  projects: {
    badge: "Meus Projetos",
    heading: "Confira meus trabalhos mais recentes",
    description:
      "Trabalhei em uma variedade de projetos, de sites simples a aplicações web complexas. Aqui estão alguns dos meus favoritos.",
    tcFoods: {
      description:
        "Desenvolveu uma plataforma de delivery de comida inspirada no [iFood](https://www.ifood.com.br/), com navegação por restaurantes, menus dinâmicos e gerenciamento de pedidos. Focado na construção de uma arquitetura full-stack escalável usando Next.js, PostgreSQL e Docker.",
      linkType: "Site",
    },
  },

  hackathons: {
    badge: "Hackathons",
    heading: "Eu gosto de construir coisas",
    description:
      "Durante meus estudos na Trybe, participei de {count} hackathon. Pessoas de todo o país se reuniam e construíam coisas incríveis em 2-3 dias. Foi revelador ver as infinitas possibilidades trazidas à vida por um grupo de indivíduos motivados e apaixonados.",
    hack0: {
      location: "Rio de Janeiro, Brasil",
      description:
        "Desenvolveu um aplicativo mobile que entregava histórias de ninar para crianças usando realidade aumentada.",
    },
  },

  contact: {
    badge: "Contato",
    heading: "Entre em Contato",
    body: {
      beforeLink: "Quer conversar? Me mande uma dm ",
      linkText: "com uma pergunta direta no twitter",
      afterLink:
        " e eu responderei quando puder. Ignorarei toda solicitação comercial.",
    },
    sendEmail: "Enviar Email",
  },

  blog: {
    heading: "Blog",
    postCount: "{count} posts",
    subtitle:
      "Meus pensamentos sobre desenvolvimento de software, vida e mais.",
    pagination: {
      pageOf: "Página {current} de {total}",
      previous: "Anterior",
      next: "Próximo",
    },
    empty: "Nenhum post ainda. Volte em breve!",
  },

  blogPost: {
    notFound: "Post não encontrado.",
    backToBlog: "Voltar ao Blog",
    contentUnavailable:
      'O conteúdo para "{slug}" estará disponível após a configuração do MDX.',
    failedToLoad: "Falha ao carregar o post.",
    loading: "Carregando...",
    previous: "Anterior",
    next: "Próximo",
  },

  notFound: {
    heading: "Página Não Encontrada",
    description:
      "A página que você está procurando não existe ou pode ter sido movida.",
    goHome: "Ir para o Início",
  },

  projectCard: {
    openAriaLabel: "Abrir {title}",
  },

  codeBlock: {
    copyCode: "Copiar código",
  },
};
