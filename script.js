// 1) Page-switch: index.html → page2.html
const btn = document.getElementById('go2');
if (btn) {
  btn.addEventListener('click', () => {
    window.location.href = 'page2.html';
  });
}

window.addEventListener('load', () => {
  if (!window.particlesJS) {
    console.warn('particlesJS not loaded');
    return;
  }

  // Diamond sparkle for Page 1
  const sparkleImage = {
    type: 'image',
    image: {
      src: 'diamond1.png',  // your diamond PNG
      width: 100,
      height: 100
    }
  };

  // Rose petal image for Page 2
  const petalImage = {
    type: 'image',
    image: {
      src: 'rosepetal.png',     // your rose petal PNG
      width: 25,
      height: 25
    }
  };

  // Shared movement settings
  const moveOpts = {
    enable:    true,
    speed:     2,
    direction: 'bottom',
    out_mode:  'out',
    straight:  false
  };

  // Function to launch particles with a given shape/image
  function launch(shapeImage, count, sizeAvg, durationMs = 0) {
    particlesJS('particles-js', {
      particles: {
        number: {
          value:    count,
          density: { enable: true, area: 400 }
        },
        shape: shapeImage,
        size: {
          value:   sizeAvg,
          random: { enable: true, minimumValue: Math.round(sizeAvg/2) }
        },
        opacity: {
          value:   1,
          random:  { enable: true, minimumValue: 0.5 }
        },
        move:   moveOpts,
        line_linked: { enable: false }
      },
      interactivity: { events: {} },
      retina_detect: true
    });

    // If durationMs>0, remove after that many ms
    if (durationMs > 0) {
      setTimeout(() => {
        const canvas = document.querySelector('#particles-js > canvas');
        if (canvas) canvas.remove();
      }, durationMs);
    }
  }

  // PAGE 1: diamonds, continuous
  if (document.body.classList.contains('page1')) {
    launch(sparkleImage, 400, 30 /* avg size */, 0 /* no stop */);
  }

  // PAGE 2: petals, 5s only
  if (document.body.classList.contains('page2')) {
    launch(petalImage, 1000, 6 /* avg size */, 3000);
  }
});
