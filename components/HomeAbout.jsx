'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const HomeAbout = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.2 }); // Trigger only when 20% of the component is visible

  return (
    <section ref={ref} className="w-full py-16 px-5 md:px-10 bg-white">
      {/* Two-column layout */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left column (Text) */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-bold text-sky-900">Who We Are</h2>
          <p className="text-lg text-black mt-4">
            We are a team of dedicated developers, designers, and innovators working together to bring cutting-edge software solutions to life.{' '}
            <span className="font-medium">Our mission</span> is to create seamless, scalable, and impactful products that drive digital
            transformation and empower businesses worldwide.
          </p>
          <p className="text-lg text-black mt-4">
            We value creativity, collaboration, and excellence, and we are passionate about solving complex problems through smart, simple, and
            effective solutions.
          </p>
          <h3 className="text-2xl font-bold text-sky-900 mt-10">Tailored Solutions for Every Business</h3>
          <p className="text-lg text-black mt-4">
            We understand that every business has unique needs and challenges. That's why we take the time to deeply understand your vision and
            objectives, delivering personalized software solutions that align with your goals. From startups to established enterprises, we provide
            tools to accelerate growth and drive results.
          </p>
          <div className="mt-10">
            <Link
              href="#"
              className="bg-lightGreen text-black font-medium text-lg px-6 py-4 rounded-full hover:bg-black hover:text-white"
            >
              Get Free Proposal
            </Link>
          </div>
        </motion.div>

        {/* Right column (Images) */}
        <motion.div
          className="grid grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Top-left Large Image */}
          <motion.div
            className="relative h-[550px] col-span-1 row-span-2 overflow-hidden rounded-lg shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Image src="/assets/team-01.jpg" alt="Image 1" layout="fill" objectFit="cover" />
          </motion.div>

          {/* Top-right Small Image */}
          <motion.div
            className="relative h-[300px] overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, y: -100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <Image src="/assets/team-02.jpg" alt="Image 2" layout="fill" objectFit="cover" />
          </motion.div>

          {/* Bottom-left Small Image */}
          <motion.div
            className="relative h-[300px] overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Image src="/assets/team-03.jpg" alt="Image 3" layout="fill" objectFit="cover" />
          </motion.div>

          {/* Bottom-right Large Image */}
          
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAbout;
