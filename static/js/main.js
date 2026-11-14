const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
    const G = 'https://github.com/MarcosSAuah';
    const P = [
      {
        t: 'Correos Logistics API', c: 'API Core & Docker · Beca I+D', col: '#FFD100', c2: '#F2A900', c3: '#FFE76A', tx: '#0b2f6b', bg: '#fff4bf', logo: './static/images/logo-correos.avif', logoRound: 1, priv: 1, cs: {
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
        }, d: 'API core en FastAPI para analizar la ocupación de casilleros en Unidades de Reparto: JWT para las PDAs, colas Redis hacia visión artificial (YOLO), PostgreSQL, Docker Compose y Nginx.', tg: ['FastAPI', 'Redis', 'PostgreSQL', 'JWT', 'Docker', 'Nginx']
      },
      {
        t: 'ALTEN Mixed Reality LMS', c: 'Portal Web & BD · Beca I+D', col: '#FF6B78', c2: '#C2182E', c3: '#FF9AA3', tx: '#3a0610', bg: '#ffdce0', logo: './static/images/Logo_ALTEN_Black-1.svg', priv: 1, cs: {
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
        }, d: 'Portal web de gestión docente, centros y dispositivos en Flask + MariaDB para enseñar español en Realidad Mixta a niños de 7 a 10 años: RBAC, LDAP, Redis, pytest y Docker + Nginx.', tg: ['Flask', 'MariaDB', 'LDAP', 'Redis', 'pytest', 'Docker']
      },
      { t: 'Marchel VoIP PBX', c: 'Telefonía IP & redes', cc: 'VOIP PBX', ct: 'Marchel', csub: 'ASTERISK 22 · SIP', col: '#5EE38A', c2: '#1f9a3f', c3: '#A6F7C2', tx: '#082417', bg: '#d4fae0', repo: 'https://github.com/ByMarcksuz/Marchel-Asterisk', logo: './static/images/logo-marchel.avif', d: 'Centralita VoIP en Asterisk 22 con PJSIP (IVR multinivel, colas, buzón, conferencias, Festival TTS, grabación y tarificación MariaDB + panel Flask), desarrollada para Laboratorio de Redes, Señales y Sistemas (UAH).', coop: { name: 'Chelsea Fernández Hernández', url: 'https://www.linkedin.com/in/chelsea-fernandez-hernandez-64a339189/' }, tg: ['Asterisk 22', 'PJSIP', 'Flask', 'MariaDB', 'VoIP'] },
      { t: 'Distributed TCP Sockets', c: 'Sistemas & redes', col: '#2ED3E6', c2: '#0c8fa3', c3: '#9BF0FA', tx: '#052f38', bg: '#d2f6fb', logo: 'data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%20fill=%27none%27%20stroke=%27%2305505c%27%20stroke-width=%273.2%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%3E%3Ccircle%20cx=%2724%27%20cy=%2710%27%20r=%274.5%27/%3E%3Ccircle%20cx=%279%27%20cy=%2736%27%20r=%274.5%27/%3E%3Ccircle%20cx=%2739%27%20cy=%2736%27%20r=%274.5%27/%3E%3Cpath%20d=%27M21.5%2014%2011%2032M26.5%2014%2037%2032M14%2037h20%27/%3E%3C/svg%3E', repo: G, d: 'Mensajería en Python puro sobre sockets TCP con select(): decenas de clientes en un solo hilo, topologías cliente-servidor y P2P, enmarcado binario.', tg: ['Python', 'select()', 'P2P', 'POSIX'] },
      { t: 'Bonus level', c: 'Sobre mí · Desbloqueado', col: '#CDB8F5', c2: '#7a5fd1', c3: '#E6DAFB', tx: '#241547', bg: '#ece3fb', logo: 'data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%20fill=%27none%27%20stroke=%27%234b2f9a%27%20stroke-width=%273.2%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%3E%3Cpath%20d=%27M13%2014h22a8%208%200%200%201%208%208v6a6%206%200%200%201-10.5%204L30%2029H18l-2.5%203A6%206%200%200%201%205%2028v-6a8%208%200%200%201%208-8z%27/%3E%3Cpath%20d=%27M15%2020v6M12%2023h6%27/%3E%3Ccircle%20cx=%2733%27%20cy=%2721%27%20r=%271.4%27%20fill=%27%234b2f9a%27/%3E%3Ccircle%20cx=%2737%27%20cy=%2725%27%20r=%271.4%27%20fill=%27%234b2f9a%27/%3E%3C/svg%3E', bonus: 1, repo: '#sobre-mi', d: 'Esta consola nació de recordar las tardes jugando a la Nintendo DS con mi hermano. Fuera del teclado me encontrarás en eventos como CNSM o Technovation Girls, dibujando, haciendo deporte, jugando videojuegos o escuchando música.', tg: ['Nintendo DS', 'Congreso CNSM', 'Technovation', 'Deporte & Arte'] }];
    const RM = matchMedia('(prefers-reduced-motion:reduce)').matches;
    /* título hero */
    $('h1').innerHTML = ['Marcos', 'Santos'].map((w, i) => '<span class="w">' + [...w].map((l, j) => `<span class="l" style="animation-delay:${(i * 6 + j) * 50}ms">${l}</span>`).join('') + '</span>').join('');
    /* pegatinas flotantes */
    const FL = [['c', 6, 14, 46, '#FFD35C', .9], ['s', 46, 6, 54, '#F7917A', -1.1], ['r', 2, 70, 60, '#A8D5C8', .7], ['t', 50, 82, 38, '#CDB8F5', -.8], ['s', 92, 52, 34, '#8EC5E8', 1.2], ['c', 38, 88, 22, '#FFB066', -.6], ['r', 72, 4, 34, '#F7917A', 1]];
    $('#stk').insertAdjacentHTML('afterbegin', FL.map(f => `<i class="fl ${f[0]}" data-d="${f[5]}" style="left:${f[1]}%;top:${f[2]}%;--sz:${f[3]}px;background:${f[4]};color:${f[4]}"></i>`).join(''));
    const fls = $$('.fl');
    /* skills */
    const SK = [['Redes & Ciberseguridad', 'Protocolos, VoIP y análisis de tráfico.', ['TCP/IP', 'Wireshark', 'Asterisk 22', 'PJSIP', 'Sockets', 'UFW / Firewall'], '#8EC5E8', '((•))'], ['Backend & APIs', 'APIs asíncronas, autenticación y tests.', ['Python', 'FastAPI', 'Flask', 'SQLAlchemy', 'pytest', 'JWT', 'C# / .NET (en curso)'], '#F7917A', '</>'], ['DevOps, Linux & Cloud', 'Contenedores y proxies para despliegues reproducibles.', ['Docker', 'Linux', 'Bash', 'Nginx', 'Git', 'Google Cloud (en curso)'], '#A8D5C8', '>_'], ['Datos & IA', 'Caché en memoria, SQL y modelos de visión.', ['Redis', 'PostgreSQL', 'MariaDB', 'SQL', 'YOLO'], '#FFD35C', '{ }'], ['Sistemas & hardware', 'Del código al metal, visto en la carrera.', ['C/C++', 'Ensamblador', 'VHDL'], '#CDB8F5', '0x1']];
    $('#sk').innerHTML = SK.map(s => `<div class="card rv" style="--bg:${s[3]}"><i>${s[4]}</i><h3>${s[0]}</h3><p>${s[1]}</p><div class="row">${s[2].map(t => `<span class="tag">${t}</span>`).join('')}</div></div>`).join('');
    const MQ = ['FastAPI', 'Redis', 'Docker', 'Asterisk', 'Flask', 'MariaDB', 'Nginx', 'TCP', 'Linux', 'YOLO'];
    $('#mqs').innerHTML = Array(3).fill(MQ.map(t => t + '<i>✦</i>').join('')).join('');
    /* ---- sonido (Web Audio, sintetizado) ---- */
    const audio = {
      ctx: null, on: (() => { try { return localStorage.getItem('snd') !== 'off' } catch (e) { return true } })(),
      init() { if (!this.ctx) { const C = window.AudioContext || window.webkitAudioContext; if (C) this.ctx = new C() } if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume().catch(() => { }) },
      tone(type, f0, f1, at, dur, vol) { const c = this.ctx, t = c.currentTime + at, o = c.createOscillator(), g = c.createGain(); o.type = type; o.frequency.setValueAtTime(f0, t); if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(f1, t + dur); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.001, t + dur); o.connect(g); g.connect(c.destination); o.start(t); o.stop(t + dur + .02) },
      play(fn) { if (!this.on) return; this.init(); if (this.ctx && this.ctx.state === 'running') fn() },
      insert() { this.play(() => this.tone('triangle', 160, 50, 0, .08, .3)) },
      eject() { this.play(() => this.tone('sine', 260, 540, 0, .1, .25)) },
      click() { this.play(() => this.tone('triangle', 320, 120, 0, .04, .15)) },
      boot() { this.play(() => [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => this.tone('sine', f, f, i * .07, .45, .18))) },
      scan() { this.play(() => this.tone('sawtooth', 340, 780, 0, .08, .09)) }
    };
    ['pointerdown', 'keydown', 'touchend'].forEach(ev => addEventListener(ev, () => { if (audio.on) audio.init() }, { passive: true }));
    document.addEventListener('pointerdown', e => { if (e.target.closest('.k,.btn,.cbtn,nav a,nav button,.dots button')) audio.click() });
    const snd = $('#snd'), sndLab = () => { snd.textContent = 'Sonido: ' + (audio.on ? 'sí' : 'no'); snd.setAttribute('aria-pressed', audio.on) }; sndLab();
    snd.onclick = () => { audio.on = !audio.on; try { localStorage.setItem('snd', audio.on ? 'on' : 'off') } catch (e) { } sndLab() };
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
      const p = P[i], n = String(i + 1).padStart(2, '0');
      cart.style.setProperty('--c', p.col); cart.style.setProperty('--c2', p.c2 || p.col); cart.style.setProperty('--c3', p.c3 || p.col); cart.style.setProperty('--tx', p.tx || '#14121f'); $('#ct').textContent = p.ct || (p.bonus ? 'BONUS' : p.t.split(' ').slice(0, 2).join(' ')); $('#cc').textContent = 'AGB-' + n + ' · ' + (p.cc || p.c.split(' · ')[0]).toUpperCase();
      $('#clab').classList.toggle('has-logo', true); $('#csub').hidden = !p.csub; if (p.csub) $('#csub').textContent = p.csub;
      const cl = $('#clogo'), ci = $('#cimg'), cw = $('#cwm'); cl.hidden = !p.logo; cw.hidden = !p.logo; cl.classList.toggle('round', !!p.logoRound); cw.classList.toggle('round', !!p.logoRound); if (p.logo) { ci.src = p.logo; cw.src = p.logo } else { ci.removeAttribute('src'); cw.removeAttribute('src') }
      $('#pc').textContent = (p.bonus ? 'BONUS' : n + ' / 0' + P.filter(x => !x.bonus).length) + ' · ' + p.c; scramble($('#pt'), p.t);
      const pd = $('#pd'); pd.textContent = p.d;
      if (p.coop) {
        pd.append(' Realizado en equipo junto a ');
        const a = document.createElement('a');
        a.href = p.coop.url; a.target = '_blank'; a.rel = 'noopener';
        a.textContent = p.coop.name;
        a.style.cssText = 'font-weight:700;text-decoration:underline;text-underline-offset:3px';
        pd.append(a, '.');
      }
      const pg = $('#pg'), pcase = $('#pcase'); pcase.hidden = !p.priv; pg.hidden = !!p.priv;
      if (!p.priv) { pg.href = p.repo; if (p.bonus) { pg.textContent = 'Ir a Sobre mí'; pg.removeAttribute('target') } else { pg.textContent = 'Ver código en GitHub'; pg.target = '_blank' } }
      $('#ptags').innerHTML = p.tg.map(t => `<span class="tag" style="background:${p.col}">${t}</span>`).join('');
      $('#sc').textContent = p.c.split(' · ')[0].toUpperCase(); $('#st').textContent = p.t; $('#sd').innerHTML = p.tg.map(t => `<span>${t}</span>`).join('');
      $('#su').textContent = p.priv ? '▶ A · CASO DE ESTUDIO' : p.bonus ? '▶ A · SOBRE MÍ' : '▶ A · VER CÓDIGO'; $('#scr').style.background = `linear-gradient(#fff,${p.col}cc)`;
      cart.classList.add('in'); stage.classList.add('loaded'); $('#proj').classList.add('on');
      await sleep(520); if (my !== tok) return;
      $('#body').classList.remove('bump'); void $('#body').offsetWidth; $('#body').classList.add('bump'); $('#led').classList.add('on'); stage.classList.add('boot'); audio.insert(); audio.boot();
      await sleep(560); if (my !== tok) return; $('#boot').classList.add('off'); $('#sp').classList.add('on');
    }
    function topCur(on) {
      const c = $('#cur'), r = $('#ring'), de = document.documentElement;
      if (on) {
        r.classList.remove('h');
        if (c.showPopover) { c.popover = 'manual'; r.popover = 'manual'; try { r.showPopover(); c.showPopover(); return } catch (e) { c.removeAttribute('popover'); r.removeAttribute('popover') } }
        de.classList.add('mo'); return;
      }
      de.classList.remove('mo');
      if (c.hasAttribute('popover')) { try { c.hidePopover(); r.hidePopover() } catch (e) { } c.removeAttribute('popover'); r.removeAttribute('popover') }
    }
    function openCase(idx = cur) {
      const p = P[idx]; if (!p || !p.cs) return; const c = p.cs, ok = s => s && !s.startsWith('[TODO]'), d = $('#dlg');
      $('#dt').textContent = p.t;
      const body = c.sections
        ? c.sections.map(s => `<h4>${s.h}</h4>` + (s.p ? `<p>${s.p}</p>` : '') + (s.ul && s.ul.length ? `<ul>${s.ul.map(x => `<li>${x}</li>`).join('')}</ul>` : '')).join('')
        : `<h4>Decisiones técnicas</h4><ul>${c.dec.map(x => `<li>${x}</li>`).join('')}</ul>`;
      $('#db').innerHTML = `<p>${c.ctx}</p>` + body + (ok(c.fig) ? `<div class="fig">${c.fig}</div>` : '') + (ok(c.learn) ? `<h4>Qué aprendí</h4><p>${c.learn}</p>` : '') + `<p style="margin-top:14px;font-size:12px">Descripción a alto nivel: el código y los diagramas no son públicos por confidencialidad. Encantado de explicar el enfoque en una entrevista.</p>`;
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
      if (e.pointerType === 'touch') { isTouch = true; return }
      isTouch = false; moved = true; mx = e.clientX; my = e.clientY;
      if (RM || $('#dlg').open) return; const n = performance.now(); if (n - lastSp < 50) return; lastSp = n;
      const s = document.createElement('i'); s.className = 'sp'; s.style.cssText = `left:${mx}px;top:${my}px;background:${COLS[Math.random() * 6 | 0]}`; document.body.appendChild(s);
      const dx = (Math.random() - .5) * 40, dy = 10 + Math.random() * 30;
      s.animate([{ transform: 'translate(-50%,-50%) scale(1) rotate(0)', opacity: 1 }, { transform: `translate(calc(-50% + ${dx}px),calc(-50% + ${dy}px)) scale(0) rotate(200deg)`, opacity: 0 }], { duration: 750, easing: 'ease-out' }).onfinish = () => s.remove()
    });
    document.addEventListener('pointerover', e => { if (e.pointerType !== 'touch') $('#ring').classList.toggle('h', !!e.target.closest('a,button,.k,.card,.pol,.hob div')) });
    /* ---- contacto directo ---- */
    const EM = ['marcos.santos.aragon', 'gmail.com'].join('@'), TEL = ['+34', '684', '04', '52', '29'];
    const cpText = (t, b, o) => { if (!navigator.clipboard) return false; navigator.clipboard.writeText(t).then(() => { b.textContent = '¡Copiado!'; setTimeout(() => b.textContent = o, 2200) }); return true };
    const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(EM) + '&su=' + encodeURIComponent('[Portfolio] Contacto · Oportunidad profesional');
    $('#emtxt').textContent = EM; $('#emtxt').href = gmailUrl; $('#emtxt').target = '_blank'; $('#emtxt').rel = 'noopener';
    $('#emgo').href = gmailUrl; $('#emgo').target = '_blank'; $('#emgo').rel = 'noopener';
    $('#em').onclick = function () { cpText(EM, this, 'Copiar') };
    $('#ph').onclick = function () { const num = TEL.join(' '), raw = TEL.join(''); $('#phtxt').textContent = num; $('#phtxt').href = 'tel:' + raw; $('#phgo').href = 'tel:' + raw; $('#phgo').hidden = false; $('#phcp').hidden = false; this.hidden = true };
    $('#phcp').onclick = function () { cpText(TEL.join(' '), this, 'Copiar') };

    const btnGm = $('#btnGmailDirect'), btnCp = $('#btnCopyEmail');
    if (btnGm) btnGm.href = gmailUrl;
    if (btnCp) btnCp.onclick = function () { cpText(EM, this, 'Copiar email') };
    $$('.card').forEach(c => { c.onpointermove = e => { if (e.pointerType === 'touch') return; const r = c.getBoundingClientRect(); c.style.setProperty('--ry', ((e.clientX - r.left) / r.width - .5) * 14 + 'deg'); c.style.setProperty('--rx', -((e.clientY - r.top) / r.height - .5) * 14 + 'deg') }; c.onpointerleave = () => { c.style.setProperty('--rx', '0deg'); c.style.setProperty('--ry', '0deg') } });
    /* ---- ondas retro + bucle ---- */
    const rib = $('#rib'), RC = ['#A8D5C8', '#F7917A', '#FFB066', '#FFD35C', '#F7917A', '#2A9DA6'], WD = [1, .82, .64, .46, .3, .15];
    rib.innerHTML = RC.map(c => `<path fill="none" stroke="${c}" stroke-linejoin="round"/>`).join('');
    const paths = [...rib.children], blobs = $$('.blob'), glare = $('.glare'), tiltEl = $('#tilt'); let vel = 0, lastY = scrollY, mq = 0, lastDraw = -1, lastW = 0, moved = true;
    const CUR = $('#cur'), RING = $('#ring'), BAR = $('#bar'), MQS = $('#mqs'), TL = $('#tl'), MAGS = $$('.mag'), DE = document.documentElement;
    function frame(t) {
      const W = innerWidth, H = innerHeight, sy = scrollY; vel += ((sy - lastY) - vel) * .15; lastY = sy;
      cx += (mx - cx) * .2; cy += (my - cy) * .2;
      CUR.style.transform = `translate(${mx}px,${my}px)`; RING.style.transform = `translate(${cx}px,${cy}px)`;
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
    requestAnimationFrame(frame); DE.classList.add('cc');
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
