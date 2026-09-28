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
    cta: string;
  };
  projects: {
    heading: string;
    viewLive: string;
    viewCode: string;
    screenshot: string;
  };
  about: {
    heading: string;
    body: string;
  };
  outro: {
    heading: string;
    body: string;
    cta: string;
    copy: string;
    copied: string;
    made: string;
  };
  ui: {
    theme: string;
    language: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    hero: {
      greeting: "Hi, I'm",
      name: "Federico Curto",
      tagline: "I build fast, well-crafted web products.",
      cta: "View projects",
    },
    projects: {
      heading: "Selected projects",
      viewLive: "Live",
      viewCode: "Code",
      screenshot: "screenshot",
    },
    about: {
      heading: "About",
      body:
        "Developer focused on clean, performant interfaces. I work mainly with React, Next.js and TypeScript, paying close attention to detail and user experience.",
    },
    outro: {
      heading: "Let's work together",
      body: "Have a project in mind or just want to say hi? My inbox is open.",
      cta: "Send me an email",
      copy: "Copy email",
      copied: "Copied",
      made: "Designed and built with care.",
    },
    ui: {
      theme: "Toggle theme",
      language: "Language",
    },
  },
  es: {
    hero: {
      greeting: "Hola, soy",
      name: "Federico Curto",
      tagline: "Construyo productos web rápidos y bien pensados.",
      cta: "Ver proyectos",
    },
    projects: {
      heading: "Proyectos seleccionados",
      viewLive: "Demo",
      viewCode: "Código",
      screenshot: "captura",
    },
    about: {
      heading: "Sobre mí",
      body:
        "Desarrollador enfocado en interfaces limpias y performantes. Trabajo principalmente con React, Next.js y TypeScript, prestando mucha atención al detalle y a la experiencia de usuario.",
    },
    outro: {
      heading: "Trabajemos juntos",
      body: "¿Tenés un proyecto en mente o simplemente querés saludar? Mi bandeja está abierta.",
      cta: "Enviarme un email",
      copy: "Copiar email",
      copied: "Copiado",
      made: "Diseñado y construido con cuidado.",
    },
    ui: {
      theme: "Cambiar tema",
      language: "Idioma",
    },
  },
  pt: {
    hero: {
      greeting: "Olá, eu sou",
      name: "Federico Curto",
      tagline: "Eu construo produtos web rápidos e bem pensados.",
      cta: "Ver projetos",
    },
    projects: {
      heading: "Projetos selecionados",
      viewLive: "Demo",
      viewCode: "Código",
      screenshot: "captura",
    },
    about: {
      heading: "Sobre mim",
      body:
        "Desenvolvedor focado em interfaces limpas e performáticas. Trabalho principalmente com React, Next.js e TypeScript, com muita atenção ao detalhe e à experiência do usuário.",
    },
    outro: {
      heading: "Vamos trabalhar juntos",
      body: "Tem um projeto em mente ou só quer dizer olá? Minha caixa de entrada está aberta.",
      cta: "Enviar um email",
      copy: "Copiar email",
      copied: "Copiado",
      made: "Projetado e construído com cuidado.",
    },
    ui: {
      theme: "Mudar tema",
      language: "Idioma",
    },
  },
  fr: {
    hero: {
      greeting: "Bonjour, je suis",
      name: "Federico Curto",
      tagline: "Je crée des produits web rapides et soignés.",
      cta: "Voir les projets",
    },
    projects: {
      heading: "Projets sélectionnés",
      viewLive: "Démo",
      viewCode: "Code",
      screenshot: "capture",
    },
    about: {
      heading: "À propos",
      body:
        "Développeur axé sur des interfaces propres et performantes. Je travaille principalement avec React, Next.js et TypeScript, avec une grande attention aux détails et à l'expérience utilisateur.",
    },
    outro: {
      heading: "Travaillons ensemble",
      body: "Un projet en tête ou juste envie de dire bonjour ? Ma boîte de réception est ouverte.",
      cta: "M'envoyer un email",
      copy: "Copier l'email",
      copied: "Copié",
      made: "Conçu et développé avec soin.",
    },
    ui: {
      theme: "Changer de thème",
      language: "Langue",
    },
  },
  de: {
    hero: {
      greeting: "Hallo, ich bin",
      name: "Federico Curto",
      tagline: "Ich entwickle schnelle, durchdachte Webprodukte.",
      cta: "Projekte ansehen",
    },
    projects: {
      heading: "Ausgewählte Projekte",
      viewLive: "Live",
      viewCode: "Code",
      screenshot: "Screenshot",
    },
    about: {
      heading: "Über mich",
      body:
        "Entwickler mit Fokus auf saubere, performante Interfaces. Ich arbeite hauptsächlich mit React, Next.js und TypeScript und achte stark auf Details und Nutzererfahrung.",
    },
    outro: {
      heading: "Lass uns zusammenarbeiten",
      body: "Hast du ein Projekt im Kopf oder willst einfach hallo sagen? Mein Postfach ist offen.",
      cta: "E-Mail senden",
      copy: "E-Mail kopieren",
      copied: "Kopiert",
      made: "Mit Sorgfalt gestaltet und entwickelt.",
    },
    ui: {
      theme: "Design wechseln",
      language: "Sprache",
    },
  },
  it: {
    hero: {
      greeting: "Ciao, sono",
      name: "Federico Curto",
      tagline: "Creo prodotti web rapidi e ben progettati.",
      cta: "Vedi i progetti",
    },
    projects: {
      heading: "Progetti selezionati",
      viewLive: "Demo",
      viewCode: "Codice",
      screenshot: "screenshot",
    },
    about: {
      heading: "Chi sono",
      body:
        "Sviluppatore concentrato su interfacce pulite e performanti. Lavoro principalmente con React, Next.js e TypeScript, con grande attenzione ai dettagli e all'esperienza utente.",
    },
    outro: {
      heading: "Lavoriamo insieme",
      body: "Hai un progetto in mente o vuoi solo salutare? La mia casella è aperta.",
      cta: "Inviami un'email",
      copy: "Copia l'email",
      copied: "Copiato",
      made: "Progettato e sviluppato con cura.",
    },
    ui: {
      theme: "Cambia tema",
      language: "Lingua",
    },
  },
  ja: {
    hero: {
      greeting: "こんにちは、",
      name: "Federico Curto",
      tagline: "高速で洗練されたウェブプロダクトを作っています。",
      cta: "プロジェクトを見る",
    },
    projects: {
      heading: "主な制作物",
      viewLive: "デモ",
      viewCode: "コード",
      screenshot: "スクリーンショット",
    },
    about: {
      heading: "私について",
      body:
        "クリーンでパフォーマンスの高いインターフェースに注力する開発者です。React、Next.js、TypeScriptを中心に、細部とユーザー体験に強くこだわって開発しています。",
    },
    outro: {
      heading: "一緒に仕事をしましょう",
      body: "プロジェクトのご相談、またはご挨拶だけでも歓迎です。お気軽にご連絡ください。",
      cta: "メールを送る",
      copy: "メールをコピー",
      copied: "コピーしました",
      made: "丁寧にデザインし、つくりました。",
    },
    ui: {
      theme: "テーマを切り替え",
      language: "言語",
    },
  },
  zh: {
    hero: {
      greeting: "你好，我是",
      name: "Federico Curto",
      tagline: "我打造快速且精心设计的网页产品。",
      cta: "查看项目",
    },
    projects: {
      heading: "精选项目",
      viewLive: "在线演示",
      viewCode: "代码",
      screenshot: "截图",
    },
    about: {
      heading: "关于我",
      body:
        "专注于简洁高性能界面的开发者。主要使用 React、Next.js 和 TypeScript，非常注重细节和用户体验。",
    },
    outro: {
      heading: "让我们合作吧",
      body: "有项目想法，或者只是想打个招呼？我的邮箱随时开放。",
      cta: "给我发邮件",
      copy: "复制邮箱",
      copied: "已复制",
      made: "用心设计与打造。",
    },
    ui: {
      theme: "切换主题",
      language: "语言",
    },
  },
};
