export default {
  navbar: [
    {
      label: 'About',
      section: 'About',
    },
    {
      label: 'Experience',
      section: 'Experience',
    },
    {
      label: 'Projects',
      section: 'Projects',
    },
    {
      label: 'Contact',
      section: 'Contact',
    },
  ],
  navbarFlag: 'usa',
  jobs: [
    {
      workplace: 'Spin-off de Hype Empreendimentos',
      workplaceBtn: 'Spin-off',
      position: 'Desenvolvedor Web Front-end',
      duration: ['Agosto 2022 - Agosto 2023'],
      description: [
        'Contribuindo na construção de SaaS de alta complexidade.',
        'Escrevendo código moderno, de alto desempenho e de fácil manutenção.',
        'Aplicando CI/CD e testes de integração.',
        'Se comunicando com equipes multidisciplinares de engenheiros, analistas e designers semanalmente.',
        'Utilizando React, Next.js, Typescript, Tailwind, Jest, Cypress, TanStack Libraries.',
      ],
      url: 'https://hypeempreendimentos.com.br/',
    },
    {
      workplace: 'Guarani Sistemas',
      workplaceBtn: 'Guarani Sistemas',
      position: 'Estagiário em Desenvolvimento Web',
      duration: ['Maio 2021 - Novembro 2021'],
      description: [
        'Treinamento front-end: HTML, CSS, JavaScrip e framework Vue.js, versões 2 e 3.',
        'Contribuições em projeto de ERP de gestão de escritórios de representação comercial.',
        'Resolução de issues de baixa e média prioridade - Jira.',
        'Versionamento de projeto utilizando GitLab.',
        'Práticas com bibliotecas: Chakra UI, Vuex, Vuelidate e Axios.',
        'Acompanhamento de reuniões diárias - Daily Scrum.',
      ],
      url: 'https://www.guaranisistemas.com.br/',
    },
    {
      workplace: 'IFMG - Campus Bambuí',
      workplaceBtn: 'IFMG',
      position: 'Monitor ',
      duration: ['Março 2018 - Dezembro 2018'],
      description: [
        'Disciplina: Geometria Analítica e Álgebra Linear (GAAL).',
        'Assistência aos estudantes para resolução de exercícios e esclarecimento de dúvidas.',
        'Preparação de atividades teóricas compatíveis com próprio grau de conhecimento e experiência.',
        'Elaboração de material didático complementar, sob supervisão e aprovação do professor-orientador.',
      ],
      url: 'https://www.bambui.ifmg.edu.br/portal/',
    },
  ],
  projects: [
    {
      name: 'Issue Tracker',
      description:
        'Issue tracker é um projeto que propõe fazer o rastreamento de tarefas para equipes de desenvolvimento. Como ponto de partida, foi produzido um arquivo de Especificação de Requisitos de Software (SRS) e um Backlog de Produto para guiar Sprints semanais. Utilizará Stack MERN.',
      subtitle: '(Em desenvolvimento!)',
      pic: '/issue_tracker.jpg',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      links: [
        {
          label: 'SRS',
          icon: 'document',
          url: '/srs-eit-ieee.pdf',
        },
        {
          label: 'Github',
          icon: 'github',
          url: '',
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
          url: 'https://desafio-acme-flp.netlify.app/',
        },
        {
          label: 'Github',
          icon: 'github',
          url: 'https://github.com/LehmannPi/desafio-acme-inc',
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
      name: 'Playlister',
      description:
        'Playlister é um criador de playlists, que disponibiliza e compartilha as entradas entre os usuários. Possui autenticação, autorização, banco de dados e hospedagem via Firebase. O projeto é uma prova de conceito e não permite armazenamento de formatos em áudio.',
      pic: '/playlister.jpg',
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
  ],
  extraProjects: [
    {
      name: 'Mock Car Rental',
      type: 'Projeto',
      description:
        'Aplicativo de gerenciamento de aluguel de carros, permitindo registro de veículos, clientes, aluguéis e pagamentos. Consultas com multiplas condicionais e geração de 3 tipos de relatório.',
      tech: ['Pascal', 'SQLite3', 'PostgreSQL'],
      links: [
        {
          label: 'Github',
          icon: 'github',
          url: 'https://github.com/LehmannPi/mock-car-rental-project',
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
};
