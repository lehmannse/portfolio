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
  landing: {
    intro: "Hello, I'm Filipe Lehmann, a",
    job: 'web developer.',
    more: 'Learn More',
  },
  about: {
    headline: 'I want to be a bridge between people and technology.',
    intro:
      'I am a developer, athlete and polyglot in training, engaged with life and looking to partner with people and organizations to carry out worthwhile projects, improve relationships and achieve the best version of myself.',
    resume1: 'I graduated in',
    course: 'Computer Engineering',
    resume2: 'from IFMG. In my career as a developer I was',
    job1: 'Web Development Intern',
    resume3: 'at Guarani Sistemas, in São Carlos - SP, Brazil, as well as a',
    job2: 'Front-end developer',
    resume4:
      'in a spin-off from Hype Empreendimentos, in Curitiba - PR, Brazil.',
    resume5:
      'In my last professional experience, I not only had the opportunity to improve my skills in',
    resume6:
      'and other tools for web software development, but also the opportunity to proactively contribute to creating a positive, proactive and collaborative work culture.',
    cta: 'Invite me to a project!',
  },
  jobs: [
    {
      workplace: 'Volunteers for Ukraine',
      workplaceBtn: 'VFU',
      position: 'Front-end Developer',
      duration: ['March 2024 - Present'],
      description: [
        'Contributing to the development of a web application for project and crisis management to support Ukraine.',
        'Front-end: React, Next.js, Typescript and TailwindCSS.',
        'Backend: .NET and Node.js',
      ],
      url: 'https://volunteersforukraine.org/',
    },
    {
      workplace: 'Spin-off from Hype Empreendimentos',
      workplaceBtn: 'Spin-off',
      position: 'Front-end Developer',
      duration: ['August 2022 - August 2023'],
      description: [
        'Building highly complex SaaS',
        'Writing modern, high-performance, maintainable code.',
        'Applying  CI/CD.',
        'Communicating with multidisciplinary teams of engineers, analysts and designers on a weekly basis.',
      ],
      url: 'https://hypeempreendimentos.com.br/',
    },
    {
      workplace: 'Guarani Sistemas',
      workplaceBtn: 'Guarani Sistemas',
      position: 'Web Development Intern',
      duration: ['May 2021 - November 2021'],
      description: [
        'Training in Vue.js, HTML, CSS and JavaScript.',
        'Contributions to an ERP project for managing commercial representation offices.',
        'Resolution of low and medium priority issues - Jira.',
        'Software version control using GitLab.',
        'Used libs: Chakra UI, Vuex, Vuelidate e Axios.',
        'Attending to daily meetings - Daily Scrum.',
      ],
      url: 'https://www.guaranisistemas.com.br/',
    },
    {
      workplace: 'IFMG - Campus Bambuí',
      workplaceBtn: 'IFMG',
      position: 'Teaching Assistant ',
      duration: ['March 2018 - December 2018'],
      description: [
        'Subject: Analytical Geometry and Linear Algebra.',
        'Assistance to students in solving problems and clarifying doubts.',
        'Preparation of theoretical activities compatible with students’ level of knowledge and experience.',
        'Preparation of complementary teaching material, under the supervision and approval of the teacher-advisor.',
      ],
      url: 'https://www.bambui.ifmg.edu.br/portal/',
    },
  ],
  projects: [
    {
      name: 'Lingo',
      description:
        'Lingo is a project of a language learning SaaS, similar to Duolingo. Users will be able to choose a language course, and have guided lessons with beautiful design, characters, audio & visual effects.',
      subtitle: '(Under development)',
      pic: '/lingo.png',
      tech: ['React', 'Typescript', 'Next.js', 'Shadcn/UI'],
      links: [
        {
          label: 'Website',
          icon: 'link',
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
        'Expert Speech Recognition is an application for creating notes with text and transcribed audio. The project was developed during NLW Expert (ReactJS track), an event presented by Rocketseat. The speech recognition API is set for Portuguese audios and only works in some browsers.',
      // subtitle: '(Under development!)',
      pic: '/expert_speech.png',
      tech: ['React', 'Typescript', 'Speech-to-Text'],
      links: [
        {
          label: 'Website',
          icon: 'link',
          url: 'https://speechtotextproject.netlify.app/',
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
        'Web application, made as a front-end challenge, to display the products of the fictional company Acme Inc. The application displays 15 items, in a responsive way, with images, descriptions and values generated randomly from internal databases or from APIs.',
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
      name: 'Mock Newspaper API',
      subtitle: '- Read more at the Github repository -',
      description: `This is a project for use in a Newspaper API with access, manipulation, and aggregation of data. The goal was to implement CRUD (CREATE, READ, UPDATE and DELETE) operations using a mock newspaper repository object.`,
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
        'Car rental management application, allowing registration of vehicles, customers, rentals and payments. Queries with multiple conditionals and generation of 3 types of reports.',
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
      name: 'IP Adress Tracker',
      description:
        'Web app in which the user can obtain locations through IP addresses, with map display. When loading the page, the app returns the physical and IP address associated with the user.',
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
      type: 'Projeto',
      description:
        'Playlister is a playlist creator that makes entries available and shared among users. It has authentication, authorization, database and hosting via Firebase. The project is a proof of concept and does not allow storage of audio formats.',
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
      name: 'Projetos Front-end',
      type: 'Work',
      description:
        'Projects for learning the fundamentals of HTML, CSS and JavaScript. Latest project, called Infusion, hosted via Netlify.',
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
      name: 'Machine Learning Practices',
      type: 'Curso',
      description:
        'Records and ongoing Machine Learning implementations carried out by IBM.',
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
        '88 competitive programming exercises solved in Python on the Beecrowd platform, formerly URI Online Judge.',
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
    "Whether it's a job opportunity, an invite to coffee, or feedback on my portfolio, my inbox is open!",
  footer: 'Scroll to the top!',
};
