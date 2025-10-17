import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "../components/ui/Button";
import BrandIcon from "../components/ui/BrandIcon";
import { ICON_SIZES } from "../components/ui/icons";
import {
  FileText,
  Layers,
  MapPin,
  RefreshCw,
  Menu,
  X as XIcon,
} from "lucide-react";
import { siDiscord, siX, siGithub, siInstagram } from "simple-icons";

function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = ["cta", "como-funciona", "waitlist"];
    const handler = () => {
      const scrollPos = window.scrollY + 120; // compensa altura do header
      let current = null;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        if (scrollPos >= top) current = id;
      }
      setActiveSection(current);
      setScrolled(window.scrollY > 16);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("hashchange", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("hashchange", handler);
    };
  }, []);
  return (
    <main id="conteudo" className="min-h-screen bg-bg text-white">
      {/* Skip link para acessibilidade */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only fixed top-2 left-2 z-50 bg-[#1b1b29] border border-primary/30 px-3 py-2 rounded-md text-sm text-white focus:outline-none focus:ring-2 ring-action/50 transition-base"
      >
        Pular para conteúdo
      </a>
      {/* Header */}
      <header
        className={`sticky top-0 z-40 backdrop-blur ${scrolled ? "bg-bg/85 border-b border-primary/20 shadow-sm" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-14 md:h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/engramify-logo-full.svg"
              alt="Engramify"
              width={160}
              height={36}
              priority
            />
          </Link>
          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Navegação principal"
          >
            <a
              href="#cta"
              className={`${activeSection === "cta" ? "text-action" : "text-neutral-300"} hover:text-action transition-base`}
              aria-current={activeSection === "cta" ? "page" : undefined}
              onClick={() => setActiveSection("cta")}
            >
              Início
            </a>
            <a
              href="#como-funciona"
              className={`${activeSection === "como-funciona" ? "text-action" : "text-neutral-300"} hover:text-action transition-base`}
              aria-current={
                activeSection === "como-funciona" ? "page" : undefined
              }
              onClick={() => setActiveSection("como-funciona")}
            >
              Como funciona
            </a>
            <a
              href="#waitlist"
              className={`${activeSection === "waitlist" ? "text-action" : "text-neutral-300"} hover:text-action transition-base`}
              aria-current={activeSection === "waitlist" ? "page" : undefined}
              onClick={() => setActiveSection("waitlist")}
            >
              Waitlist
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              onClick={() => {
                document
                  .getElementById("waitlist")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Experimente
            </Button>
            <button
              type="button"
              className="md:hidden rounded-md p-2 text-neutral-300 hover:text-action active:scale-95 focus-visible:outline-none focus-visible:ring-2 ring-action/60 ring-offset-2 ring-offset-bg transition-base"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileOpen ? "true" : "false"}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? (
                <XIcon size={ICON_SIZES.md} aria-hidden="true" />
              ) : (
                <Menu size={ICON_SIZES.md} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-primary/20 bg-bg/95 backdrop-blur">
            <nav
              id="mobile-nav"
              aria-label="Navegação mobile"
              className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3"
            >
              <a
                href="#cta"
                className={`${activeSection === "cta" ? "text-action" : "text-neutral-300"} hover:text-action transition-base`}
                onClick={() => {
                  setActiveSection("cta");
                  setMobileOpen(false);
                }}
                aria-current={activeSection === "cta" ? "page" : undefined}
              >
                Início
              </a>
              <a
                href="#como-funciona"
                className={`${activeSection === "como-funciona" ? "text-action" : "text-neutral-300"} hover:text-action transition-base`}
                onClick={() => {
                  setActiveSection("como-funciona");
                  setMobileOpen(false);
                }}
                aria-current={
                  activeSection === "como-funciona" ? "page" : undefined
                }
              >
                Como funciona
              </a>
              <a
                href="#waitlist"
                className={`${activeSection === "waitlist" ? "text-action" : "text-neutral-300"} hover:text-action transition-base`}
                onClick={() => {
                  setActiveSection("waitlist");
                  setMobileOpen(false);
                }}
                aria-current={activeSection === "waitlist" ? "page" : undefined}
              >
                Waitlist
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* CTA */}
      <section
        id="cta"
        className="max-w-7xl mx-auto px-6 py-12 min-h-[calc(100vh-56px)] md:min-h-[calc(100vh-64px)] scroll-mt-[56px] md:scroll-mt-[64px] flex items-center justify-center"
      >
        <div className="rounded-xl border border-primary/30 bg-[#1b1b29] p-6 md:p-8">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-action via-support to-primary bg-clip-text text-transparent">
              Domine
            </span>{" "}
            qualquer área de conhecimento.
          </h2>
          <p className="text-neutral-300 mt-3 md:text-lg">
            Use o máximo da{" "}
            <span className="bg-gradient-to-r from-action via-support to-primary bg-clip-text text-transparent">
              IA
            </span>{" "}
            para impulsionar o melhor computador do mundo:{" "}
            <span style={{ fontStyle: "italic" }}>
              o seu{" "}
              <span className="bg-gradient-to-r from-action via-support to-primary bg-clip-text text-transparent">
                cérebro
              </span>
            </span>
            .
          </p>
          <div className="mt-6 space-y-1" style={{ fontStyle: "italic" }}>
            <p className="text-lg md:text-xl">Nós Somos a Engramify,</p>
            <p className="text-lg md:text-xl">a Plataforma</p>
            <p className="text-lg md:text-xl">de Pessoas Criativas.</p>
          </div>
          <div className="mt-6 flex gap-3">
            <Button
              variant="primary"
              onClick={() => {
                document
                  .getElementById("waitlist")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Entrar na waitlist
            </Button>
            <Button
              variant="secondary"
              onClick={() => alert("Teste do botão secundário")}
            >
              Botão secundário (teste)
            </Button>
            <Button variant="secondary" disabled>
              Botão desabilitado (teste)
            </Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="como-funciona"
        className="max-w-7xl mx-auto px-6 py-12 min-h-[calc(100vh-56px)] md:min-h-[calc(100vh-64px)] scroll-mt-[56px] md:scroll-mt-[64px] flex flex-col justify-center"
      >
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Como funciona
          </h2>
          <p className="text-neutral-400 mt-2">
            Um fluxo em quatro passos para dominar qualquer assunto.
          </p>
        </div>
        <div className="rounded-xl border border-primary/30 bg-[#1b1b29] p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#121220] border border-primary/30">
                  <FileText
                    size={ICON_SIZES.md}
                    className="text-primary"
                    aria-hidden="true"
                  />
                </div>
                <h4 className="text-lg md:text-xl font-semibold">Texto</h4>
              </div>
              <p className="text-neutral-400 mt-2 text-sm md:text-base">
                Capture e organize conhecimento em texto claro.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#121220] border border-primary/30">
                  <Layers
                    size={ICON_SIZES.md}
                    className="text-primary"
                    aria-hidden="true"
                  />
                </div>
                <h4 className="text-lg md:text-xl font-semibold">Flashcards</h4>
              </div>
              <p className="text-neutral-400 mt-2 text-sm md:text-base">
                Transforme conteúdo em perguntas e respostas.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#121220] border border-primary/30">
                  <MapPin
                    size={ICON_SIZES.md}
                    className="text-primary"
                    aria-hidden="true"
                  />
                </div>
                <h4 className="text-lg md:text-xl font-semibold">Palácios</h4>
              </div>
              <p className="text-neutral-400 mt-2 text-sm md:text-base">
                Associe itens a lugares para memória espacial.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#121220] border border-primary/30">
                  <RefreshCw
                    size={ICON_SIZES.md}
                    className="text-primary"
                    aria-hidden="true"
                  />
                </div>
                <h4 className="text-lg md:text-xl font-semibold">Revisar</h4>
              </div>
              <p className="text-neutral-400 mt-2 text-sm md:text-base">
                Otimize retenção com revisões inteligentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section
        id="waitlist"
        className="max-w-7xl mx-auto px-6 py-12 min-h-[calc(100vh-56px)] md:min-h-[calc(100vh-64px)] scroll-mt-[56px] md:scroll-mt-[64px] flex items-center justify-center"
      >
        <div className="rounded-xl border border-primary/30 bg-[#1b1b29] p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-semibold">
            Entre na waitlist
          </h3>
          <p className="text-neutral-400 mt-2">
            Receba acesso antecipado e novidades.
          </p>
          <p className="text-neutral-300 mt-1">Assine nossa newsletter</p>
          <form
            className="mt-6 flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const email = formData.get("email");
              console.log("Waitlist email:", email);
              alert("Obrigado! Entraremos em contato em breve.");
            }}
          >
            <input
              type="email"
              name="email"
              required
              placeholder="seu@email.com"
              className="flex-1 rounded-md bg-[#13131b] border border-primary/30 px-4 py-3 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 ring-action/50 focus:border-action transition-base"
            />
            <Button variant="primary" type="submit">
              Inscrever-se
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 border-t border-primary/20">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Engramify
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/privacidade"
              className="text-neutral-300 hover:text-action transition-base"
            >
              Privacidade
            </Link>
            <Link
              href="/termos"
              className="text-neutral-300 hover:text-action transition-base"
            >
              Termos
            </Link>
            <Link
              href="/cookies"
              className="text-neutral-300 hover:text-action transition-base"
            >
              Cookies
            </Link>
            <a
              href="mailto:info.engramify@gmail.com"
              className="text-neutral-300 hover:text-action transition-base"
            >
              Contato
            </a>
            <span
              className="hidden sm:block w-px h-5 bg-primary/20"
              aria-hidden="true"
            />
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/tav0dev/engramify"
                aria-label="GitHub"
                title="GitHub"
                className="text-neutral-300 hover:text-action transition-base rounded-md p-1 focus:outline-none focus:ring-2 ring-action/50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BrandIcon icon={siGithub} size={ICON_SIZES.md} />
              </a>
              <a
                href="https://discord.gg/YUN3EeWgxD"
                aria-label="Discord"
                title="Discord"
                className="text-neutral-300 hover:text-action transition-base rounded-md p-1 focus:outline-none focus:ring-2 ring-action/50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BrandIcon icon={siDiscord} size={ICON_SIZES.md} />
              </a>
              <a
                href="https://x.com/engramifyapp"
                aria-label="X"
                title="X"
                className="text-neutral-300 hover:text-action transition-base rounded-md p-1 focus:outline-none focus:ring-2 ring-action/50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BrandIcon icon={siX} size={ICON_SIZES.md} />
              </a>
              <a
                href="https://instagram.com/engramifyapp"
                aria-label="Instagram"
                title="Instagram"
                className="text-neutral-300 hover:text-action transition-base rounded-md p-1 focus:outline-none focus:ring-2 ring-action/50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BrandIcon icon={siInstagram} size={ICON_SIZES.md} />
              </a>
            </div>
          </nav>
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="text-neutral-300 text-sm">
              Assine nossa newsletter
            </div>
            <form
              className="w-full sm:w-auto flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const email = formData.get("email");
                console.log("Newsletter email:", email);
                alert("Obrigado por assinar nossa newsletter!");
              }}
            >
              <input
                type="email"
                name="email"
                required
                placeholder="seu@email.com"
                className="flex-1 rounded-md bg-[#13131b] border border-primary/30 px-4 py-3 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 ring-action/50 focus:border-action transition-base"
              />
              <Button variant="primary" type="submit">
                Assinar
              </Button>
            </form>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Home;
