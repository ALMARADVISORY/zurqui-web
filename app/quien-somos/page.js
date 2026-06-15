import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function QuienSomos() {
  return (
    <>
      <Header />

      <main>
        <section className="section pageHero">
          <div className="twoColumns">
            <div>
              <p className="tag">Quién somos</p>
              <h1>Experiencia, criterio y conexiones para impulsar proyectos.</h1>
            </div>

            <div className="textBlock">
              <p>
                Zurqui Clouds nace como un punto de encuentro entre empresas,
                inversores, profesionales y oportunidades. Aportamos una visión
                práctica, cercana y orientada a generar valor en cada proyecto.
              </p>

              <p>
                Contamos con una experiencia acumulada de más de 20 años en el
                ámbito financiero, empresarial e internacional, acompañando
                operaciones, analizando oportunidades y conectando perfiles con
                intereses complementarios.
              </p>
            </div>
          </div>
        </section>

        <section className="imageSection">
          <div className="mainImageWrapper">
            <Image
              src="/oficina.png"
              alt="Oficina Zurqui Clouds"
              width={1400}
              height={850}
              className="mainImage"
              priority
            />
          </div>
        </section>

        <section className="section">
          <div className="twoColumns">
            <div>
              <p className="tag">Nuestra forma de trabajar</p>
              <h2>Colaboramos con asesorías y profesionales de primer nivel.</h2>
            </div>

            <div className="textBlock">
              <p>
                En Zurqui Clouds trabajamos en colaboración con asesorías,
                despachos y profesionales especializados de primer nivel para
                ofrecer una visión completa y contrastada en cada operación.
              </p>

              <p>
                Nuestro papel es entender la necesidad, ordenar la información,
                identificar oportunidades y facilitar conexiones útiles entre las
                partes adecuadas.
              </p>

              <p>
                Actuamos con discreción, seriedad y orientación práctica, buscando
                que cada relación profesional pueda convertirse en una oportunidad
                real de crecimiento.
              </p>
            </div>
          </div>
        </section>

        <section className="section gallerySection">
          <div className="galleryGrid">
            <div className="galleryCard">
              <Image
                src="/fernando oficina.png"
                alt="Asesoramiento profesional Zurqui Clouds"
                width={900}
                height={700}
                className="galleryImage"
              />
              <div>
                <h3>Asesoramiento cercano</h3>
                <p>
                  Acompañamos a empresas y particulares en decisiones financieras,
                  patrimoniales e inmobiliarias.
                </p>
              </div>
            </div>

            <div className="galleryCard">
              <Image
                src="/socios fabrica.png"
                alt="Colaboración empresarial Zurqui Clouds"
                width={900}
                height={700}
                className="galleryImage"
              />
              <div>
                <h3>Sinergias empresariales</h3>
                <p>
                  Ponemos en contacto a empresas, socios e inversores para crear
                  nuevas oportunidades de colaboración.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div>
            <p className="tag">Contacto</p>
            <h2>Cuéntanos tu proyecto</h2>
            <p>
              Si tienes una operación, una idea de inversión o buscas nuevas
              alianzas, podemos ayudarte a valorar el siguiente paso.
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