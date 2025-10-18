import Head from "next/head";
import Link from "next/link";

function Privacidade() {
  return (
    <main className="min-h-screen bg-bg-main text-text-primary">
      <Head>
        <title>Privacidade | Engramify</title>
        <meta name="robots" content="index,follow" />
      </Head>
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Política de Privacidade</h1>
        <p className="text-text-secondary mt-2">
          Sua privacidade é importante para nós. Esta política explica quais dados coletamos, como usamos e
          quais são seus direitos.
        </p>

        <div className="mt-6 space-y-6 text-text-secondary">
          <section>
            <h2 className="text-lg md:text-xl font-semibold">Informações que coletamos</h2>
            <p className="mt-2">Podemos coletar:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Dados de contato, como e-mail (ex.: waitlist).</li>
              <li>Dados de uso e métricas de navegação (cookies/analytics).</li>
              <li>Preferências e interações dentro da plataforma.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold">Como usamos suas informações</h2>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Fornecer e melhorar nossos serviços e funcionalidades.</li>
              <li>Comunicar novidades, atualizações e ofertas (opt-out disponível).</li>
              <li>Garantir segurança, prevenção a fraudes e conformidade legal.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold">Cookies e tecnologias similares</h2>
            <p className="mt-2">
              Usamos cookies para lembrar preferências e entender o uso da plataforma. Você pode ajustar as
              permissões no seu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold">Compartilhamento com terceiros</h2>
            <p className="mt-2">
              Não vendemos seus dados. Podemos compartilhar com provedores de serviços (ex.: hospedagem,
              analytics) apenas o necessário para operar a plataforma, sob contratos apropriados.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold">Seus direitos</h2>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Acessar, corrigir ou excluir seus dados pessoais.</li>
              <li>Solicitar portabilidade, revogar consentimento e restringir tratamento.</li>
              <li>Entrar em contato para dúvidas ou solicitações.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold">Contato</h2>
            <p className="mt-2">
              Fale conosco em <a href="mailto:info.engramify@gmail.com" className="text-accent-primary transition-base">info.engramify@gmail.com</a>.
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

export default Privacidade;