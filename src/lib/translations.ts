export type Language = "es" | "en";

const english: Record<string, string> = {
  "Página no encontrada": "Page not found",
  "La página que buscas no existe o ha cambiado de ubicación.":
    "The page you're looking for doesn't exist or has been moved.",
  "Volver al inicio": "Go home",
  "No se pudo cargar esta página": "This page didn't load",
  "Ocurrió un error. Intenta actualizar la página o vuelve al inicio.":
    "Something went wrong on our end. You can try refreshing or head back home.",
  "Intentar de nuevo": "Try again",

  Líneas: "Research",
  Trayectoria: "Academic background",
  Publicaciones: "Publications",
  Contacto: "Contact",
  "Gobernanza ambiental y gestión hídrica territorial":
    "Environmental governance and territorial water management",
  "El agua como Recurso de Uso Común: sustentabilidad hídrica, gestión de cuencas y política pública en Tlaxcala y la región.":
    "Water as a common-pool resource: water sustainability, watershed management, and public policy in Tlaxcala and the surrounding region.",
  "Conflictos socioambientales y desigualdades territoriales":
    "Socio-environmental conflicts and territorial inequalities",
  "Contaminación de los ríos Atoyac y Zahuapan, disputas por el territorio y rutas hacia la sustentabilidad.":
    "Pollution in the Atoyac and Zahuapan rivers, territorial disputes, and pathways toward sustainability.",
  "Acción colectiva y gestión comunitaria del territorio":
    "Collective action and community-based territorial management",
  "Participación social, metodologías participativas y ordenamiento territorial.":
    "Social participation, participatory methodologies, and territorial planning.",
  Formación: "Education",
  "Doctora en Ciencias en Estrategias para el Desarrollo Agrícola Regional, Colegio de Postgraduados, Campus Puebla. Maestra en Ciencias de la Educación, Universidad Autónoma de Tlaxcala.":
    "Ph.D. in Strategies for Regional Agricultural Development, Colegio de Postgraduados, Puebla Campus. M.Sc. in Education, Universidad Autónoma de Tlaxcala.",
  Adscripción: "Institutional affiliation",
  "Profesora-Investigadora “B” en El Colegio de Tlaxcala, A.C., adscrita al Centro de Estudios en Desarrollo Regional y Análisis Económico (CEDRAE).":
    "Professor and Researcher, category “B”, at El Colegio de Tlaxcala, A.C., affiliated with the Center for Regional Development Studies and Economic Analysis (CEDRAE).",
  Experiencia: "Experience",
  "23 años de docencia e investigación a nivel posgrado. Coordinadora del Doctorado en Desarrollo Regional (2024–2025).":
    "23 years of graduate-level teaching and research. Coordinator of the Ph.D. program in Regional Development (2024–2025).",
  Reconocimiento: "Recognition",
  "Sistema Nacional de Investigadoras e Investigadores (SNI), nivel II.":
    "National System of Researchers (SNI), Level II.",
  "Tejedoras de conocimiento (2026): Mujeres que entrelazan a Tlaxcala con el mundo a través de la ciencia. Mujeres en Conseso y Diputadas del Congreso del Estado de Tlaxcala.":
    "Tejedoras de conocimiento (2026) (Weavers of Knowledge): Women who connect Tlaxcala with the world through science. Mujeres en Conseso and women members of the Tlaxcala State Congress.",
  Docencia: "Teaching",
  "Doctorado en Desarrollo Regional. Maestría en Desarrollo Regional. Maestría en Turismo Regional Sustentable. Dirección de tesis en gestión del agua, desarrollo regional, turismo alternativo y metodologías participativas.":
    "Ph.D. in Regional Development. Master’s in Regional Development. Master’s in Sustainable Regional Tourism. Thesis supervision in water management, regional development, alternative tourism, and participatory methodologies.",
  Liderazgo: "Leadership",
  "Líder y representante institucional del GATTACA, grupo técnico transdisciplinario para la restauración integral de la cuenca del Atoyac. Mentora STEAM para mujeres y niñas en la ciencia.":
    "Leader and institutional representative of GATTACA, a transdisciplinary technical group for the comprehensive restoration of the Atoyac watershed. STEAM mentor for women and girls in science.",
  Redes: "Networks",
  "Coadministradora de la Red de Investigadores Sociales Sobre Agua (RISSA)":
    "Co-administrator of the Network of Social Researchers on Water (RISSA)",
  "Red de Investigadores Sociales sobre Agua; Red Temática Conacyt Gestión e Investigación del Agua; Red Mexicana de Investigadores para el Agua; Red de Conflictos Ambientales de América Latina; Red Expertos ODS 21; Red Latinoamericana por la Defensa del Patrimonio Biocultural; Asociación Mexicana de Turismo Rural.":
    "Network of Social Researchers on Water; Conacyt Thematic Network for Water Management and Research; Mexican Network of Water Researchers; Latin American Environmental Conflicts Network; SDG 21 Experts Network; Latin American Network for the Defense of Biocultural Heritage; Mexican Association of Rural Tourism.",
  "Vigente · colectivo": "Ongoing · collaborative",
  "Filtros de colorantes en lavanderías de mezclilla a base de piedra pómez y tela no-tejida de nylon-6: estrategia sustentable para mitigar la contaminación del río Atoyac (CIQA–UPTx–Coltlax)":
    "Dye filters for denim laundries using pumice and nylon-6 nonwoven fabric: a sustainable strategy to mitigate pollution in the Atoyac River (CIQA–UPTx–Coltlax)",
  "Programa Municipal de Ordenamiento Territorial y Desarrollo Urbano, Santa Cruz Tlaxcala":
    "Municipal Territorial Planning and Urban Development Program, Santa Cruz Tlaxcala",
  "Programa Municipal de Ordenamiento Territorial y Desarrollo Urbano, Tepetitla de Lardizábal":
    "Municipal Territorial Planning and Urban Development Program, Tepetitla de Lardizábal",
  "Programa Estatal de Acciones ante el Cambio Climático": "State Climate Change Action Program",
  "Investigadora · Desarrollo Regional · SNI II": "Researcher · Regional Development · SNI II",
  '"El agua es un Recurso de Uso Común: en torno a ella se construyen territorios, acuerdos, conflictos y formas de vida"':
    "“Water is a common-pool resource: territories, agreements, conflicts, and ways of life take shape around it.”",
  "Profesora-Investigadora en El Colegio de Tlaxcala, A.C., con 23 años de docencia e investigación en posgrado. Trabajo la gestión del agua, la planificación participativa y el turismo alternativo desde un enfoque crítico y transdisciplinario.":
    "Professor and Researcher at El Colegio de Tlaxcala, A.C., with 23 years of graduate-level teaching and research. My work addresses water management, participatory planning, and alternative tourism through a critical, transdisciplinary approach.",
  "Ver líneas de investigación": "Explore research areas",
  Contactar: "Get in touch",
  "Líneas de investigación": "Research areas",
  "Proyectos estratégicos": "Strategic projects",
  "Publicaciones destacadas": "Selected publications",
  "MÁS DE 80 EN TOTAL": "MORE THAN 80 IN TOTAL",
  "Su producción académica reúne más de 80 publicaciones sobre sustentabilidad hídrica, conflictos ambientales y ordenamiento territorial.":
    "Her academic work includes more than 80 publications on water sustainability, environmental conflicts, and territorial planning.",
  CONTACTO: "CONTACT",
  "Conversemos sobre el agua y el territorio.": "Let’s talk about water and territory.",
  "Disponible para colaboraciones, dirección de tesis y proyectos de investigación aplicada en la cuenca del Atoyac y la región centro de México.":
    "Available for collaborations, thesis supervision, and applied research projects in the Atoyac watershed and central Mexico.",
  'Profesora-Investigadora "B" · CEDRAE': "Professor and Researcher, category “B” · CEDRAE",
  "Doctorado en Desarrollo Regional": "Ph.D. in Regional Development",
  "Tlaxcala, Tlaxcala, México": "Tlaxcala, Tlaxcala, Mexico",
  "Dra. María de Lourdes Hernández Rodríguez": "Dr. María de Lourdes Hernández Rodríguez",
  "Dra. María de Lourdes Hernández Rodríguez — Desarrollo Regional, Tlaxcala":
    "Dr. María de Lourdes Hernández Rodríguez — Regional Development, Tlaxcala",
  "Profesora-Investigadora en El Colegio de Tlaxcala, A.C. Gestión del agua, conflictos ambientales y ordenamiento territorial en Tlaxcala, México.":
    "Professor and Researcher at El Colegio de Tlaxcala, A.C. Water management, environmental conflicts, and territorial planning in Tlaxcala, Mexico.",
  "Investigación transdisciplinaria sobre sustentabilidad hídrica, conflictos ambientales y ordenamiento territorial en Tlaxcala, México.":
    "Transdisciplinary research on water sustainability, environmental conflicts, and territorial planning in Tlaxcala, Mexico.",
  carrusel: "carousel",
  "Publicaciones importantes": "Featured publications",
  "Publicación seleccionada": "Selected publication",
  "Publicación anterior": "Previous publication",
  "Publicación siguiente": "Next publication",
  "Consultar publicación": "View publication",
  "Elegir publicación": "Choose a publication",
  "Mostrar publicación": "Show publication",
  Nombre: "Name",
  Correo: "Email",
  Asunto: "Subject",
  Mensaje: "Message",
  "Sitio web": "Website",
  "Enviando…": "Sending…",
  "Enviar mensaje": "Send message",
  "El envío está pendiente de activar. Tus datos no se enviaron ni se guardaron.":
    "Message delivery has not been activated yet. Your information was neither sent nor saved.",
  "Mensaje enviado. Gracias por ponerse en contacto.":
    "Message sent. Thank you for getting in touch.",
  "No fue posible enviar el mensaje. Inténtalo de nuevo más tarde.":
    "Your message could not be sent. Please try again later.",
  "La dirección institucional permanece privada.":
    "The institutional email address remains private.",
  "Capítulo · 2026": "Book chapter · 2026",
  "Artículo · 2026": "Article · 2026",
  "Artículo · 2025": "Article · 2025",
  "Libro · 2024": "Book · 2024",
  "Libro · 2022": "Book · 2022",
};

export function translate(language: Language, text: string): string {
  return language === "en" ? (english[text] ?? text) : text;
}
