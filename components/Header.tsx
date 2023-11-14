'use client';
import { SocialIcon } from 'react-social-icons';
import { AnimatePresence, motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { useState } from 'react';

type Props = {};

export default function Header({}: Props) {
  const links = [
    {
      url: 'https://github.com/wenhaotan1996/portfolio',
      target: '_blank',
    },
    { url: 'https://www.linkedin.com/in/wenhaotan/', target: '_blank' },
    {
      network: 'sharethis',
      onClick: async () => {
        await navigator.clipboard.writeText(window.location.href);
        setShowCopyToast(true);
        setTimeout(() => {
          setShowCopyToast(false);
        }, 2000);
      },
    },
  ];

  const [showCopyToast, setShowCopyToast] = useState(false);

  function onContactMeClicked() {
    document.getElementById('contact-me')?.scrollIntoView();
  }

  return (
    <header className="absolute top-0 z-10 w-full">
      <div className="mx-auto flex max-w-7xl justify-between p-5">
        <motion.div
          className="flex flex-row items-center"
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            type: 'spring',
            damping: 10,
            stiffness: 80,
            duration: 1,
          }}>
          {links.map((link, i) => (
            <SocialIcon
              key={i}
              className="cursor-pointer"
              fgColor="gray"
              bgColor="transparent"
              {...link}
            />
          ))}
        </motion.div>

        <motion.div
          className="flex cursor-pointer items-center"
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            type: 'spring',
            damping: 10,
            stiffness: 80,
            duration: 1,
          }}
          onClick={onContactMeClicked}>
          <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
          <p className="hidden text-sm uppercase text-gray-400 md:block">
            Get in touch
          </p>
        </motion.div>
        <AnimatePresence>
          {showCopyToast && (
            <motion.div
              className="absolute left-1/2 flex -translate-x-1/2 items-center justify-center rounded-md bg-green-500 px-4 py-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1,
                ease: 'easeInOut',
              }}>
              <FaCheck />
              <p className="ml-4">Link was copied to clipboard</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
