import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex h-[85vh] min-h-[560px] w-full items-center justify-center overflow-hidden">
      <Image
        src="/img/hero-bg.png"
        alt="Casal relaxando no sofá assistindo série de TV pela Foco Steam IPTV"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/85 via-slate-950/60 to-slate-950/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(249,115,22,0.25),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h1 className="text-4xl font-bold text-white sm:text-6xl">Foco Steam IPTV</h1>
        <p className="mt-6 text-base font-medium text-violet-100 sm:text-lg">
          São mais de 6.000 séries para você e sua família maratonarem, com qualidade e
          estabilidade.
        </p>
        <a
          href="#planos"
          className="mt-8 inline-block rounded-full bg-orange-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
        >
          Ver planos
        </a>
      </div>
    </section>
  );
}
