# Ride Bike — Sistema de Reservas de Arriendo de Bicicletas

Template HTML + CSS + JS nativo (vanilla) + Tailwind CSS para un sistema completo de reservas de arriendo de bicicletas. Incluye autenticación, wizard de reserva, múltiples métodos de pago, gestión de perfil y páginas legales.

## 🏍️ Características

- **19 pantallas** totalmente funcionales
- **Auth simulado** con localStorage (usuarios demo incluidos)
- **Wizard de reserva** de 4 pasos con calendario y slots por hora
- **4 métodos de pago** (Tarjeta, Yape, Plin, Efectivo)
- **6 tipos de bicicleta** (urbana, mountain, ruta, eléctrica, infantil, tándem)
- **6 accesorios opcionales** (casco, candado, luz, mochila, GPS, asiento infantil)
- **3 rutas turísticas** sugeridas
- **Gestión de perfil** con historial filtrado por estado (próximas / completadas / anuladas)
- **Anulación de reservas** desde el detalle
- **Páginas legales** con tabla de contenidos (Términos y Privacidad)
- **Diseño responsivo** (mobile-first)
- **Tema oscuro** con identidad verde outdoor y tipografía Bebas Neue

## 📂 Estructura

```
arriendo-bici-01/
├── index.html              Pantalla de inicio (hero + flota + por qué elegirnos + rutas + testimonios)
├── servicios.html          Catálogo completo de bicis con filtros por categoría
├── galeria.html            Galería masonry con lightbox
├── precios.html            Tarifas por hora/día/semana + paquetes + accesorios
├── horarios.html           Horarios semanales con día actual destacado
├── contacto.html           Formulario de contacto + Google Maps + datos
├── reserva.html            Wizard 4 pasos + calendario + selector de slots
├── confirmacion.html       Post-reserva con código RB-XXXX
├── pago.html               Métodos de pago (tarjeta, Yape, Plin, efectivo)
├── pago-confirmado.html    Confirmación de pago exitosa
├── detalle-reserva.html    Detalle completo + botón anular con modal
├── perfil.html             Mi perfil + estadísticas + historial con tabs
├── inicio-sesion.html      Inicio de sesión (split layout)
├── registro.html           Crear cuenta
├── recuperar-password.html Recuperar contraseña
├── terminos.html           Términos y condiciones con TOC
├── privacidad.html         Política de privacidad con TOC
├── css/
│   └── styles.css          Estilos compartidos (botones, modales, badges, animaciones)
└── main.js                 Lógica central: datos, auth, reservas, header/footer
```

## 🧪 Stack técnico

- **HTML5** semántico
- **Tailwind CSS** vía CDN (con plugins `forms` y `container-queries`)
- **Google Fonts**: Bebas Neue (display) + Inter (body)
- **JavaScript vanilla** — sin frameworks ni dependencias
- **localStorage** como capa de persistencia
- **Imágenes** desde Unsplash (URLs verificadas)

## 🚀 Cómo probar

1. Abrir `index.html` en cualquier navegador moderno
2. Click en **"Reservar ahora"** → te redirige a login
3. Iniciar sesión con uno de los usuarios demo:
   - `carlos@test.com` / `123456`
   - `maria@test.com` / `123456`
4. Completar el wizard: **bici → fecha/hora → extras → confirmar**
5. Pagar con cualquier método
6. Ver la reserva confirmada en `perfil.html`
7. Entrar al detalle y probar **anular**

## 🎨 Identidad visual

| Elemento | Valor |
|----------|-------|
| Primary | `#16a34a` (verde) |
| Primary hover | `#22c55e` |
| Background dark | `#0a0a0a` |
| Background card | `#141414` |
| Display font | Bebas Neue |
| Body font | Inter |

## 🔄 Flujo principal

```
index → reserva → pago → pago-confirmado
                       ↓
                   confirmacion
                       ↓
                    perfil → detalle-reserva → anular
```

## 📊 Datos del modelo

Toda la información de bicicletas, accesorios, rutas y horarios se encuentra en `main.js` como constantes JS:

```js
BICICLETAS   // 6 tipos con precioHora, imagen, incluye
ACCESORIOS   // 6 accesorios opcionales con precio
RUTAS        // 3 rutas turísticas sugeridas
HORARIOS     // Apertura por día de la semana
```

Las reservas se guardan en `localStorage` con la clave `rb_reservas`.

## 🛠️ Personalización

- **Cambiar precios**: editar `BICICLETAS` y `ACCESORIOS` en `main.js`
- **Cambiar horarios**: editar `HORARIOS` en `main.js`
- **Cambiar colores**: modificar la config de Tailwind en cada `<head>` y las variables CSS en `css/styles.css`
- **Cambiar textos legales**: editar directamente `terminos.html` y `privacidad.html`

## 📱 Compatibilidad

- Chrome / Edge / Firefox / Safari (últimas 2 versiones)
- iOS Safari 14+ / Chrome Android 90+
- Diseño mobile-first con breakpoints `sm` `md` `lg`