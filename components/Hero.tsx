'use client';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Image from 'next/image';
import { useState } from 'react';

type Props = {};

const delay = 1000;

const colors = [
  'text-orange-400',
  'text-blue-400',
  'text-lime-400',
  'text-cyan-400',
  'text-purple-400',
  'text-rose-400',
];

export default function Hero({}: Props) {
  const [text, helper] = useTypewriter({
    words: [
      'Software Engineer',
      'Developer',
      'Creator',
      'Designer',
      'Guy-who-loves-challenges.tsx',
    ],
    loop: true,
    delaySpeed: delay,
    onDelay: () => setShouldSwitchColor(true),
    onType: () => {
      if (shouldSwitchColor) {
        setShouldSwitchColor(false);
        setColor((color + 1) % colors.length);
      }
    },
  });

  const [color, setColor] = useState(0);
  const [shouldSwitchColor, setShouldSwitchColor] = useState(false);

  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView();
  }

  return (
    <div className="section space-y-8 py-0" id="hero">
      <Image
        className="rounded-full"
        width={180}
        height={180}
        src="/avatar.jpg"
        alt="Profile Picture"
        priority={true}
      />
      <div className={`text-center ${colors[color]}`}>
        <h2 className="pb-2 text-lg font-bold tracking-wide text-white">
          Wenhao Tan
        </h2>
        <h1 className="px-10 text-5xl font-semibold lg:text-6xl">
          <span className="ml-3">{text}</span>
          <Cursor />
        </h1>
      </div>

      <div className="[&_button]:heroButton space-y-2 px-6 text-center">
        <button onClick={() => scrollToSection('education-and-experience')}>
          Education & Experience
        </button>
        <button onClick={() => scrollToSection('skills')}>Skills</button>
        <button onClick={() => scrollToSection('projects')}>Projects</button>
      </div>
    </div>
  );
}
