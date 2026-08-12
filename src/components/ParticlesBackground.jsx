import { useState, useEffect, useMemo } from 'react';
import { ParticlesProvider, Particles } from '@tsparticles/react';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  // Initialize the engine and register the full plugin bundle
  const initParticles = async (engine) => {
    await loadFull(engine);
  };

  // Track light mode state to dynamically update particle color schemes
  const [isLightMode, setIsLightMode] = useState(() => 
    typeof document !== 'undefined' ? document.body.classList.contains('light-mode') : false
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLightMode(document.body.classList.contains('light-mode'));
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const options = useMemo(() => ({
    fpsLimit: 60,
    fullScreen: {
      enable: true,
      zIndex: -1, // Render behind all page elements
    },
    particles: {
      number: {
        value: 90,
        density: {
          enable: true,
          area: 850,
        },
      },
      color: {
        // Dark-blue/cyan/purple theme harmony in dark mode, visible soft tones in light mode
        value: isLightMode 
          ? ['#0891b2', '#7c3aed', '#6366f1', '#0284c7', '#475569']
          : ['#06b6d4', '#8b5cf6', '#a78bfa', '#38bdf8', '#818cf8', '#e2e8f0'],
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: isLightMode 
          ? { min: 0.15, max: 0.5 }
          : { min: 0.15, max: 0.8 },
        animation: {
          enable: true,
          speed: 0.5, // Soft, slow twinkling glow
          sync: false,
        },
      },
      size: {
        value: { min: 0.6, max: 2.6 }, // Fine, crisp star points with depth
        animation: {
          enable: true,
          speed: 0.7,
          sync: false,
        },
      },
      links: {
        enable: true,
        distance: 140, // Stars connect when nearby
        color: isLightMode ? '#0891b2' : '#06b6d4', // Cyan constellation lines
        opacity: isLightMode ? 0.08 : 0.14, // Thin, non-distracting lines
        width: 1,
        triangles: {
          enable: false,
        },
      },
      move: {
        enable: true,
        speed: 0.3, // Extremely smooth, slow floating movement
        direction: 'none',
        random: true, // Natural float
        straight: false,
        outModes: {
          default: 'out',
        },
      },
    },
    interactivity: {
      detectsOn: 'window',
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
          parallax: {
            enable: true, // Gentle depth parallax
            force: 35,
            smooth: 10,
          },
        },
        onClick: {
          enable: false,
        },
      },
      modes: {
        grab: {
          distance: 155,
          links: {
            opacity: isLightMode ? 0.18 : 0.25,
          },
        },
      },
    },
    detectRetina: true,
    background: {
      color: 'transparent',
    },
  }), [isLightMode]);

  return (
    <ParticlesProvider init={initParticles}>
      <Particles id="tsparticles" options={options} />
    </ParticlesProvider>
  );
};

export default ParticlesBackground;


