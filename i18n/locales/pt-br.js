export default {
  navbar: [
    {
      label: 'Sobre',
      section: 'About',
    },
    {
      label: 'Experiência',
      section: 'Experience',
    },
    {
      label: 'Projetos',
      section: 'Projects',
    },
    {
      label: 'Contato',
      section: 'Contact',
    },
  ],
  landing: {
    intro: 'Olá, eu sou Filipe Lehmann, um',
    job: 'Engenheiro de Software.',
    more: 'Saiba Mais',
  },
  about: {
    headline: 'Quero ser uma ponte entre as pessoas e a tecnologia.',
    intro:
      'Sou um engenheiro de software com mais de 3 anos de experiência, um eterno aprendiz e entusiasta de idiomas vivendo em Curitiba, Paraná, Brasil. Busco me associar a pessoas e organizações para realizar projetos relevantes, criar bons relacionamentos e combater a entropia.',
    education: {
      text: 'Especializado em React, Next.js, TypeScript e desenvolvimento de UI moderno, contribuí para ciclos completos de produto - desde a construção de plataformas B2B SaaS do zero até a internacionalização de suas interfaces e melhoria da confiabilidade do sistema através de Atomic Design, Clean Architecture e testes automatizados com Selenium e Cypress.',
      highlights: [
        {
          text: 'React',
          style: 'strong',
          url: 'https://react.dev/',
        },
        {
          text: 'Next.js',
          style: 'strong',
          url: 'https://nextjs.org/',
        },
        {
          text: 'TypeScript',
          style: 'strong',
          url: 'https://www.typescriptlang.org/',
        },
        {
          text: 'Atomic Design',
          style: 'normal',
          url: 'https://atomicdesign.bradfrost.com/chapter-2/',
        },
        {
          text: 'Clean Architecture',
          style: 'normal',
          url: 'https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html',
        },
        {
          text: 'Selenium',
          style: 'normal',
          url: 'https://www.selenium.dev/',
        },
        {
          text: 'Cypress',
          style: 'normal',
          url: 'https://www.cypress.io/',
        },
      ],
    },
    skills: {
      text: 'Sou motivado pela oportunidade de construir coisas que são tanto tecnicamente sólidas quanto genuinamente úteis - soluções nas quais as pessoas confiam e gostam de usar. Sou melhor quando estou imerso na resolução de problemas ou criação de código com colegas que também estão engajados na missão de refinar nosso ofício e a nós mesmos.',
      highlights: [
        {
          text: 'tecnicamente sólidas',
          style: 'normal',
        },
        {
          text: 'genuinamente úteis',
          style: 'normal',
        },
      ],
    },
    cta: 'Me convide para um projeto!',
  },
  jobs: [
    {
      workplace: 'Pixlog',
      workplaceBtn: 'Pixlog',
      position: 'Engenheiro de Software',
      duration: ['Junho 2024 - Junho 2025'],
      description: [
        'Liderou o desenvolvimento frontend de uma plataforma web B2B SaaS integrando dados de medições em RA, usando React, Next.js, TypeScript e Tailwind, o que resultou na rápida integração da plataforma à rotina diária de escritório dos clientes.',
        'Construiu um dashboard elegante com Google Maps, listas dinâmicas com TanStack Table, estruturas de gerenciamento de estado com Zustand e diversos componentes reutilizáveis, facilitando a prototipagem rápida de novos recursos e manutenção com testes automatizados.',
        'Refatorou o sistema de geração de PDF da plataforma, possibilitando economia de milhares de reais por mês e aumentando a confiabilidade da infraestrutura da empresa.',
      ],
      url: 'https://pixlog.com.br/',
    },
    {
      workplace: 'Volunteers for Ukraine',
      workplaceBtn: 'VFU',
      position: 'Engenheiro de Software',
      duration: ['Março 2024 - Julho 2024'],
      description: [
        'Participou do desenvolvimento front-end de uma aplicação web React para um projeto de gestão de crises para apoiar a crise humanitária na Ucrânia.',
        'Trabalhou no design responsivo de UI/UX e codificação de layouts para as seções de Projetos, Organizações e Voluntários.',
        'Aprendeu Node.js para contribuir com o back-end do projeto.',
        'Utilizou o padrão Atomic design para criar componentes do projeto e código reutilizável e de fácil manutenção.',
      ],
      url: 'https://volunteersforukraine.org/',
    },
    {
      workplace: 'Freelance',
      workplaceBtn: 'Freelance',
      position: 'Engenheiro de Software',
      duration: ['Setembro 2024 - Julho 2024'],
      description: [
        'Melhorou a plataforma do cliente para transmitir melhor autoridade, converter vendas e gerenciar informações dos clientes, melhorando sua produtividade, experiência e lucro.',
        'Projetou e implementou layouts para que o cliente pudesse criar e entregar seus próprios cursos dentro de sua plataforma.',
        'Auxiliou na visão do cliente para a evolução de sua plataforma, criando roadmaps para apresentar e implementar as mudanças desejadas em etapas sensatas.',
        'Forneceu insights e ajudou o cliente a reduzir custos mensais relevantes através da revisão de suas assinaturas de ferramentas.',
      ],
      url: 'https://volunteersforukraine.org/',
    },
    {
      workplace: 'Spin-off da Hype Empreendimentos',
      workplaceBtn: 'Spin-off',
      position: 'Engenheiro de Software Front-end',
      duration: ['Agosto 2022 - Agosto 2023'],
      description: [
        'Construção de SaaS altamente complexo',
        'Escrita de código moderno, de alto desempenho e de fácil manutenção.',
        'Aplicação de CI/CD.',
        'Comunicação com equipes multidisciplinares de engenheiros, analistas e designers semanalmente.',
      ],
      url: 'https://hypeempreendimentos.com.br/',
    },
    {
      workplace: 'Guarani Sistemas',
      workplaceBtn: 'Guarani Sistemas',
      position: 'Estagiário em Engenharia de Software',
      duration: ['Maio 2021 - Novembro 2021'],
      description: [
        'Treinamento em Vue.js, HTML, CSS e JavaScript.',
        'Contribuições em projeto de ERP para gestão de escritórios de representação comercial.',
        'Resolução de issues de baixa e média prioridade - Jira.',
        'Controle de versão de software usando GitLab.',
        'Bibliotecas utilizadas: Chakra UI, Vuex, Vuelidate e Axios.',
        'Participação em reuniões diárias - Daily Scrum.',
      ],
      url: 'https://www.guaranisistemas.com.br/',
    },
    {
      workplace: 'IFMG - Campus Bambuí',
      workplaceBtn: 'IFMG',
      position: 'Monitor',
      duration: ['Março 2018 - Dezembro 2018'],
      description: [
        'Disciplina: Geometria Analítica e Álgebra Linear.',
        'Assistência aos estudantes na resolução de exercícios e esclarecimento de dúvidas.',
        'Preparação de atividades teóricas compatíveis com o nível de conhecimento e experiência dos alunos.',
        'Elaboração de material didático complementar, sob supervisão e aprovação do professor-orientador.',
      ],
      url: 'https://www.bambui.ifmg.edu.br/portal/',
    },
  ],
  projects: [
    {
      name: 'Lingo',
      description:
        'Lingo é um projeto de SaaS para aprendizado de idiomas, semelhante ao Duolingo. Os usuários poderão escolher um curso de idioma e ter aulas guiadas com design bonito, personagens e efeitos sonoros e visuais.',
      subtitle: '(Em desenvolvimento)',
      pic: '/lingo.png',
      picDark: '/lingo-dark.png',
      tech: ['React', 'Typescript', 'Next.js', 'Shadcn/UI'],
      links: [
        {
          label: 'Website',
          icon: 'link',
          url: 'https://duolingo-clone-lehmannpi.vercel.app/',
        },
        {
          label: 'Github',
          icon: 'github',
          url: 'https://github.com/LehmannPi/duolingo_clone',
        },
      ],
    },
    {
      name: 'Expert Speech Recognition',
      description:
        'Expert Speech Recognition é um aplicativo para criação de notas com texto e áudio transcrito. O projeto foi desenvolvido durante o NLW Expert (trilha ReactJS), evento apresentado pela Rocketseat. A API de reconhecimento de fala está configurada para áudios em português e só funciona em alguns navegadores.',
      pic: '/expert_speech.png',
      tech: ['React', 'Typescript', 'Speech-to-Text'],
      links: [
        {
          label: 'Website',
          icon: 'link',
          url: 'https://speech-recognition.filipelehmannp.workers.dev/',
        },
        {
          label: 'Github',
          icon: 'github',
          url: 'https://github.com/LehmannPi/nlw-expert-speechrecognition',
        },
      ],
    },
    {
      name: 'Desafio ACME Inc.',
      description:
        'Aplicativo web, feito como desafio de front-end, para exibir os produtos da empresa fictícia Acme Inc. O aplicativo exibe 15 itens, de maneira responsiva, com imagens, descrições e valores gerados aleatoriamente a partir de bases de dados internas ou a partir de APIs.',
      pic: '/acme.png',
      tech: ['React.js', 'Chakra-UI', 'Front-end Challenge'],
      links: [
        {
          label: 'Website',
          icon: 'link',
          url: 'https://desafio-acme-hype.filipelehmannp.workers.dev/',
        },
        {
          label: 'Github',
          icon: 'github',
          url: 'https://github.com/LehmannPi/desafio-acme-inc',
        },
      ],
    },
    {
      name: 'Mock Newspaper API',
      subtitle: '- Leia mais no repositório do Github -',
      description:
        'Este é um projeto para utilização em uma API de Jornal com acesso, manipulação e agregação de dados. O objetivo era implementar operações CRUD (CREATE, READ, UPDATE e DELETE) usando um objeto de repositório de jornal simulado.',
      pic: '/mongodb.png',
      tech: ['MongoDB', 'Node.js'],
      links: [
        {
          label: 'Github',
          icon: 'github',
          url: 'https://github.com/LehmannPi/pluralsight_mongodb_nodejs',
        },
      ],
    },
    {
      name: 'Mock Car Rental',
      description:
        'Aplicativo de gerenciamento de aluguel de carros, permitindo registro de veículos, clientes, aluguéis e pagamentos. Consultas com multiplas condicionais e geração de 3 tipos de relatório.',
      pic: '/pascal.png',
      tech: ['Pascal', 'SQLite3', 'PostgreSQL'],
      links: [
        {
          label: 'Github',
          icon: 'github',
          url: 'https://github.com/LehmannPi/mock-car-rental-project',
        },
      ],
    },
  ],
  extraProjects: [
    {
      name: 'Playlister',
      type: 'Projeto',
      description:
        'Playlister é um criador de playlists, que disponibiliza e compartilha as entradas entre os usuários. Possui autenticação, autorização, banco de dados e hospedagem via Firebase. O projeto é uma prova de conceito e não permite armazenamento de formatos em áudio.',
      tech: ['Vue.js', 'Firebase', 'Node.js'],
      links: [
        {
          label: 'Website',
          icon: 'link',
          url: 'https://playlist-vue-project-a4e60.web.app/',
        },
        {
          label: 'Github',
          icon: 'github',
          url: 'https://github.com/LehmannPi/playlist-creator-vue',
        },
      ],
    },
    {
      name: 'IP Adress Tracker',
      description:
        'Web app no qual o usuário pode obter localizações por meio de endereços de IP, com exibição em mapa. Ao carregar a página, o app retorna o endereço físico e de IP associado ao próprio usuário.',
      pic: '/ip_tracker_done.jpg',
      tech: ['Vue.js', 'Leaflet', 'AbstractAPI'],
      links: [
        {
          label: 'Website',
          icon: 'link',
          url: 'https://ipadresstracker-project.netlify.app/',
        },
        {
          label: 'Github',
          icon: 'github',
          url: 'https://github.com/LehmannPi/ip-adress-tracker/tree/develop',
        },
      ],
    },
    {
      name: 'Projetos Front-end',
      type: 'Work',
      description:
        'Projetos para aprendizagem e desenvolvimento dos fundamentos de HTML, CSS e JavaScript. Último projeto, chamado Infusion, hospedado via Netlify.',
      tech: ['HTML', 'CSS', 'JS'],
      links: [
        {
          label: 'Website',
          icon: 'link',
          url: 'https://projeto-infusion-curso-filipe.netlify.app/#',
        },
        {
          label: 'Github',
          icon: 'github',
          url: 'https://github.com/LehmannPi/projetos-treinamento-front',
        },
      ],
    },
    {
      name: 'Práticas de Machine Learning',
      type: 'Curso',
      description:
        'Registros e implementações de Machine Learning feitas em curso pela IBM.',
      tech: ['Python', 'Jupyter Notebook', 'Scikit-learn'],
      links: [
        {
          label: 'Github',
          icon: 'github',
          url: 'https://github.com/LehmannPi/ml-practices',
        },
      ],
    },
    {
      name: 'Programação Competitiva',
      type: 'Personal',
      description:
        '88 exercícios de programação competitiva solucionados em Python na plataforma Beecrowd, antiga URI Online Judge',
      tech: ['Python'],
      links: [
        {
          label: 'Beecrowd',
          icon: 'link',
          url: 'https://www.beecrowd.com.br/',
        },
        {
          label: 'Github',
          icon: 'github',
          url: 'https://github.com/LehmannPi/URIOnlineJudge',
        },
      ],
    },
  ],
  contact:
    'Seja uma oportunidade de trabalho, sugestões ou feedback, seu contato será bem vindo!',
  footer: 'Voltar ao topo!',
};
