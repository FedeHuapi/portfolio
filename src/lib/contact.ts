export const CONTACT = {
  github: "https://github.com/FedeHuapi",
  linkedin: "https://www.linkedin.com/in/federicocurto/",
  email: "mailto:federicocurto00@gmail.com",
  whatsapp: "https://wa.me/5493413400286",
};

/** WhatsApp link with the first message already typed, in the visitor's language. */
export function whatsappLink(message: string) {
  return `${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}
