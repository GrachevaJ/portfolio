const heroEl = document.getElementById('hero');

if (heroEl && typeof VANTA !== 'undefined') {
  try {
    VANTA.NET({
      el: heroEl,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 1,
      color: 0x5c58ed,
      backgroundColor: 0x0a0e27,
      points: 20,
      maxDistance: 20,
      spacing: 12,
      showDots: false,
    });
  } catch (err) {
    console.warn('VANTA.NET initialization failed:', err);
  }
}
