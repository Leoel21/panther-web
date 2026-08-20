// ============================================================
//  CONFIGURACIÓN DE PANTHER (web)
// ============================================================

// --- Supabase (Project Settings → API). URL = solo la base, sin /rest/v1/ ---
window.SUPABASE_URL      = "https://fnfizekhtmgnejtvtibw.supabase.co";
window.SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZuZml6ZWtodG1nbmVqdHZ0aWJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY4OTA1MDQsImV4cCI6MjEwMjQ2NjUwNH0.Hozr7GYoc45v8zv6EUpxaOXpuOUO0l88qXtBXZV2tv0";

// --- Cámara ---
// Rellénalo cuando tengas el puente (go2rtc) funcionando. Mira GO2RTC.md.
//   type: "iframe" -> go2rtc (lo más fácil y con menos retraso)
//         "hls"    -> una URL .m3u8
//         "mjpeg"  -> una imagen que se refresca sola
//   url:  la dirección del stream.  Ej. go2rtc: "http://localhost:1984/stream.html?src=camara"
window.CAMERA_STREAM = {
  type: "iframe",
  url: "http://localhost:1984/stream.html?src=camara",
  name: "CAM-01 · SECTOR A"
};

// --- Detección de movimiento ---
//   enabled: on/off
//   sensitivity: 0.02 = salta si cambia ~2% de la imagen (súbelo si salta demasiado, bájalo si no salta)
//   pixel: cuánto tiene que cambiar un punto para contar (súbelo si hay mucho "ruido")
//   url: opcional, MJPEG manual; si se deja fuera, se deduce sola de la cámara
window.DETECT = {
  enabled: true,
  sensitivity: 0.02,
  pixel: 24
};