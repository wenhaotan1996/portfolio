'use client';
import { motion } from 'framer-motion';

type Props = {
  title: string;
  image: string;
  location: string;
  time: string;
  info: string[];
  imageClass: string;
};

export default function ExperienceCard({
  title,
  image,
  location,
  time,
  info,
  imageClass,
}: Props) {
  return (
    <div className="w-full h-full flex-shrink-0 flex items-center justify-center snap-center pb-8 px-1">
      <motion.article
        className="flex h-[420px] w-[500px] max-w-full flex-shrink-0 flex-col items-center space-y-2 overflow-auto rounded-lg bg-[#292929]/50 py-6 sm:space-y-7 md:h-[550px] md:w-[600px] xl:w-[900px] max-h-full"
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}>
        <img className={imageClass} src={image} alt="" />

        <div className="px-10">
          <h4 className="text-lg font-light sm:text-4xl">{title}</h4>
          {location && (
            <p className="mt-1 text-sm font-bold sm:text-2xl">{location}</p>
          )}
          <p className="py-5 uppercase text-gray-300">{time}</p>
          <ul className="ml-5 list-disc space-y-2 text-sm sm:space-y-4 sm:text-lg">
            {info.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </motion.article>
    </div>
  );
}
