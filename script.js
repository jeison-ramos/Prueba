document.addEventListener('DOMContentLoaded', () => {
  const player = videojs('video-player');

  // Configuración de anuncios VAST
  player.ima({
    adTagUrl: 'https://thusizulu.com/dlm.Fyzdd/GYNdv/ZvGFUB/JeBmb9/uMZkUClOk/PrTlYyxkNhzcM_3/Moz/AxtzNgjCE/3/M/z_cuzhMwQP',
    debug: true
  });

  // Obtener el ID del archivo de Google Drive o la URL directa
  const params = new URLSearchParams(window.location.search);
  const fileId = params.get('fileId'); // ID de Google Drive
  const videoUrl = params.get('video'); // URL directa

  if (fileId) {
    // Construir la URL de descarga pública de Google Drive
    const driveUrl = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=AIzaSyAIpSmdpo48g_EK9kQdcuDKEYJtyqNEGAU`;
    player.src({ type: 'video/mp4', src: driveUrl });
  } else if (videoUrl) {
    // Usar la URL directa del video
    player.src({ type: 'video/mp4', src: videoUrl });
  } else {
    console.error('No se proporcionó un video válido.');
  }
});
