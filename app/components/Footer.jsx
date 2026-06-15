import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerGrid">
        <div>
          <h3>Zurqui Clouds</h3>
          <p>
            Asesoramiento financiero, inversiones, sinergias empresariales y
            acompañamiento inmobiliario.
          </p>
        </div>

        <div>
          <h4>Enlaces</h4>
          <Link href="/">Inicio</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/quien-somos">Quién somos</Link>
          <Link href="/contacto">Contacto</Link>
        </div>

        <div>
          <h4>Herramientas</h4>
          <Link href="/calculadora-prestamos">Calculadora de préstamos</Link>
          <Link href="/politica-privacidad">Política de privacidad</Link>
        </div>
      </div>

      <div className="footerBottom">
        <p>© {new Date().getFullYear()} Zurqui Clouds. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}