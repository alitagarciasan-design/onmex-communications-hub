const templates = {
  onboarding: ({ name, link, schedule }) =>
`Hola ${name} 👋

Te recordamos que la plática de bienvenida será ${schedule || "próximamente"}.

En esta sesión conocerás cómo utilizar tus plataformas, resolver dudas iniciales y avanzar con mayor seguridad en tu proceso académico.

Ingresa aquí:
${link || "[Agrega aquí el link]"}

¡Te esperamos!`,

  test: ({ name, link }) =>
`Hola ${name} 👋

Queremos recordarte la importancia de completar tu Test de Habilidades.

Este diagnóstico nos ayuda a conocer mejor tu perfil académico y acompañarte de forma más puntual durante tu inicio de periodo.

Puedes realizarlo aquí:
${link || "[Agrega aquí el link]"}

Gracias por tu apoyo.`,

  actividad: ({ name, link }) =>
`Hola ${name} 👋

Te compartimos este recordatorio para que puedas realizar tu actividad pendiente antes de la fecha límite.

Completar tus actividades a tiempo te ayuda a mantener tu avance académico y evitar contratiempos.

Ingresa aquí:
${link || "[Agrega aquí el link]"}

¡Tú puedes!`,

  seguimiento: ({ name, link }) =>
`Hola ${name} 👋

Estamos dando seguimiento a tu avance académico para apoyarte en lo que necesites.

Te invitamos a revisar tu plataforma y continuar con tus actividades correspondientes.

Link de acceso:
${link || "[Agrega aquí el link]"}

Quedamos atentos para acompañarte.`
};

const studentName = document.getElementById("studentName");
const messageType = document.getElementById("messageType");
const link = document.getElementById("link");
const schedule = document.getElementById("schedule");
const output = document.getElementById("output");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

function generateMessage() {
  const data = {
    name: studentName.value.trim() || "{{Nombre}}",
    link: link.value.trim(),
    schedule: schedule.value.trim()
  };

  output.value = templates[messageType.value](data);
}

async function copyMessage() {
  if (!output.value.trim()) {
    generateMessage();
  }

  try {
    await navigator.clipboard.writeText(output.value);
    copyBtn.textContent = "Copiado";
    setTimeout(() => {
      copyBtn.textContent = "Copiar";
    }, 1400);
  } catch {
    output.select();
    document.execCommand("copy");
  }
}

generateBtn.addEventListener("click", generateMessage);
copyBtn.addEventListener("click", copyMessage);
messageType.addEventListener("change", generateMessage);

generateMessage();
