# Conectar la cámara wifi (go2rtc)

El navegador no reproduce RTSP (lo que sacan las cámaras baratas). `go2rtc` es un
programa pequeño y gratis que hace de puente: coge el RTSP de la cámara y se lo
da al navegador. Se pone en marcha en 5 minutos.

## 1) Descarga go2rtc
- Ve a https://github.com/AlexxIT/go2rtc/releases
- Baja el `.exe` de Windows (`go2rtc_win64.zip`), descomprímelo en una carpeta.

## 2) Averigua la dirección RTSP de tu cámara
Depende de la marca/app de la cámara. El formato es:
```
rtsp://USUARIO:CONTRASEÑA@IP_DE_LA_CAMARA:554/RUTA
```
- **USUARIO/CONTRASEÑA**: los de la cámara (a veces admin / admin, o los que pusiste en su app).
- **IP**: la que tiene la cámara en tu wifi (la ves en tu router, o en la app de la cámara).
- **RUTA**: cambia según el modelo. Rutas típicas de cámaras chinas:
  - V380:      `rtsp://user:pass@IP:554/live/ch00_0`
  - iCSee/XM:  `rtsp://user:pass@IP:554/user=admin&password=&channel=1&stream=0.sdp`
  - Genérica:  `rtsp://user:pass@IP:554/stream1`  o  `/onvif1`  o  `/h264`
- Truco: si la cámara es **ONVIF**, go2rtc puede encontrarla casi sola.

## 3) Crea el archivo `go2rtc.yaml` (al lado del .exe)
```yaml
streams:
  camara: rtsp://USUARIO:CONTRASEÑA@IP:554/RUTA
```

## 4) Arranca go2rtc
Doble clic en `go2rtc.exe`. Abre el navegador en **http://localhost:1984**
y verás tu cámara en su panel. Si se ve ahí, ya está el puente montado.

## 5) Conéctalo a Panther
En `config.js` pon:
```js
window.CAMERA_STREAM = {
  type: "iframe",
  url: "http://localhost:1984/webrtc.html?src=camara",
  name: "Cámara 1"
};
```
Recarga Panther, entra, y la cámara se verá en el dashboard.

---
### Si no sabes la ruta RTSP
Dime la **marca o la app** que usas para ver la cámara (V380, YCC365, iCSee,
CamHi, Tuya/Smart Life…) y te doy la dirección exacta.

### Nota
`go2rtc` corre en TU ordenador, así que la cámara se ve mientras tengas go2rtc
abierto y estés en la misma red. Para verla desde fuera o dejarlo montado fijo,
eso es un paso más avanzado (un mini-servidor), pero para la demo esto sobra.
