import "./globals.css";

export const metadata = {
  title: "Zurqui Clouds",
  description: "Conectamos oportunidades, inversión y proyectos con sentido.",
  icons: {
    icon: "/logo_zurqui.png",
    shortcut: "/logo_zurqui.png",
    apple: "/logo_zurqui.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
