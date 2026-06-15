import "./globals.css";
import CookieBanner from "./components/CookieBanner";

export const metadata = {
  title: "Zurqui Clouds",
  description: "Asesoramiento financiero, inversiones, sinergias empresariales y asesoramiento inmobiliario.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
