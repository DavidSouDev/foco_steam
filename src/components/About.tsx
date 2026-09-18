const FEATURES = [
  "Acesso imediato a canais abertos e fechados.",
  "Catálogo atualizado com filmes e séries do momento.",
  "Suporte rápido e instalação simples no celular, TV ou computador.",
];

export default function About() {
  return (
    <section id="sobre" className="bg-gradient-to-b from-violet-950 to-black py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-semibold text-violet-300 sm:text-4xl">Sobre IPTV</h2>
        <div className="mt-8 flex flex-col gap-4 text-base text-slate-300 sm:text-lg">
          {FEATURES.map((feature) => (
            <p key={feature}>{feature}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
