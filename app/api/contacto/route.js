import { Resend } from "resend";

export async function POST(request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("Falta RESEND_API_KEY en las variables de entorno.");
      return new Response("Configuración de email incompleta.", { status: 500 });
    }

    const resend = new Resend(apiKey);
    const formData = await request.formData();

    const nombre = formData.get("nombre") || "";
    const empresa = formData.get("empresa") || "";
    const email = formData.get("email") || "";
    const telefono = formData.get("telefono") || "";
    const area = formData.get("area") || "";
    const mensaje = formData.get("mensaje") || "";

    if (!nombre || !email || !area || !mensaje) {
      return new Response("Faltan campos obligatorios.", { status: 400 });
    }

    const html = `
      <h2>Nuevo mensaje desde la web de Zurqui Clouds</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Empresa:</strong> ${empresa || "No indicada"}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefono:</strong> ${telefono || "No indicado"}</p>
      <p><strong>Area de interes:</strong> ${area}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${String(mensaje).replace(/\n/g, "<br />")}</p>
    `;

    const { error } = await resend.emails.send({
      from: "Zurqui Clouds <contacto@zurquiclouds.com>",
      to: ["direccion@almaradvisory.com"],
      replyTo: email,
      subject: `Nuevo contacto web Zurqui Clouds - ${nombre}`,
      html,
    });

    if (error) {
      console.error(error);
      return new Response("No se pudo enviar el mensaje.", { status: 500 });
    }

    return Response.redirect(new URL("/contacto?enviado=1", request.url), 303);
  } catch (error) {
    console.error(error);
    return new Response("Error interno al enviar el mensaje.", { status: 500 });
  }
}
