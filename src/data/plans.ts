export type Plan = {
  days: number;
  months: string;
  label: string;
  href: string;
  image: string;
};

export const plans: Plan[] = [
  {
    days: 30,
    months: "1 MÊS",
    label: "Assinatura mensal",
    href: "#contato",
    image: "/img/planos/1-mes.jpg",
  },
  {
    days: 60,
    months: "2 MESES",
    label: "Assinatura bimestral",
    href: "#contato",
    image: "/img/planos/2-mes.jpg",
  },
  {
    days: 90,
    months: "3 MESES",
    label: "Assinatura trimestral",
    href: "#contato",
    image: "/img/planos/3-mes.jpg",
  },
  {
    days: 180,
    months: "6 MESES",
    label: "Assinatura semestral",
    href: "#contato",
    image: "/img/planos/6-mes.jpg",
  },
  {
    days: 365,
    months: "1 ANO",
    label: "Assinatura anual",
    href: "#contato",
    image: "/img/planos/1-ano.jpg",
  },
];
