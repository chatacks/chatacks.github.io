export interface Post {
  slug: string;
  title: string;
  titlePt: string;
  publishedAt: string;
  updatedAt?: string;
  author?: string;
  summary: string;
  summaryPt: string;
  image?: string;
}

export const allPosts: Post[] = [
  {
    slug: "api-design-principles",
    title: "REST API Design Principles That Stand the Test of Time",
    titlePt: "Princípios de Design de API REST Que Resistem ao Teste do Tempo",
    publishedAt: "2024-12-12",
    updatedAt: "2024-12-12",
    author: "John Doe",
    summary:
      "Learn how to design APIs that developers love to use and are easy to maintain.",
    summaryPt:
      "Aprenda a projetar APIs que os desenvolvedores adoram usar e que são fáceis de manter.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=192&fit=crop",
  },
  {
    slug: "building-design-systems",
    title: "Building Scalable Design Systems with React and Tailwind",
    titlePt: "Construindo Design Systems Escaláveis com React e Tailwind",
    publishedAt: "2024-12-01",
    updatedAt: "2024-12-01",
    author: "John Doe",
    summary:
      "A comprehensive guide to creating maintainable design systems that scale with your team and product.",
    summaryPt:
      "Um guia completo para criar design systems sustentáveis que escalam com sua equipe e produto.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=192&fit=crop",
  },
  {
    slug: "git-workflow-guide",
    title: "Git Workflow Guide: From Chaos to Clarity",
    titlePt: "Guia de Fluxo de Trabalho Git: Do Caos à Clareza",
    publishedAt: "2024-12-10",
    updatedAt: "2024-12-10",
    author: "John Doe",
    summary:
      "Master Git workflows that keep your team productive and your codebase healthy.",
    summaryPt:
      "Domine fluxos de trabalho Git que mantêm sua equipe produtiva e sua base de código saudável.",
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=192&fit=crop",
  },
  {
    slug: "nextjs-performance-tips",
    title: "10 Next.js Performance Tips for Production Apps",
    titlePt: "10 Dicas de Performance Next.js para Apps em Produção",
    publishedAt: "2024-12-05",
    updatedAt: "2024-12-05",
    author: "John Doe",
    summary:
      "Practical optimization techniques to make your Next.js applications blazing fast in production.",
    summaryPt:
      "Técnicas práticas de otimização para tornar suas aplicações Next.js ultra rápidas em produção.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=192&fit=crop",
  },
  {
    slug: "remote-work-productivity",
    title: "Mastering Remote Work: Productivity Tips from a Digital Nomad",
    titlePt: "Dominando o Trabalho Remoto: Dicas de Produtividade de um Nômade Digital",
    publishedAt: "2024-11-25",
    updatedAt: "2024-11-25",
    author: "John Doe",
    summary:
      "Practical strategies for staying productive, focused, and balanced while working remotely, based on years of experience.",
    summaryPt:
      "Estratégias práticas para se manter produtivo, focado e equilibrado enquanto trabalha remotamente, baseado em anos de experiência.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=192&fit=crop",
  },
  {
    slug: "testing-react-apps",
    title: "Testing React Applications: A Practical Guide",
    titlePt: "Testando Aplicações React: Um Guia Prático",
    publishedAt: "2024-12-14",
    updatedAt: "2024-12-14",
    author: "John Doe",
    summary:
      "From unit tests to E2E—learn how to build confidence in your React applications with comprehensive testing.",
    summaryPt:
      "De testes unitários a E2E—aprenda como construir confiança nas suas aplicações React com testes abrangentes.",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=192&fit=crop",
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for Clean, Maintainable Code",
    titlePt: "Melhores Práticas TypeScript para Código Limpo e Sustentável",
    publishedAt: "2024-12-08",
    updatedAt: "2024-12-08",
    author: "John Doe",
    summary:
      "Essential TypeScript patterns and practices that will make your codebase more robust and easier to maintain.",
    summaryPt:
      "Padrões e práticas essenciais de TypeScript que tornarão sua base de código mais robusta e fácil de manter.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=192&fit=crop",
  },
];

export function getSortedPosts(lang: string = "en"): Post[] {
  return [...allPosts].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) return -1;
    return 1;
  }).map((post) => ({
    ...post,
    title: lang === "pt-BR" ? post.titlePt : post.title,
    summary: lang === "pt-BR" ? post.summaryPt : post.summary,
  }));
}
