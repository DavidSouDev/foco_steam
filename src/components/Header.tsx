import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#planos", label: "Planos" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-violet-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="#" aria-label="Foco Steam IPTV" className="flex items-center gap-2">
          <span className="relative block h-9 w-9 shrink-0 overflow-hidden rounded-lg sm:h-10 sm:w-10">
            <Image src="/img/logo.jpg" alt="" fill sizes="40px" priority className="object-cover" />
          </span>
          <span className="text-lg font-bold tracking-tight text-white">Foco Steam</span>
        </Link>
        <nav className="hidden gap-8 text-sm font-medium text-violet-100 sm:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#planos"
          className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400"
        >
          Assinar agora
        </a>
      </div>
    </header>
  );
}
