import ifoodProjectClone from '../../assets/ifood-clone.png';

export type Project = {
  image: string;
  title: string;
  description: string;
  techs: string[];
  deploy: string;
  github: string;
};

export const projects: Project[] = [{
  image: ifoodProjectClone,
  title: 'TC Foods (Mobile)',
  description: `Este projeto visa replicar as principais funcionalidades do iFood, 
  incluindo navegação de restaurantes, exibição de menus e processamento de pedidos.`,
  techs: [
    'Next.js',
    'NextAuth',
    'Prisma (ORM)',
    'TypeScript',
    'React',
    'TailWind CSS',
    'PostgreSQL',
  ],
  deploy: 'https://tc-foods-two.vercel.app/',
  github: 'https://github.com/chatacks/tc-foods',
}];
