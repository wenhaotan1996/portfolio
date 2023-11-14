'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

type Props = { containerId: string };

export default function BacktoTop({ containerId }: Props) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    document
      .getElementById('main-container')
      ?.addEventListener('scroll', updateScrollPos, true);
    return () => {
      document
        .getElementById('main-container')
        ?.removeEventListener('scroll', updateScrollPos, true);
    };
  }, [updateScrollPos]);
  function updateScrollPos() {
    setShow((document.getElementById(containerId)?.scrollTop ?? 0) >= 0);
  }
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="absolute bottom-0 left-1/2 mb-4 -translate-x-1/2 cursor-pointer text-4xl text-red-400"
          initial={{
            opacity: 0,
          }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}>
          <BsFillArrowUpCircleFill
            className="animate-bounce"
            onClick={() => {
              const parent = document.getElementById('main-container');
              if (parent) {
                parent.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
