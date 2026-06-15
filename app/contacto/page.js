import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contacto() {
  return (
    <>
      <Header />

      <main>
        <section className="section pageHero">
          <div className="twoColumns">
            <div>
              <p className="tag">Contacto</p>
              <h1>Hablemos de tu proyecto.</h1>
              <p className="pageIntro">
                Cuentanos que necesitas y valoraremos como podemos ayudarte en materia financiera, inversion, sinergias empresariales o asesoramiento inmobiliario.
              </p>
            </div>

            <div className="contactInfo">
              <h3>Zurqui Clouds SLU</h3>

              <p>
                <strong>Direccion:</strong>
                <br />
                Calle Italia numero 113
                <br />
                45005 Toledo
              </p>

              <p>
                <strong>Telefono:</strong>
                <br />
                <a href="tel:+34699912867">
                  +(34) 699912867
                </a>
              </p>

              <p>
                <strong>Email:</strong>
                <br />
                <a href="mailto:direccion@almaradvisory.com">
                  direccion@almaradvisory.com
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="section contactFormSection">
          <form
            className="contactForm"
            action="mailto:direccion@almaradvisory.com"
            method="POST"
            encType="text/plain"
          >
            <div className="formGrid">
              <label>
                Nombre
                <input type="text" name="Nombre" placeholder="Tu nombre" required />
              </label>

              <label>
                Empresa
                <input type="text" name="Empresa" placeholder="Empresa o proyecto" />
              </label>

              <label>
                Email
                <input type="email" name="Email" placeholder="tu@email.com" required />
              </label>

              <label>
                Telefono
                <input type="tel" name="Telefono" placeholder="Telefono de contacto" />
              </label>
            </div>

            <label>
              Area de interes
              <select name="Area de interes" required>
                <option value="">Selecciona una opcion</option>
                <option value="Asesoramiento financiero">Asesoramiento financiero</option>
                <option value="Inversiones">Inversiones</option>
                <option value="Sinergias empresariales">Sinergias empresariales</option>
                <option value="Asesoramiento inmobiliario">Asesoramiento inmobiliario</option>
                <option value="Otro">Otro</option>
              </select>
            </label>

            <label>
              Mensaje
              <textarea
                name="Mensaje"
                rows="7"
                placeholder="Cuentanos brevemente en que podemos ayudarte"
                required
              />
            </label>

            <label className="privacyCheck">
              <input type="checkbox" name="Privacidad aceptada" required />
              <span>He leido y acepto la politica de privacidad.</span>
            </label>

            <button type="submit" className="button formButton">
              Enviar mensaje
            </button>
          </form>

          <div className="mapSection">
            <h2>Donde estamos</h2>
            <p>Calle Italia numero 113, 45005 Toledo</p>

            <div className="mapWrapper">
              <iframe
                title="Mapa Zurqui Clouds"
                src="https://www.google.com/maps?q=Calle%20Italia%20113%2C%2045005%20Toledo%2C%20Espana&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
