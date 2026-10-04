export const locales = [
  "en",
  "es",
  "pt",
  "fr",
  "de",
  "it",
  "ja",
  "zh",
] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  pt: "Português",
  fr: "Français",
  de: "Deutsch",
  it: "Italiano",
  ja: "日本語",
  zh: "中文",
};

export type Dictionary = {
  hero: {
    greeting: string;
    name: string;
    tagline: string;
    subtitle: string;
    cta: string;
    whatsapp: string;
    whatsappMessage: string;
  };
  projects: {
    heading: string;
    viewLive: string;
    viewCode: string;
    inDevelopment: string;
  };
  about: {
    heading: string;
    body: string;
    howHeading: string;
    items: { title: string; text: string }[];
  };
  outro: {
    heading: string;
    body: string;
    cta: string;
    whatsapp: string;
    copy: string;
    copied: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    hero: {
      greeting: "Hi, I'm",
      name: "Federico Curto",
      tagline: "Custom web applications and websites, from design to deployment",
      subtitle:
        "Web developer focused on frontend and DevOps. I design, build and deploy the complete product so it looks right, works well and meets what your project needs.",
      cta: "View projects",
      whatsapp: "Message me on WhatsApp",
      whatsappMessage: "Hi Federico, I saw your portfolio and I'd like to talk about a project.",
    },
    projects: {
      heading: "Selected projects",
      viewLive: "Live",
      viewCode: "Code",
      inDevelopment: "In development",
    },
    about: {
      heading: "What I do",
      body:
        "Every project starts with understanding what the client needs and what value it should deliver. From there I build the right solution, from a company website to a web application with a database, without starting from a predefined product.",
      howHeading: "How I build",
      items: [
        {
          title: "Careful frontend",
          text: "Clear, responsive, consistent interfaces with Next.js, React and Tailwind CSS.",
        },
        {
          title: "Backend and data",
          text: "Python, SQL and PostgreSQL when the project calls for it.",
        },
        {
          title: "Reliable deployment",
          text: "Continuous integration and deployment with GitHub Actions, with automated tests before every release.",
        },
      ],
    },
    outro: {
      heading: "Have a project in mind?",
      body: "Let's have a conversation about what your project needs.",
      cta: "Send me an email",
      whatsapp: "Let's chat on WhatsApp",
      copy: "Copy email",
      copied: "Copied",
    },
  },
  es: {
    hero: {
      greeting: "Hola, soy",
      name: "Federico Curto",
      tagline: "Aplicaciones y sitios web a medida, del diseño al despliegue",
      subtitle:
        "Desarrollador web con foco en frontend y DevOps. Diseño, construyo y publico el producto completo para que se vea bien, funcione bien y cumpla con lo que tu proyecto necesita.",
      cta: "Ver proyectos",
      whatsapp: "Hablemos por WhatsApp",
      whatsappMessage: "Hola Federico, vi tu portfolio y quiero hablar sobre un proyecto.",
    },
    projects: {
      heading: "Proyectos seleccionados",
      viewLive: "Demo",
      viewCode: "Código",
      inDevelopment: "En desarrollo",
    },
    about: {
      heading: "Qué hago",
      body:
        "Cada proyecto empieza por entender qué necesita el cliente y qué valor tiene que aportar. A partir de ahí construyo la solución adecuada, desde un sitio institucional hasta una aplicación web con base de datos, sin partir de un producto predefinido.",
      howHeading: "Cómo lo construyo",
      items: [
        {
          title: "Frontend cuidado",
          text: "Interfaces claras, adaptables a cualquier pantalla y consistentes, con Next.js, React y Tailwind CSS.",
        },
        {
          title: "Backend y datos",
          text: "Python, SQL y PostgreSQL cuando el proyecto lo requiere.",
        },
        {
          title: "Despliegue confiable",
          text: "Integración y despliegue continuos con GitHub Actions, y tests automáticos antes de cada publicación.",
        },
      ],
    },
    outro: {
      heading: "¿Tenés un proyecto en mente?",
      body: "Tengamos una charla para entender qué necesita tu proyecto.",
      cta: "Enviarme un email",
      whatsapp: "Charlemos por WhatsApp",
      copy: "Copiar email",
      copied: "Copiado",
    },
  },
  pt: {
    hero: {
      greeting: "Olá, eu sou",
      name: "Federico Curto",
      tagline: "Aplicações e sites web sob medida, do design ao deploy",
      subtitle:
        "Desenvolvedor web com foco em frontend e DevOps. Projeto, construo e publico o produto completo para que tenha boa aparência, funcione bem e atenda ao que o seu projeto precisa.",
      cta: "Ver projetos",
      whatsapp: "Vamos conversar no WhatsApp",
      whatsappMessage: "Olá Federico, vi seu portfólio e gostaria de conversar sobre um projeto.",
    },
    projects: {
      heading: "Projetos selecionados",
      viewLive: "Demo",
      viewCode: "Código",
      inDevelopment: "Em desenvolvimento",
    },
    about: {
      heading: "O que eu faço",
      body:
        "Cada projeto começa entendendo o que o cliente precisa e que valor deve entregar. A partir daí construo a solução adequada, de um site institucional a uma aplicação web com banco de dados, sem partir de um produto predefinido.",
      howHeading: "Como eu construo",
      items: [
        {
          title: "Frontend cuidadoso",
          text: "Interfaces claras, responsivas e consistentes, com Next.js, React e Tailwind CSS.",
        },
        {
          title: "Backend e dados",
          text: "Python, SQL e PostgreSQL quando o projeto exige.",
        },
        {
          title: "Deploy confiável",
          text: "Integração e entrega contínuas com GitHub Actions, com testes automatizados antes de cada publicação.",
        },
      ],
    },
    outro: {
      heading: "Tem um projeto em mente?",
      body: "Vamos conversar para entender o que o seu projeto precisa.",
      cta: "Enviar um email",
      whatsapp: "Conversemos no WhatsApp",
      copy: "Copiar email",
      copied: "Copiado",
    },
  },
  fr: {
    hero: {
      greeting: "Bonjour, je suis",
      name: "Federico Curto",
      tagline: "Applications et sites web sur mesure, de la conception au déploiement",
      subtitle:
        "Développeur web axé frontend et DevOps. Je conçois, développe et déploie le produit complet pour qu'il soit soigné, fiable et réponde aux besoins de votre projet.",
      cta: "Voir les projets",
      whatsapp: "Parlons sur WhatsApp",
      whatsappMessage: "Bonjour Federico, j'ai vu votre portfolio et je souhaite parler d'un projet.",
    },
    projects: {
      heading: "Projets sélectionnés",
      viewLive: "Démo",
      viewCode: "Code",
      inDevelopment: "En développement",
    },
    about: {
      heading: "Ce que je fais",
      body:
        "Chaque projet commence par comprendre ce dont le client a besoin et la valeur qu'il doit apporter. J'en déduis la solution adaptée, d'un site vitrine à une application web avec base de données, sans partir d'un produit prédéfini.",
      howHeading: "Comment je construis",
      items: [
        {
          title: "Frontend soigné",
          text: "Des interfaces claires, responsives et cohérentes avec Next.js, React et Tailwind CSS.",
        },
        {
          title: "Backend et données",
          text: "Python, SQL et PostgreSQL lorsque le projet l'exige.",
        },
        {
          title: "Déploiement fiable",
          text: "Intégration et déploiement continus avec GitHub Actions, et tests automatisés avant chaque mise en ligne.",
        },
      ],
    },
    outro: {
      heading: "Un projet en tête ?",
      body: "Discutons de ce dont votre projet a besoin.",
      cta: "M'envoyer un email",
      whatsapp: "Discutons sur WhatsApp",
      copy: "Copier l'email",
      copied: "Copié",
    },
  },
  de: {
    hero: {
      greeting: "Hallo, ich bin",
      name: "Federico Curto",
      tagline: "Individuelle Webanwendungen und Websites, vom Design bis zum Deployment",
      subtitle:
        "Webentwickler mit Schwerpunkt Frontend und DevOps. Ich gestalte, entwickle und veröffentliche das gesamte Produkt, damit es gut aussieht, zuverlässig funktioniert und erfüllt, was Ihr Projekt braucht.",
      cta: "Projekte ansehen",
      whatsapp: "Schreiben wir auf WhatsApp",
      whatsappMessage: "Hallo Federico, ich habe Ihr Portfolio gesehen und möchte über ein Projekt sprechen.",
    },
    projects: {
      heading: "Ausgewählte Projekte",
      viewLive: "Live",
      viewCode: "Code",
      inDevelopment: "In Entwicklung",
    },
    about: {
      heading: "Was ich mache",
      body:
        "Jedes Projekt beginnt damit zu verstehen, was der Kunde braucht und welchen Wert es liefern soll. Darauf aufbauend entwickle ich die passende Lösung, von der Unternehmenswebsite bis zur Webanwendung mit Datenbank, ohne von einem vorgefertigten Produkt auszugehen.",
      howHeading: "Wie ich entwickle",
      items: [
        {
          title: "Sorgfältiges Frontend",
          text: "Klare, responsive und konsistente Oberflächen mit Next.js, React und Tailwind CSS.",
        },
        {
          title: "Backend und Daten",
          text: "Python, SQL und PostgreSQL, wenn das Projekt sie erfordert.",
        },
        {
          title: "Zuverlässiges Deployment",
          text: "Continuous Integration und Deployment mit GitHub Actions sowie automatisierte Tests vor jeder Veröffentlichung.",
        },
      ],
    },
    outro: {
      heading: "Haben Sie ein Projekt im Kopf?",
      body: "Lassen Sie uns darüber sprechen, was Ihr Projekt braucht.",
      cta: "E-Mail senden",
      whatsapp: "Sprechen wir auf WhatsApp",
      copy: "E-Mail kopieren",
      copied: "Kopiert",
    },
  },
  it: {
    hero: {
      greeting: "Ciao, sono",
      name: "Federico Curto",
      tagline: "Applicazioni e siti web su misura, dal design al rilascio",
      subtitle:
        "Sviluppatore web con focus su frontend e DevOps. Progetto, costruisco e pubblico il prodotto completo perché sia curato, funzioni bene e risponda a ciò di cui il tuo progetto ha bisogno.",
      cta: "Vedi i progetti",
      whatsapp: "Parliamone su WhatsApp",
      whatsappMessage: "Ciao Federico, ho visto il tuo portfolio e vorrei parlare di un progetto.",
    },
    projects: {
      heading: "Progetti selezionati",
      viewLive: "Demo",
      viewCode: "Codice",
      inDevelopment: "In sviluppo",
    },
    about: {
      heading: "Cosa faccio",
      body:
        "Ogni progetto parte dal capire di cosa ha bisogno il cliente e quale valore deve portare. Da lì costruisco la soluzione adatta, da un sito istituzionale a un'applicazione web con database, senza partire da un prodotto predefinito.",
      howHeading: "Come costruisco",
      items: [
        {
          title: "Frontend curato",
          text: "Interfacce chiare, responsive e coerenti con Next.js, React e Tailwind CSS.",
        },
        {
          title: "Backend e dati",
          text: "Python, SQL e PostgreSQL quando il progetto lo richiede.",
        },
        {
          title: "Rilascio affidabile",
          text: "Integrazione e rilascio continui con GitHub Actions e test automatici prima di ogni pubblicazione.",
        },
      ],
    },
    outro: {
      heading: "Hai un progetto in mente?",
      body: "Facciamo una chiacchierata per capire di cosa ha bisogno il tuo progetto.",
      cta: "Inviami un'email",
      whatsapp: "Facciamo due chiacchiere su WhatsApp",
      copy: "Copia l'email",
      copied: "Copiato",
    },
  },
  ja: {
    hero: {
      greeting: "こんにちは、",
      name: "Federico Curto",
      tagline: "デザインからデプロイまで、オーダーメイドのWebアプリケーションとWebサイトを",
      subtitle:
        "フロントエンドとDevOpsを軸にしたWeb開発者です。見た目も動作も整い、プロジェクトに必要な要件を満たすプロダクトを、設計から構築、公開まで一貫して手がけます。",
      cta: "プロジェクトを見る",
      whatsapp: "WhatsAppで相談する",
      whatsappMessage: "こんにちは、Federicoさん。ポートフォリオを拝見し、プロジェクトについてご相談したいです。",
    },
    projects: {
      heading: "主な制作物",
      viewLive: "デモ",
      viewCode: "コード",
      inDevelopment: "開発中",
    },
    about: {
      heading: "できること",
      body:
        "どのプロジェクトも、クライアントが何を必要とし、どんな価値を提供すべきかを理解するところから始まります。そのうえで、コーポレートサイトからデータベースを備えたWebアプリケーションまで、既製品ありきではなく最適な形で構築します。",
      howHeading: "開発の進め方",
      items: [
        {
          title: "丁寧なフロントエンド",
          text: "Next.js、React、Tailwind CSSで、分かりやすくレスポンシブで一貫性のあるインターフェースを作ります。",
        },
        {
          title: "バックエンドとデータ",
          text: "必要に応じてPython、SQL、PostgreSQLを使用します。",
        },
        {
          title: "信頼できるデプロイ",
          text: "GitHub Actionsによる継続的インテグレーションとデプロイに加え、公開前に自動テストを実行します。",
        },
      ],
    },
    outro: {
      heading: "プロジェクトのご相談はありますか？",
      body: "まずはお話しして、プロジェクトに何が必要かを一緒に整理しましょう。",
      cta: "メールを送る",
      whatsapp: "WhatsAppで話す",
      copy: "メールをコピー",
      copied: "コピーしました",
    },
  },
  zh: {
    hero: {
      greeting: "你好，我是",
      name: "Federico Curto",
      tagline: "从设计到部署的定制网页应用与网站",
      subtitle:
        "专注于前端与 DevOps 的网页开发者。我负责设计、构建并部署完整产品，让它外观得体、运行稳定，并满足你的项目需求。",
      cta: "查看项目",
      whatsapp: "通过 WhatsApp 联系我",
      whatsappMessage: "你好 Federico，我看了你的作品集，想和你聊聊一个项目。",
    },
    projects: {
      heading: "精选项目",
      viewLive: "在线演示",
      viewCode: "代码",
      inDevelopment: "开发中",
    },
    about: {
      heading: "我做什么",
      body:
        "每个项目都从了解客户的需求以及它应带来的价值开始。在此基础上，我构建合适的解决方案，从企业官网到带数据库的网页应用，而不是从预设产品出发。",
      howHeading: "我如何构建",
      items: [
        {
          title: "细致的前端",
          text: "使用 Next.js、React 和 Tailwind CSS，打造清晰、响应式且一致的界面。",
        },
        {
          title: "后端与数据",
          text: "在项目需要时使用 Python、SQL 和 PostgreSQL。",
        },
        {
          title: "可靠的部署",
          text: "通过 GitHub Actions 实现持续集成与部署，并在每次发布前运行自动化测试。",
        },
      ],
    },
    outro: {
      heading: "有项目想法吗？",
      body: "先聊一聊，看看你的项目需要什么。",
      cta: "给我发邮件",
      whatsapp: "在 WhatsApp 上聊聊",
      copy: "复制邮箱",
      copied: "已复制",
    },
  },
};
