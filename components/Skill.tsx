'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
      className="relative "
      initial={{
        y: animateFromLeft ? -100 : 100,
        opacity: 0,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}>
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
