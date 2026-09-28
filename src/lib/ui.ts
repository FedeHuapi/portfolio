// Class names shared by several sections, so buttons and links look the same everywhere.

export const wrap = "mx-auto w-full max-w-[1280px] px-[clamp(20px,5vw,72px)]";

export const section = "pt-[clamp(72px,10vw,144px)]";

export const sectionTitle =
  "text-[clamp(36px,6vw,76px)] leading-[1.02] text-balance break-words hyphens-auto";

// lucide icons use a thicker stroke in the Organic design.
export const ICON_STROKE = 2.75;

const btn =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-heading transition-[background-color,color,border-color,translate,box-shadow] duration-250 ease-organic";

export const btnPrimary = `${btn} bg-accent text-on-accent hover:-translate-y-px hover:bg-accent-hover hover:shadow-soft-md active:translate-y-0 active:bg-accent-active active:shadow-none`;

export const btnSecondary = `${btn} border-[1.5px] border-border text-foreground hover:border-foreground/40`;

export const btnOutlineOnMoss = `${btn} border-[1.5px] border-on-moss/40 text-on-moss hover:-translate-y-px hover:bg-on-moss/10 active:translate-y-0 active:bg-on-moss/20`;

export const btnLg = "min-h-[54px] px-7 text-[17px]";

export const btnMd = "min-h-11 px-5 text-[15px]";

export const iconLink =
  "inline-grid size-13 shrink-0 place-items-center rounded-full border-[1.5px] transition-[background-color,color,border-color,rotate,scale] duration-350 ease-organic hover:-rotate-8 hover:scale-104 hover:border-transparent";
