import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contato" className="bg-violet-950 py-10 text-center text-sm text-violet-200">
      <div className="flex items-center justify-center gap-2">
        <span className="relative block h-9 w-9 shrink-0 overflow-hidden rounded-lg">
          <Image src="/img/logo.jpg" alt="" fill sizes="36px" className="object-cover" />
        </span>
        <span className="text-base font-semibold text-white">Foco Steam</span>
      </div>
      <p className="mt-3 text-violet-400">© {new Date().getFullYear()} Todos os direitos reservados.</p>
    </footer>
  );
}
