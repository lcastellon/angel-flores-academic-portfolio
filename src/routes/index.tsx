import { LanguageSelector } from "@/components/language-selector";
import { translate, type Language } from "@/lib/translations";
import { createFileRoute } from "@tanstack/react-router";
import logoColtlax from "@/assets/logo-coltlax.png";
import { ContactForm, PublicationBanner } from "@/components/home-experience";

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): { lang: Language } => ({
    lang: search["lang"] === "en" ? "en" : "es",
  }),
  head: ({ match }) => {
    const t = (text: string) => translate(match.search.lang, text);
    return {
      meta: [
        { title: t("Dr. Ángel David Flores Domínguez — Geografía del Turismo, Tlaxcala") },
        {
          name: "description",
          content: t(
            "Profesor-Investigador en El Colegio de Tlaxcala, A.C. Geografía del turismo, paisaje y procesos territoriales en Tlaxcala, México.",
          ),
        },
        {
          property: "og:title",
          content: t("Dr. Ángel David Flores Domínguez — Geografía del Turismo, Tlaxcala"),
        },
        {
          property: "og:description",
          content: t(
            "Investigación sobre turismo sustentable, transformación de paisajes y planificación territorial con técnicas cartográficas.",
          ),
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: Index,
});

const navLinks = [
  { href: "#lineas", label: "Líneas" },
  { href: "#trayectoria", label: "Trayectoria" },
  { href: "#publicaciones", label: "Publicaciones" },
  { href: "#contacto", label: "Contacto" },
];

const researchLines = [
  {
    number: "01",
    color: "text-cobalt",
    title: "Planificación sustentable del espacio turístico",
    body: "Zonificación funcional ecoturística y ordenamiento del espacio turístico mediante técnicas cartográficas y análisis geoecológico.",
    delay: "60ms",
  },
  {
    number: "02",
    color: "text-terra",
    title: "Procesos territoriales y transformación de paisajes",
    body: "Actividades culturales, productivas y turísticas de apropiación del espacio como factores de cambio que pueden comprometer la sustentabilidad.",
    delay: "120ms",
  },
  {
    number: "03",
    color: "text-sage",
    title: "Teorías y técnicas en la geografía del turismo",
    body: "Relaciones entre turismo y geografía, turismo biocultural y diálogo de saberes en áreas naturales protegidas.",
    delay: "180ms",
  },
];

const trajectory = [
  {
    label: "Formación",
    text: "Doctor y Maestro en Geografía, Universidad Nacional Autónoma de México (2009–2015). Licenciado en Biología Agropecuaria, Universidad Autónoma de Tlaxcala (1998–2003).",
  },
  {
    label: "Adscripción",
    text: "Profesor-Investigador en El Colegio de Tlaxcala, A.C. desde 2016, adscrito al Centro de Estudios en Turismo, Medio Ambiente y Sustentabilidad.",
  },
  {
    label: "Reconocimiento",
    text: "Sistema Nacional de Investigadoras e Investigadores (SNII), nivel I — Geografía, Ciencias Sociales.",
  },
  {
    label: "Docencia",
    text: "Núcleo Académico Básico de la Maestría en Gestión de Turismo Regional Sustentable y de la Maestría en Desarrollo Regional. Dirección de tesis en planificación turística, paisaje y geografía del turismo.",
  },
];

const projects = [
  {
    year: "Vigente · coordinador",
    title:
      "Agencia colectiva para el turismo alternativo en la Red Horizontal Matlalcuéyetl en el estado de Tlaxcala (El Colegio de Tlaxcala, A.C.)",
  },
  {
    year: "Culminado · coordinador",
    title:
      "Turismo biocultural y diálogo de saberes en el ANP La Malinche y su área de influencia. Esquemas horizontales para la gestión territorial ante los retos de la nueva normalidad (Coltlax–CONACYT)",
  },
];

const publications = [
  {
    title:
      "Santiago Charchabal, Y., Priego Santander, Á. G., & Flores Domínguez, Á. D. (2025). Evaluación de la heterogeneidad geoecológica del municipio San Mateo Río Hondo, Oaxaca, México, a escala 1:50 000. Revista Geográfica de América Central.",
    type: "Artículo · 2025",
    url: "https://kimuk.conare.ac.cr/Author/Home?author=Flores+Dom%C3%ADnguez%2C+%C3%81ngel+David",
  },
  {
    title:
      "Hernández-Rodríguez, M. de L., Ocampo-Fletes, I., & Flores-Domínguez, Á. D. (Coords. generales). (2024). Las crisis del agua del siglo XXI: perspectivas y soluciones. El Colegio de Tlaxcala, A.C.",
    type: "Libro · 2024",
    url: "https://revistacoltlax.mx/omp/index.php/repositoriocoltlax/catalog/book/108",
  },
  {
    title:
      "Valoración económica ambiental: la tendencia de la investigación en México y Latinoamérica (2023). Tropical and Subtropical Agroecosystems.",
    type: "Artículo · 2023",
    url: "https://snii.org/ciencias-sociales/flores-dominguez-angel-david/",
  },
  {
    title:
      "Turismo y geografía: relaciones y aplicaciones, un análisis desde la formación del profesional en el turismo (2022). Editorial UPTC.",
    type: "Libro · 2022",
    url: "https://librosaccesoabierto.uptc.edu.co/index.php/editorial-uptc/catalog/book/188",
  },
  {
    title:
      "Flores Domínguez, Á. D. (2012). Zonificación funcional ecoturística de la zona costera de Michoacán, México, a escala 1:250 000. Revista Geográfica de América Central.",
    type: "Artículo · 2012",
    url: "https://kimuk.conare.ac.cr/Author/Home?author=Flores+Dom%C3%ADnguez%2C+%C3%81ngel+David",
  },
];

const researchGateUrl = "https://www.researchgate.net/profile/Angel-Flores-Dominguez/research";

function Index() {
  const { lang } = Route.useSearch();
  const t = (text: string) => translate(lang, text);
  return (
    <div className="min-h-screen bg-paper font-body text-ink antialiased selection:bg-terra/20">
      <header className="sticky top-0 z-30 border-b border-line bg-paper/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="font-display text-lg font-semibold tracking-tight">
              Ángel David Flores Domínguez
            </span>
            <img
              src={logoColtlax}
              alt="El Colegio de Tlaxcala, A.C."
              className="hidden h-8 w-auto sm:block"
            />
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden items-center gap-6 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground sm:flex">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="transition-colors hover:text-ink">
                  {t(link.label)}
                </a>
              ))}
            </nav>
            <LanguageSelector language={lang} />
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
          <div className="max-w-3xl md:col-span-8">
            <div className="animate-[rise_0.8s_cubic-bezier(0.32,0.72,0,1)_both]">
              <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-terra">
                {t("Investigador · Geografía del Turismo · SNII I")}
              </p>
              <h1 className="font-display text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.95] font-semibold tracking-tight text-balance">
                Ángel David <span className="italic text-terra">Flores</span> Domínguez
              </h1>
              <p className="mt-6 max-w-[42ch] font-display text-xl text-pretty italic text-terra">
                {t(
                  '"El turismo transforma los paisajes: entenderlo desde el territorio es la clave para hacerlo sustentable"',
                )}
              </p>
              <p className="mt-6 max-w-[52ch] text-sm leading-relaxed text-pretty text-muted-foreground">
                {t(
                  "Profesor-Investigador en El Colegio de Tlaxcala, A.C. Analizo los procesos territoriales que transforman los paisajes, donde el turismo y otras actividades de apropiación del espacio son factores de cambio que pueden comprometer la sustentabilidad.",
                )}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#lineas"
                  className="rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-terra"
                >
                  {t("Ver líneas de investigación")}
                </a>
                <a
                  href="#contacto"
                  className="rounded-full border border-line px-5 py-3 text-sm font-medium transition-colors hover:border-ink"
                >
                  {t("Contactar")}
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-4">
            <div
              className="animate-[rise_0.8s_cubic-bezier(0.32,0.72,0,1)_both]"
              style={{ animationDelay: "120ms" }}
            >
              <div
                className="prism mx-auto flex aspect-square w-full max-w-xs items-center justify-center rounded-full border border-line shadow-sm"
                aria-label={t("Dr. Ángel David Flores Domínguez")}
                role="img"
              >
                <span className="font-display text-7xl font-semibold italic text-terra">ÁF</span>
              </div>
              <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                El Colegio de Tlaxcala, A.C. · CETMAS
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="lineas" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
        <div className="mb-10 flex items-baseline justify-between border-b border-line pb-4">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            {t("Líneas de investigación")}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {researchLines.map((line) => (
            <div
              key={line.number}
              className="prism animate-[rise_0.8s_cubic-bezier(0.32,0.72,0,1)_both] rounded-2xl p-6 transition-colors hover:bg-card/60"
              style={{ animationDelay: line.delay }}
            >
              <span className={`font-mono text-[10px] uppercase tracking-[0.2em] ${line.color}`}>
                {line.number}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
                {t(line.title)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-pretty text-muted-foreground">
                {t(line.body)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="trayectoria" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
        <div className="mb-10 flex items-baseline justify-between border-b border-line pb-4">
          <h2 className="font-display text-3xl font-semibold tracking-tight">{t("Trayectoria")}</h2>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <dl className="space-y-6 md:col-span-7">
            {trajectory.map((item) => (
              <div key={item.label} className="grid grid-cols-1 gap-1">
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-cobalt">
                  {t(item.label)}
                </dt>
                <dd className="text-base leading-relaxed text-pretty">{t(item.text)}</dd>
              </div>
            ))}
          </dl>
          <div className="prism rounded-2xl p-6 md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-terra">
              {t("Proyectos de investigación")}
            </p>
            <ul className="mt-5 divide-y divide-line">
              {projects.map((project) => (
                <li key={project.title} className="py-4 first:pt-0 last:pb-0">
                  <span className="font-mono text-xs text-muted-foreground">{t(project.year)}</span>
                  <p className="mt-1 font-display text-base leading-snug tracking-tight text-pretty">
                    {t(project.title)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="publicaciones" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
        <div className="mb-8 flex items-baseline justify-between border-b border-line pb-4">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            {t("Publicaciones destacadas")}
          </h2>
        </div>
        <PublicationBanner publications={publications} language={lang} />
        <ul className="divide-y divide-line">
          {publications.map((pub) => (
            <li key={pub.title} className="grid grid-cols-1 gap-2 py-5 md:grid-cols-12 md:gap-6">
              <div className="md:col-span-9">
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base leading-relaxed text-pretty underline decoration-line underline-offset-4 transition-colors hover:decoration-terra"
                >
                  {pub.title}
                </a>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground md:col-span-3 md:text-right">
                {t(pub.type)}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <footer id="contacto" className="mt-8 border-t border-line">
        <div className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {t("CONTACTO")}
              </p>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-balance">
                {t("Conversemos sobre turismo, paisaje y territorio.")}
              </h2>
              <p className="mt-4 max-w-[40ch] text-sm leading-relaxed text-pretty text-muted-foreground">
                {t(
                  "Disponible para colaboraciones, dirección de tesis y proyectos de planificación turística sustentable en Tlaxcala y la región centro de México.",
                )}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href={researchGateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-line px-5 py-3 text-sm font-medium transition-colors hover:border-terra hover:text-terra"
                >
                  ResearchGate
                </a>
                <a
                  href="https://elcoltlax.edu.mx/pdf/CV_ADFD.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-line px-5 py-3 text-sm font-medium transition-colors hover:border-terra hover:text-terra"
                >
                  {t("CV institucional")}
                </a>
              </div>
            </div>
            <div className="md:col-span-7">
              <ContactForm language={lang} />
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
                <img src={logoColtlax} alt="El Colegio de Tlaxcala, A.C." className="h-10 w-auto" />
              </div>
              <p className="mt-4 font-display text-2xl italic text-terra">
                El Colegio de Tlaxcala, A.C.
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                {t("Profesor-Investigador · Turismo, Medio Ambiente y Sustentabilidad")}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                {t("Maestría en Gestión de Turismo Regional Sustentable")}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                {t("Tlaxcala, Tlaxcala, México")}
              </p>
            </div>
          </div>
          <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 sm:flex-row sm:items-center">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              © 2026 Ángel David Flores Domínguez
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Tlaxcala
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
