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
    subtitle: string;
    cta: string;
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
    copy: string;
    copied: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    hero: {
      greeting: "Hi, I'm",
      name: "Federico Curto",
      subtitle:
        "Web developer focused on frontend and DevOps. I design, build and deploy the complete product so it looks right, works well and meets what your project needs.",
      cta: "View projects",
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
        "I build websites and web applications end to end: I design the interface, code the part you see and the part you don't, and leave everything published and working. Before writing any code I ask what you'll use it for, because what I build depends on that.",
      howHeading: "What I work with",
      items: [
        {
          title: "What you see",
          text: "Next.js, React and Tailwind. Pages that look good on both phones and computers.",
        },
        {
          title: "What you don't see",
          text: "If the project needs to store information, like products, users or orders, I take care of that part: I code it with Python and FastAPI and use a PostgreSQL database.",
        },
        {
          title: "When it goes online",
          text: "Every change goes through automated tests on GitHub Actions before it's published, so what already works doesn't break. I also include basic security measures.",
        },
      ],
    },
    outro: {
      heading: "Have a project in mind?",
      body: "Let's have a conversation about what your project needs.",
      cta: "Send me an email",
      copy: "Copy email",
      copied: "Copied",
    },
  },
  es: {
    hero: {
      greeting: "Hola, soy",
      name: "Federico Curto",
      subtitle:
        "Desarrollador web con foco en frontend y DevOps. Diseño, construyo y publico el producto completo para que se vea bien, funcione bien y cumpla con lo que tu proyecto necesita.",
      cta: "Ver proyectos",
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
        "Hago sitios y aplicaciones web de punta a punta: diseño la interfaz, programo la parte que se ve y la que no, y dejo todo publicado y funcionando. Antes de escribir código te pregunto para qué lo vas a usar, porque lo que armo depende de eso.",
      howHeading: "Con qué trabajo",
      items: [
        {
          title: "Lo que se ve",
          text: "Next.js, React y Tailwind. Páginas que se ven bien tanto en el celular como en la compu.",
        },
        {
          title: "Lo que no se ve",
          text: "Si el proyecto necesita guardar información, como productos, usuarios o pedidos, me encargo de esa parte: la programo con Python y FastAPI y uso una base de datos PostgreSQL.",
        },
        {
          title: "Cuando sale a internet",
          text: "Cada cambio pasa por tests automáticos en GitHub Actions antes de publicarse, para no romper lo que ya funciona. También incluyo medidas básicas de seguridad.",
        },
      ],
    },
    outro: {
      heading: "¿Tenés un proyecto en mente?",
      body: "Tengamos una charla para entender qué necesita tu proyecto.",
      cta: "Enviarme un email",
      copy: "Copiar email",
      copied: "Copiado",
    },
  },
  pt: {
    hero: {
      greeting: "Olá, eu sou",
      name: "Federico Curto",
      subtitle:
        "Desenvolvedor web com foco em frontend e DevOps. Projeto, construo e publico o produto completo para que tenha boa aparência, funcione bem e atenda ao que o seu projeto precisa.",
      cta: "Ver projetos",
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
        "Faço sites e aplicações web de ponta a ponta: desenho a interface, programo a parte que se vê e a que não se vê, e deixo tudo publicado e funcionando. Antes de escrever código, pergunto para que você vai usar, porque o que construo depende disso.",
      howHeading: "Com o que eu trabalho",
      items: [
        {
          title: "O que se vê",
          text: "Next.js, React e Tailwind. Páginas que ficam boas tanto no celular quanto no computador.",
        },
        {
          title: "O que não se vê",
          text: "Se o projeto precisa guardar informações, como produtos, usuários ou pedidos, cuido dessa parte: programo com Python e FastAPI e uso um banco de dados PostgreSQL.",
        },
        {
          title: "Quando vai para a internet",
          text: "Cada mudança passa por testes automáticos no GitHub Actions antes de ser publicada, para não quebrar o que já funciona. Também incluo medidas básicas de segurança.",
        },
      ],
    },
    outro: {
      heading: "Tem um projeto em mente?",
      body: "Vamos conversar para entender o que o seu projeto precisa.",
      cta: "Enviar um email",
      copy: "Copiar email",
      copied: "Copiado",
    },
  },
  fr: {
    hero: {
      greeting: "Bonjour, je suis",
      name: "Federico Curto",
      subtitle:
        "Développeur web axé frontend et DevOps. Je conçois, développe et déploie le produit complet pour qu'il soit soigné, fiable et réponde aux besoins de votre projet.",
      cta: "Voir les projets",
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
        "Je réalise des sites et des applications web de A à Z : je conçois l'interface, je programme la partie visible et celle qui ne l'est pas, et je mets le tout en ligne et en état de marche. Avant d'écrire du code, je vous demande à quoi cela va servir, car ce que je construis en dépend.",
      howHeading: "Avec quoi je travaille",
      items: [
        {
          title: "Ce qui se voit",
          text: "Next.js, React et Tailwind. Des pages qui s'affichent bien aussi bien sur mobile que sur ordinateur.",
        },
        {
          title: "Ce qui ne se voit pas",
          text: "Si le projet doit enregistrer des informations, comme des produits, des utilisateurs ou des commandes, je m'en occupe : je le programme avec Python et FastAPI et j'utilise une base de données PostgreSQL.",
        },
        {
          title: "Quand ça part en ligne",
          text: "Chaque modification passe par des tests automatiques sur GitHub Actions avant d'être publiée, pour ne pas casser ce qui fonctionne déjà. J'intègre aussi des mesures de sécurité de base.",
        },
      ],
    },
    outro: {
      heading: "Un projet en tête ?",
      body: "Discutons de ce dont votre projet a besoin.",
      cta: "M'envoyer un email",
      copy: "Copier l'email",
      copied: "Copié",
    },
  },
  de: {
    hero: {
      greeting: "Hallo, ich bin",
      name: "Federico Curto",
      subtitle:
        "Webentwickler mit Schwerpunkt Frontend und DevOps. Ich gestalte, entwickle und veröffentliche das gesamte Produkt, damit es gut aussieht, zuverlässig funktioniert und erfüllt, was Ihr Projekt braucht.",
      cta: "Projekte ansehen",
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
        "Ich baue Websites und Webanwendungen von Anfang bis Ende: Ich gestalte die Oberfläche, programmiere den sichtbaren und den unsichtbaren Teil und stelle alles veröffentlicht und funktionsfähig bereit. Bevor ich Code schreibe, frage ich, wofür Sie es nutzen werden, denn was ich baue, hängt davon ab.",
      howHeading: "Womit ich arbeite",
      items: [
        {
          title: "Was man sieht",
          text: "Next.js, React und Tailwind. Seiten, die auf Smartphone und Computer gleichermaßen gut aussehen.",
        },
        {
          title: "Was man nicht sieht",
          text: "Wenn das Projekt Informationen speichern muss, etwa Produkte, Nutzer oder Bestellungen, kümmere ich mich darum: Ich programmiere das mit Python und FastAPI und nutze eine PostgreSQL-Datenbank.",
        },
        {
          title: "Wenn es online geht",
          text: "Jede Änderung durchläuft automatisierte Tests auf GitHub Actions, bevor sie veröffentlicht wird, damit nichts kaputtgeht, was bereits funktioniert. Außerdem sind grundlegende Sicherheitsmaßnahmen enthalten.",
        },
      ],
    },
    outro: {
      heading: "Haben Sie ein Projekt im Kopf?",
      body: "Lassen Sie uns darüber sprechen, was Ihr Projekt braucht.",
      cta: "E-Mail senden",
      copy: "E-Mail kopieren",
      copied: "Kopiert",
    },
  },
  it: {
    hero: {
      greeting: "Ciao, sono",
      name: "Federico Curto",
      subtitle:
        "Sviluppatore web con focus su frontend e DevOps. Progetto, costruisco e pubblico il prodotto completo perché sia curato, funzioni bene e risponda a ciò di cui il tuo progetto ha bisogno.",
      cta: "Vedi i progetti",
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
        "Realizzo siti e applicazioni web a 360 gradi: progetto l'interfaccia, programmo la parte che si vede e quella che non si vede, e lascio tutto pubblicato e funzionante. Prima di scrivere codice ti chiedo a cosa ti servirà, perché ciò che costruisco dipende da quello.",
      howHeading: "Con cosa lavoro",
      items: [
        {
          title: "Quello che si vede",
          text: "Next.js, React e Tailwind. Pagine che stanno bene sia sul cellulare sia sul computer.",
        },
        {
          title: "Quello che non si vede",
          text: "Se il progetto deve salvare informazioni, come prodotti, utenti o ordini, me ne occupo io: la programmo con Python e FastAPI e uso un database PostgreSQL.",
        },
        {
          title: "Quando va online",
          text: "Ogni modifica passa da test automatici su GitHub Actions prima di essere pubblicata, per non rompere ciò che già funziona. Includo anche misure di sicurezza di base.",
        },
      ],
    },
    outro: {
      heading: "Hai un progetto in mente?",
      body: "Facciamo una chiacchierata per capire di cosa ha bisogno il tuo progetto.",
      cta: "Inviami un'email",
      copy: "Copia l'email",
      copied: "Copiato",
    },
  },
  ja: {
    hero: {
      greeting: "こんにちは、",
      name: "Federico Curto",
      subtitle:
        "フロントエンドとDevOpsを軸にしたWeb開発者です。見た目も動作も整い、プロジェクトに必要な要件を満たすプロダクトを、設計から構築、公開まで一貫して手がけます。",
      cta: "プロジェクトを見る",
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
        "Webサイトやアプリケーションを最初から最後まで手がけます。画面のデザイン、見える部分と見えない部分の開発、公開して動く状態にするところまでです。コードを書く前に、何のために使うのかをお聞きします。作るものはそれ次第で変わるからです。",
      howHeading: "使っているもの",
      items: [
        {
          title: "見える部分",
          text: "Next.js、React、Tailwind。スマートフォンでもパソコンでもきれいに表示されるページを作ります。",
        },
        {
          title: "見えない部分",
          text: "商品、ユーザー、注文など、情報を保存する必要がある場合は、その部分も担当します。PythonとFastAPIで開発し、データベースにはPostgreSQLを使います。",
        },
        {
          title: "公開するとき",
          text: "変更はすべて公開前にGitHub Actionsの自動テストを通すので、すでに動いている部分を壊しません。基本的なセキュリティ対策も含まれます。",
        },
      ],
    },
    outro: {
      heading: "プロジェクトのご相談はありますか？",
      body: "まずはお話しして、プロジェクトに何が必要かを一緒に整理しましょう。",
      cta: "メールを送る",
      copy: "メールをコピー",
      copied: "コピーしました",
    },
  },
  zh: {
    hero: {
      greeting: "你好，我是",
      name: "Federico Curto",
      subtitle:
        "专注于前端与 DevOps 的网页开发者。我负责设计、构建并部署完整产品，让它外观得体、运行稳定，并满足你的项目需求。",
      cta: "查看项目",
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
        "我从头到尾完成网站和网页应用：设计界面，开发看得见和看不见的部分，并把一切发布上线、正常运行。动手写代码之前，我会先问你打算用它来做什么，因为我要做的东西取决于此。",
      howHeading: "我使用的技术",
      items: [
        {
          title: "看得见的部分",
          text: "Next.js、React 和 Tailwind。在手机和电脑上都好看的页面。",
        },
        {
          title: "看不见的部分",
          text: "如果项目需要保存信息，比如商品、用户或订单，这部分由我负责：用 Python 和 FastAPI 开发，并使用 PostgreSQL 数据库。",
        },
        {
          title: "上线时",
          text: "每次改动在发布前都会在 GitHub Actions 上通过自动化测试，避免破坏已有的功能。我也会加入基础的安全措施。",
        },
      ],
    },
    outro: {
      heading: "有项目想法吗？",
      body: "先聊一聊，看看你的项目需要什么。",
      cta: "给我发邮件",
      copy: "复制邮箱",
      copied: "已复制",
    },
  },
};
