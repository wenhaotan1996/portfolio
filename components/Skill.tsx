'use client';
import { motion } from 'framer-motion';

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
    <div className="relative">
      <motion.div
        className="relative flex cursor-pointer items-center justify-center rounded-full border border-gray-500 object-contain peer overflow-hidden"
        initial={{
          y: animateFromLeft ? -100 : 100,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}>
        <img
          className={
            'h-16 w-16 scale-90 object-contain filter hover:grayscale sm:h-24 sm:w-24 lg:h-32 lg:w-32' +
            (imageClass ? ' ' + imageClass : '')
          }
          src={logo}
          alt={`${name} logo`}
        />
      </motion.div>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 -translate-y-2 rounded-md bg-[rgb(50,50,50)] px-4 py-2 text-center opacity-0 transition-opacity duration-500 ease-in-out peer-hover:opacity-100">
        <p>{name}</p>
      </div>
    </div>
  );
}
