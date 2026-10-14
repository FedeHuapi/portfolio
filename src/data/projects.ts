import type { Locale } from "@/i18n/dictionaries";

export type Project = {
  title: string;
  description: Record<Locale, string>;
  stack: string[];
  liveUrl?: string;
  codeUrl?: string;
  /** Path under /public. Optional. Also used as the poster of the video below. */
  image?: string;
  /** Short looping clip (paths under /public) that replaces the still image when present. */
  video?: { webm: string; mp4: string };
  /** Shows an "in development" tag. Use it while the project has no public launch yet. */
  inDevelopment?: boolean;
};

export const projects: Project[] = [
  {
    title: "Mawida",
    description: {
      en: "Marketing site for a kayak-tour operator on Lago Moquehue, Patagonia, built to turn search traffic into WhatsApp bookings. Includes technical SEO, CI with GitHub Actions, and uptime and analytics monitoring.",
      es: "Sitio para una empresa de expediciones en kayak en el Lago Moquehue, Patagonia, pensado para convertir el tráfico de búsqueda en reservas por WhatsApp. Incluye SEO técnico, integración continua con GitHub Actions y monitoreo de actividad y analítica.",
      pt: "Site para uma empresa de expedições de caiaque no Lago Moquehue, Patagônia, feito para converter tráfego de busca em reservas pelo WhatsApp. Inclui SEO técnico, integração contínua com GitHub Actions e monitoramento de atividade e analytics.",
      fr: "Site pour une entreprise d'expéditions en kayak sur le lac Moquehue, en Patagonie, conçu pour transformer le trafic de recherche en réservations WhatsApp. Comprend un SEO technique, une intégration continue avec GitHub Actions, ainsi qu'un suivi de disponibilité et d'analytics.",
      de: "Website für einen Kajak-Expeditionsanbieter am Lago Moquehue in Patagonien, entwickelt, um Suchverkehr in WhatsApp-Buchungen umzuwandeln. Enthält technisches SEO, CI mit GitHub Actions sowie Uptime- und Analytics-Monitoring.",
      it: "Sito per un'azienda di spedizioni in kayak sul Lago Moquehue, in Patagonia, pensato per trasformare il traffico di ricerca in prenotazioni via WhatsApp. Include SEO tecnica, integrazione continua con GitHub Actions e monitoraggio di uptime e analytics.",
      ja: "パタゴニア、モケウエ湖でのカヤックツアー会社のためのサイト。検索トラフィックをWhatsAppでの予約につなげることを目的に構築。技術的SEO、GitHub Actionsによる継続的インテグレーション、稼働監視とアナリティクスを含む。",
      zh: "为巴塔哥尼亚莫克韦湖的皮划艇探险公司打造的营销网站,旨在将搜索流量转化为 WhatsApp 预约。包含技术性 SEO、基于 GitHub Actions 的持续集成,以及正常运行时间和数据分析监控。",
    },
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4"],
    liveUrl: "https://www.mawida.ar",
    codeUrl: "https://github.com/FedeHuapi/mawidakayaks",
    image: "/projects/mawida.jpg",
    video: { webm: "/projects/mawida.webm", mp4: "/projects/mawida.mp4" },
  },
  {
    title: "Mamunis",
    description: {
      en: "Online store for a children's clothing brand. A FastAPI and PostgreSQL API covers the catalog, cart and checkout (as a guest or with an account), and a React storefront is being built on top of it. Automated tests and dependency audits run on GitHub Actions.",
      es: "Tienda online para una marca de ropa infantil. Una API en FastAPI y PostgreSQL cubre catálogo, carrito y compra (como invitado o con cuenta), y encima se está construyendo la tienda en React. Los tests automáticos y la auditoría de dependencias corren en GitHub Actions.",
      pt: "Loja online para uma marca de roupas infantis. Uma API em FastAPI e PostgreSQL cobre catálogo, carrinho e compra (como convidado ou com conta), e uma loja em React está sendo construída por cima. Testes automatizados e auditoria de dependências rodam no GitHub Actions.",
      fr: "Boutique en ligne pour une marque de vêtements pour enfants. Une API FastAPI et PostgreSQL gère le catalogue, le panier et la commande (en invité ou avec un compte), et une vitrine React est en cours de construction par-dessus. Les tests automatisés et l'audit des dépendances s'exécutent sur GitHub Actions.",
      de: "Onlineshop für eine Kindermodemarke. Eine API mit FastAPI und PostgreSQL deckt Katalog, Warenkorb und Bestellung ab (als Gast oder mit Konto), darauf entsteht ein React-Shop. Automatisierte Tests und Abhängigkeitsprüfungen laufen auf GitHub Actions.",
      it: "Negozio online per un marchio di abbigliamento per bambini. Un'API in FastAPI e PostgreSQL gestisce catalogo, carrello e acquisto (come ospite o con account), e sopra è in costruzione una vetrina in React. Test automatici e audit delle dipendenze girano su GitHub Actions.",
      ja: "子ども服ブランドのオンラインストア。FastAPIとPostgreSQLのAPIがカタログ、カート、購入（ゲストまたはアカウント）を担い、その上にReactのストアフロントを構築中です。自動テストと依存関係の監査はGitHub Actionsで実行しています。",
      zh: "为童装品牌打造的网上商店。基于 FastAPI 和 PostgreSQL 的 API 负责商品目录、购物车和结账（访客或账号均可），React 店面正在其之上开发。自动化测试和依赖审计在 GitHub Actions 上运行。",
    },
    stack: ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "Tailwind CSS"],
    codeUrl: "https://github.com/FedeHuapi/mamunis",
    image: "/projects/mamunisproject.jpeg",
    inDevelopment: true,
  },
  {
    title: "Tuorigami",
    description: {
      en: "Interactive origami guide. Each model is described as data, a list of folds, and a custom engine animates every fold in 3D, lets you fold the paper yourself by dragging it, and generates the step diagrams for a printable guide.",
      es: "Guía interactiva de origami. Cada modelo se describe como datos, una lista de pliegues, y un motor propio anima cada pliegue en 3D, te deja doblar el papel vos mismo arrastrándolo y genera los diagramas de cada paso para una guía imprimible.",
      pt: "Guia interativo de origami. Cada modelo é descrito como dados, uma lista de dobras, e um motor próprio anima cada dobra em 3D, permite dobrar o papel você mesmo arrastando e gera os diagramas de cada passo para um guia imprimível.",
      fr: "Guide interactif d'origami. Chaque modèle est décrit comme des données, une liste de plis, et un moteur maison anime chaque pli en 3D, permet de plier le papier soi-même en le faisant glisser et génère les schémas de chaque étape pour un guide imprimable.",
      de: "Interaktive Origami-Anleitung. Jedes Modell ist als Daten beschrieben, als Liste von Faltungen, und eine eigene Engine animiert jede Faltung in 3D, lässt dich das Papier selbst durch Ziehen falten und erzeugt die Diagramme jedes Schritts für eine druckbare Anleitung.",
      it: "Guida interattiva all'origami. Ogni modello è descritto come dati, un elenco di pieghe, e un motore proprio anima ogni piega in 3D, ti lascia piegare la carta trascinandola e genera i diagrammi di ogni passaggio per una guida stampabile.",
      ja: "インタラクティブな折り紙ガイド。各モデルは折り目のリストというデータで記述され、独自のエンジンがすべての折りを3Dでアニメーションし、ドラッグして自分で紙を折ることができ、印刷できるガイド用に各手順の図も生成します。",
      zh: "交互式折纸指南。每个模型都以数据（折痕列表）描述，自研引擎以 3D 动画呈现每一步折叠，可以拖动纸张亲手折叠，并为可打印的指南生成每一步的图解。",
    },
    stack: ["React", "TypeScript", "Vite", "Three.js"],
    image: "/projects/tuorigami.jpeg",
    inDevelopment: true,
  },
];
