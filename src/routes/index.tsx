import { LanguageSelector } from "@/components/language-selector";
import { translate, type Language } from "@/lib/translations";
import { createFileRoute } from "@tanstack/react-router";
import logoColtlax from "@/assets/logo-coltlax.png";
import { ContactForm } from "@/components/home-experience";

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
      <header className="atlas-navigation sticky top-0 z-30">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-10">
          <a href="#inicio" className="flex items-center gap-3" aria-label={t("Ir al inicio")}>
            <span className="atlas-wordmark">DR. ÁNGEL D. FLORES DOMÍNGUEZ</span>
            <img src={logoColtlax} alt={t("El Colegio de Tlaxcala, A.C.")} className="h-8 w-auto rounded-sm bg-[#f3f0e7] p-1" />
          </a>
          <div className="flex items-center gap-4">
            <nav aria-label={t("Navegación principal")} className="hidden items-center gap-5 text-[11px] font-medium tracking-wide lg:flex">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="atlas-navigation-link">{t(link.label)}</a>
              ))}
            </nav>
            <LanguageSelector language={lang} />
            <details className="atlas-mobile-nav relative lg:hidden">
              <summary className="cursor-pointer rounded-lg border border-white/30 px-3 py-2 text-xs">{t("Menú")} ☰</summary>
              <nav aria-label={t("Navegación móvil")} className="absolute right-0 top-full z-40 mt-2 flex min-w-48 flex-col gap-1 rounded-lg border border-white/20 bg-[#203b33] p-3 shadow-xl">
                {navLinks.map((link) => <a key={link.href} href={link.href} className="rounded px-3 py-2 text-sm text-[#f3f0e7] hover:bg-white/10">{t(link.label)}</a>)}
              </nav>
            </details>
          </div>
        </div>
      </header>

      <section id="inicio" className="atlas-hero relative overflow-hidden px-6 pb-0 pt-14 md:px-10 md:pt-20">
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden="true" style={{ backgroundImage: "linear-gradient(#d0d9c9 1px, transparent 1px), linear-gradient(90deg, #d0d9c9 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="relative mx-auto max-w-7xl">
          <div className="atlas-eyebrow mb-6 flex items-center gap-3"><span className="h-px w-9 bg-[#d8b38e]" />{t("ATLAS TERRITORIAL — INVESTIGACIÓN Y PAISAJE")}</div>
          <h1 className="atlas-headline max-w-5xl">
            <span className="block">{t("Comprender el territorio.")}</span>
            <em className="block">{t("Interpretar sus paisajes.")}</em>
          </h1>
          <div className="mt-7 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-base font-semibold text-[#f6f2e8]">Dr. Ángel David Flores Domínguez</p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#cad9ce]">{t("Profesor-Investigador en El Colegio de Tlaxcala, A.C. Geografía del turismo, paisaje y procesos territoriales.")}</p>
              <p className="mt-2 text-xs tracking-wide text-[#d8b38e]">{t("Investigador · Geografía del Turismo · SNII I")}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#lineas" className="atlas-button-primary">{t("Explorar investigación")} <span aria-hidden="true">↗</span></a>
              <a href="#publicaciones" className="atlas-button-secondary">{t("Publicaciones")} <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="atlas-map mt-12 overflow-hidden rounded-t-xl border border-[#b9c6b6]/25 md:mt-16">
            <svg viewBox="0 0 1200 390" role="img" aria-labelledby="atlas-map-title atlas-map-desc" className="block h-auto w-full" preserveAspectRatio="xMidYMid slice">
              <title id="atlas-map-title">{t("Cartografía topográfica conceptual")}</title>
              <desc id="atlas-map-desc">{t("Ilustración abstracta de curvas de nivel y retícula cartográfica, sin coordenadas geográficas reales.")}</desc>
              <defs>
                <linearGradient id="atlas-terrain-gradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#365b4b"/><stop offset="100%" stopColor="#142d27"/></linearGradient>
                <pattern id="atlas-terrain-grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M60 0H0V60" stroke="#cad6c6" strokeOpacity=".14" strokeWidth=".7" fill="none"/></pattern>
              </defs>
              <rect width="1200" height="390" fill="url(#atlas-terrain-gradient)"/>
              <rect width="1200" height="390" fill="url(#atlas-terrain-grid)"/>
              {Array.from({ length: 18 }, (_, i) => (
                <path key={i}
                  d={`M ${-150+i*19} ${390+i*12} C ${-50+i*18} ${180+i*6},${90+i*22} ${150-i*7},${230+i*16} ${250-i*9} S ${450+i*13} ${380-i*15},${640+i*14} ${220-i*10} S ${970+i*12} ${55-i*8},${1350+i*5} ${70+i*14}`}
                  fill="none" stroke={i % 4 === 0 ? "#d8b38e" : "#afc9b6"}
                  strokeOpacity={i % 4 === 0 ? ".72" : ".38"}
                  strokeWidth={i % 4 === 0 ? "1.8" : "1.1"}
                  className="atlas-contour" style={{ animationDelay: `${i*65}ms` }} />
              ))}
              {Array.from({ length: 8 }, (_, i) => (
                <ellipse key={i} cx="860" cy="182" rx={58+i*32} ry={22+i*17} transform="rotate(-24 860 182)" fill="none" stroke="#a9c8b1" strokeOpacity={0.5-i*.045} strokeWidth="1"/>
              ))}
              <path d="M860 157v-16m0 82v-16m-25-25h-16m82 0h-16" stroke="#e3c59d" strokeWidth="1.3"/>
              <circle cx="860" cy="182" r="4" fill="#e3c59d"/>
            </svg>
          </div>
          <div className="atlas-map-footer flex items-center justify-between gap-4 px-4 py-4 text-[10px] tracking-[.2em] md:px-7">
            <span>{t("TERRITORIO · PAISAJE · TURISMO")}</span>
            <a href="#lineas" className="inline-flex items-center gap-2 hover:underline">{t("EXPLORAR")} ↓</a>
          </div>
        </div>
      </section>

      <section id="lineas" className="atlas-chapter scroll-mt-20">
        <div className="atlas-chapter-inner">
          <div className="atlas-section-head"><span className="atlas-section-index">01 / {t("INVESTIGACIÓN")}</span><h2>{t("Líneas de investigación")}</h2><p>{t("Tres perspectivas para comprender el territorio y sus transformaciones.")}</p></div>
          <div className="atlas-research-list">
            {researchLines.map((line, i) => (
              <article key={line.number} className="atlas-research-row">
                <div className="atlas-research-num">{line.number}</div>
                <div className="atlas-research-content"><span className="atlas-small-label">{t("CAMPO DE ESTUDIO")} / 0{i+1}</span><h3>{t(line.title)}</h3><p>{t(line.body)}</p></div>
                <span className="atlas-research-mark" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="trayectoria" className="atlas-chapter atlas-chapter-muted scroll-mt-20">
        <div className="atlas-chapter-inner">
          <div className="atlas-section-head"><span className="atlas-section-index">02 / {t("PERFIL ACADÉMICO")}</span><h2>{t("Trayectoria")}</h2><p>{t("Formación, investigación y docencia.")}</p></div>
          <div className="atlas-profile-grid">
            <dl className="atlas-timeline">{trajectory.map((item, index) => (<div className="atlas-timeline-row" key={item.label}><span className="atlas-timeline-dot" aria-hidden="true"/><dt><span className="atlas-small-label">{String(index+1).padStart(2,"0")} / {t(item.label)}</span></dt><dd>{t(item.text)}</dd></div>))}</dl>
            <aside className="atlas-projects">
              <div className="atlas-projects-head"><span className="atlas-small-label">03 / {t("PROYECTOS Y TERRITORIOS")}</span><h3>{t("Proyectos de investigación")}</h3></div>
              {projects.map((project,index)=>(<article key={project.title} className="atlas-project"><span className="atlas-project-index">{String(index+1).padStart(2,"0")}</span><div><span className="atlas-small-label">{t(project.year)}</span><h4>{t(project.title)}</h4></div></article>))}
            </aside>
          </div>
        </div>
      </section>

      <section id="publicaciones" className="atlas-chapter scroll-mt-20">
        <div className="atlas-chapter-inner">
          <div className="atlas-section-head"><span className="atlas-section-index">04 / {t("BIBLIOTECA ACADÉMICA")}</span><h2>{t("Publicaciones destacadas")}</h2><p>{t("Producción científica y obras para consulta.")}</p></div>
          <div className="atlas-publications">
            {publications.map((pub,index)=>(<article className="atlas-publication" key={pub.title}><span className="atlas-publication-index">{String(index+1).padStart(2,"0")}</span><div><span className="atlas-small-label">{t(pub.type)}</span><h3>{pub.title}</h3></div><a href={pub.url} target="_blank" rel="noopener noreferrer" className="atlas-publication-action" aria-label={t("Consultar publicación")+" "+(index+1)}><span aria-hidden="true">↗</span></a></article>))}
          </div>
        </div>
      </section>

      <footer id="contacto" className="mt-8 border-t border-line">
        <div className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {t("CONTACTO")}
              </p>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-balance">
                {t("Turismo, paisaje y territorio.")}
              </h2>
              <p className="mt-4 max-w-[40ch] text-sm leading-relaxed text-pretty text-muted-foreground">
                {t(
                  "Proyectos de planificación turística sustentable en Tlaxcala y la región centro de México.",
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
            <a
              href="https://laiasd.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-terra"
            >
              {t("Desarrollado por LAIA")}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
