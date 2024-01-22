'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TRANSLATE_OFFSET = 200;

type Props = {
  animateFromLeft?: boolean;
  logo: string;
  name: string;
  imageClass?: string;
};

export default function Skill({
  animateFromLeft,
  logo,
  name,
  imageClass,
}: Props) {
  return (
    <motion.div
      className="relative"
      whileInView={{
        opacity: [0, 0, 1],
        x: [0, (animateFromLeft ? -1 : 1) * TRANSLATE_OFFSET, 0],
      }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: 'easeInOut', times: [0, 0.1, 1] }}>
      <Image
        src={logo}
        alt={`${name} logo`}
        fill={true}
        className={
          'object-contain peer cursor-pointer filter hover:grayscale' +
          (imageClass ? ' ' + imageClass : '')
        }
      />
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 -translate-y-2 rounded-md bg-[rgb(50,50,50)] px-4 py-2 text-center opacity-0 transition-opacity duration-500 ease-in-out peer-hover:opacity-100">
        <p>{name}</p>
      </div>
    </motion.div>
  );
}
