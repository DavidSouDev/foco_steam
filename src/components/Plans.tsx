import Image from "next/image";
import { plans } from "@/data/plans";

export default function Plans() {
  return (
    <section id="planos" className="bg-slate-100 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-3xl font-semibold text-violet-700 sm:text-4xl">
          Veja qual assinatura faz mais sentido para você
        </h2>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {plans.map((plan) => (
            <div key={plan.days} className="flex w-56 flex-col">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-xl ring-4 ring-yellow-400">
                <Image
                  src={plan.image}
                  alt={`Plano ${plan.months.toLowerCase()} - diversão garantida, envio imediato`}
                  fill
                  sizes="(min-width: 640px) 224px, 45vw"
                  className="object-cover"
                />
              </div>

              <a
                href={plan.href}
                className="mt-4 rounded-lg bg-orange-500 py-3 text-center text-sm font-semibold text-white transition hover:bg-orange-400"
              >
                {plan.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
