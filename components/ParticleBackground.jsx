'use client';

import { useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';

import styles from '../styles/components/ParticleBackground.module.css';

const PARTICLE_COUNT = 55;

function createParticle(width, height, direction) {
  const x = Math.random() * width;
  const y =
    direction === 'down'
      ? Math.random() * height * 0.6
      : height * 0.4 + Math.random() * height * 0.6;
  return {
    x,
    y,
    size: Math.random() * 2.5 + 1,
    speedY: (Math.random() * 0.3 + 0.15) * (direction === 'down' ? 1 : -1),
    speedX: (Math.random() - 0.5) * 0.15,
    opacity: Math.random() * 0.4 + 0.2,
  };
}

function getFadeOpacity(y, height, direction) {
  const ratio = y / height;
  if (direction === 'down') {
    return Math.max(0, 1 - ratio * 1.4);
  }
  return Math.max(0, (ratio - 0.15) * 1.4);
}

export default function ParticleBackground({ direction = 'down' }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);

  const particleColor = useColorModeValue('186, 230, 253', '144, 205, 244');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return undefined;

    const ctx = canvas.getContext('2d');
    const container = canvas.parentElement;

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () =>
        createParticle(width, height, direction)
      );
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const animate = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;

        if (direction === 'down') {
          if (p.y > height + 10) {
            p.y = -10;
            p.x = Math.random() * width;
          }
        } else if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const fade = getFadeOpacity(p.y, height, direction);
        const alpha = p.opacity * fade;

        if (alpha > 0.01) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${particleColor}, ${alpha})`;
          ctx.fill();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      resizeObserver.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [direction, particleColor]);

  return (
    <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
  );
}
