'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Props = {};

type Project = {
  name: string;
  description: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    name: 'Daily Weather',
    description:
      "A mobile friendly responsive weather app that provides you the basic infomation of current weather and 7-day forecast. The app is built using Next.js 13 and also powered by Tailwind CSS, Tremor React, Appolo GraphQL, and Open Mateo public weather API. It takes advantage of Next.js' great support of SSR to cache the page to further reduce page load time for users.",
    image: '/icon-weather-app.png',
    link: '/weather',
  },
  {
    name: 'Everyday News',
    description:
      'A clean, responsive, and dark mode supported news app that gives you your daily dose of intenet. The app features Next.js 13, tailwind CSS, and Appolo GraphQL. It acquires news data through MediaStack API and delivers news articles from most news sources. It utilizes Next.js server side rendering to reduce the total call to the news api and to reduce load time for users.',
    image: '/icon-news-app.png',
    link: '/news',
  },
];

export default function Projects({}: Props) {
  const [urlBase, setUrlBase] = useState('');
  useEffect(() => {
    setUrlBase(`${window && window.location.origin}`);
  });
  return (
    <section className="section relative px-8" id="projects">
      <h3 className="section-header">Project</h3>
      <div className="w-full absolute h-[300px] md:h-[500px] bg-[#f87171]/10 top-[30%] left-0 -skew-y-12"></div>
      <div className="w-full flex overflow-x-auto relative cursor-pointer snap-x snap-mandatory flex-1">
        {projects.map(({ name, description, image, link }) => (
          <div
            className="flex flex-col w-full snap-center items-center justify-center pb-8 text-center flex-shrink-0"
            key={name}>
            <motion.img
              className="h-40 object-contain"
              src={image}
              alt={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: 'easeIn',
              }}
            />
            <p className="font-bold text-2xl mb-4">{name}</p>
            <p className="max-w-xl text-xs font-light lg:text-base">
              {description}
            </p>
            <Link className="text-white" href={urlBase + link} target="_blank">
              <button className="bg-[#f87171]/80 px-4 py-2 mt-4 rounded-md uppercase hover:scale-105">
                Take a look
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
