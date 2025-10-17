import Head from "next/head";
import Link from "next/link";

function Termos() {
  return (
    <main className="min-h-screen bg-bg text-white">
      <Head>
        <title>Termos de Uso | Engramify</title>
        <meta name="robots" content="index,follow" />
      </Head>
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Termos de Uso</h1>
        <p className="text-neutral-400 mt-2">
          Ao usar a Engramify, você concorda com estes termos. Leia com atenção.
        </p>

        <div className="mt-6 space-y-6 text-neutral-300">
          <section>
            <h2 className="text-lg md:text-xl font-semibold">Aceitação dos Termos</h2>
            <p className="mt-2">
              Estes Termos regem o uso da plataforma. Se não concordar, não utilize nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold">Uso da Plataforma</h2>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Não utilize a plataforma de forma ilegal, ofensiva ou que viole direitos.</li>
              <li>Não tente burlar limitações técnicas, realizar engenharia reversa ou atacar nossos sistemas.</li>
              <li>Você é responsável pelas atividades realizadas com sua conta.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold">Conteúdo do Usuário</h2>
            <p className="mt-2">
              Você mantém a propriedade de seu conteúdo. Ao enviar conteúdo, você nos concede autorização para
              armazenar e processar a fim de oferecer os serviços.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold">Propriedade Intelectual</h2>
            <p className="mt-2">
              A Engramify e seus licenciadores detêm direitos sobre marca, interface e software. Não é permitido
              uso indevido sem autorização.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold">Limitação de Responsabilidade</h2>
            <p className="mt-2">
              A plataforma é fornecida &quot;como está&quot;. Na extensão permitida por lei, não nos responsabilizamos
              por perdas indiretas, incidentais ou consequentes.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold">Rescisão</h2>
            <p className="mt-2">
              Podemos suspender ou encerrar acesso em caso de violação destes Termos ou exigência legal.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold">Alterações</h2>
            <p className="mt-2">
              Podemos atualizar estes Termos. Alterações materiais serão comunicadas; o uso continuado implica
              concordância com a versão atualizada.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold">Contato</h2>
            <p className="mt-2">
              Fale conosco em <a href="mailto:info.engramify@gmail.com" className="text-action transition-base">info.engramify@gmail.com</a>.
            </p>
          </section>
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold bg-primary text-white hover:bg-action active:bg-action/80 hover:shadow-lg active:shadow transition-base focus-visible:outline-none focus-visible:ring-2 ring-action/60 ring-offset-2 ring-offset-bg"
          >
            Voltar para início
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Termos;