const STORAGE_KEYS = {
  USERS: 'rb_users',
  SESSION: 'rb_session',
  RESERVAS: 'rb_reservas',
  RESERVA_DRAFT: 'rb_reserva_draft',
  RESERVA_ACTUAL: 'rb_reserva_actual',
  PAGO_DRAFT: 'rb_pago_draft',
  THEME: 'rb_theme'
};

const BICICLETAS = [
  { id: 'urbana', categoria: 'ciudad', nombre: 'Bici Urbana', descripcion: 'Perfecta para recorrer el centro de la ciudad con comodidad y estilo.', precioHora: 8, duracion: 60, imagen: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80', incluye: ['Casco', 'Candado'] },
  { id: 'montana', categoria: 'aventura', nombre: 'Mountain Bike', descripcion: 'Suspensión delantera y neumáticos todo terreno para aventuras off-road.', precioHora: 12, duracion: 60, imagen: 'https://images.unsplash.com/photo-1606902965551-dce093cda6e7?w=800&q=80', incluye: ['Casco', 'Candado', 'Luz'] },
  { id: 'ruta', categoria: 'deporte', nombre: 'Bici de Ruta', descripcion: 'Cuadro ligero de carbono para los amantes de la velocidad y el ciclismo deportivo.', precioHora: 15, duracion: 60, imagen: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=800&q=80', incluye: ['Casco', 'Candado', 'Luz'] },
  { id: 'electrica', categoria: 'premium', nombre: 'E-Bike', descripcion: 'Bicicleta eléctrica con asistencia al pedaleo para subir cualquier cuestón sin esfuerzo.', precioHora: 20, duracion: 60, imagen: 'https://images.unsplash.com/photo-1559348349-86f1f65817fe?w=800&q=80', incluye: ['Casco', 'Candado', 'Luz', 'Cargador'] },
  { id: 'infantil', categoria: 'familia', nombre: 'Bici Infantil', descripcion: 'Bicicletas pequeñas y seguras para niños de 5 a 12 años con ruedines incluidos.', precioHora: 5, duracion: 60, imagen: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80', incluye: ['Casco', 'Ruedines'] },
  { id: 'tandem', categoria: 'familia', nombre: 'Tándem', descripcion: 'Bicicleta para dos personas, ideal para parejas o amigos que quieran pedalear juntos.', precioHora: 25, duracion: 60, imagen: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&q=80', incluye: ['2 Cascos', 'Candado'] }
];

const ACCESORIOS = [
  { id: 'casco-extra', nombre: 'Casco adicional', descripcion: 'Casco extra para acompañante.', precio: 3, icono: 'shield' },
  { id: 'candado-extra', nombre: 'Candado extra', descripcion: 'Candado de seguridad adicional.', precio: 2, icono: 'lock' },
  { id: 'luz-led', nombre: 'Luz LED', descripcion: 'Luz LED recargable para rodar de noche.', precio: 2, icono: 'light' },
  { id: 'mochila', nombre: 'Mochila hidratación', descripcion: 'Mochila con bolsa de agua 2L.', precio: 4, icono: 'bag' },
  { id: 'gps', nombre: 'GPS Garmin', descripcion: 'GPS Garmin con mapas cargados.', precio: 8, icono: 'map' },
  { id: 'asiento-bebec', nombre: 'Asiento infantil', descripcion: 'Asiento para bebé hasta 15kg.', precio: 5, icono: 'baby' }
];

const RUTAS = [
  { id: 'r1', nombre: 'Costa Verde', duracion: 2, dificultad: 'Fácil', distancia: 12, descripcion: 'Paseo costero con brisa marina.', imagen: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=800&q=80' },
  { id: 'r2', nombre: 'Cerro San Cristóbal', duracion: 3, dificultad: 'Moderada', distancia: 18, descripcion: 'Subida al mirador más icónico.', imagen: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80' },
  { id: 'r3', nombre: 'Pantanos de Villa', duracion: 4, dificultad: 'Fácil', distancia: 22, descripcion: 'Reserva natural con avistamiento de aves.', imagen: 'https://images.unsplash.com/photo-1542652694-40abf526446e?w=800&q=80' }
];

const HORARIOS = {
  lunes: { abierto: true, desde: '07:00', hasta: '20:00' },
  martes: { abierto: true, desde: '07:00', hasta: '20:00' },
  miercoles: { abierto: true, desde: '07:00', hasta: '20:00' },
  jueves: { abierto: true, desde: '07:00', hasta: '20:00' },
  viernes: { abierto: true, desde: '07:00', hasta: '21:00' },
  sabado: { abierto: true, desde: '08:00', hasta: '21:00' },
  domingo: { abierto: true, desde: '08:00', hasta: '18:00' }
};

const Storage = {
  get(key, fallback = null) {
    try {
      const v = localStorage.getItem(key);
      return v ? JSON.parse(v) : fallback;
    } catch (e) { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch (e) { console.error('Storage error', e); }
  },
  remove(key) { localStorage.removeItem(key); }
};

const Auth = {
  init() {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    if (users.length === 0) {
      Storage.set(STORAGE_KEYS.USERS, [
        { id: 'u1', nombre: 'Carlos Andino', email: 'carlos@test.com', telefono: '+51 999 111 222', password: '123456', foto: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80' },
        { id: 'u2', nombre: 'María Quispe', email: 'maria@test.com', telefono: '+51 999 333 444', password: '123456', foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80' }
      ]);
    }
  },
  current() {
    const s = Storage.get(STORAGE_KEYS.SESSION);
    if (!s) return null;
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    return users.find(u => u.id === s.userId) || null;
  },
  isLogged() { return !!this.current(); },
  login(email, password) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) return { ok: false, error: 'Email o contraseña incorrectos.' };
    Storage.set(STORAGE_KEYS.SESSION, { userId: user.id, token: 'tkn_' + Date.now(), expires: Date.now() + 86400000 });
    return { ok: true, user };
  },
  register(data) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    if (users.find(u => u.email === data.email)) return { ok: false, error: 'El email ya está registrado.' };
    const newUser = { id: 'u' + Date.now(), nombre: data.nombre, email: data.email, telefono: data.telefono, password: data.password, foto: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&q=80' };
    users.push(newUser);
    Storage.set(STORAGE_KEYS.USERS, users);
    return { ok: true, user: newUser };
  },
  logout() { Storage.remove(STORAGE_KEYS.SESSION); },
  update(userId, data) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    const idx = users.findIndex(u => u.id === userId);
    if (idx === -1) return { ok: false };
    users[idx] = { ...users[idx], ...data };
    Storage.set(STORAGE_KEYS.USERS, users);
    return { ok: true, user: users[idx] };
  }
};

const Reservas = {
  init() {
    const list = Storage.get(STORAGE_KEYS.RESERVAS, null);
    if (list === null) {
      const samples = [
        { id: 'r1', userId: 'u1', bicicletaId: 'montana', rutaId: 'r1', horas: 4, fecha: this._futureDate(3), hora: '09:00', accesorios: ['casco-extra', 'mochila'], estado: 'confirmada', pago: 'pagado', metodoPago: 'tarjeta', subtotal: 48, accesoriosTotal: 7, total: 55, createdAt: Date.now() - 86400000 * 2 },
        { id: 'r2', userId: 'u1', bicicletaId: 'electrica', rutaId: null, horas: 2, fecha: this._futureDate(7), hora: '15:00', accesorios: [], estado: 'pendiente', pago: 'pendiente', metodoPago: null, subtotal: 40, accesoriosTotal: 0, total: 40, createdAt: Date.now() - 86400000 },
        { id: 'r3', userId: 'u1', bicicletaId: 'urbana', rutaId: 'r2', horas: 3, fecha: this._futureDate(-5), hora: '11:00', accesorios: ['candado-extra'], estado: 'completada', pago: 'pagado', metodoPago: 'yape', subtotal: 24, accesoriosTotal: 2, total: 26, createdAt: Date.now() - 86400000 * 10 }
      ];
      Storage.set(STORAGE_KEYS.RESERVAS, samples);
    }
  },
  _futureDate(days) {
    const d = new Date();
    d.setDate(d.getDate() + days);
    return d.toISOString().split('T')[0];
  },
  listByUser(userId) {
    return Storage.get(STORAGE_KEYS.RESERVAS, []).filter(r => r.userId === userId);
  },
  get(id) {
    return Storage.get(STORAGE_KEYS.RESERVAS, []).find(r => r.id === id) || null;
  },
  create(data) {
    const list = Storage.get(STORAGE_KEYS.RESERVAS, []);
    const newReserva = { id: 'r' + Date.now(), createdAt: Date.now(), estado: 'pendiente', pago: 'pendiente', metodoPago: null, ...data };
    list.push(newReserva);
    Storage.set(STORAGE_KEYS.RESERVAS, list);
    return newReserva;
  },
  update(id, data) {
    const list = Storage.get(STORAGE_KEYS.RESERVAS, []);
    const idx = list.findIndex(r => r.id === id);
    if (idx === -1) return null;
    list[idx] = { ...list[idx], ...data };
    Storage.set(STORAGE_KEYS.RESERVAS, list);
    return list[idx];
  },
  cancel(id) { return this.update(id, { estado: 'anulada' }); },
  pay(id, metodoPago) {
    return this.update(id, { estado: 'confirmada', pago: 'pagado', metodoPago });
  },
  setDraft(data) { Storage.set(STORAGE_KEYS.RESERVA_DRAFT, data); },
  getDraft() { return Storage.get(STORAGE_KEYS.RESERVA_DRAFT, null); },
  clearDraft() { Storage.remove(STORAGE_KEYS.RESERVA_DRAFT); },
  setPagoDraft(data) { Storage.set(STORAGE_KEYS.PAGO_DRAFT, data); },
  getPagoDraft() { return Storage.get(STORAGE_KEYS.PAGO_DRAFT, null); },
  clearPagoDraft() { Storage.remove(STORAGE_KEYS.PAGO_DRAFT); }
};

const UI = {
  formatDate(iso) {
    if (!iso) return '';
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('es-ES', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
  },
  formatDateShort(iso) {
    if (!iso) return '';
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
  },
  formatPrice(n) { return 'S/ ' + Number(n).toFixed(2); },
  bicicletaById(id) { return BICICLETAS.find(b => b.id === id); },
  accesorioById(id) { return ACCESORIOS.find(a => a.id === id); },
  rutaById(id) { return RUTAS.find(r => r.id === id); },
  categoriaLabel(cat) {
    const map = { ciudad: 'Ciudad', aventura: 'Aventura', deporte: 'Deporte', premium: 'Premium', familia: 'Familia' };
    return map[cat] || cat;
  },
  estadoBadge(estado) {
    const map = {
      pendiente: { label: 'Pendiente', cls: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' },
      confirmada: { label: 'Confirmada', cls: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
      pagada: { label: 'Pagada', cls: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
      completada: { label: 'Completada', cls: 'bg-gray-500/20 text-gray-300 border-gray-500/30' },
      anulada: { label: 'Anulada', cls: 'bg-red-500/20 text-red-300 border-red-500/30' }
    };
    return map[estado] || map.pendiente;
  },
  pagoBadge(pago) {
    const map = {
      pendiente: { label: 'Por pagar', cls: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' },
      pagado: { label: 'Pagado', cls: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' }
    };
    return map[pago] || map.pendiente;
  },
  isPastDate(iso) {
    const today = new Date(); today.setHours(0,0,0,0);
    const d = new Date(iso + 'T00:00:00');
    return d < today;
  },
  generateSlots(fecha) {
    if (!fecha) return [];
    const day = new Date(fecha + 'T00:00:00').getDay();
    const dayKey = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'][day];
    const h = HORARIOS[dayKey];
    if (!h.abierto) return [];
    const slots = [];
    let [hStart, mStart] = h.desde.split(':').map(Number);
    let [hEnd, mEnd] = h.hasta.split(':').map(Number);
    let cur = hStart * 60 + mStart;
    const end = hEnd * 60 - mEnd > 0 ? hEnd * 60 - 60 : hEnd * 60;
    while (cur + 30 <= end) {
      const hh = String(Math.floor(cur/60)).padStart(2,'0');
      const mm = String(cur%60).padStart(2,'0');
      slots.push(`${hh}:${mm}`);
      cur += 30;
    }
    return slots;
  },
  toast(msg, type = 'success') {
    const el = document.createElement('div');
    el.className = `fixed top-6 right-6 z-[9999] px-6 py-3 rounded-lg shadow-2xl font-medium text-sm border ${type === 'success' ? 'bg-emerald-500/20 text-emerald-100 border-emerald-500/40' : 'bg-red-500/20 text-red-100 border-red-500/40'} backdrop-blur`;
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; el.style.transition = 'opacity .3s'; }, 2500);
    setTimeout(() => el.remove(), 2900);
  },
  requireAuth(redirectUrl) {
    if (!Auth.isLogged()) {
      Storage.set('rb_redirect', redirectUrl || window.location.pathname);
      window.location.href = 'inicio-sesion.html';
      return false;
    }
    return true;
  },
  applyTheme(theme) {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    Storage.set(STORAGE_KEYS.THEME, theme);
  },
  initTheme() {
    const saved = Storage.get(STORAGE_KEYS.THEME, 'dark');
    this.applyTheme(saved);
  },
  calcReserva(biciId, horas, accesoriosIds) {
    const bici = this.bicicletaById(biciId);
    if (!bici) return { subtotal: 0, accesoriosTotal: 0, total: 0 };
    const subtotal = bici.precioHora * horas;
    const accTotal = accesoriosIds.reduce((sum, id) => {
      const a = this.accesorioById(id);
      return sum + (a ? a.precio : 0);
    }, 0);
    return { subtotal, accesoriosTotal: accTotal, total: subtotal + accTotal };
  }
};

function buildHeader(active) {
  const user = Auth.current();
  const isDark = document.documentElement.classList.contains('dark');
  const links = [
    { href: 'index.html', label: 'Inicio', key: 'index' },
    { href: 'servicios.html', label: 'Bicis', key: 'servicios' },
    { href: 'galeria.html', label: 'Galería', key: 'galeria' },
    { href: 'precios.html', label: 'Precios', key: 'precios' },
    { href: 'horarios.html', label: 'Horarios', key: 'horarios' },
    { href: 'contacto.html', label: 'Contacto', key: 'contacto' }
  ];
  const authLinks = user
    ? `<a href="perfil.html" class="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
        <img src="${user.foto}" class="h-7 w-7 rounded-full object-cover border border-primary/40" alt=""/>
        <span class="hidden lg:inline">${user.nombre.split(' ')[0]}</span>
       </a>
       <a href="#" id="btnLogout" class="text-sm font-medium text-red-400 hover:text-red-300 transition-colors">Salir</a>`
    : `<a href="inicio-sesion.html" class="text-sm font-medium hover:text-primary transition-colors">Ingresar</a>
       <a href="registro.html" class="bg-primary text-black font-bold py-2 px-5 rounded-lg text-sm shadow-md hover:bg-primary-light transition-all uppercase tracking-wider">Registrarse</a>`;

  return `
  <header class="sticky top-0 z-50 bg-background-dark/85 dark:bg-background-dark/85 backdrop-blur-md border-b border-primary/20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <a href="index.html" class="flex items-center gap-3">
          <svg class="h-10 w-10 text-primary" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="40" r="12" stroke="currentColor" stroke-width="3"/>
            <circle cx="48" cy="40" r="12" stroke="currentColor" stroke-width="3"/>
            <path d="M16 40 L26 22 L38 22 L48 40" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M26 22 L32 14 L40 14" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="32" cy="18" r="2" fill="currentColor"/>
            <path d="M48 40 L42 28" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/>
          </svg>
          <div>
            <h2 class="text-xl font-bold text-white leading-none" style="font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.05em;">RIDE BIKE</h2>
            <p class="text-[10px] uppercase tracking-[0.25em] text-primary/80 mt-1">Arriendo de Bicicletas</p>
          </div>
        </a>
        <nav class="hidden lg:flex items-center gap-7" id="navMenu">
          ${links.map(l => `<a href="${l.href}" class="text-sm font-medium uppercase tracking-wider transition-colors ${active === l.key ? 'text-primary' : 'text-gray-300 hover:text-primary'}">${l.label}</a>`).join('')}
        </nav>
        <div class="hidden lg:flex items-center gap-4">
          ${authLinks}
          <button id="btnTheme" class="text-gray-300 hover:text-primary transition-colors" title="Cambiar tema">
            ${isDark ? '<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>' : '<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>'}
          </button>
        </div>
        <button class="lg:hidden text-white" id="btnMenu">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
      <nav class="hidden lg:hidden flex-col gap-1 pb-4" id="navMobile">
        ${links.map(l => `<a href="${l.href}" class="block py-2 px-3 rounded text-sm font-medium uppercase tracking-wider transition-colors ${active === l.key ? 'text-primary bg-primary/10' : 'text-gray-300 hover:text-primary hover:bg-primary/5'}">${l.label}</a>`).join('')}
        <div class="border-t border-primary/20 mt-3 pt-3 flex flex-col gap-2">
          ${user
            ? `<a href="perfil.html" class="block py-2 px-3 rounded text-sm text-gray-300 hover:bg-primary/5">Mi Perfil</a>
               <a href="#" id="btnLogoutMobile" class="block py-2 px-3 rounded text-sm text-red-400 hover:bg-red-500/10">Cerrar sesión</a>`
            : `<a href="inicio-sesion.html" class="block py-2 px-3 rounded text-sm text-gray-300 hover:bg-primary/5">Ingresar</a>
               <a href="registro.html" class="block py-2 px-3 rounded text-sm text-primary font-semibold hover:bg-primary/5">Registrarse</a>`}
        </div>
      </nav>
    </div>
  </header>`;
}

function buildFooter() {
  return `
  <footer class="bg-background-dark border-t border-primary/20 mt-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <svg class="h-9 w-9 text-primary" viewBox="0 0 64 64" fill="none"><circle cx="16" cy="40" r="12" stroke="currentColor" stroke-width="3"/><circle cx="48" cy="40" r="12" stroke="currentColor" stroke-width="3"/><path d="M16 40 L26 22 L38 22 L48 40" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M26 22 L32 14 L40 14" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="32" cy="18" r="2" fill="currentColor"/><path d="M48 40 L42 28" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/></svg>
            <h3 class="text-xl font-bold text-white" style="font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.05em;">RIDE BIKE</h3>
          </div>
          <p class="text-sm text-gray-400 leading-relaxed">Tu tienda de confianza para arrendar bicicletas. Vive la ciudad y la naturaleza sobre dos ruedas.</p>
        </div>
        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Navegación</h4>
          <ul class="space-y-2">
            <li><a href="index.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Inicio</a></li>
            <li><a href="servicios.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Bicis</a></li>
            <li><a href="galeria.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Galería</a></li>
            <li><a href="precios.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Precios</a></li>
            <li><a href="horarios.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Horarios</a></li>
            <li><a href="contacto.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Legal</h4>
          <ul class="space-y-2">
            <li><a href="terminos.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Términos y Condiciones</a></li>
            <li><a href="privacidad.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Políticas de Privacidad</a></li>
            <li><a href="recuperar-password.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Recuperar Contraseña</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Contacto</h4>
          <ul class="space-y-3 text-sm text-gray-400">
            <li class="flex items-start gap-2">
              <svg class="h-4 w-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              Av. Larco 345, Miraflores
            </li>
            <li class="flex items-start gap-2">
              <svg class="h-4 w-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              +51 999 555 222
            </li>
            <li class="flex items-start gap-2">
              <svg class="h-4 w-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              hola@ridebike.pe
            </li>
          </ul>
          <div class="flex gap-3 mt-5">
            <a href="#" class="h-9 w-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-colors">
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" class="h-9 w-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-colors">
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" class="h-9 w-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-colors">
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div class="border-t border-primary/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-gray-500">© 2024 Ride Bike. Todos los derechos reservados.</p>
        <p class="text-xs text-gray-600 uppercase tracking-wider">Lima · Hecho para rodar</p>
      </div>
    </div>
  </footer>`;
}

function initLayout(active) {
  UI.initTheme();
  Auth.init();
  Reservas.init();
  const headerHost = document.getElementById('appHeader');
  const footerHost = document.getElementById('appFooter');
  if (headerHost) headerHost.innerHTML = buildHeader(active);
  if (footerHost) footerHost.innerHTML = buildFooter();

  const btnMenu = document.getElementById('btnMenu');
  const navMobile = document.getElementById('navMobile');
  if (btnMenu && navMobile) {
    btnMenu.addEventListener('click', () => {
      navMobile.classList.toggle('hidden');
      navMobile.classList.toggle('flex');
    });
  }

  const btnTheme = document.getElementById('btnTheme');
  if (btnTheme) {
    btnTheme.addEventListener('click', () => {
      const cur = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      UI.applyTheme(cur === 'dark' ? 'light' : 'dark');
      window.location.reload();
    });
  }

  const bindLogout = (sel) => {
    const el = document.querySelector(sel);
    if (el) el.addEventListener('click', (e) => {
      e.preventDefault();
      Auth.logout();
      UI.toast('Sesión cerrada correctamente');
      setTimeout(() => window.location.href = 'index.html', 600);
    });
  };
  bindLogout('#btnLogout');
  bindLogout('#btnLogoutMobile');
}

document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.getAttribute('data-page') || '';
  initLayout(page);
  if (typeof pageInit === 'function') pageInit();
});