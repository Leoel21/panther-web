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
//   url:  la dirección del stream.  Ej. go2rtc: "http://localhost:1984/webrtc.html?src=camara"
window.CAMERA_STREAM = {
  type: "iframe",
  url: "http://localhost:1984/webrtc.html?src=camara",
  name: "Cámara 1"
};