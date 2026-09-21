export const SITE_NAME = "Foco Steam IPTV";

export const SITE_DESCRIPTION =
  "Foco Steam IPTV: mais de 6.000 séries e filmes, canais abertos e fechados em SD, HD, FHD e 4K. Acesso imediato, suporte rápido e planos a partir de R$ 29,90.";

// Defina NEXT_PUBLIC_SITE_URL no deploy (ex.: https://seudominio.com.br).
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
  /\/+$/,
  "",
);
