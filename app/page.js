import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="hero">
          <div className="heroText">
            <p className="tag">Zurqui Clouds</p>
            <h1>Conectamos oportunidades, inversión y proyectos con sentido.</h1>
            <p>
              Acompañamos a empresas, inversores y profesionales en operaciones
              financieras, sinergias empresariales y oportunidades inmobiliarias.
            </p>

            <div className="heroButtons">
              <Link href="/servicios" className="button">
                Ver servicios
              </Link>
              <Link href="/contacto" className="buttonSecondary">
                Contactar
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <p className="tag">Qué hacemos</p>
          <h2>Asesoramiento claro para tomar mejores decisiones.</h2>

          <div className="cards">
            <article className="card">
              <h3>Asesoramiento financiero</h3>
              <p>
                Analizamos necesidades, objetivos y posibilidades para orientar
                decisiones financieras de forma práctica.
              </p>
            </article>

            <article className="card">
              <h3>Inversiones</h3>
              <p>
                Ayudamos a valorar oportunidades de inversión y a ordenar la
                información clave antes de tomar decisiones.
              </p>
            </article>

            <article className="card">
              <h3>Sinergias empresariales</h3>
              <p>
                Ponemos en contacto a empresas y profesionales para generar
                colaboraciones, alianzas y nuevas oportunidades.
              </p>
            </article>

            <article className="card">
              <h3>Asesoramiento inmobiliario</h3>
              <p>
                Acompañamos en operaciones inmobiliarias, análisis de activos y
                oportunidades relacionadas con patrimonio e inversión.
              </p>
            </article>
          </div>
        </section>

        <section className="cta">
          <div>
            <p className="tag">Herramienta</p>
            <h2>Calculadora de préstamos</h2>
            <p>
              Utiliza nuestra calculadora para estimar cuotas mensuales de forma
              rápida y sencilla.
            </p>
          </div>

          <Link href="/calculadora-prestamos" className="button">
            Abrir calculadora
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}