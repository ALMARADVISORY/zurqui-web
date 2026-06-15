"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consentimiento = localStorage.getItem("zurqui_cookie_consent");

    if (!consentimiento) {
      setVisible(true);
    }
  }, []);

  const aceptarCookies = () => {
    localStorage.setItem("zurqui_cookie_consent", "accepted");
    setVisible(false);
  };

  const rechazarCookies = () => {
    localStorage.setItem("zurqui_cookie_consent", "rejected");
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="cookieBanner">
      <div className="cookieText">
        <h3>Uso de cookies</h3>
        <p>
          Utilizamos cookies propias y tecnologias similares para garantizar el
          correcto funcionamiento del sitio web y mejorar la experiencia de
          navegacion. Puedes aceptar o rechazar su uso.
        </p>
        <Link href="/politica-privacidad">
          Consultar politica de privacidad
        </Link>
      </div>

      <div className="cookieActions">
        <button type="button" className="cookieSecondary" onClick={rechazarCookies}>
          Rechazar
        </button>

        <button type="button" className="cookiePrimary" onClick={aceptarCookies}>
          Aceptar cookies
        </button>
      </div>
    </div>
  );
}
