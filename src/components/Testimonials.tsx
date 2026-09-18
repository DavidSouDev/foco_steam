import Image from "next/image";

const RELATOS = [
  {
    name: "Erick",
    src: "/img/relato-1.jpg",
    alt: "Print de conversa no WhatsApp confirmando renovação de plano com sucesso",
  },
  {
    name: "Deilton",
    src: "/img/relato-2.jpg",
    alt: "Print de conversa no WhatsApp confirmando pagamento e liberação do aplicativo",
  },
  {
    name: "Marcos",
    src: "/img/relato-3.jpg",
    alt: "Print de conversa no WhatsApp com cliente agradecendo pela preferência",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-gradient-to-b from-violet-950 to-black py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-3xl font-semibold text-violet-300 sm:text-4xl">
          Veja quem está assistindo e aprovou o nosso sinal
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {RELATOS.map((relato) => (
            <div key={relato.src} className="flex flex-col">
              <p className="mb-3 text-center text-lg font-semibold text-violet-300">
                {relato.name}
              </p>
              <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-white/10">
                <div className="relative aspect-[738/971] w-full">
                  <Image
                    src={relato.src}
                    alt={relato.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
