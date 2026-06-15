import Header from "../components/Header";
import Footer from "../components/Footer";
import CalculadoraFinanciera from "../components/CalculadoraFinanciera";

export default function CalculadoraPrestamos() {
  return (
    <>
      <Header />

      <main>
        <section className="section pageHero calculatorTop">
          <div className="calculatorTopGrid">
            <div>
              <p className="tag">Calculadora financiera</p>
              <h1>Calcula, compara y planifica con mayor claridad.</h1>
              <p className="pageIntro">
                Una herramienta sencilla para estimar cuotas, comparar escenarios
                y entender mejor el coste aproximado de una financiacion.
              </p>
            </div>

            <div className="calculatorIntroBox">
              <h3>Una primera orientacion para tus decisiones</h3>
              <p>
                Utiliza esta calculadora como apoyo inicial antes de valorar una
                operacion, estudiar una financiacion o comparar alternativas.
              </p>
            </div>
          </div>
        </section>

        <section className="section calculatorBlock">
          <CalculadoraFinanciera />
        </section>

        <section className="cta">
          <div>
            <p className="tag">Asesoramiento</p>
            <h2>Quieres revisar una operacion con mas detalle?</h2>
            <p>
              En Zurqui Clouds podemos ayudarte a interpretar los datos, ordenar
              la informacion y valorar el siguiente paso.
            </p>
          </div>

          <a href="/contacto" className="button">
            Contactar
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
