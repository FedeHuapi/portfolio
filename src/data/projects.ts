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
];
