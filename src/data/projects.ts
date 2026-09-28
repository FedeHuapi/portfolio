import type { Locale } from "@/i18n/dictionaries";

export type Project = {
  title: string;
  description: Record<Locale, string>;
  stack: string[];
  liveUrl?: string;
  codeUrl?: string;
  /** Path under /public. Optional — placeholders below don't have one yet. */
  image?: string;
};

const placeholderDescription: Record<Locale, string> = {
  en: "A short description of the problem solved and the result achieved.",
  es: "Una breve descripción del problema resuelto y el resultado logrado.",
  pt: "Uma breve descrição do problema resolvido e do resultado alcançado.",
  fr: "Une brève description du problème résolu et du résultat obtenu.",
  de: "Eine kurze Beschreibung des gelösten Problems und des erzielten Ergebnisses.",
  it: "Una breve descrizione del problema risolto e del risultato ottenuto.",
  ja: "解決した課題と得られた成果についての簡単な説明。",
  zh: "对已解决问题和取得成果的简要说明。",
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
  },
  {
    title: "Project Two",
    description: placeholderDescription,
    stack: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Project Three",
    description: placeholderDescription,
    stack: ["Next.js", "Tailwind"],
    liveUrl: "#",
    codeUrl: "#",
  },
];
