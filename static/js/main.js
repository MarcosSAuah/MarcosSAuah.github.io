const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const G = 'https://github.com/MarcosSAuah';

const I18N = {
  es: {
    meta: {
      title: 'Marcos Santos · Ingeniería Telemática',
      desc: 'Portfolio de Marcos Santos, estudiante de último año de Ingeniería Telemática (UAH) en busca de prácticas en Madrid (ene/feb 2027). Redes, ciberseguridad, backend, infra/DevOps e IA.',
      ogTitle: 'Marcos Santos · Telemática & Redes',
      ogDesc: 'FastAPI, Redis, Docker, Asterisk y redes. Portfolio interactivo.'
    },
    nav: {
      skip: 'Saltar al contenido',
      brandAria: 'Volver al inicio',
      menuAria: 'Abrir menú',
      home: 'Inicio',
      projects: 'Proyectos',
      skills: 'Skills',
      journey: 'Trayectoria',
      about: 'Sobre mí',
      contact: 'Contacto',
      soundOn: 'Sonido: sí',
      soundOff: 'Sonido: no',
      langAria: 'Cambiar idioma a inglés'
    },
    hero: {
      lead: 'Estudiante de último curso de <strong>Ingeniería Telemática</strong> (UAH) con experiencia en proyectos reales de I+D junto a Correos y ALTEN. <strong>Busco prácticas en Madrid desde enero/febrero de 2027</strong> en redes, ciberseguridad, backend, infra/DevOps o IA.',
      tag1: 'Prácticas ene/feb 2027',
      tag2: 'Madrid · mín. 450 y max 900 h',
      tag3: 'Hasta 35 h/sem',
      tag4: 'Inglés B2',
      btnCv: 'Descargar CV',
      btnGh: 'GitHub',
      hint: 'Haz scroll para insertar un cartucho (o usa ← →)',
      srItems: [
        'Correos Logistics API: FastAPI, Redis, Docker Compose, PostgreSQL, JWT, YOLO.',
        'ALTEN Mixed Reality LMS: Flask, SQLAlchemy, MariaDB, LDAP, Redis, Docker Compose, pytest.',
        'Marchel VoIP PBX: Asterisk 22, PJSIP, Flask, MariaDB, UAH.',
        'NiKA Distributed Chat: Python, Sockets TCP/UDP, select(), P2P, Flask, WebSockets, AWS Lambda.'
      ]
    },
    console: {
      stageAria: 'Consola portátil con los proyectos como cartuchos',
      cartAria: 'Expulsar cartucho',
      eject: 'EXPULSAR',
      btnL: 'Botón L: cartucho anterior',
      btnR: 'Botón R: cartucho siguiente',
      btnPrev: 'Cartucho anterior',
      btnNext: 'Cartucho siguiente',
      btnA: 'Botón A: abrir código o caso de estudio',
      btnB: 'Botón B: expulsar cartucho',
      btnSelect: 'Select: volver al inicio',
      btnStart: 'Start: siguiente cartucho',
      viewCode: 'Ver código en GitHub',
      readCase: 'Leer caso de estudio',
      goToAbout: 'Ir a Sobre mí',
      promptCode: '▶ A · VER CÓDIGO',
      promptCase: '▶ A · CASO DE ESTUDIO',
      promptAbout: '▶ A · SOBRE MÍ',
      teamWith: ' Realizado en equipo junto a '
    },
    dlg: {
      close: 'Cerrar'
    },
    skills: {
      kick: '02 · SKILLS',
      title: 'Lo que sé hacer'
    },
    journey: {
      kick: '03 · RUTA',
      title: 'Trayectoria',
      cRole: 'Becario I+D · Correos × UAH',
      cDate: 'Jun. 2026 a la actualidad',
      cDesc: 'API core en <b>FastAPI</b> para automatizar el análisis de ocupación de casilleros postales: autenticación <b>JWT</b> para las PDAs, validación y guardado de fotos y colas <b>Redis</b> hacia el servicio de visión artificial (<b>YOLO</b>). Apoyo en el despliegue con <b>Docker Compose</b>, <b>PostgreSQL</b> y <b>Nginx</b>, y en el etiquetado de imágenes para entrenar la IA.',
      aRole: 'Becario I+D · ALTEN × UAH',
      aDate: 'Oct. 2024 a Jun. 2026',
      aDesc: 'Portal web docente en <b>Flask + SQLAlchemy</b> para el aprendizaje de español en <b>Realidad Mixta</b> (niños de 7 a 10 años): acceso por roles (profesores, gestores de centro, administradores y alumnos), autenticación corporativa por <b>LDAP</b> con fallback local, limitación de intentos con <b>Redis</b>, tareas programadas de mantenimiento y 59 tests con <b>pytest</b>. Diseño conjunto de la base de datos en <b>MariaDB</b> y despliegue multi-contenedor con <b>Docker Compose</b> y <b>Nginx</b>.',
      iRole: 'Dependiente · Inditex / Parfois',
      iDate: '2024',
      iDesc: 'Atención al cliente e incidencias en caja: comunicación y trabajo en equipo bajo presión.'
    },
    about: {
      kick: '04 · YO',
      title: 'Más allá del código',
      polAria: 'Foto polaroid de Marcos',
      lead: 'Mi vocación por la tecnología nació de una curiosidad simple, entender cómo funcionan las cosas por dentro. Me apasiona el camino que recorre la información, desde la arquitectura de red y la seguridad en cada salto hasta los servicios de backend que sostienen el servicio. Actualmente curso el último año de Ingeniería Telemática en la Universidad de Alcalá, donde solo me falta una asignatura y el Trabajo de Fin de Grado vinculado a mi proyecto en ALTEN. Cuento con un nivel en inglés de B2 y busco aportar valor resolviendo problemas reales en entornos de producción.',
      h1: '<b>Curiosidad técnica</b>Esta consola interactiva es un guiño a las tardes jugando a la Nintendo DS con mi hermano y a ese interés constante por cacharrear que me impulsó hacia la ingeniería.',
      h2: '<b>Comunidad y divulgación</b>Cotutor voluntario en Technovation Girls UAH y colaborador en el congreso CNSM. Disfruto colaborando en iniciativas que impulsan el talento técnico y el trabajo en equipo.',
      h3: '<b>Mente activa</b>Fuera del teclado me encontrarás practicando deporte, jugando al fútbol, dibujando, jugando juegos de mesa, disfrutando de series y anime o pasando tiempo de calidad con mis amigos y/o familia.',
      h4: '<b>Gestión y empatía</b>Mi experiencia en Inditex y Parfois me enseñó a comunicarme con claridad, mantener la templanza en momentos de alta exigencia y cuidar siempre el trato a los demás.'
    },
    contact: {
      kick: '05 · CONTACTO',
      title: 'Hablamos',
      lead: 'Listo para incorporarme en Madrid desde enero o febrero de 2027 mediante convenio de prácticas de mínimo 450 horas y máximo 900 horas, hasta 35 horas semanales, en formato híbrido o presencial y compatible con mi última asignatura. Si buscas un perfil motivado para redes, ciberseguridad, backend, infraestructura/DevOps o IA, contáctame directamente:',
      emailLbl: 'EMAIL',
      showEmail: 'Mostrar email',
      compose: 'Escribir',
      copy: 'Copiar',
      copied: '¡Copiado!',
      phoneLbl: 'TELÉFONO',
      showPhone: 'Ver teléfono',
      call: 'Llamar'
    },
    status: {
      badge: 'ESTADO · DISPONIBLE',
      title: 'Incorporación 2027',
      locLbl: 'UBICACIÓN & FORMATO',
      locVal: 'Madrid · Híbrido o Presencial',
      hoursLbl: 'JORNADA',
      hoursVal: 'Hasta 35 h / semana',
      durLbl: 'DURACIÓN',
      durVal: 'Mínimo 450 h y máximo 900 h (convenio UAH)',
      areasLbl: 'ÁREAS DE INTERÉS',
      areasVal: 'Redes, Ciber, Backend, Infra/DevOps & IA'
    },
    footer: {
      btnCv: 'Descargar CV',
      copy: 'Marcos Santos Aragón · Madrid, España'
    }
  },
  en: {
    meta: {
      title: 'Marcos Santos · Telematics Engineering',
      desc: 'Portfolio of Marcos Santos, final-year Telematics Engineering student (UAH) seeking internships in Madrid (Jan/Feb 2027). Networking, cybersecurity, backend, DevOps & AI.',
      ogTitle: 'Marcos Santos · Telematics & Networks',
      ogDesc: 'FastAPI, Redis, Docker, Asterisk and networking. Interactive portfolio.'
    },
    nav: {
      skip: 'Skip to content',
      brandAria: 'Back to top',
      menuAria: 'Open menu',
      home: 'Home',
      projects: 'Projects',
      skills: 'Skills',
      journey: 'Experience',
      about: 'About me',
      contact: 'Contact',
      soundOn: 'Sound: on',
      soundOff: 'Sound: off',
      langAria: 'Switch language to Spanish'
    },
    hero: {
      lead: 'Final-year <strong>Telematics Engineering</strong> student (UAH) with hands-on experience in real R&D projects alongside Correos and ALTEN. <strong>Seeking an internship in Madrid starting January/February 2027</strong> in networking, cybersecurity, backend, infra/DevOps or AI.',
      tag1: 'Internship Jan/Feb 2027',
      tag2: 'Madrid · 450 to 900 h',
      tag3: 'Up to 35 h/week',
      tag4: 'English B2',
      btnCv: 'Download CV',
      btnGh: 'GitHub',
      hint: 'Scroll to insert a cartridge (or use ← →)',
      srItems: [
        'Correos Logistics API: FastAPI, Redis, Docker Compose, PostgreSQL, JWT, YOLO.',
        'ALTEN Mixed Reality LMS: Flask, SQLAlchemy, MariaDB, LDAP, Redis, Docker Compose, pytest.',
        'Marchel VoIP PBX: Asterisk 22, PJSIP, Flask, MariaDB, UAH.',
        'NiKA Distributed Chat: Python, Sockets TCP/UDP, select(), P2P, Flask, WebSockets, AWS Lambda.'
      ]
    },
    console: {
      stageAria: 'Handheld console with projects as cartridges',
      cartAria: 'Eject cartridge',
      eject: 'EJECT',
      btnL: 'L button: previous cartridge',
      btnR: 'R button: next cartridge',
      btnPrev: 'Previous cartridge',
      btnNext: 'Next cartridge',
      btnA: 'A button: open code or case study',
      btnB: 'B button: eject cartridge',
      btnSelect: 'Select: back to start',
      btnStart: 'Start: next cartridge',
      viewCode: 'View code on GitHub',
      readCase: 'Read case study',
      goToAbout: 'Go to About me',
      promptCode: '▶ A · VIEW CODE',
      promptCase: '▶ A · CASE STUDY',
      promptAbout: '▶ A · ABOUT ME',
      teamWith: ' Built in a team alongside '
    },
    dlg: {
      close: 'Close'
    },
    skills: {
      kick: '02 · SKILLS',
      title: 'Technical Skills'
    },
    journey: {
      kick: '03 · JOURNEY',
      title: 'Experience',
      cRole: 'R&D Intern · Correos × UAH',
      cDate: 'Jun. 2026 – Present',
      cDesc: 'Core API in <b>FastAPI</b> to automate postal locker occupancy analysis: <b>JWT</b> authentication for PDAs, photo validation and storage, and <b>Redis</b> queues to the computer vision service (<b>YOLO</b>). Supported deployment with <b>Docker Compose</b>, <b>PostgreSQL</b>, and <b>Nginx</b>, and image labeling for AI model training.',
      aRole: 'R&D Intern · ALTEN × UAH',
      aDate: 'Oct. 2024 – Jun. 2026',
      aDesc: 'Teaching management web portal in <b>Flask + SQLAlchemy</b> for learning Spanish in <b>Mixed Reality</b> (children aged 7–10): role-based access control (teachers, school managers, admins, and students), corporate authentication via <b>LDAP</b> with local fallback, rate limiting with <b>Redis</b>, automated maintenance tasks, and 59 tests with <b>pytest</b>. Joint database design in <b>MariaDB</b> and multi-container deployment with <b>Docker Compose</b> and <b>Nginx</b>.',
      iRole: 'Retail Assistant · Inditex / Parfois',
      iDate: '2024',
      iDesc: 'Customer service and cash desk management: communication and teamwork under high pressure.'
    },
    about: {
      kick: '04 · ABOUT',
      title: 'Beyond the Code',
      polAria: 'Polaroid photo of Marcos',
      lead: 'My passion for technology began with a simple curiosity: understanding how things work from the inside. I am fascinated by the journey data takes, from network architecture and hop-by-hop security to the backend services powering the system. I am currently in my final year of Telematics Engineering at Universidad de Alcalá, with just one course remaining and my Bachelor\'s Thesis tied to my project at ALTEN. I hold a B2 level in English and look forward to adding value by solving real-world problems in production environments.',
      h1: '<b>Technical Curiosity</b>This interactive console is a nod to afternoons playing Nintendo DS with my brother and that constant itch to tinker that drove me into engineering.',
      h2: '<b>Community & Outreach</b>Volunteer co-mentor at Technovation Girls UAH and collaborator at the CNSM conference. I enjoy contributing to initiatives that nurture tech talent and teamwork.',
      h3: '<b>Active Mind</b>Away from the keyboard, you\'ll find me playing sports, soccer, drawing, board games, enjoying series and anime, or spending quality time with friends and family.',
      h4: '<b>Management & Empathy</b>My customer-facing experience at Inditex and Parfois taught me clear communication, staying composed under high pressure, and always treating people with care.'
    },
    contact: {
      kick: '05 · CONTACT',
      title: 'Let\'s Talk',
      lead: 'Ready to join a team in Madrid starting January or February 2027 under an internship agreement (minimum 450 hours, maximum 900 hours, up to 35 hours/week, hybrid or on-site, compatible with my final university course). If you are looking for a motivated candidate for networking, cybersecurity, backend, infrastructure/DevOps, or AI, reach out directly:',
      emailLbl: 'EMAIL',
      showEmail: 'Show email',
      compose: 'Compose',
      copy: 'Copy',
      copied: 'Copied!',
      phoneLbl: 'PHONE',
      showPhone: 'Show phone',
      call: 'Call'
    },
    status: {
      badge: 'STATUS · AVAILABLE',
      title: '2027 Availability',
      locLbl: 'LOCATION & FORMAT',
      locVal: 'Madrid · Hybrid or On-site',
      hoursLbl: 'HOURS',
      hoursVal: 'Up to 35 h / week',
      durLbl: 'DURATION',
      durVal: 'Min. 450 h, max. 900 h (UAH agreement)',
      areasLbl: 'AREAS OF INTEREST',
      areasVal: 'Networking, Cyber, Backend, Infra/DevOps & AI'
    },
    footer: {
      btnCv: 'Download CV',
      copy: 'Marcos Santos Aragón · Madrid, Spain'
    }
  }
};

let currentLang = (() => {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'es' || saved === 'en') return saved;
  } catch (e) {}
  return 'es';
})();

const P = [
  {
    t: 'Correos Logistics API', col: '#FFD100', c2: '#F2A900', c3: '#FFE76A', tx: '#0b2f6b', bg: '#fff4bf', logo: './static/images/logo-correos.avif', logoRound: 1, priv: 1,
    es: {
      c: 'API Core & Docker · Beca I+D',
      d: 'API core en FastAPI para analizar la ocupación de casilleros en Unidades de Reparto: JWT para las PDAs, colas Redis hacia visión artificial (YOLO), PostgreSQL, Docker Compose y Nginx.',
      tg: ['FastAPI', 'Redis', 'PostgreSQL', 'JWT', 'Docker', 'Nginx'],
      cs: {
        ctx: 'Sistema para digitalizar y controlar automáticamente el volumen de correspondencia en los casilleros de las Unidades de Reparto de Correos. Los carteros hacen fotos con su PDA al empezar y terminar la jornada, un servicio de visión artificial (YOLO) analiza la carga de las baldas y los supervisores consultan los resultados desde un panel web.',
        sections: [
          {
            h: 'Visión general y mi rol',
            p: 'Dentro del equipo del servidor, mi responsabilidad principal fue desarrollar la API core que conecta las PDAs Android con el sistema, además de colaborar en el despliegue con Docker Compose y Nginx y en el etiquetado de imágenes para entrenar el modelo de IA.',
            ul: []
          },
          {
            h: 'Qué hice (API core, infraestructura y datos)',
            ul: [
              'API móvil en FastAPI: autenticación de carteros con tokens JWT (acceso y renovación) y validación de permisos y unidad de reparto.',
              'Recepción de fotografías desde las PDAs: comprobación del formato del nombre y metadatos, guardado organizado en disco evitando duplicados, registro en PostgreSQL y envío a una cola Redis para que el análisis de IA no frene la subida.',
              'Consulta de resultados recientes para devolver a la PDA las fotos de los últimos días junto con la ocupación detectada por balda.',
              'Apoyo en infraestructura y entrenamiento: puesta a punto del entorno multi-contenedor con Docker Compose y el proxy Nginx, y etiquetado de imágenes de casilleros para el dataset de entrenamiento de YOLO.'
            ]
          }
        ],
        learn: 'Desacoplar la recepción de fotos mediante colas en Redis permite que la PDA reciba respuesta al instante sin esperar al análisis de la imagen, manteniendo el sistema ágil incluso en horas punta.'
      }
    },
    en: {
      c: 'Core API & Docker · R&D Fellowship',
      d: 'Core FastAPI API to analyze locker occupancy in Delivery Units: JWT for PDAs, Redis queues to computer vision (YOLO), PostgreSQL, Docker Compose, and Nginx.',
      tg: ['FastAPI', 'Redis', 'PostgreSQL', 'JWT', 'Docker', 'Nginx'],
      cs: {
        ctx: 'System to automatically digitize and monitor mail volume across locker shelves at Correos Delivery Units. Mail carriers take photos with their PDAs at shift start and end, a computer vision service (YOLO) analyzes shelf capacity, and supervisors review the results on a web dashboard.',
        sections: [
          {
            h: 'Overview & My Role',
            p: 'Within the server team, my primary responsibility was developing the core API connecting Android PDAs to the system, along with assisting in multi-container deployment using Docker Compose and Nginx, and labeling locker photos to train the AI model.',
            ul: []
          },
          {
            h: 'What I Built (Core API, Infrastructure & Data)',
            ul: [
              'Mobile API in FastAPI: mail carrier authentication with JWT tokens (access and refresh) plus permission and delivery unit validation.',
              'PDA photo ingestion: filename and metadata validation, structured deduplicated disk storage, registration in PostgreSQL, and enqueuing to Redis so AI analysis never blocks mobile uploads.',
              'Recent results lookup returning recent photo history and per-shelf detected occupancy to the PDA.',
              'Infrastructure & training support: setting up the multi-container environment with Docker Compose and Nginx proxy, and annotating locker images for the YOLO training dataset.'
            ]
          }
        ],
        learn: 'Decoupling image ingestion via Redis queues gives the PDA an instant response without waiting for AI analysis, keeping the system responsive even during peak delivery hours.'
      }
    }
  },
  {
    t: 'ALTEN Mixed Reality LMS', col: '#FF6B78', c2: '#C2182E', c3: '#FF9AA3', tx: '#3a0610', bg: '#ffdce0', logo: './static/images/Logo_ALTEN_Black-1.svg', priv: 1,
    es: {
      c: 'Portal Web & BD · Beca I+D',
      d: 'Portal web de gestión docente, centros y dispositivos en Flask + MariaDB para enseñar español en Realidad Mixta a niños de 7 a 10 años: RBAC, LDAP, Redis, pytest y Docker + Nginx.',
      tg: ['Flask', 'MariaDB', 'LDAP', 'Redis', 'pytest', 'Docker'],
      cs: {
        ctx: 'Plataforma educativa en Realidad Mixta para incentivar el aprendizaje de español como lengua extranjera en niños de 7 a 10 años. Al ser alumnos pequeños, los escenarios se diseñaron en Realidad Mixta para que interactúen por voz sin aislarse del aula.',
        sections: [
          {
            h: 'Visión general y reparto del equipo',
            p: 'En un equipo de 4 personas, dos compañeras crearon los escenarios de Realidad Mixta y otra compañera desarrolló la API en tiempo real que habla con las gafas (voz e IA). Mi parte fue el portal web de gestión docente y administración de centros y dispositivos, además de diseñar e integrar juntos la base de datos y el despliegue del sistema.',
            ul: []
          },
          {
            h: 'Qué hice (gestión docente, centros y dispositivos)',
            ul: [
              'Portal web completo en Flask + SQLAlchemy con acceso diferenciado por perfil: administradores, gestores de centro, profesores y alumnos, de modo que cada sede y docente solo ve sus propios datos y calificaciones.',
              'Administración de centros educativos, inventario de gafas de Realidad Mixta, altas de usuarios/clases e importación masiva desde Excel.',
              'Gestión docente: creación de sesiones de clase para las gafas mediante un código PIN temporal, seguimiento en vivo y consulta de notas y transcripciones.',
              'Autenticación corporativa por LDAP (con acceso local alternativo), límite de intentos con Redis, tareas automáticas de limpieza y batería de 59 tests en pytest.'
            ]
          },
          {
            h: 'Trabajo conjunto en el sistema',
            ul: [
              'Diseño compartido de la base de datos en MariaDB para unir el portal docente con la API en tiempo real de las gafas.',
              'Despliegue del sistema completo en contenedores con Docker Compose y acceso seguro HTTPS mediante Nginx.'
            ]
          }
        ],
        learn: 'Diseñar un portal web claro para profesores y gestores separado de la API en tiempo real de las gafas, manteniendo un esquema de datos común y un acceso seguro por roles.'
      }
    },
    en: {
      c: 'Web Portal & DB · R&D Fellowship',
      d: 'Teaching management web portal, schools, and devices in Flask + MariaDB to teach Spanish in Mixed Reality to children aged 7-10: RBAC, LDAP, Redis, pytest, and Docker + Nginx.',
      tg: ['Flask', 'MariaDB', 'LDAP', 'Redis', 'pytest', 'Docker'],
      cs: {
        ctx: 'Mixed Reality educational platform designed to enhance Spanish language learning for children aged 7 to 10. To keep young students engaged, scenarios were created in Mixed Reality so they interact by voice without feeling isolated from their classroom.',
        sections: [
          {
            h: 'Overview & Team Distribution',
            p: 'In a 4-person team, two peers created the Mixed Reality 3D scenarios while another developed the real-time API communicating with the headsets (voice and AI). My responsibility was the teaching management web portal, schools, and device administration, alongside co-designing the database and system deployment.',
            ul: []
          },
          {
            h: 'What I Built (Teaching Portal, Schools & Devices)',
            ul: [
              'Full-stack web portal in Flask + SQLAlchemy with role-based access control: administrators, center managers, teachers, and students, ensuring each school and teacher only accesses their own data and grades.',
              'School administration, Mixed Reality headset inventory, user/class creation, and batch enrollment via Excel imports.',
              'Classroom management: temporary PIN session generation for headsets, live session tracking, and grade/transcript review.',
              'Corporate LDAP authentication (with local fallback), login rate limiting via Redis, automated background cleanup tasks, and a 59-test suite with pytest.'
            ]
          },
          {
            h: 'Collaborative System Integration',
            ul: [
              'Joint database architecture in MariaDB connecting the teaching portal with the real-time headset API.',
              'Full-system containerized deployment using Docker Compose and secure HTTPS proxying via Nginx.'
            ]
          }
        ],
        learn: 'Designing an intuitive web portal for teachers and managers cleanly decoupled from the headset real-time API, maintaining a unified data schema and secure role-based access.'
      }
    }
  },
  {
    t: 'Marchel VoIP PBX', cc: 'VOIP PBX', ct: 'Marchel', csub: 'ASTERISK 22 · SIP', col: '#5EE38A', c2: '#1f9a3f', c3: '#A6F7C2', tx: '#082417', bg: '#d4fae0', repo: 'https://github.com/ByMarcksuz/Marchel-Asterisk', logo: './static/images/logo-marchel.avif',
    coop: { name: 'Chelsea Fernández Hernández', url: 'https://www.linkedin.com/in/chelsea-fernandez-hernandez-64a339189/' },
    es: {
      c: 'Telefonía IP & redes',
      d: 'Centralita VoIP en Asterisk 22 con PJSIP (IVR multinivel, colas, buzón, conferencias, Festival TTS, grabación y tarificación MariaDB + panel Flask), desarrollada para Laboratorio de Redes, Señales y Sistemas (UAH).',
      tg: ['Asterisk 22', 'PJSIP', 'Flask', 'MariaDB', 'VoIP']
    },
    en: {
      c: 'IP Telephony & Networks',
      d: 'VoIP PBX on Asterisk 22 with PJSIP (multilevel IVR, queues, voicemail, conferences, Festival TTS, recording, and MariaDB billing + Flask dashboard), built for Networks, Signals and Systems Lab (UAH).',
      tg: ['Asterisk 22', 'PJSIP', 'Flask', 'MariaDB', 'VoIP']
    }
  },
  {
    t: 'NiKA Distributed Chat', cc: 'CHAT & REDES', ct: 'NiKA', csub: 'SOCKETS · P2P · CLOUD', col: '#2ED3E6', c2: '#0c8fa3', c3: '#9BF0FA', tx: '#052f38', bg: '#d2f6fb', logo: './static/images/logo.nika.avif', priv: 1,
    coop: { name: 'Chelsea Fernández Hernández', url: 'https://www.linkedin.com/in/chelsea-fernandez-hernandez-64a339189/' },
    es: {
      c: 'Sistemas & redes',
      d: 'Sistema de mensajería y chat distribuido en tiempo real para Laboratorio de Redes, Señales y Sistemas (UAH): sockets TCP/UDP no bloqueantes con select() (cliente-servidor y P2P), evolucionado a app web con Flask, WebSockets, base de datos y facturación serverless con AWS Lambda (se subirá pronto a GitHub).',
      tg: ['Python', 'Sockets TCP/UDP', 'select()', 'P2P', 'WebSockets', 'AWS Lambda'],
      cs: {
        ctx: 'Sistema de mensajería y chat distribuido en tiempo real desarrollado para la asignatura Laboratorio de Redes, Señales y Sistemas (UAH) en equipo junto a Chelsea Fernández Hernández. El proyecto aborda desde los fundamentos de bajo nivel de comunicación en red con sockets no bloqueantes (modelos cliente-servidor y P2P híbrido en Python puro) hasta su evolución a una arquitectura web y cloud en tiempo real con WebSockets, persistencia relacional en Amazon RDS y microservicios serverless en AWS Lambda.',
        sections: [
          {
            h: 'Arquitectura de bajo nivel: Sockets TCP/UDP no bloqueantes y P2P',
            p: 'Implementación directa sobre la API de sockets POSIX de Python con multiplexación I/O mediante select.select(), gestionando decenas de conexiones concurrentes en un único hilo de ejecución sin bloqueos ni sobrecarga multihilo:',
            ul: [
              'Modelo Cliente-Servidor centralizado TCP: servidor con SO_REUSEADDR y select() para gestión de conexiones entrantes, autenticación, administración dinámica de salas (creación, unión y eliminación automática al vaciarse), mensajes privados (usuario:mensaje), difusión global (TODOS:mensaje) y transferencia de ficheros.',
              'Modelo Híbrido P2P: servidor TCP ligero como directorio para registro y descubrimiento dinámico de participantes (IP y puerto UDP), y comunicación directa entre pares mediante datagramas UDP para eliminar cuellos de botella en el servidor central.',
              'Cliente con triple multiplexación en select(): escucha y procesamiento simultáneo de la entrada del usuario por teclado (sys.stdin), notificaciones del servidor central (TCP) y paquetes de chat directo entre clientes (UDP).',
              'Experiencia de usuario en terminal: interfaz con formato visual estilo burbujas de chat, alineación diferenciada según el origen (propios a la izquierda, recibidos a la derecha, sistema al centro) y control robusto ante desconexiones inesperadas.'
            ]
          },
          {
            h: 'Evolución Web y Cloud: WebSockets, Amazon RDS y Serverless en AWS',
            p: 'Ampliación del servicio hacia un entorno web distribuido y arquitectura en la nube orientada a eventos:',
            ul: [
              'Plataforma web en tiempo real: aplicación interactiva con Flask y Flask-SocketIO (WebSockets bidireccionales con eventos de conexión, desconexión y salas dinámicas join_room y leave_room).',
              'Persistencia y métricas de uso: integración con base de datos relacional MySQL/MariaDB (AWS RDS) para registro de usuarios, almacenamiento estructurado de mensajes, fecha, tipo de envío y volumen en bytes para panel de estadísticas.',
              'Microservicio Serverless de facturación: función en AWS Lambda desarrollada en Python con Boto3 y PyMySQL para tarificar automáticamente el tráfico de datos transmitido en diferido o por evento según el tamaño del mensaje (coste por KB procesado).'
            ]
          }
        ],
        learn: 'Profundo dominio de la pila de transporte (TCP y UDP) y de la multiplexación I/O con select() a bajo nivel para diseñar arquitecturas de red concurrentes de alto rendimiento sin hilos, junto con la transición hacia aplicaciones web modernas con WebSockets y cómputo desacoplado en la nube con AWS Lambda.',
        note: 'Repositorio temporalmente privado: se subirá próximamente a GitHub (actualmente en preparación y ordenación de ramas). Encantado de explicar la arquitectura y el código en una entrevista.'
      }
    },
    en: {
      c: 'Systems & Networks',
      d: 'Real-time distributed messaging & chat system for Networks, Signals and Systems Lab (UAH): non-blocking TCP/UDP sockets with select() (client-server and P2P), evolved into a web app with Flask, WebSockets, database, and serverless billing with AWS Lambda (coming soon to GitHub).',
      tg: ['Python', 'TCP/UDP Sockets', 'select()', 'P2P', 'WebSockets', 'AWS Lambda'],
      cs: {
        ctx: 'Real-time distributed messaging and chat system developed for Networks, Signals and Systems Lab (UAH) in a team with Chelsea Fernández Hernández. The project spans from low-level network communication with non-blocking sockets (client-server and hybrid P2P in pure Python) to its modern web and cloud architecture with WebSockets, relational persistence on Amazon RDS, and serverless microservices on AWS Lambda.',
        sections: [
          {
            h: 'Low-Level Architecture: Non-Blocking TCP/UDP Sockets & P2P',
            p: 'Direct implementation on Python\'s POSIX sockets API using I/O multiplexing via select.select(), managing dozens of concurrent connections in a single thread without blocking or multithreading overhead:',
            ul: [
              'Centralized TCP Client-Server model: server with SO_REUSEADDR and select() managing incoming connections, authentication, dynamic rooms (creation, join, auto-cleanup when empty), private messages (user:message), global broadcast (ALL:message), and file transfers.',
              'Hybrid P2P Model: lightweight TCP server acting as a directory for participant discovery (IP and UDP port), enabling direct peer-to-peer communication via UDP datagrams to eliminate central server bottlenecks.',
              'Client with triple select() multiplexing: simultaneous listening to keyboard input (sys.stdin), central server notifications (TCP), and peer chat packets (UDP).',
              'Terminal UX: visual bubble-style formatted chat UI with distinct alignments (sent on left, received on right, system alerts centered) and robust handling of sudden disconnections.'
            ]
          },
          {
            h: 'Web & Cloud Evolution: WebSockets, Amazon RDS & Serverless on AWS',
            p: 'Extending the service into a modern web and event-driven cloud architecture:',
            ul: [
              'Real-time web app: interactive interface built with Flask and Flask-SocketIO (bidirectional WebSockets handling connect, disconnect, and dynamic rooms join_room / leave_room).',
              'Persistence & analytics: integration with MySQL/MariaDB on AWS RDS for user records, structured message storage, timestamps, payload size, and telemetry for an analytics dashboard.',
              'Serverless billing microservice: AWS Lambda function written in Python with Boto3 and PyMySQL to automatically calculate data transfer costs per event or batch based on payload size (cost per processed KB).'
            ]
          }
        ],
        learn: 'Deep understanding of transport protocols (TCP and UDP) and low-level I/O multiplexing with select() to architect high-performance single-threaded network systems, complemented by modern WebSockets and event-driven cloud computing with AWS Lambda.',
        note: 'Repository temporarily private: will be uploaded to GitHub soon (currently cleaning and ordering branches). Delighted to explain the architecture and code in an interview.'
      }
    }
  },
  {
    t: 'Bonus level', col: '#CDB8F5', c2: '#7a5fd1', c3: '#E6DAFB', tx: '#241547', bg: '#ece3fb', logo: 'data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%20fill=%27none%27%20stroke=%27%234b2f9a%27%20stroke-width=%273.2%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%3E%3Cpath%20d=%27M13%2014h22a8%208%200%200%201%208%208v6a6%206%200%200%201-10.5%204L30%2029H18l-2.5%203A6%206%200%200%201%205%2028v-6a8%208%200%200%201%208-8z%27/%3E%3Cpath%20d=%27M15%2020v6M12%2023h6%27/%3E%3Ccircle%20cx=%2733%27%20cy=%2721%27%20r=%271.4%27%20fill=%27%234b2f9a%27/%3E%3Ccircle%20cx=%2737%27%20cy=%2725%27%20r=%271.4%27%20fill=%27%234b2f9a%27/%3E%3C/svg%3E', bonus: 1, repo: '#sobre-mi',
    es: {
      c: 'Sobre mí · Desbloqueado',
      d: 'Esta consola nació de recordar las tardes jugando a la Nintendo DS con mi hermano. Fuera del teclado me encontrarás en eventos como CNSM o Technovation Girls, dibujando, haciendo deporte, jugando videojuegos o escuchando música.',
      tg: ['Nintendo DS', 'Congreso CNSM', 'Technovation', 'Deporte & Arte']
    },
    en: {
      c: 'About me · Unlocked',
      d: 'This console was born from memories of afternoons playing Nintendo DS with my brother. Away from the keyboard, you\'ll find me at events like CNSM or Technovation Girls, drawing, playing sports, video games, or listening to music.',
      tg: ['Nintendo DS', 'CNSM Conference', 'Technovation', 'Sports & Art']
    }
  }
];

const getProj = (i, lang = currentLang) => {
  const p = P[i];
  if (!p) return null;
  const l = p[lang] || p.es || {};
  return { ...p, ...l };
};

const RM = matchMedia('(prefers-reduced-motion:reduce)').matches;
/* título hero */
$('h1').innerHTML = ['Marcos', 'Santos'].map((w, i) => '<span class="w">' + [...w].map((l, j) => `<span class="l" style="animation-delay:${(i * 6 + j) * 50}ms">${l}</span>`).join('') + '</span>').join('');
/* pegatinas flotantes */
const FL = [['c', 6, 14, 46, '#FFD35C', .9], ['s', 46, 6, 54, '#F7917A', -1.1], ['r', 2, 70, 60, '#A8D5C8', .7], ['t', 50, 82, 38, '#CDB8F5', -.8], ['s', 92, 52, 34, '#8EC5E8', 1.2], ['c', 38, 88, 22, '#FFB066', -.6], ['r', 72, 4, 34, '#F7917A', 1]];
$('#stk').insertAdjacentHTML('afterbegin', FL.map(f => `<i class="fl ${f[0]}" data-d="${f[5]}" style="left:${f[1]}%;top:${f[2]}%;--sz:${f[3]}px;background:${f[4]};color:${f[4]}"></i>`).join(''));
const fls = $$('.fl');

/* skills */
const SK = {
  es: [
    ['Redes & Ciberseguridad', 'Protocolos, VoIP y análisis de tráfico.', ['TCP/IP', 'Wireshark', 'Asterisk 22', 'PJSIP', 'Sockets', 'UFW / Firewall'], '#8EC5E8', '((•))'],
    ['Backend & APIs', 'APIs asíncronas, autenticación y tests.', ['Python', 'FastAPI', 'Flask', 'SQLAlchemy', 'pytest', 'JWT', 'C# / .NET (en curso)'], '#F7917A', '</>'],
    ['DevOps, Linux & Cloud', 'Contenedores y proxies para despliegues reproducibles.', ['Docker', 'Linux', 'Bash', 'Nginx', 'Git', 'Google Cloud (en curso)'], '#A8D5C8', '>_'],
    ['Datos & IA', 'Caché en memoria, SQL y modelos de visión.', ['Redis', 'PostgreSQL', 'MariaDB', 'SQL', 'YOLO'], '#FFD35C', '{ }'],
    ['Sistemas & hardware', 'Del código al metal, visto en la carrera.', ['C/C++', 'Ensamblador', 'VHDL'], '#CDB8F5', '0x1']
  ],
  en: [
    ['Networking & Cybersecurity', 'Protocols, VoIP, and traffic analysis.', ['TCP/IP', 'Wireshark', 'Asterisk 22', 'PJSIP', 'Sockets', 'UFW / Firewall'], '#8EC5E8', '((•))'],
    ['Backend & APIs', 'Asynchronous APIs, authentication, and testing.', ['Python', 'FastAPI', 'Flask', 'SQLAlchemy', 'pytest', 'JWT', 'C# / .NET (in progress)'], '#F7917A', '</>'],
    ['DevOps, Linux & Cloud', 'Containers and proxies for reproducible deployments.', ['Docker', 'Linux', 'Bash', 'Nginx', 'Git', 'Google Cloud (in progress)'], '#A8D5C8', '>_'],
    ['Data & AI', 'In-memory caching, SQL databases, and vision models.', ['Redis', 'PostgreSQL', 'MariaDB', 'SQL', 'YOLO'], '#FFD35C', '{ }'],
    ['Systems & Hardware', 'From low-level code to hardware, covered in university.', ['C/C++', 'Assembly', 'VHDL'], '#CDB8F5', '0x1']
  ]
};

function renderSkills() {
  const sk = SK[currentLang] || SK.es;
  $('#sk').innerHTML = sk.map(s => `<div class="card rv" style="--bg:${s[3]}"><i>${s[4]}</i><h3>${s[0]}</h3><p>${s[1]}</p><div class="row">${s[2].map(t => `<span class="tag">${t}</span>`).join('')}</div></div>`).join('');
  $$('.card').forEach(c => {
    c.onpointermove = e => {
      if (e.pointerType === 'touch') return;
      const r = c.getBoundingClientRect();
      c.style.setProperty('--ry', ((e.clientX - r.left) / r.width - .5) * 14 + 'deg');
      c.style.setProperty('--rx', -((e.clientY - r.top) / r.height - .5) * 14 + 'deg');
    };
    c.onpointerleave = () => {
      c.style.setProperty('--rx', '0deg');
      c.style.setProperty('--ry', '0deg');
    };
  });
}
renderSkills();

const MQ = ['FastAPI', 'Redis', 'Docker', 'Asterisk', 'Flask', 'MariaDB', 'Nginx', 'TCP', 'Linux', 'YOLO'];
$('#mqs').innerHTML = Array(3).fill(MQ.map(t => t + '<i>✦</i>').join('')).join('');
/* ---- sonido (Web Audio, sintetizado) ---- */
const audio = {
  ctx: null,
  unlocked: false,
  on: (() => { try { return localStorage.getItem('snd') !== 'off' } catch (e) { return true } })(),
  init() {
    if (!this.unlocked) return;
    if (!this.ctx) { const C = window.AudioContext || window.webkitAudioContext; if (C) this.ctx = new C() }
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume().catch(() => { });
  },
  tone(type, f0, f1, at, dur, vol) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    try {
      const c = this.ctx, t = c.currentTime + at, o = c.createOscillator(), g = c.createGain();
      o.type = type;
      o.frequency.setValueAtTime(f0, t);
      if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(f1, t + dur);
      g.gain.setValueAtTime(vol, t);
      g.gain.exponentialRampToValueAtTime(.001, t + dur);
      o.connect(g);
      g.connect(c.destination);
      o.start(t);
      o.stop(t + dur + .02);
    } catch (e) { }
  },
  play(fn) {
    if (!this.on || !this.unlocked) return;
    this.init();
    if (this.ctx && this.ctx.state === 'running') fn();
  },
  insert() { this.play(() => this.tone('triangle', 160, 50, 0, .08, .3)) },
  eject() { this.play(() => this.tone('sine', 260, 540, 0, .1, .25)) },
  click() { this.play(() => this.tone('triangle', 320, 120, 0, .04, .15)) },
  boot() { this.play(() => [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => this.tone('sine', f, f, i * .07, .45, .18))) },
  scan() { this.play(() => this.tone('sawtooth', 340, 780, 0, .08, .09)) }
};
const unlockAudio = () => {
  audio.unlocked = true;
  if (audio.on) audio.init();
  ['pointerdown', 'keydown', 'touchend', 'click'].forEach(ev => removeEventListener(ev, unlockAudio));
};
['pointerdown', 'keydown', 'touchend', 'click'].forEach(ev => addEventListener(ev, unlockAudio, { passive: true }));
document.addEventListener('pointerdown', e => {
  if (e.target.closest('.k,.btn,.cbtn,nav a,nav button,.dots button')) {
    if (!audio.unlocked) { audio.unlocked = true; audio.init(); }
    audio.click();
  }
});
const snd = $('#snd'), sndLab = () => {
  if (!snd) return;
  const i18n = I18N[currentLang].nav;
  snd.textContent = audio.on ? i18n.soundOn : i18n.soundOff;
  snd.setAttribute('aria-pressed', audio.on);
};
sndLab();
snd.onclick = () => {
  audio.unlocked = true;
  audio.on = !audio.on;
  try { localStorage.setItem('snd', audio.on ? 'on' : 'off') } catch (e) { }
  if (audio.on) audio.init();
  sndLab();
};
/* ---- consola ---- */
let cur = -2, tok = 0; const dots = $('#dots'), stage = $('#stage'), cart = $('#cart'), consola = $('#consola');
dots.innerHTML = P.map((p, i) => `<button aria-label="${p.t}" data-i="${i}" style="--c:${p.col}"></button>`).join('');
const sleep = ms => new Promise(r => setTimeout(r, ms));
const GL = '▮▯◆◇✦#%&';
function scramble(el, txt) { clearInterval(el._t); if (RM) { el.textContent = txt; return } let n = 0; el._t = setInterval(() => { el.textContent = [...txt].map((c, i) => c === ' ' || i < n ? c : GL[Math.random() * GL.length | 0]).join(''); n += 1.4; if (n > txt.length) { el.textContent = txt; clearInterval(el._t) } }, 26) }
async function setCart(i) {
  if (i === cur) return; const my = ++tok, prev = cur; cur = i;
  $$('.dots button').forEach((b, j) => b.classList.toggle('on', j === i));
  $('#hero').classList.toggle('on', i < 0); $('#hero').inert = i >= 0; $('#proj').inert = i < 0;
  consola.style.setProperty('--tint', i < 0 ? 'transparent' : P[i].bg);
  if (prev > -1) { audio.eject(); cart.classList.remove('in'); $('#sp').classList.remove('on'); stage.classList.remove('loaded', 'boot'); $('#boot').classList.remove('off'); $('#proj').classList.remove('on'); $('#led').classList.remove('on'); await sleep(420); if (my !== tok) return }
  stage.classList.toggle('empty', i < 0);
  if (i < 0) return;
  const p = getProj(i), n = String(i + 1).padStart(2, '0');
  const i18n = I18N[currentLang];
  cart.style.setProperty('--c', p.col); cart.style.setProperty('--c2', p.c2 || p.col); cart.style.setProperty('--c3', p.c3 || p.col); cart.style.setProperty('--tx', p.tx || '#14121f');
  $('#ct').textContent = p.ct || (p.bonus ? 'BONUS' : p.t.split(' ').slice(0, 2).join(' '));
  $('#cc').textContent = 'AGB-' + n + ' · ' + (p.cc || p.c.split(' · ')[0]).toUpperCase();
  const ejEl = $('.ej'); if (ejEl) ejEl.textContent = i18n.console.eject;
  $('#clab').classList.toggle('has-logo', true); $('#csub').hidden = !p.csub; if (p.csub) $('#csub').textContent = p.csub;
  const cl = $('#clogo'), ci = $('#cimg'), cw = $('#cwm'); cl.hidden = !p.logo; cw.hidden = !p.logo; cl.classList.toggle('round', !!p.logoRound); cw.classList.toggle('round', !!p.logoRound); if (p.logo) { ci.src = p.logo; cw.src = p.logo } else { ci.removeAttribute('src'); cw.removeAttribute('src') }
  $('#pc').textContent = (p.bonus ? 'BONUS' : n + ' / 0' + P.filter(x => !x.bonus).length) + ' · ' + p.c; scramble($('#pt'), p.t);
  const pd = $('#pd'); pd.textContent = p.d;
  if (p.coop) {
    pd.append(i18n.console.teamWith);
    const a = document.createElement('a');
    a.href = p.coop.url; a.target = '_blank'; a.rel = 'noopener';
    a.textContent = p.coop.name;
    a.style.cssText = 'font-weight:700;text-decoration:underline;text-underline-offset:3px';
    pd.append(a, '.');
  }
  const pg = $('#pg'), pcase = $('#pcase'); pcase.hidden = !p.priv; pg.hidden = !!p.priv;
  pcase.textContent = i18n.console.readCase;
  if (!p.priv) {
    pg.href = p.repo;
    if (p.bonus) {
      pg.textContent = i18n.console.goToAbout;
      pg.removeAttribute('target');
    } else {
      pg.textContent = i18n.console.viewCode;
      pg.target = '_blank';
    }
  }
  $('#ptags').innerHTML = p.tg.map(t => `<span class="tag" style="background:${p.col}">${t}</span>`).join('');
  $('#sc').textContent = p.c.split(' · ')[0].toUpperCase(); $('#st').textContent = p.t; $('#sd').innerHTML = p.tg.map(t => `<span>${t}</span>`).join('');
  $('#su').textContent = p.priv ? (p.bonus ? i18n.console.promptAbout : i18n.console.promptCase) : i18n.console.promptCode;
  $('#scr').style.background = `linear-gradient(#fff,${p.col}cc)`;
  cart.classList.add('in'); stage.classList.add('loaded'); $('#proj').classList.add('on');
  await sleep(520); if (my !== tok) return;
  $('#body').classList.remove('bump'); void $('#body').offsetWidth; $('#body').classList.add('bump'); $('#led').classList.add('on'); stage.classList.add('boot'); audio.insert(); audio.boot();
  await sleep(560); if (my !== tok) return; $('#boot').classList.add('off'); $('#sp').classList.add('on');
}
/* ---- cursor personalizado con fallback automático nativo ---- */
const CUR = $('#cur'), RING = $('#ring');
let hasFinePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
let customCurActive = false;

function enableCustomCur() {
  if (customCurActive || !hasFinePointer || !CUR || !RING) return;
  customCurActive = true;
  document.documentElement.classList.add('custom-cur');
}

function disableCustomCur() {
  if (!customCurActive) return;
  customCurActive = false;
  document.documentElement.classList.remove('custom-cur');
  if (CUR) CUR.classList.remove('h');
  if (RING) RING.classList.remove('h');
}

function topCur(on) {
  if (on) disableCustomCur();
  else if (hasFinePointer) enableCustomCur();
}
function openCase(idx = cur) {
  const p = getProj(idx); if (!p || !p.cs) return; const c = p.cs, ok = s => s && !s.startsWith('[TODO]'), d = $('#dlg');
  $('#dt').textContent = p.t;
  const body = c.sections
    ? c.sections.map(s => `<h4>${s.h}</h4>` + (s.p ? `<p>${s.p}</p>` : '') + (s.ul && s.ul.length ? `<ul>${s.ul.map(x => `<li>${x}</li>`).join('')}</ul>` : '')).join('')
    : `<h4>${currentLang === 'es' ? 'Decisiones técnicas' : 'Technical Decisions'}</h4><ul>${c.dec.map(x => `<li>${x}</li>`).join('')}</ul>`;
  const noteTxt = c.note || (currentLang === 'es' ? 'Descripción a alto nivel: el código y los diagramas no son públicos por confidencialidad. Encantado de explicar el enfoque en una entrevista.' : 'High-level description: code and architectural diagrams are private for confidentiality. Delighted to explain the approach in an interview.');
  const learnHead = currentLang === 'es' ? 'Qué aprendí' : 'What I Learned';
  $('#db').innerHTML = (c.ctx ? `<p>${c.ctx}</p>` : '') + body + (ok(c.fig) ? `<div class="fig">${c.fig}</div>` : '') + (ok(c.learn) ? `<h4>${learnHead}</h4><p>${c.learn}</p>` : '') + `<p style="margin-top:14px;font-size:12px">${noteTxt}</p>`;
  if (!d.open) d.showModal();
  const sc = $('#dlgCnt') || d;
  sc.scrollTop = 0;
  topCur(true);
}
$('#pcase').onclick = () => openCase(); $('#dx').onclick = () => $('#dlg').close();
$('#dlg').addEventListener('close', () => topCur(false));

$('#dlg').addEventListener('click', e => {
  const b = $('#dlg').getBoundingClientRect();
  const clickOutside = (e.clientX < b.left || e.clientX > b.right || e.clientY < b.top || e.clientY > b.bottom);
  if (clickOutside) $('#dlg').close();
});

const isInsideDlg = (clientX, clientY) => {
  const d = $('#dlg');
  if (!d || !d.open) return false;
  const b = d.getBoundingClientRect();
  return clientX >= b.left && clientX <= b.right && clientY >= b.top && clientY <= b.bottom;
};

window.addEventListener('wheel', e => {
  const d = $('#dlg');
  if (!d || !d.open) return;
  if (!isInsideDlg(e.clientX, e.clientY)) {
    e.preventDefault();
    return;
  }
  const sc = $('#dlgCnt') || d;
  if ((sc.scrollTop <= 0 && e.deltaY < 0) || (sc.scrollTop + sc.clientHeight >= sc.scrollHeight - 1 && e.deltaY > 0)) {
    e.preventDefault();
  }
}, { passive: false });

let dlgTouchY = 0;
window.addEventListener('touchstart', e => {
  if ($('#dlg') && $('#dlg').open && e.touches[0]) {
    dlgTouchY = e.touches[0].clientY;
  }
}, { passive: true });

window.addEventListener('touchmove', e => {
  const d = $('#dlg');
  if (!d || !d.open || !e.touches[0]) return;
  const t = e.touches[0];
  if (!isInsideDlg(t.clientX, t.clientY)) {
    e.preventDefault();
    return;
  }
  const sc = $('#dlgCnt') || d;
  const dy = dlgTouchY - t.clientY;
  if ((sc.scrollTop <= 0 && dy < 0) || (sc.scrollTop + sc.clientHeight >= sc.scrollHeight - 1 && dy > 0)) {
    e.preventDefault();
  }
}, { passive: false });
const closeMn = () => { const m = $('#menu'); if (m.classList.contains('open')) { m.classList.remove('open'); $('#mn').setAttribute('aria-expanded', 'false') } };
$('#mn').onclick = () => { const m = $('#menu'), o = m.classList.toggle('open'); $('#mn').setAttribute('aria-expanded', o) };
$('#menu').addEventListener('click', e => { if (e.target.closest('a')) closeMn() });
document.addEventListener('click', e => { if (!e.target.closest('nav')) closeMn() });

const navLinks = {
  inicio: $('#menu a[data-go="-1"]'),
  proyectos: $('#menu a[data-go="0"]'),
  skills: $('#menu a[href="#skills"]'),
  trayectoria: $('#menu a[href="#trayectoria"]'),
  sobreMi: $('#menu a[href="#sobre-mi"]'),
  contacto: $('#menu a[href="#contacto"]')
};

function updateActiveNav(sy = scrollY, H = innerHeight) {
  const docH = document.documentElement.scrollHeight;
  let active = 'inicio';
  if (sy + H >= docH - 60) {
    active = 'contacto';
  } else {
    const sSk = $('#skills'), sTl = $('#trayectoria'), sAb = $('#sobre-mi'), sCt = $('#contacto');
    const rSk = sSk ? sSk.getBoundingClientRect().top : 9999;
    const rTl = sTl ? sTl.getBoundingClientRect().top : 9999;
    const rAb = sAb ? sAb.getBoundingClientRect().top : 9999;
    const rCt = sCt ? sCt.getBoundingClientRect().top : 9999;
    const th = H * .35;
    if (rCt <= th) active = 'contacto';
    else if (rAb <= th) active = 'sobreMi';
    else if (rTl <= th) active = 'trayectoria';
    else if (rSk <= th) active = 'skills';
    else active = (cur >= 0) ? 'proyectos' : 'inicio';
  }
  for (const [k, el] of Object.entries(navLinks)) {
    if (!el) continue;
    const isAct = (k === active);
    el.classList.toggle('act', isAct);
    if (isAct) el.setAttribute('aria-current', 'page');
    else el.removeAttribute('aria-current');
  }
}
const prog = () => { const r = consola.getBoundingClientRect(), d = r.height - innerHeight; return d <= 2 ? null : Math.max(0, Math.min(1, -r.top / d)) };
const idxOf = p => p < .08 ? -1 : Math.min(P.length - 1, Math.floor((p - .08) / (.92 / P.length)));
const go = i => { const span = consola.offsetHeight - innerHeight; if (span <= 2) { consola.scrollIntoView(); setCart(i); return } scrollTo({ top: consola.offsetTop + span * (i < 0 ? 0 : .08 + (i + .5) * (.92 / P.length)), behavior: 'instant' }) };
$$('nav [data-go]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); closeMn(); go(+a.dataset.go) }));
dots.onclick = e => { const b = e.target.closest('button'); if (b) go(+b.dataset.i) };
const step = d => { const n = cur < 0 ? (d > 0 ? 0 : P.length - 1) : (cur + d + P.length) % P.length; go(n) };
const open_ = () => { if (cur < 0) return; const p = P[cur]; if (p.priv) openCase(); else if (p.bonus) location.hash = '#sobre-mi'; else open(p.repo, '_blank', 'noopener') };
const bind = (id, f) => $(id).addEventListener('click', f);
bind('#du', () => step(-1)); bind('#dl', () => step(-1)); bind('#dr', () => step(1)); bind('#dd', () => step(1));
bind('#sa', () => step(1)); bind('#se', () => go(-1)); bind('#bb', () => go(-1)); bind('#ba', open_); bind('#sl', () => step(-1)); bind('#sr', () => step(1));
cart.onclick = () => go(-1); cart.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(-1) } });
addEventListener('keydown', e => { if (e.key === 'Escape') closeMn(); if ($('#dlg') && $('#dlg').open) return; const r = consola.getBoundingClientRect(); if (r.height > innerHeight + 2 ? (r.top > 2 || r.bottom < innerHeight - 2) : (r.top >= innerHeight || r.bottom <= 0)) return; if (e.key === 'ArrowRight') { e.preventDefault(); step(1) } if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1) } });
/* ---- ratón ---- */
let mx = innerWidth / 2, my = innerHeight / 2, cx = mx, cy = my, tx = 0, ty = 0, isTouch = matchMedia('(hover:none),(pointer:coarse)').matches;
const COLS = ['#F7917A', '#FFB066', '#FFD35C', '#A8D5C8', '#8EC5E8', '#CDB8F5']; let lastSp = 0;
addEventListener('pointermove', e => {
  if (e.pointerType === 'touch') {
    isTouch = true;
    disableCustomCur();
    return;
  }
  isTouch = false;
  moved = true;
  mx = e.clientX;
  my = e.clientY;

  if (!customCurActive && hasFinePointer) {
    cx = mx;
    cy = my;
    enableCustomCur();
  }

  if (RM || $('#dlg').open) return;
  const n = performance.now();
  if (n - lastSp < 50) return;
  lastSp = n;
  const s = document.createElement('i');
  s.className = 'sp';
  s.style.cssText = `left:${mx}px;top:${my}px;background:${COLS[Math.random() * 6 | 0]}`;
  document.body.appendChild(s);
  const dx = (Math.random() - .5) * 40, dy = 10 + Math.random() * 30;
  s.animate([{ transform: 'translate(-50%,-50%) scale(1) rotate(0)', opacity: 1 }, { transform: `translate(calc(-50% + ${dx}px),calc(-50% + ${dy}px)) scale(0) rotate(200deg)`, opacity: 0 }], { duration: 750, easing: 'ease-out' }).onfinish = () => s.remove();
});

document.addEventListener('mouseleave', () => disableCustomCur());
document.addEventListener('mouseenter', e => {
  if (e.pointerType !== 'touch' && hasFinePointer) {
    mx = e.clientX; my = e.clientY; cx = mx; cy = my;
    enableCustomCur();
  }
});

const interactiveSel = 'a, button, .btn, .cbtn, .k, #cart, .dots button, .clink, .pdot, .pol, .pol-media, .pol-slide, .pol-canvas, #pcase, #snd, #mn, .card, .hob div, [role="button"], summary';
document.addEventListener('pointerover', e => {
  if (e.pointerType !== 'touch' && customCurActive) {
    const isInter = !!(e.target && e.target.closest && e.target.closest(interactiveSel));
    if (RING) RING.classList.toggle('h', isInter);
    if (CUR) CUR.classList.toggle('h', isInter);
  }
});
document.addEventListener('pointerout', e => {
  if (!e.relatedTarget) {
    if (RING) RING.classList.remove('h');
    if (CUR) CUR.classList.remove('h');
  }
});
/* ---- contacto directo ---- */
const EM = ['marcos.santos.aragon', 'gmail.com'].join('@'), TEL = ['+34', '684', '04', '52', '29'];
const cpText = (t, b) => {
  if (!navigator.clipboard) return false;
  const copied = I18N[currentLang].contact.copied;
  navigator.clipboard.writeText(t).then(() => {
    b.textContent = copied;
    setTimeout(() => { b.textContent = I18N[currentLang].contact.copy; }, 2200);
  });
  return true;
};
const updateContactLinks = () => {
  const su = currentLang === 'es'
    ? '[Portfolio] Contacto · Oportunidad profesional'
    : '[Portfolio] Contact · Professional Opportunity';
  const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(EM) + '&su=' + encodeURIComponent(su);
  const emtxt = $('#emtxt'), emgo = $('#emgo');
  if (emtxt) { emtxt.textContent = EM; emtxt.href = gmailUrl; emtxt.target = '_blank'; emtxt.rel = 'noopener'; }
  if (emgo) { emgo.href = gmailUrl; emgo.target = '_blank'; emgo.rel = 'noopener'; }
};
updateContactLinks();
$('#em').onclick = function () { cpText(EM, this) };
$('#ph').onclick = function () { const num = TEL.join(' '), raw = TEL.join(''); $('#phtxt').textContent = num; $('#phtxt').href = 'tel:' + raw; $('#phgo').href = 'tel:' + raw; $('#phgo').hidden = false; $('#phcp').hidden = false; this.hidden = true };
$('#phcp').onclick = function () { cpText(TEL.join(' '), this) };
$$('.card').forEach(c => { c.onpointermove = e => { if (e.pointerType === 'touch') return; const r = c.getBoundingClientRect(); c.style.setProperty('--ry', ((e.clientX - r.left) / r.width - .5) * 14 + 'deg'); c.style.setProperty('--rx', -((e.clientY - r.top) / r.height - .5) * 14 + 'deg') }; c.onpointerleave = () => { c.style.setProperty('--rx', '0deg'); c.style.setProperty('--ry', '0deg') } });
/* ---- ondas retro + bucle ---- */
const rib = $('#rib'), RC = ['#A8D5C8', '#F7917A', '#FFB066', '#FFD35C', '#F7917A', '#2A9DA6'], WD = [1, .82, .64, .46, .3, .15];
rib.innerHTML = RC.map(c => `<path fill="none" stroke="${c}" stroke-linejoin="round"/>`).join('');
const paths = [...rib.children], blobs = $$('.blob'), glare = $('.glare'), tiltEl = $('#tilt'); let vel = 0, lastY = scrollY, mq = 0, lastDraw = -1, lastW = 0, moved = true;
const BAR = $('#bar'), MQS = $('#mqs'), TL = $('#tl'), MAGS = $$('.mag'), DE = document.documentElement;
function frame(t) {
  const W = innerWidth, H = innerHeight, sy = scrollY; vel += ((sy - lastY) - vel) * .15; lastY = sy;
  cx += (mx - cx) * .2; cy += (my - cy) * .2;
  if (customCurActive) {
    if (CUR) CUR.style.transform = `translate(${mx}px,${my}px)`;
    if (RING) RING.style.transform = `translate(${cx}px,${cy}px)`;
  }
  const px = isTouch ? .5 : mx / W, py = isTouch ? .5 : my / H, p = prog();
  tx += ((px - .5) * 18 - tx) * .08; ty += ((py - .5) * -14 - ty) * .08;
  tiltEl.style.transform = `rotateY(${tx}deg) rotateX(${ty + 4 - (p || 0) * 4}deg) translateY(${RM ? 0 : Math.sin(t / 900) * 5}px)`;
  glare.style.setProperty('--gx', (50 + tx * 2.5) + '%'); glare.style.setProperty('--gy', (30 - ty * 3) + '%');
  fls.forEach(el => { const d = +el.dataset.d; el.style.transform = `translate(${(px - .5) * d * 90}px,${(py - .5) * d * 90 - sy * d * .04}px) rotate(${sy * d * .06 + (RM ? 0 : t / 60 * d)}deg)` });
  const ph = sy / 340 + (RM ? 0 : t / 2600), base = W > 900 ? W * .82 : W * .9, sc = Math.min(1, W / 1100) * 1.1;
  if (((frame.n = (frame.n || 0) + 1) & 1) === 0) paths.forEach((el, k) => {
    let d = ''; for (let y = -320; y <= H + 320; y += 48) { const x = base + (px - .5) * 70 + Math.sin(y / 210 + ph + k * .16) * 150 * sc + Math.sin(y / 95 - ph * 1.4) * 38 * sc; d += (d ? 'L' : 'M') + x.toFixed(1) + ' ' + y }
    el.setAttribute('d', d); el.setAttribute('stroke-width', (300 * sc * WD[k]).toFixed(1))
  });
  mq = (mq - 1.2 - Math.abs(vel) * .6); if (!frame.w || lastW !== W) { frame.w = MQS.scrollWidth / 3; lastW = W } if (-mq > frame.w) mq += frame.w; MQS.style.transform = `translateX(${mq}px)`;
  if (p !== null) setCart(idxOf(p));
  if (sy !== lastDraw || W !== frame.lw || cur !== frame.lc) {
    lastDraw = sy; frame.lw = W; frame.lc = cur;
    blobs.forEach(b => { const r = b.parentElement.getBoundingClientRect(); b.style.transform = `translateY(${(r.top + r.height / 2 - H / 2) * +b.dataset.s}px)` });
    BAR.style.transform = `scaleX(${sy / Math.max(1, DE.scrollHeight - H)})`;
    const tl = TL.getBoundingClientRect(); TL.style.setProperty('--p', Math.max(0, Math.min(1, (H * .7 - tl.top) / tl.height)));
    updateActiveNav(sy, H);
  }
  if (isTouch) { if (moved) { moved = false; MAGS.forEach(b => { b.style.transform = '' }) } }
  else if (moved || sy !== frame.ly) { frame.ly = sy; let near = false; MAGS.forEach(b => { b.style.transform = ''; const r = b.getBoundingClientRect(), dx = mx - (r.left + r.width / 2), dy = my - (r.top + r.height / 2); if (Math.hypot(dx, dy) < 90) { near = true; b.style.transform = `translate(${dx * .25}px,${dy * .35}px)` } }); if (!near && Math.abs(mx - cx) < .5 && Math.abs(my - cy) < .5) moved = false }
  requestAnimationFrame(frame)
}
requestAnimationFrame(frame);
updateActiveNav();
/* reveal */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.style.transitionDelay = (e.target.dataset.d || 0) + 'ms'; e.target.classList.add('in'); e.target.addEventListener('transitionend', () => { e.target.style.transitionDelay = '' }, { once: true }); io.unobserve(e.target) } }), { threshold: .15 });
$$('.rv').forEach((el, i) => { el.dataset.d = (i % 4) * 90; io.observe(el) });

/* ---- polaroid vintage + carrusel + retro pixel videojuego ---- */
(function () {
  const polFrame = $('#polFrame');
  if (!polFrame) return;

  const FOTOS = [
    'static/images/foto1.avif'
  ];

  const slides = $$('.pol-slide');
  const pdots = $$('.pdot');
  const canvas = $('#polCanvas');
  const scanner = $('#polScanner');
  const pixelLayer = $('#polPixelLayer');

  let current = 0;
  let timer = null;
  let isHovered = false;
  const pixelCanvases = [];

  function drawCover(ctx, img, w, h) {
    const nw = img.naturalWidth || img.width;
    const nh = img.naturalHeight || img.height;
    if (!nw || !nh) {
      ctx.drawImage(img, 0, 0, w, h);
      return;
    }
    const imgRatio = nw / nh;
    const targetRatio = w / h;
    let sx = 0, sy = 0, sw = nw, sh = nh;

    if (imgRatio > targetRatio) {
      sw = nh * targetRatio;
      sx = (nw - sw) / 2;
    } else {
      sh = nw / targetRatio;
      sy = (nh - sh) / 2;
    }

    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, w, h);
  }

  function generatePixelArt(img) {
    const targetW = 34;
    const targetH = Math.round(targetW * (4.6 / 4));
    const off = document.createElement('canvas');
    off.width = targetW;
    off.height = targetH;
    const octx = off.getContext('2d');
    if (!octx) return off;

    drawCover(octx, img, targetW, targetH);

    try {
      const idata = octx.getImageData(0, 0, targetW, targetH);
      const d = idata.data;
      const bayer = [
        [0, 8, 2, 10],
        [12, 4, 14, 6],
        [3, 11, 1, 9],
        [15, 7, 13, 5]
      ];

      for (let i = 0; i < d.length; i += 4) {
        let r = d[i], g = d[i + 1], b = d[i + 2];
        const lum = 0.299 * r + 0.587 * g + 0.114 * b;
        r = lum + (r - lum) * 1.55;
        g = lum + (g - lum) * 1.55;
        b = lum + (b - lum) * 1.55;

        r = (r - 128) * 1.25 + 128;
        g = (g - 128) * 1.25 + 128;
        b = (b - 128) * 1.25 + 128;

        const px = (i / 4) % targetW;
        const py = Math.floor((i / 4) / targetW);
        const dit = (bayer[py % 4][px % 4] / 16 - 0.5) * 30;

        r = Math.max(0, Math.min(255, r + dit));
        g = Math.max(0, Math.min(255, g + dit));
        b = Math.max(0, Math.min(255, b + dit));

        const q = 48;
        d[i] = Math.min(255, Math.round(r / q) * q);
        d[i + 1] = Math.min(255, Math.round(g / q) * q);
        d[i + 2] = Math.min(255, Math.round(b / q) * q);
      }
      octx.putImageData(idata, 0, 0);
    } catch (e) {
      /* Fallback si se ejecuta en file:// con restricciones de contexto */
    }
    return off;
  }

  FOTOS.forEach((src, idx) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      pixelCanvases[idx] = generatePixelArt(img);
      if (idx === current) drawActivePixel();
    };
  });

  function drawActivePixel() {
    if (!canvas) return;
    const off = pixelCanvases[current];
    canvas.width = 280;
    canvas.height = Math.round(280 * (4.6 / 4));
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (off) {
      ctx.drawImage(off, 0, 0, canvas.width, canvas.height);
    } else if (slides[current] && slides[current].complete && slides[current].naturalWidth) {
      drawCover(ctx, slides[current], canvas.width, canvas.height);
    }
  }

  function goTo(n) {
    current = (n + FOTOS.length) % FOTOS.length;
    slides.forEach((s, i) => s.classList.toggle('active', i === current));
    pdots.forEach((d, i) => d.classList.toggle('active', i === current));
    drawActivePixel();
  }

  function startSlideshow() {
    stopSlideshow();
    if (FOTOS.length <= 1) return;
    timer = setInterval(() => {
      if (!isHovered) goTo(current + 1);
    }, 4500);
  }

  function stopSlideshow() {
    if (timer) clearInterval(timer);
    timer = null;
  }

  function triggerScanEffect() {
    drawActivePixel();
    if (audio && audio.scan) audio.scan();
    if (scanner && pixelLayer) {
      scanner.style.animation = 'none';
      pixelLayer.style.animation = 'none';
      void scanner.offsetWidth;
      scanner.style.animation = '';
      pixelLayer.style.animation = '';
    }
  }

  polFrame.addEventListener('mouseenter', () => {
    isHovered = true;
    triggerScanEffect();
  });

  polFrame.addEventListener('mouseleave', () => {
    isHovered = false;
    polFrame.classList.remove('is-pixel');
  });

  polFrame.addEventListener('click', (e) => {
    const dot = e.target.closest('.pdot');
    if (dot) {
      const idx = pdots.indexOf(dot);
      if (idx >= 0) {
        goTo(idx);
        startSlideshow();
      }
      return;
    }

    if (isTouch || matchMedia('(hover:none)').matches) {
      const willBePixel = !polFrame.classList.contains('is-pixel');
      polFrame.classList.toggle('is-pixel', willBePixel);
      if (willBePixel) {
        isHovered = true;
        triggerScanEffect();
      } else {
        isHovered = false;
      }
    }
    /* En ratón no repetimos el escaneo al hacer clic; solo ocurre al entrar o salir */
  });

  document.addEventListener('pointerdown', (e) => {
    if (!e.target.closest('#polFrame') && polFrame.classList.contains('is-pixel')) {
      polFrame.classList.remove('is-pixel');
      isHovered = false;
    }
  }, { passive: true });

  goTo(0);
  startSlideshow();
})();

/* ---- internacionalización (i18n: ES / EN) ---- */
function applyLanguage(lang) {
  if (lang !== 'es' && lang !== 'en') return;
  currentLang = lang;
  try { localStorage.setItem('lang', lang); } catch (e) {}
  document.documentElement.lang = lang;
  const i18n = I18N[lang];

  // Metas y título
  if (i18n.meta) {
    document.title = i18n.meta.title;
    const md = $('meta[name="description"]'); if (md) md.content = i18n.meta.desc;
    const ogt = $('meta[property="og:title"]'); if (ogt) ogt.content = i18n.meta.ogTitle;
    const ogd = $('meta[property="og:description"]'); if (ogd) ogd.content = i18n.meta.ogDesc;
  }

  // Botón selector de idioma
  const lEs = $('#langEs'), lEn = $('#langEn'), lBtn = $('#langBtn');
  if (lEs) lEs.classList.toggle('act', lang === 'es');
  if (lEn) lEn.classList.toggle('act', lang === 'en');
  if (lBtn) lBtn.setAttribute('aria-label', i18n.nav.langAria);

  // Sonido
  sndLab();

  // Elementos estáticos data-i18n
  $$('[data-i18n]').forEach(el => {
    const path = el.dataset.i18n.split('.');
    let val = i18n;
    for (const k of path) val = val ? val[k] : null;
    if (val !== null && val !== undefined) {
      el.innerHTML = val;
    }
  });

  // Atributos aria data-i18n-aria
  $$('[data-i18n-aria]').forEach(el => {
    const path = el.dataset.i18nAria.split('.');
    let val = i18n;
    for (const k of path) val = val ? val[k] : null;
    if (val) el.setAttribute('aria-label', val);
  });

  // Lista para lectores de pantalla
  const sr = $('#srList');
  if (sr && i18n.hero && i18n.hero.srItems) {
    sr.innerHTML = i18n.hero.srItems.map(item => `<li>${item}</li>`).join('');
  }

  // Botón de expulsión de cartucho
  const ej = $('.ej');
  if (ej) ej.textContent = i18n.console.eject;

  // Actualizar enlaces de contacto
  if (typeof updateContactLinks === 'function') updateContactLinks();

  // Renderizar skills
  if (typeof renderSkills === 'function') renderSkills();

  // Actualizar cartucho activo si hay uno insertado
  if (cur >= 0) {
    const p = getProj(cur), n = String(cur + 1).padStart(2, '0');
    $('#pc').textContent = (p.bonus ? 'BONUS' : n + ' / 0' + P.filter(x => !x.bonus).length) + ' · ' + p.c;
    $('#ct').textContent = p.ct || (p.bonus ? 'BONUS' : p.t.split(' ').slice(0, 2).join(' '));
    $('#cc').textContent = 'AGB-' + n + ' · ' + (p.cc || p.c.split(' · ')[0]).toUpperCase();
    $('#pt').textContent = p.t;
    const pd = $('#pd');
    pd.textContent = p.d;
    if (p.coop) {
      pd.append(i18n.console.teamWith);
      const a = document.createElement('a');
      a.href = p.coop.url; a.target = '_blank'; a.rel = 'noopener';
      a.textContent = p.coop.name;
      a.style.cssText = 'font-weight:700;text-decoration:underline;text-underline-offset:3px';
      pd.append(a, '.');
    }
    $('#ptags').innerHTML = p.tg.map(t => `<span class="tag" style="background:${p.col}">${t}</span>`).join('');
    $('#sc').textContent = p.c.split(' · ')[0].toUpperCase();
    $('#st').textContent = p.t;
    $('#sd').innerHTML = p.tg.map(t => `<span>${t}</span>`).join('');
    $('#su').textContent = p.priv ? (p.bonus ? i18n.console.promptAbout : i18n.console.promptCase) : i18n.console.promptCode;
    const pg = $('#pg'), pcase = $('#pcase');
    pcase.textContent = i18n.console.readCase;
    if (!p.priv) {
      pg.textContent = p.bonus ? i18n.console.goToAbout : i18n.console.viewCode;
    }
    const dlg = $('#dlg');
    if (dlg && dlg.open) openCase(cur);
  }
}

const langBtn = $('#langBtn');
if (langBtn) {
  langBtn.addEventListener('click', () => {
    const nextLang = currentLang === 'es' ? 'en' : 'es';
    applyLanguage(nextLang);
  });
}

// Inicializar idioma almacenado o por defecto
applyLanguage(currentLang);
