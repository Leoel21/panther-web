# Panther — App web

Versión web del acceso a Panther (login → intro → bienvenida), con **Supabase Auth**.
Sin `.exe`, sin instalar nada: se sube a un hosting y se abre en el navegador.

## Qué cambió respecto a la versión de escritorio
- **Se quitó Electron** (`main.js` y el `package.json` de escritorio). Ya no hacen falta.
- **Bug corregido:** la URL de Supabase llevaba `/rest/v1/` al final, lo que rompía el
  login. Ahora es solo la base `https://...supabase.co`. Además el código la
  auto-limpia por si se vuelve a pegar mal.
- **Errores más claros:** ahora distingue "usuario sin confirmar" de "contraseña
  incorrecta", en vez de decir siempre lo mismo.

## Archivos (esto es todo lo que se publica)
- `index.html` — la app entera.
- `config.js`  — tus claves de Supabase.

## Publicarla (elige una)
**Opción rápida — Netlify Drop:**
1. Entra en https://app.netlify.com/drop
2. Arrastra esta carpeta entera.
3. Te da una URL al momento (ej. `panther-xxxx.netlify.app`). Ya está online.

**Opción con dominio propio / Git — Vercel o Netlify:**
- Sube la carpeta a un repo y conéctalo; o usa el dominio que quieras (ej. `app.panther.es`).

## Ajuste importante en Supabase (para web)
En **Authentication → URL Configuration**, pon tu dominio (el de Netlify/Vercel)
en **Site URL** y en **Redirect URLs**. Así funcionan bien los emails de
confirmación y de recuperación de contraseña.

Y como antes:
- **Authentication → Users → Add user** para dar de alta (marca *Auto Confirm*).
- Desactiva **"Allow new users to sign up"** para que solo tú crees usuarios.

## Siguiente paso (cuando la demo funcione): PWA
Convertirla en PWA es pequeño: se añade un `manifest.json` y un service worker,
y el navegador deja "instalarla" en el escritorio/móvil como si fuera una app,
con su icono y su ventana propia. Lo montamos cuando quieras.
