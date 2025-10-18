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
  CircleUser,
} from "lucide-react";
import { siDiscord, siX, siGithub, siInstagram } from "simple-icons";
import { useRouter } from "next/router";

const Usuario = () => {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-bg-main text-text-primary">
      <header className="sticky top-0 z-30 bg-bg-main/85 border-b border-separator shadow-light backdrop-blur">
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
          <div className="flex items-center gap-2">
            <Link
              href="/usuario"
              aria-label="Usuário"
              title="Usuário"
              className="inline-flex items-center justify-center text-text-secondary hover:text-accent-primary transition-base focus:outline-none"
            >
              <CircleUser
                size={ICON_SIZES.md}
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </Link>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="rounded-xl border border-border bg-bg-surface p-6 md:p-8 shadow-medium">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Bem-vindo de volta, Gustavo
              </h1>
              <p className="text-text-secondary mt-2">
                Esta é sua área logada. Em breve integraremos autenticação.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex h-full flex-col justify-between rounded-lg border border-border bg-bg-surface p-4 shadow-light">
              <div>
                <h2 className="text-lg font-semibold">Enem 2026</h2>
                <p className="mt-1 text-sm text-text-secondary">
                  Plano inteligente com metas e etapas claras.
                </p>
              </div>

              <div className="mt-3 flex justify-end gap-2">
                <Button
                  variant="primary"
                  onClick={() => router.push("/estudo")}
                >
                  Começar estudo
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => alert("Editar plano")}
                >
                  Editar plano
                </Button>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-bg-surface p-4 shadow-light">
              <h2 className="text-lg font-semibold">Tarefas de hoje</h2>
              <ul className="mt-2 text-sm text-text-secondary list-disc list-inside">
                <li className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="rounded border-border text-accent-primary focus:ring-accent-primary/50"
                  />
                  Revisão espaçada: módulo 3
                </li>
                <li className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="rounded border-border text-accent-primary focus:ring-accent-primary/50"
                  />
                  Leitura: artigo recomendado
                </li>
                <li className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="rounded border-border text-accent-primary focus:ring-accent-primary/50"
                  />
                  Prática: exercícios de síntese
                </li>
              </ul>
              <div className="mt-3 flex justify-end">
                <Button variant="primary" onClick={() => alert("Atualizar")}>
                  Fechar tarefas
                </Button>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-bg-surface p-4 shadow-light">
              <h2 className="text-lg font-semibold">Progresso</h2>
              <p className="text-text-secondary mt-1 text-sm">
                Você completou 68% dos objetivos do plano atual.
              </p>
              <div className="mt-3 h-2 w-full rounded-full bg-separator">
                <div className="h-2 w-2/3 rounded-full bg-accent-primary" />
              </div>
            </div>
          </div>
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
};

export default Usuario;
