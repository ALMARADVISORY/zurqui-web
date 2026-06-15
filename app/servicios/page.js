import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Servicios() {
  return (
    <>
      <Header />

      <main>
        <section className="section pageHero servicesHero">
          <div className="twoColumns">
            <div>
              <p className="tag">Servicios</p>
              <h1>Conectamos capital, proyectos y oportunidades.</h1>
            </div>

            <div className="textBlock">
              <p>
                En Zurqui Clouds acompañamos a empresas, inversores y
                profesionales en la búsqueda de soluciones financieras,
                oportunidades de inversión, inversores privados y activos
                inmobiliarios en España y Latinoamérica.
              </p>

              <p>
                Trabajamos desde una visión práctica, discreta y orientada a
                generar conexiones útiles entre personas, empresas y proyectos.
              </p>
            </div>
          </div>
        </section>

        <section className="section servicesSection">
          <div className="servicesGrid">
            <article className="serviceCardLarge">
              <span>01</span>
              <h2>Asesoramiento financiero</h2>
              <p>
                Acompañamos a empresas, profesionales e inversores en la toma de
                decisiones financieras, ayudando a ordenar información, analizar
                escenarios y valorar alternativas con criterio.
              </p>

              <ul>
                <li>Análisis de necesidades financieras.</li>
                <li>Revisión de escenarios de financiación.</li>
                <li>Apoyo en operaciones empresariales.</li>
                <li>Orientación en decisiones patrimoniales.</li>
              </ul>
            </article>

            <article className="serviceCardLarge">
              <span>02</span>
              <h2>Búsqueda de inversores privados</h2>
              <p>
                Ayudamos a proyectos y empresas a identificar perfiles
                inversores privados que puedan encajar con sus necesidades, fase
                de crecimiento y objetivos estratégicos.
              </p>

              <ul>
                <li>Búsqueda de capital privado.</li>
                <li>Presentación ordenada del proyecto.</li>
                <li>Conexión con perfiles inversores.</li>
                <li>Acompañamiento en conversaciones iniciales.</li>
              </ul>
            </article>

            <article className="serviceCardLarge">
              <span>03</span>
              <h2>Búsqueda de oportunidades de inversión</h2>
              <p>
                Trabajamos en la identificación de oportunidades de inversión
                con sentido empresarial, financiero o patrimonial, seleccionando
                alternativas que puedan ajustarse al perfil del inversor.
              </p>

              <ul>
                <li>Oportunidades empresariales.</li>
                <li>Operaciones privadas.</li>
                <li>Proyectos en fase de crecimiento.</li>
                <li>Activos con potencial de rentabilidad.</li>
              </ul>
            </article>

            <article className="serviceCardLarge">
              <span>04</span>
              <h2>Búsqueda de inmuebles en España y Latinoamérica</h2>
              <p>
                Acompañamos en la búsqueda de activos inmobiliarios tanto para
                inversión como para operaciones patrimoniales o empresariales en
                España y Latinoamérica.
              </p>

              <ul>
                <li>Búsqueda de inmuebles singulares.</li>
                <li>Activos para inversión.</li>
                <li>Oportunidades en España.</li>
                <li>Oportunidades en Latinoamérica.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section methodSection">
          <div className="methodIntro">
            <p className="tag">Método Zurqui</p>
            <h2>Un proceso sencillo para avanzar con claridad.</h2>
            <p>
              Nuestro papel es escuchar, ordenar la información y facilitar
              conexiones profesionales con sentido.
            </p>
          </div>

          <div className="methodSteps">
            <div>
              <strong>01</strong>
              <h3>Escuchamos</h3>
              <p>Entendemos la necesidad, el perfil y los objetivos del proyecto.</p>
            </div>

            <div>
              <strong>02</strong>
              <h3>Analizamos</h3>
              <p>Valoramos el encaje financiero, empresarial o inmobiliario.</p>
            </div>

            <div>
              <strong>03</strong>
              <h3>Conectamos</h3>
              <p>Buscamos oportunidades, contactos o perfiles adecuados.</p>
            </div>

            <div>
              <strong>04</strong>
              <h3>Acompañamos</h3>
              <p>Facilitamos conversaciones y seguimiento inicial del proceso.</p>
            </div>
          </div>
        </section>

        <section className="cta">
          <div>
            <p className="tag">Hablemos</p>
            <h2>¿Tienes un proyecto o buscas una oportunidad?</h2>
            <p>
              Zurqui Clouds actúa como punto de conexión y acompañamiento
              estratégico. No garantizamos resultados financieros concretos,
              pero aportamos experiencia, criterio y una red profesional de
              contactos.
            </p>
          </div>

          <Link href="/contacto" className="button">
            Contactar
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}