import { ParticlesProvider, Particles } from '@tsparticles/react';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  // Initialize the engine and register the full plugin bundle
  const initParticles = async (engine) => {
    await loadFull(engine);
  };

  const options = {
    fpsLimit: 60,
    fullScreen: {
      enable: true,
      zIndex: -1, // Render behind all page elements
    },
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        // Dark-blue/cyan/purple premium theme harmony
        value: ['#06b6d4', '#8b5cf6', '#a78bfa', '#38bdf8', '#ffffff'],
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: { min: 0.1, max: 0.7 },
        animation: {
          enable: true,
          speed: 0.5, // Soft, slow twinkling glow
          sync: false,
        },
      },
      size: {
        value: { min: 1, max: 3 }, // Small, elegant stars
        animation: {
          enable: true,
          speed: 1,
          sync: false,
        },
      },
      links: {
        enable: true,
        distance: 150, // Stars connect when nearby
        color: '#06b6d4', // Cyan constellation/network lines
        opacity: 0.15, // Thin and subtle
        width: 1,
        triangles: {
          enable: false,
        },
      },
      move: {
        enable: true,
        speed: 0.4, // Extremely slow, smooth moving stars
        direction: 'none',
        random: true, // Natural float
        straight: false,
        outModes: {
          default: 'out',
        },
      },
    },
    interactivity: {
      detectsOn: 'window', // Detect cursor over standard sections
      events: {
        onHover: {
          enable: true,
          mode: 'grab', // Connect network to cursor on hover
          parallax: {
            enable: true, // Subtle depth scroll/mouse parallax
            force: 60,
            smooth: 10,
          },
        },
        onClick: {
          enable: false,
        },
      },
      modes: {
        grab: {
          distance: 180,
          links: {
            opacity: 0.35, // Clearer lines near cursor
          },
        },
      },
    },
    detectRetina: true,
    background: {
      color: 'transparent', // Transparent background overlay
    },
  };

  return (
    <ParticlesProvider init={initParticles}>
      <Particles id="tsparticles" options={options} />
    </ParticlesProvider>
  );
};

export default ParticlesBackground;
