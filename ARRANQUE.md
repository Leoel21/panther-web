# PANTHER — Manual de arranque (de 0)

Guía completa para levantar el proyecto desde cero. Sigue el orden.

---

## Qué es esto
- **Panther**: app web de videovigilancia. Login real (Supabase) → intro → dashboard con la cámara en directo.
- Piezas:
  - **La web** (`index.html` + `config.js`) — la app.
  - **Supabase** — guarda los usuarios del login.
  - **go2rtc** — el "puente" que coge el vídeo de la cámara wifi y lo pasa al navegador.

---

## ARRANQUE RÁPIDO (el día a día)
Cuando quieras trabajar en Panther, **siempre en este orden**:

1. **Arranca go2rtc** → doble clic en `go2rtc.exe`. Deja la ventana negra ABIERTA.
2. Comprueba que ves la cámara en **http://localhost:1984**
3. **Abre Panther** → en VS Code, clic derecho en `index.html` → *Open with Live Server*.
4. Entra con tu usuario → deberías verte en el dashboard.

> Regla de oro: **si cierras go2rtc, la cámara desaparece de Panther.** Van juntos.

---

## INSTALACIÓN DESDE CERO (si empiezas en un PC nuevo)

### 1) La cámara (go2rtc)
1. Descarga `go2rtc_win64.zip` de https://github.com/AlexxIT/go2rtc/releases
2. Descomprime en una carpeta (ej. `C:\go2rtc`).
3. En esa carpeta crea un archivo `go2rtc.yaml` (Bloc de notas → Guardar como → tipo "Todos los archivos" → nombre `go2rtc.yaml`) con:
   ```yaml
   streams:
     camara: rtsp://admin:TU_CONTRASEÑA@192.168.1.36:554/live/ch00_0
   ```
   - Cámara: **Sodany / V380 Pro**. IP: **192.168.1.36** (cámbiala si tu router le da otra).
   - Pon tu contraseña de la cámara en `TU_CONTRASEÑA`.
4. Doble clic en `go2rtc.exe`. Abre `http://localhost:1984` y comprueba que se ve.

### 2) Supabase (login)
- Proyecto en https://supabase.com
- **Project Settings → API**: copia *Project URL* (solo la base, sin `/rest/v1/`) y *anon key* → van en `config.js`.
- **Authentication → Sign In / Providers → Email**: tiene que estar **ENABLED** (esto fue lo que bloqueaba el login).
- **Authentication → Users → Add user**: crea usuarios (marca *Auto Confirm*). Para quitar, bórralos de la lista.
- Desactiva *Allow new users to sign up* para que solo tú des de alta gente.

### 3) La web
- Abre la carpeta `panther-web` en VS Code.
- En `config.js` deben estar: tus claves de Supabase y la cámara:
  ```js
  window.CAMERA_STREAM = {
    type: "iframe",
    url: "http://localhost:1984/webrtc.html?src=camara",
    name: "Cámara 1"
  };
  ```
- Arranca con **Live Server** y entra.

---

## Archivos del proyecto
- `index.html` — la app entera (login, intro, bienvenida, dashboard).
- `config.js` — tus claves de Supabase + configuración de la cámara.
- `GO2RTC.md` — guía del puente de la cámara.
- `README.md` — cómo publicar la web.

---

## Subir cambios a GitHub (cuando toques algo)
En la terminal, dentro de la carpeta del proyecto:
```powershell
git add .
git commit -m "lo que cambiaste"
git push
```

---

## PENDIENTE (próximos pasos, sin prisa)
- [ ] Quitar la barrita/scroll del vídeo (cosmético).
- [ ] Detección de movimiento/personas → que llene el panel de "Eventos".
- [ ] Publicar la web (Vercel/Netlify) cuando los servidores cooperen.
- [ ] Convertir en PWA para "instalarla" como app.
- [ ] Sacar el puente fuera del PC (verla desde fuera de casa) — avanzado.

## Estado actual (funciona)
Login real con Supabase ✓ · Intro ✓ · Dashboard ✓ · Cámara en vivo (con go2rtc) ✓
