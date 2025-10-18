import Head from "next/head";
import Link from "next/link";
import Button from "../components/ui/Button";

function Cookies() {
  return (
    <main className="min-h-screen bg-bg-main text-text-primary">
      <Head>
        <title>Cookies | Engramify</title>
        <meta name="robots" content="index,follow" />
      </Head>
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Cookies</h1>
        <p className="text-text-secondary mt-2">
          Esta página explica como usamos cookies e como você pode gerenciar suas preferências.
        </p>

        <div className="mt-6 space-y-6 text-text-secondary">
          <section>
            <h2 className="text-lg md:text-xl font-semibold">O que são cookies?</h2>
            <p className="mt-2">
              Cookies são pequenos arquivos usados para lembrar suas preferências e entender como você usa a
              plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold">Tipos de cookies</h2>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Essenciais: necessários para funcionamento básico do site.</li>
              <li>Preferências: lembram configurações e escolhas do usuário.</li>
              <li>Analytics: ajudam a entender o uso e melhorar a experiência.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold">Gerenciar preferências</h2>
            <p className="mt-2">
              Você pode aceitar ou rejeitar cookies no banner de consentimento. Para redefinir sua escolha,
              use o botão abaixo.
            </p>
            <div className="mt-3">
              <Button
                variant="secondary"
                onClick={() => {
                  try {
                    localStorage.removeItem("cookieConsent");
                    alert("Preferências de cookies foram resetadas.");
                  } catch {
                    console.warn("Falha ao resetar preferências de cookies");
                  }
                }}
              >
                Resetar preferências de cookies
              </Button>
            </div>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold">Contato</h2>
            <p className="mt-2">
              Dúvidas? Fale conosco em
              {" "}
              <a href="mailto:info.engramify@gmail.com" className="text-accent-primary transition-base">
                info.engramify@gmail.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold bg-accent-primary text-white hover:bg-accent-variant active:bg-accent-primary/80 hover:shadow-medium active:shadow-light transition-base focus-visible:outline-none focus-visible:ring-2 ring-accent-primary/60 ring-offset-2 ring-offset-bg-main"
          >
            Voltar para início
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Cookies;