import { plans } from "@/data/plans";

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="mt-0.5 h-4 w-4 shrink-0 text-orange-400"
      aria-hidden="true"
    >
      <path
        d="M4 10.5 8 14.5 16 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Plans() {
  return (
    <section id="planos" className="bg-gradient-to-b from-black to-violet-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold text-violet-300 sm:text-4xl">
          Veja qual assinatura faz mais sentido para você
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.days}
              className={`relative flex h-full flex-col rounded-2xl bg-black/60 p-6 shadow-xl ring-1 backdrop-blur-sm ${
                plan.featured ? "pt-9 ring-2 ring-orange-500" : "ring-white/10"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-orange-500 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Mais escolhido
                </span>
              )}

              <p className="text-xs font-semibold uppercase tracking-wide text-violet-400">
                Plano Foco Steam
              </p>
              <p className="mt-1 text-2xl font-bold text-white">{plan.name}</p>
              <p className="mt-1 text-sm font-semibold text-orange-400">{plan.pricePerMonth}</p>

              <ul className="mt-5 flex flex-col gap-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-violet-100">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto border-t border-white/10 pt-4">
                <p className="text-sm text-violet-300/70 line-through">{plan.originalPrice}</p>
                <p className="text-3xl font-bold text-white">{plan.totalPrice}</p>
                {plan.savingsNote && (
                  <p className="mt-1 text-sm font-medium text-emerald-400">{plan.savingsNote}</p>
                )}
              </div>

              <a
                href={plan.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 rounded-lg bg-orange-500 py-3 text-center text-sm font-semibold text-white transition hover:bg-orange-400"
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
