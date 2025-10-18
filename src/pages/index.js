import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "../components/ui/Button";
import BrandIcon from "../components/ui/BrandIcon";
import { ICON_SIZES } from "../components/ui/icons";
import {
  Target,
  ListChecks,
  GraduationCap,
  Sparkles,
  Menu,
  X as XIcon,
} from "lucide-react";
import { siDiscord, siX, siGithub, siInstagram } from "simple-icons";
import { useRouter } from "next/router";

function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

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
    <main id="conteudo" className="min-h-screen bg-bg-main text-text-primary">
      {/* Skip link para acessibilidade */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only fixed top-2 left-2 z-50 bg-bg-surface border border-border px-3 py-2 rounded-md text-sm text-text-primary focus:outline-none focus:ring-2 ring-accent-primary/50 ring-offset-2 ring-offset-bg-main transition-base"
      >
        Pular para conteúdo
      </a>
      {/* Header */}
      <header
        className={`sticky top-0 z-40 backdrop-blur ${scrolled ? "bg-bg-main/85 border-b border-separator shadow-light" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-14 md:h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/engramify-logo-colored.svg"
              alt="Engramify"
              width={140}
              height={32}
              className="block md:hidden h-9 w-auto object-contain"
              priority
            />
            <Image
              src="/engramify-logo-full-colored.svg"
              alt="Engramify"
              width={156}
              height={35}
              className="hidden md:block h-12 w-auto object-contain"
              priority
            />
          </Link>
          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Navegação principal"
          >
            <a
              href="#cta"
              className={`${activeSection === "cta" ? "text-accent-primary" : "text-text-secondary"} hover:text-accent-primary transition-base`}
              aria-current={activeSection === "cta" ? "page" : undefined}
              onClick={() => setActiveSection("cta")}
            >
              Início
            </a>
            <a
              href="#como-funciona"
              className={`${activeSection === "como-funciona" ? "text-accent-primary" : "text-text-secondary"} hover:text-accent-primary transition-base`}
              aria-current={
                activeSection === "como-funciona" ? "page" : undefined
              }
              onClick={() => setActiveSection("como-funciona")}
            >
              Como funciona
            </a>
            <a
              href="#waitlist"
              className={`${activeSection === "waitlist" ? "text-accent-primary" : "text-text-secondary"} hover:text-accent-primary transition-base`}
              aria-current={activeSection === "waitlist" ? "page" : undefined}
              onClick={() => setActiveSection("waitlist")}
            >
              Waitlist
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="primary" onClick={() => router.push("/usuario")}>
              Entrar
            </Button>
            <button
              type="button"
              className="md:hidden rounded-md p-2 text-text-secondary hover:text-accent-primary active:scale-95 focus-visible:outline-none focus-visible:ring-2 ring-accent-primary/60 ring-offset-2 ring-offset-bg-main transition-base"
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
          <div className="md:hidden border-t border-separator bg-bg-main/95 backdrop-blur">
            <nav
              id="mobile-nav"
              aria-label="Navegação mobile"
              className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3"
            >
              <a
                href="#cta"
                className={`${activeSection === "cta" ? "text-accent-primary" : "text-text-secondary"} hover:text-accent-primary transition-base`}
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
                className={`${activeSection === "como-funciona" ? "text-accent-primary" : "text-text-secondary"} hover:text-accent-primary transition-base`}
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
                className={`${activeSection === "waitlist" ? "text-accent-primary" : "text-text-secondary"} hover:text-accent-primary transition-base`}
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
        <div className="rounded-xl border border-border bg-bg-surface p-6 md:p-8">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
            <span className="text-accent-primary">Domine</span> qualquer área de
            conhecimento.
          </h2>
          <p className="text-text-secondary mt-3 md:text-lg">
            Use o máximo da <span className="text-accent-primary">IA</span> para
            impulsionar o melhor computador do mundo:{" "}
            <span style={{ fontStyle: "italic" }}>
              o seu <span className="text-accent-primary">cérebro</span>
            </span>
            .
          </p>
          <div className="mt-6 space-y-1" style={{ fontStyle: "italic" }}>
            <p className="text-lg md:text-xl">Nós Somos a Engramify,</p>
            <p className="text-lg md:text-xl">a Plataforma</p>
            <p className="text-lg md:text-xl">de Pessoas Criativas.</p>
          </div>
          <div className="mt-6 flex gap-3">
            <Button variant="primary" onClick={() => router.push("/usuario")}>
              Entrar
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                document
                  .getElementById("waitlist")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Waitlist
            </Button>
            <Button variant="secondary" disabled>
              Teste
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
          <p className="text-text-secondary mt-2">
            Um fluxo em quatro passos para dominar qualquer assunto.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-bg-surface p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Passo 1 */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-bg-surface border border-border">
                  <Target
                    size={ICON_SIZES.md}
                    className="text-accent-primary"
                    aria-hidden="true"
                  />
                </div>
                <h4 className="text-lg md:text-xl font-semibold">
                  Defina seu objetivo e perfil
                </h4>
              </div>
              <p className="text-text-secondary mt-2 text-sm md:text-base">
                Descreva seu objetivo e seu nível atual de conhecimento sobre o
                assunto.
              </p>
            </div>

            {/* Passo 2 */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-bg-surface border border-border">
                  <ListChecks
                    size={ICON_SIZES.md}
                    className="text-accent-primary"
                    aria-hidden="true"
                  />
                </div>
                <h4 className="text-lg md:text-xl font-semibold">
                  Receba seu plano inteligente
                </h4>
              </div>
              <p className="text-text-secondary mt-2 text-sm md:text-base">
                A IA cria um roadmap + cronograma personalizado, transformando-o
                em aulas, quizzes e revisões práticas.
              </p>
            </div>

            {/* Passo 3 */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-bg-surface border border-border">
                  <GraduationCap
                    size={ICON_SIZES.md}
                    className="text-accent-primary"
                    aria-hidden="true"
                  />
                </div>
                <h4 className="text-lg md:text-xl font-semibold">
                  Estude e evolua com a IA
                </h4>
              </div>
              <p className="text-text-secondary mt-2 text-sm md:text-base">
                Interaja com a IA no chat diariamente, revise e acompanhe sua
                evolução.
              </p>
            </div>

            {/* Passo 4 */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-bg-surface border border-border">
                  <Sparkles
                    size={ICON_SIZES.md}
                    className="text-accent-primary"
                    aria-hidden="true"
                  />
                </div>
                <h4 className="text-lg md:text-xl font-semibold">
                  Opcional: Personalize seu estudo
                </h4>
              </div>
              <p className="text-text-secondary mt-2 text-sm md:text-base">
                Envie PDFs, pesquise referências e conecte suas fontes.
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
        <div className="rounded-xl border border-border bg-bg-surface p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-semibold">Lista de espera</h3>
          <p className="text-text-secondary mt-2">
            Infelizmente, estamos com nossos serviços limitados. Inscreva-se
            para futuras atualizações.
          </p>
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
              className="flex-1 rounded-md bg-bg-surface border border-border px-4 py-3 text-sm placeholder:text-text-secondary focus:outline-none focus:ring-2 ring-accent-primary/50 focus:border-accent-primary transition-base"
            />
            <Button variant="primary" type="submit">
              Inscrever-se
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 border-t border-separator">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-text-secondary text-sm">
            © {new Date().getFullYear()} Engramify
          </div>
          <nav className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 text-sm w-full">
            <Link
              href="/privacidade"
              className="text-text-secondary hover:text-accent-primary transition-base"
            >
              Privacidade
            </Link>
            <Link
              href="/termos"
              className="text-text-secondary hover:text-accent-primary transition-base"
            >
              Termos
            </Link>
            <Link
              href="/cookies"
              className="text-text-secondary hover:text-accent-primary transition-base"
            >
              Cookies
            </Link>
            <a
              href="mailto:info.engramify@gmail.com"
              className="text-text-secondary hover:text-accent-primary transition-base"
            >
              Contato
            </a>
            <span
              className="hidden sm:block w-px h-5 bg-separator"
              aria-hidden="true"
            />
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/tav0dev/engramify"
                aria-label="GitHub"
                title="GitHub"
                className="text-text-secondary hover:text-accent-primary transition-base rounded-md p-1 focus:outline-none focus:ring-2 ring-accent-primary/50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BrandIcon
                  icon={siGithub}
                  size={ICON_SIZES.md}
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </a>
              <a
                href="https://discord.gg/YUN3EeWgxD"
                aria-label="Discord"
                title="Discord"
                className="text-text-secondary hover:text-accent-primary transition-base rounded-md p-1 focus:outline-none focus:ring-2 ring-accent-primary/50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BrandIcon
                  icon={siDiscord}
                  size={ICON_SIZES.md}
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </a>
              <a
                href="https://x.com/engramifyapp"
                aria-label="X"
                title="X"
                className="text-text-secondary hover:text-accent-primary transition-base rounded-md p-1 focus:outline-none focus:ring-2 ring-accent-primary/50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BrandIcon
                  icon={siX}
                  size={ICON_SIZES.md}
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </a>
              <a
                href="https://instagram.com/engramifyapp"
                aria-label="Instagram"
                title="Instagram"
                className="text-text-secondary hover:text-accent-primary transition-base rounded-md p-1 focus:outline-none focus:ring-2 ring-accent-primary/50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BrandIcon
                  icon={siInstagram}
                  size={ICON_SIZES.md}
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </a>
            </div>
          </nav>
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="text-text-secondary text-sm">
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
                className="flex-1 rounded-md bg-bg-surface border border-border px-4 py-3 text-sm placeholder:text-text-secondary focus:outline-none focus:ring-2 ring-accent-primary/50 focus:border-accent-primary transition-base"
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
