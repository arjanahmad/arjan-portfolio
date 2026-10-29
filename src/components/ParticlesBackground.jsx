import { useEffect, useRef, useState } from 'react';

const ParticlesBackground = () => {
  const canvasRef = useRef(null);
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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Mouse position tracking with smooth lerp
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      active: false,
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // Handle high DPI and window resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    let resizeTimeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 150);
    };

    window.addEventListener('resize', debouncedResize, { passive: true });

    // Palette: Cyan, Soft Violet, Sky Blue, and Crisp Silver-White
    const darkPalette = [
      'rgba(6, 182, 212, ',   // Cyan
      'rgba(139, 92, 246, ',  // Violet
      'rgba(56, 189, 248, ',  // Sky
      'rgba(241, 245, 249, ', // Crisp Silver
    ];

    const lightPalette = [
      'rgba(2, 132, 199, ',   // Deep Sky
      'rgba(99, 102, 241, ',  // Indigo
      'rgba(148, 163, 184, ', // Slate
    ];

    // Subtle, sparse, elegant stars
    // Layer 1: Distant micro-dust (subtle twinkle, no lines)
    // Layer 2: Constellation nodes (sparse, thin elegant lines when close)
    let dustStars = [];
    let constellationNodes = [];

    const initStars = () => {
      dustStars = [];
      const dustCount = Math.floor((width * height) / 18000); // Very sparse, calm distribution
      for (let i = 0; i < dustCount; i++) {
        dustStars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 0.9 + 0.3,
          baseAlpha: Math.random() * 0.35 + 0.1,
          twinkleSpeed: Math.random() * 0.012 + 0.004,
          twinkleOffset: Math.random() * Math.PI * 2,
          speedX: (Math.random() - 0.5) * 0.12,
          speedY: (Math.random() - 0.5) * 0.12,
          colorIndex: Math.floor(Math.random() * darkPalette.length),
        });
      }

      constrainNodes();
    };

    const constrainNodes = () => {
      constellationNodes = [];
      // Calculate node count: strictly sparse (between 25 and 45 nodes max across full viewport)
      const nodeCount = Math.min(45, Math.max(22, Math.floor(width / 45)));

      for (let i = 0; i < nodeCount; i++) {
        constellationNodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.3 + 1.0,
          baseAlpha: Math.random() * 0.4 + 0.3,
          twinkleSpeed: Math.random() * 0.015 + 0.005,
          twinkleOffset: Math.random() * Math.PI * 2,
          speedX: (Math.random() - 0.5) * 0.22, // Very calm, slow drift
          speedY: (Math.random() - 0.5) * 0.22,
          colorIndex: i % darkPalette.length,
          depth: Math.random() * 0.4 + 0.6, // For subtle parallax
        });
      }
    };

    initStars();

    let frame = 0;
    const maxConnectDist = Math.min(130, Math.max(90, width / 14)); // Restrained distance to prevent spiderwebbing

    const render = () => {
      // Pause if tab is hidden
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      frame++;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;
      const mouseOffsetX = (mouse.x - width / 2) * 0.015;
      const mouseOffsetY = (mouse.y - height / 2) * 0.015;

      const currentPalette = isLightMode ? lightPalette : darkPalette;

      // 1. Draw distant background micro-stars
      for (let i = 0; i < dustStars.length; i++) {
        const s = dustStars[i];
        if (!prefersReducedMotion) {
          s.x += s.speedX;
          s.y += s.speedY;

          if (s.x < 0) s.x = width;
          if (s.x > width) s.x = 0;
          if (s.y < 0) s.y = height;
          if (s.y > height) s.y = 0;
        }

        const alpha = s.baseAlpha + Math.sin(frame * s.twinkleSpeed + s.twinkleOffset) * 0.12;
        const boundedAlpha = Math.max(0.04, Math.min(0.5, alpha));

        const dustColor = currentPalette[s.colorIndex % currentPalette.length];
        ctx.fillStyle = `${dustColor}${boundedAlpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Draw subtle constellation connections first (behind node dots)
      // We limit connections per node to at most 2 closest neighbors to strictly prevent cluttered networks
      const nodeLen = constellationNodes.length;
      for (let i = 0; i < nodeLen; i++) {
        const p1 = constellationNodes[i];
        let connectionsCount = 0;

        for (let j = i + 1; j < nodeLen; j++) {
          if (connectionsCount >= 2) break; // Maximum 2 connections per star - elegant and sparse!

          const p2 = constellationNodes[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            connectionsCount++;
            // Soft quadratic falloff: faint, restrained, thin line
            const ratio = 1 - dist / maxConnectDist;
            const lineAlpha = (ratio * ratio * (isLightMode ? 0.07 : 0.12)).toFixed(3);

            ctx.beginPath();
            ctx.moveTo(p1.x + mouseOffsetX * p1.depth, p1.y + mouseOffsetY * p1.depth);
            ctx.lineTo(p2.x + mouseOffsetX * p2.depth, p2.y + mouseOffsetY * p2.depth);
            ctx.strokeStyle = isLightMode
              ? `rgba(2, 132, 199, ${lineAlpha})`
              : `rgba(6, 182, 212, ${lineAlpha})`;
            ctx.lineWidth = 0.65; // Crisp, delicate, ultra-thin line
            ctx.stroke();
          }
        }
      }

      // 3. Draw constellation nodes with soft glowing halos
      for (let i = 0; i < nodeLen; i++) {
        const p = constellationNodes[i];

        if (!prefersReducedMotion) {
          p.x += p.speedX;
          p.y += p.speedY;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        const posX = p.x + mouseOffsetX * p.depth;
        const posY = p.y + mouseOffsetY * p.depth;

        const alpha = p.baseAlpha + Math.sin(frame * p.twinkleSpeed + p.twinkleOffset) * 0.18;
        const boundedAlpha = Math.max(0.15, Math.min(0.85, alpha));
        const nodeColor = currentPalette[p.colorIndex % currentPalette.length];

        // Soft faint glow halo
        ctx.fillStyle = `${nodeColor}${(boundedAlpha * 0.18).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(posX, posY, p.radius * 2.8, 0, Math.PI * 2);
        ctx.fill();

        // Core star point
        ctx.fillStyle = `${nodeColor}${boundedAlpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(posX, posY, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    if (prefersReducedMotion) {
      render(); // Single calm static draw
    } else {
      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(resizeTimeout);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isLightMode]);

  return (
    <canvas
      id="tsparticles"
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        opacity: isLightMode ? 0.35 : 1,
        transition: 'opacity 0.4s ease',
      }}
    />
  );
};

export default ParticlesBackground;
