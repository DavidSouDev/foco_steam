export type Plan = {
  days: number;
  name: string;
  pricePerMonth: string;
  originalPrice: string;
  totalPrice: string;
  savingsNote?: string;
  featured?: boolean;
  features: string[];
  href: string;
  cta: string;
};

export const plans: Plan[] = [
  {
    days: 30,
    name: "1 mês",
    pricePerMonth: "R$ 29,90/mês",
    originalPrice: "R$ 49,90",
    totalPrice: "R$ 29,90",
    features: [
      "Canais abertos e fechados",
      "+6.000 séries e filmes",
      "1 dispositivo incluso",
      "Qualidade SD/HD/FHD/4K",
      "Envio imediato do acesso",
    ],
    href: "https://pay.kiwify.com.br/zthU0rC",
    cta: "Começar agora",
  },
  {
    days: 120,
    name: "4 meses",
    pricePerMonth: "R$ 22,48/mês",
    originalPrice: "R$ 119,90",
    totalPrice: "R$ 89,90",
    savingsNote: "Economize com o plano quadrimestral",
    featured: true,
    features: [
      "Canais abertos e fechados",
      "+6.000 séries e filmes",
      "2 dispositivos inclusos",
      "Qualidade SD/HD/FHD/4K",
      "Envio imediato do acesso",
    ],
    href: "https://pay.kiwify.com.br/9dP6dSf",
    cta: "Assinar",
  },
  {
    days: 365,
    name: "1 ano",
    pricePerMonth: "R$ 16,66/mês",
    originalPrice: "R$ 239,90",
    totalPrice: "R$ 199,90",
    savingsNote: "Maior economia do ano",
    features: [
      "Canais abertos e fechados",
      "+6.000 séries e filmes",
      "2 dispositivos inclusos",
      "Qualidade SD/HD/FHD/4K",
      "Suporte especializado prioritário",
      "Envio imediato do acesso",
    ],
    href: "https://pay.kiwify.com.br/OGZJyNZ",
    cta: "Assinar",
  },
];
