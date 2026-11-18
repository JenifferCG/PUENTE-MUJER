import { FormEvent, ReactNode, useMemo, useState } from "react";

type IconName =
  | "home"
  | "food"
  | "briefcase"
  | "scale"
  | "heart"
  | "shield"
  | "search"
  | "arrow"
  | "mail"
  | "phone"
  | "map"
  | "calendar"
  | "users"
  | "book"
  | "lock"
  | "check"
  | "menu"
  | "close";

function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10M9 20v-6h6v6" />
      </>
    ),
    food: (
      <>
        <path d="M5 3v7M8 3v7M5 7h3M6.5 10v11" />
        <path d="M16 3c-2 2-2.5 7 0 9v9M16 3v9" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
      </>
    ),
    scale: (
      <>
        <path d="M12 3v18M5 6h14M7 6l-4 8h8L7 6ZM17 6l-4 8h8l-4-8ZM8 21h8" />
      </>
    ),
    heart: (
      <path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.4 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14M14 7l5 5-5 5" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
    ),
    map: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
      </>
    ),
    book: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14Z" />
        <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5" />
      </>
    ),
    lock: (
      <>
        <rect x="4" y="10" width="16" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    menu: (
      <>
        <path d="M4 6h16M4 12h16M4 18h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const resources = [
  {
    icon: "home" as IconName,
    title: "Vivienda y alojamiento",
    text: "Opciones de acogida, alquiler y orientación para encontrar un hogar seguro.",
    color: "rose",
  },
  {
    icon: "food" as IconName,
    title: "Alimentación y necesidades básicas",
    text: "Acceso a alimentos, ropa, higiene y recursos esenciales para el día a día.",
    color: "sage",
  },
  {
    icon: "briefcase" as IconName,
    title: "Empleo y formación",
    text: "Cursos, orientación laboral y apoyo para dar el siguiente paso profesional.",
    color: "mauve",
  },
  {
    icon: "scale" as IconName,
    title: "Orientación jurídica y administrativa",
    text: "Información clara sobre trámites, empadronamiento y situación migratoria.",
    color: "sand",
  },
  {
    icon: "heart" as IconName,
    title: "Atención psicológica y bienestar",
    text: "Espacios de escucha y acompañamiento emocional, siempre sin juicios.",
    color: "rose",
  },
  {
    icon: "shield" as IconName,
    title: "Protección ante situaciones de violencia",
    text: "Orientación confidencial y acceso a redes de protección especializadas.",
    color: "sage",
  },
];

const organizations = [
  {
    initials: "PV",
    name: "Punto Violeta Valencia",
    tag: "EJEMPLO DEMOSTRATIVO",
    description:
      "Espacio ficticio de primera acogida y orientación integral para mujeres recién llegadas.",
    services: ["Acogida", "Asesoría", "Acompañamiento"],
    contact: "hola@ejemplo-puente.org",
  },
  {
    initials: "RM",
    name: "Red Mujer Migrante",
    tag: "EJEMPLO DEMOSTRATIVO",
    description: "Asociación ficticia de apoyo mutuo, formación e integración sociolaboral.",
    services: ["Empleo", "Formación", "Comunidad"],
    contact: "+34 960 000 000",
  },
  {
    initials: "CC",
    name: "Casa Cercana",
    tag: "EJEMPLO DEMOSTRATIVO",
    description: "Entidad ficticia dedicada al bienestar emocional y la creación de redes seguras.",
    services: ["Bienestar", "Talleres", "Orientación"],
    contact: "contacto@casacercana-ejemplo.org",
  },
];

const communityItems = [
  {
    icon: "calendar" as IconName,
    eyebrow: "PRÓXIMAMENTE",
    title: "Círculo de bienvenida",
    text: "Un encuentro tranquilo para conocernos, compartir experiencias y resolver dudas sobre la vida en Valencia.",
  },
  {
    icon: "users" as IconName,
    eyebrow: "COMUNIDAD",
    title: "Red de compañeras",
    text: "Conecta con mujeres que comparten camino, intereses y ganas de crear nuevas oportunidades.",
  },
  {
    icon: "book" as IconName,
    eyebrow: "GUÍA PRÁCTICA",
    title: "Primeros pasos en Valencia",
    text: "Información sencilla sobre transporte, salud, padrón, formación y servicios públicos.",
  },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const filteredResources = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("es");
    if (!normalized) return resources;
    return resources.filter((item) =>
      `${item.title} ${item.text}`.toLocaleLowerCase("es").includes(normalized),
    );
  }, [query]);

  function navigate(id: string) {
    setMenuOpen(false);
    scrollTo(id);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Puente Mujer, ir al inicio">
          <span className="brand-mark">
            <span />
          </span>
          <span>
            <strong>PUENTE</strong> MUJER<small>Valencia · España</small>
          </span>
        </a>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Navegación principal">
          {[
            ["inicio", "Inicio"],
            ["ayuda", "Encuentra ayuda"],
            ["organizaciones", "Organizaciones"],
            ["comunidad", "Comunidad"],
            ["contacto", "Contacto"],
          ].map(([id, label]) => (
            <button key={id} onClick={() => navigate(id)}>
              {label}
            </button>
          ))}
          <button className="nav-cta" onClick={() => navigate("contacto")}>
            Pedir orientación
          </button>
        </nav>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-shape hero-shape-one" />
        <div className="hero-copy">
          <span className="eyebrow">
            <span /> UN LUGAR SEGURO PARA TI
          </span>
          <h1>
            No estás sola.
            <br />
            <em>Estamos para ayudarte.</em>
          </h1>
          <p>
            Un puente hacia nuevas oportunidades en Valencia. Encuentra orientación, apoyo y una
            comunidad que te acompaña.
          </p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => scrollTo("ayuda")}>
              Encuentra el apoyo que necesitas <Icon name="arrow" size={19} />
            </button>
            <button className="text-button" onClick={() => scrollTo("comunidad")}>
              Conoce la comunidad <span>↓</span>
            </button>
          </div>
          <div className="trust-line">
            <span>
              <Icon name="lock" size={16} /> Privado y confidencial
            </span>
            <span>
              <Icon name="heart" size={16} /> Humano y cercano
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="photo-frame">
            <img
              src="/PUENTE-MUJER/images/puente-mujer-hero.jpg"
              alt="Grupo de amigas caminando juntas en una ciudad mediterránea"
            />
            <div className="photo-wash" />
          </div>
          <div className="floating-note">
            <span className="note-icon">
              <Icon name="heart" size={19} />
            </span>
            <span>
              <strong>Tu historia importa</strong>
              <small>Te escuchamos sin juzgar</small>
            </span>
          </div>
          <div className="sun-mark">✦</div>
        </div>
      </section>

      <section id="ayuda" className="section help-section">
        <div className="section-heading centered">
          <span className="eyebrow">
            <span /> ESTAMOS PARA ORIENTARTE <span />
          </span>
          <h2>
            ¿En qué podemos <em>ayudarte?</em>
          </h2>
          <p>Explora recursos y encuentra la orientación adecuada para tu momento.</p>
        </div>
        <label className="search-box">
          <Icon name="search" size={21} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Busca por ejemplo: vivienda, empleo, trámites..."
          />
          <span>{filteredResources.length} recursos</span>
        </label>
        <div className="resource-grid">
          {filteredResources.map((item) => (
            <button className="resource-card" key={item.title} onClick={() => scrollTo("contacto")}>
              <span className={`resource-icon ${item.color}`}>
                <Icon name={item.icon} />
              </span>
              <span className="card-number">0{resources.indexOf(item) + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="card-link">
                Ver recursos <Icon name="arrow" size={17} />
              </span>
            </button>
          ))}
        </div>
        {filteredResources.length === 0 && (
          <div className="empty-state">
            No encontramos ese recurso. Escríbenos y te ayudaremos a orientarte.
          </div>
        )}
      </section>

      <section id="organizaciones" className="section organizations-section">
        <div className="section-heading split">
          <div>
            <span className="eyebrow">
              <span /> RED DE APOYO LOCAL
            </span>
            <h2>
              Organizaciones que
              <br />
              <em>tienden puentes</em>
            </h2>
          </div>
          <p>
            Conoce entidades y asociaciones que trabajan por el bienestar, la integración y los
            derechos de mujeres y personas migrantes en Valencia.
          </p>
        </div>
        <div className="notice">
          <Icon name="shield" size={19} />
          <span>
            <strong>Directorio demostrativo.</strong> Los nombres y contactos que aparecen aquí son
            ejemplos ficticios para mostrar cómo funcionará la plataforma.
          </span>
        </div>
        <div className="org-grid">
          {organizations.map((org) => (
            <article className="org-card" key={org.name}>
              <div className="org-top">
                <span className="org-logo">{org.initials}</span>
                <span className="demo-tag">{org.tag}</span>
              </div>
              <h3>{org.name}</h3>
              <p>{org.description}</p>
              <div className="tags">
                {org.services.map((service) => (
                  <span key={service}>{service}</span>
                ))}
              </div>
              <div className="org-contact">
                <span>
                  <Icon name={org.contact.startsWith("+") ? "phone" : "mail"} size={17} />
                  {org.contact}
                </span>
                <button aria-label={`Ver detalles de ${org.name}`}>
                  <Icon name="arrow" size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>
        <button className="outline-button">
          Ver todas las organizaciones <Icon name="arrow" size={18} />
        </button>
      </section>

      <section id="comunidad" className="section community-section">
        <div className="community-intro">
          <span className="eyebrow light">
            <span /> CRECER JUNTAS
          </span>
          <h2>
            Una comunidad que se siente <em>como en casa</em>
          </h2>
          <p>
            Compartir, aprender y conectar. Porque empezar una nueva etapa es más fácil cuando la
            recorremos acompañadas.
          </p>
        </div>
        <div className="community-grid">
          {communityItems.map((item) => (
            <article className="community-card" key={item.title}>
              <span className="community-icon">
                <Icon name={item.icon} />
              </span>
              <span className="community-eyebrow">{item.eyebrow}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <button onClick={() => scrollTo("contacto")}>
                Quiero saber más <Icon name="arrow" size={17} />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section id="contacto" className="section contact-section">
        <div className="contact-copy">
          <span className="eyebrow">
            <span /> HABLEMOS CON CALMA
          </span>
          <h2>
            Cuéntanos qué
            <br />
            <em>necesitas</em>
          </h2>
          <p>
            No tienes que saber exactamente por dónde empezar. Escríbenos con tus propias palabras y
            te ayudaremos a encontrar el siguiente paso.
          </p>
          <div className="privacy-card">
            <span>
              <Icon name="lock" size={23} />
            </span>
            <div>
              <strong>Tu privacidad es lo primero</strong>
              <p>
                No pedimos documentación ni información sensible. Solo necesitamos lo imprescindible
                para poder responderte.
              </p>
            </div>
          </div>
          <div className="emergency-note">
            <strong>¿Estás en peligro inmediato?</strong>
            <br />
            Llama al <a href="tel:112">112</a> o al <a href="tel:016">016</a>. El 016 no deja rastro
            en la factura.
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted && (
            <div className="success-message">
              <Icon name="check" size={20} />
              <span>
                <strong>Mensaje preparado correctamente.</strong>
                <br />
                Gracias por confiar en Puente Mujer.
              </span>
            </div>
          )}
          <div className="form-heading">
            <span>PEDIR ORIENTACIÓN</span>
            <p>Respondemos habitualmente en 24–48 horas.</p>
          </div>
          <label>
            Nombre <small>(opcional)</small>
            <input name="name" placeholder="¿Cómo quieres que te llamemos?" />
          </label>
          <label>
            Correo electrónico <span>*</span>
            <input name="email" type="email" required placeholder="tu@email.com" />
          </label>
          <label>
            ¿En qué podemos ayudarte? <span>*</span>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Cuéntanos brevemente tu situación. No incluyas datos sensibles como números de documento..."
            />
          </label>
          <label className="consent">
            <input type="checkbox" required />
            <span>
              He leído y acepto la <a href="#privacidad">política de privacidad</a> y autorizo el
              uso de mis datos para recibir orientación.
            </span>
          </label>
          <button className="primary-button wide" type="submit">
            Enviar solicitud de orientación <Icon name="arrow" size={19} />
          </button>
          <p className="form-foot">
            <Icon name="lock" size={14} /> Tu información se trata de forma confidencial.
          </p>
        </form>
      </section>

      <footer>
        <div className="footer-brand">
          <a className="brand light-brand" href="#inicio">
            <span className="brand-mark">
              <span />
            </span>
            <span>
              <strong>PUENTE</strong> MUJER<small>Valencia · España</small>
            </span>
          </a>
          <p>
            Orientación, apoyo y comunidad para mujeres que construyen una nueva vida en Valencia.
          </p>
        </div>
        <div>
          <strong>Explora</strong>
          <button onClick={() => scrollTo("ayuda")}>Encuentra ayuda</button>
          <button onClick={() => scrollTo("organizaciones")}>Organizaciones</button>
          <button onClick={() => scrollTo("comunidad")}>Comunidad</button>
        </div>
        <div>
          <strong>Información</strong>
          <button>Privacidad</button>
          <button>Aviso legal</button>
          <button>Accesibilidad</button>
        </div>
        <div className="footer-help">
          <strong>¿Necesitas ayuda?</strong>
          <p>Estamos aquí para escucharte.</p>
          <button onClick={() => scrollTo("contacto")}>
            Contactar ahora <Icon name="arrow" size={16} />
          </button>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Puente Mujer. Proyecto demostrativo.</span>
          <span>Hecho con cuidado en Valencia</span>
        </div>
      </footer>
    </main>
  );
}
