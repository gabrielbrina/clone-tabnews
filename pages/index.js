import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Gabriel Brina | Tecnologia, IA e operações</title>
        <meta
          name="description"
          content="Gabriel Brina é consultor de tecnologia e IA na Accenture. Conheça seu trabalho com automação, processos, arquitetura e adoção de IA na América Latina."
        />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://gabrielbrina.com.br/" />
        <meta
          property="og:title"
          content="Gabriel Brina | Tecnologia, IA e operações"
        />
        <meta
          property="og:description"
          content="Consultor de tecnologia e IA na Accenture. Projetos, trajetória e contato."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gabrielbrina.com.br/" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='4' fill='%23202020'/%3E%3Ctext x='20' y='28' text-anchor='middle' font-family='Georgia' font-size='28' fill='white'%3EG%3C/text%3E%3C/svg%3E"
        />
        <link rel="stylesheet" href="/portfolio.css" />
      </Head>

      <a className="skip" href="#conteudo">
        Pular para o conteúdo
      </a>
      <div className="page">
        <header className="header">
          <a className="name" href="#inicio">
            Gabriel Brina
          </a>
          <nav aria-label="Principal">
            <a href="#trabalho">Trabalho</a>
            <a href="#trajetoria">Trajetória</a>
            <a href="#contato">Contato</a>
          </nav>
        </header>
        <main id="conteudo">
          <section className="intro" id="inicio">
            <div className="intro-main">
              <h1>Gabriel Brina</h1>
              <p className="lead">
                Sou consultor de tecnologia e IA na Accenture, com formação em
                Engenharia de Produção.
              </p>
              <p>
                Trabalho com equipes de negócio e tecnologia em operações na
                América Latina. Entendo processos, desenho soluções e participo
                da implementação — de automações em SAP e portais de compras à
                capacitação de pessoas para usar IA.
              </p>
              <p>
                O que mais me interessa é acompanhar o trabalho de perto:
                conversar com quem executa, entender as restrições e construir
                algo que faça sentido naquele contexto.
              </p>
              <div className="intro-links">
                <a href="/gabriel-brina-cv.pdf" download>
                  Currículo em PDF
                </a>
                <a
                  href="https://www.linkedin.com/in/gabrielbrina/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <aside className="intro-aside" aria-label="Resumo profissional">
              <div className="aside-block">
                <span>Hoje</span>
                <p>
                  Accenture
                  <br />
                  Tecnologia e IA aplicada
                </p>
              </div>
              <div className="aside-block">
                <span>Atuação</span>
                <p>Brasil e América Latina</p>
              </div>
              <div className="aside-block">
                <span>Formação</span>
                <p>
                  Engenharia de Produção
                  <br />
                  Engenharia de Software
                </p>
              </div>
            </aside>
          </section>
          <section className="work" id="trabalho">
            <div className="section-heading">
              <h2>Trabalhos selecionados</h2>
              <p>Experiências na Accenture, sem identificação dos clientes.</p>
            </div>
            <article className="project">
              <div className="project-title">
                <p className="project-context">Operações financeiras</p>
                <h3>
                  Automação de contas
                  <br className="desktop-break" /> a pagar com SAP
                </h3>
              </div>
              <div className="project-copy">
                <p>
                  Participei da transformação de um processo de contas a pagar,
                  combinando a centralização de entradas por e-mail, automação
                  no SAP e agentes de IA.
                </p>
                <p>
                  O trabalho envolveu entender o fluxo com a operação e
                  construir ferramentas para automatizar etapas do lançamento de
                  notas fiscais. A implantação exigiu atenção às exceções e à
                  forma como a equipe passaria a trabalhar com a solução.
                </p>
                <p className="project-detail">
                  <strong>Minha atuação:</strong> entendimento do processo,
                  desenho da solução e construção das ferramentas com a equipe.
                </p>
              </div>
            </article>
            <article className="project">
              <div className="project-title">
                <p className="project-context">Compras e decisões</p>
                <h3>
                  Do comitê de compras
                  <br className="desktop-break" /> ao portal
                </h3>
              </div>
              <div className="project-copy">
                <p>
                  Um processo de compras dependia de reuniões em datas fixas.
                  Junto à operação e a um especialista de procurement, ajudei a
                  traduzir esse fluxo em um portal no ambiente SharePoint já
                  usado pelo cliente.
                </p>
                <p>
                  Minha responsabilidade se concentrou na arquitetura e nos
                  requisitos de segurança: autenticação, permissões e
                  visibilidade dos votos. Uma equipe de duas pessoas construiu a
                  prova de conceito.
                </p>
                <p className="project-detail">
                  <strong>Minha atuação:</strong> arquitetura, requisitos de
                  segurança e colaboração entre negócio e desenvolvimento.
                </p>
              </div>
            </article>
            <article className="project">
              <div className="project-title">
                <p className="project-context">Segurança e governança</p>
                <h3>
                  Acompanhamento de
                  <br className="desktop-break" /> mais de 200 aplicações
                </h3>
              </div>
              <div className="project-copy">
                <p>
                  Desenvolvi automações e integrações para apoiar a gestão de
                  achados de segurança em mais de 200 aplicações e fornecedores
                  na América Latina.
                </p>
                <p>
                  Substituí controles manuais em planilhas por pipelines
                  rastreáveis e consolidei informações para equipes técnicas e
                  lideranças. As integrações conectaram ServiceNow, SharePoint e
                  Microsoft Graph.
                </p>
                <p className="project-detail">
                  <strong>Minha atuação:</strong> automação, integração de
                  sistemas e visibilidade operacional.
                </p>
              </div>
            </article>
            <div className="adoption-note">
              <h3>A tecnologia também precisa ser aprendida.</h3>
              <p>
                Além dos projetos, capacitei mais de 200 profissionais em
                ferramentas e práticas de IA. Lidero uma equipe de três pessoas,
                acompanhando entregas, qualidade e desenvolvimento técnico.
              </p>
            </div>
          </section>
          <section className="trajectory" id="trajetoria">
            <h2>Trajetória</h2>
            <div className="trajectory-content">
              <div className="timeline-item">
                <span className="timeline-date">Atualmente</span>
                <div>
                  <h3>Accenture</h3>
                  <p>
                    Consultoria de tecnologia, IA aplicada, automação e
                    cibersegurança. Atuação com operações na América Latina.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-date">2021</span>
                <div>
                  <h3>Projep Jr. Consultoria</h3>
                  <p>
                    Marketing, inteligência comercial e melhoria de processos no
                    Movimento Empresa Júnior.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-date">2016</span>
                <div>
                  <h3>Procter & Gamble · Reino Unido</h3>
                  <p>
                    Estágio em pesquisa e desenvolvimento, com foco em
                    engenharia de processos e inovação industrial.
                  </p>
                </div>
              </div>
              <div className="education">
                <h3>Formação e outras experiências</h3>
                <p>
                  Engenharia de Produção pela UFTM e pós-graduação em Engenharia
                  de Software pela UniAméricas. Estudei no Reino Unido pelo
                  Ciência sem Fronteiras e participei de programas acadêmicos
                  nas universidades de Illinois e Pittsburgh.
                </p>
                <p>
                  Também fui organizador do TEDx UFTM, coordenando a curadoria e
                  a preparação de dez palestrantes, e fellow do ProLíder, do
                  Instituto Four.
                </p>
              </div>
            </div>
          </section>
          <section className="contact" id="contato">
            <h2>Contato</h2>
            <div>
              <p>
                Para falar sobre um projeto, uma oportunidade ou trocar
                experiências:
              </p>
              <a className="email" href="mailto:gabrielbrina@gmail.com">
                gabrielbrina@gmail.com
              </a>
              <div className="contact-links">
                <a
                  href="https://www.linkedin.com/in/gabrielbrina/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a href="/gabriel-brina-cv.pdf" download>
                  Currículo em PDF
                </a>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <span>Gabriel Brina</span>
          <a href="#inicio">Voltar ao início</a>
        </footer>
      </div>
    </>
  );
}
