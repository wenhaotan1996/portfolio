'use client';
import { useCallback } from 'react';
import type { Engine } from 'tsparticles-engine';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const config: any = {
    autoPlay: true,
    duration: 0,
    interactivity: {
      events: {
        // onClick: {
        //   enable: true,
        //   mode: "push",
        // },
        onHover: {
          enable: true,
          mode: 'slow',
          parallax: {
            enable: false,
            force: 60,
            smooth: 10,
          },
        },
        resize: {
          delay: 0.5,
          enable: true,
        },
      },
      modes: {
        push: {
          default: true,
          quantity: 4,
        },

        slow: {
          factor: 3,
          radius: 100,
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff',
        animation: {
          h: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            delay: 0,
            decay: 0,
            sync: true,
          },
          s: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            delay: 0,
            decay: 0,
            sync: true,
          },
          l: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            delay: 0,
            decay: 0,
            sync: true,
          },
        },
      },
      move: {
        angle: {
          offset: 0,
          value: 90,
        },
        attract: {
          distance: 200,
          enable: false,
          rotate: {
            x: 600,
            y: 1200,
          },
        },
        center: {
          x: 50,
          y: 50,
          mode: 'percent',
          radius: 0,
        },
        decay: 0,
        distance: {},
        direction: 'none',
        drift: 0,
        enable: true,
        gravity: {
          acceleration: 9.81,
          enable: false,
          inverse: false,
          maxSpeed: 50,
        },
        path: {
          clamp: true,
          delay: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
          },
          enable: false,
          options: {},
        },
        outModes: {
          default: 'out',
          bottom: 'out',
          left: 'out',
          right: 'out',
          top: 'out',
        },
        random: false,
        size: false,
        speed: 10,
        spin: {
          acceleration: 0,
          enable: false,
        },
        straight: false,
        trail: {
          enable: false,
          length: 10,
          fill: {},
        },
        vibrate: false,
        warp: false,
      },
      number: {
        density: {
          enable: true,
          width: 1920,
          height: 1080,
        },
        limit: 130,
        value: 80,
      },
      opacity: {
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: 0.5,
        animation: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: false,
          mode: 'auto',
          startValue: 'random',
          destroy: 'none',
          minimumValue: 0.1,
        },
      },
      reduceDuplicates: false,

      shape: {
        loadShape: {},
        close: true,
        fill: true,
        options: {},
        type: 'circle',
      },
      size: {
        random: {
          enable: true,
          minimumValue: 1,
        },
        value: {
          min: 3,
          max: 5,
        },
        animation: {
          count: 0,
          enable: false,
          speed: 40,
          decay: 0,
          delay: 0,
          sync: false,
          mode: 'auto',
          startValue: 'random',
          destroy: 'none',
          minimumValue: 0.1,
        },
      },

      links: {
        blink: false,
        color: {
          value: '#ffffff',
        },
        consent: false,
        distance: 180,
        enable: true,
        frequency: 1,
        opacity: 0.4,
        shadow: {
          blur: 5,
          color: {
            value: '#000',
          },
          enable: false,
        },
        triangles: {
          enable: false,
          frequency: 1,
        },
        width: 2,
        warp: false,
      },
    },
  };

  return (
    <div
      className={`absolute -z-10 h-full w-full overflow-hidden bg-slate-900`}>
      <Particles id="tsparticles" init={particlesInit} options={config} />
    </div>
  );
}
