import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="headerInner">
        <Link href="/" className="brand" aria-label="Ir al inicio">
          <Image
            src="/logo_zurqui.png"
            alt="Logo Zurqui"
            width={170}
            height={90}
            className="logo"
            priority
          />
        </Link>

        <nav className="nav" aria-label="Navegación principal">
          <Link href="/">Inicio</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/quien-somos">Quién somos</Link>
          <Link href="/contacto">Contacto</Link>
          <Link href="/calculadora-prestamos" className="navButton">
            Calculadora financiera
          </Link>
        </nav>
      </div>
    </header>
  );
}