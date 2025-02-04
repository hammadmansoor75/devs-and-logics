'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const HomeChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.2 }); // Trigger only when 20% of the component is visible

  return (
    <section ref={ref} className="w-full py-16 px-5 md:px-10 bg-lightBlack">
      {/* Two-column layout */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left column (Text) */}
        

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
            <Image src="/assets/choose-01.jpg" alt="Image 1" layout="fill" objectFit="cover" />
          </motion.div>

          {/* Top-right Small Image */}
          <motion.div
            className="relative h-[300px] overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, y: -100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <Image src="/assets/choose-02.jpg" alt="Image 2" layout="fill" objectFit="cover" />
          </motion.div>

          {/* Bottom-left Small Image */}
          <motion.div
            className="relative h-[300px] overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Image src="/assets/choose-03.jpg" alt="Image 3" layout="fill" objectFit="cover" />
          </motion.div>

          {/* Bottom-right Large Image */}
          
        </motion.div>

        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-bold text-lightGreen">Why Choose Us?</h2>
          <p className="text-md text-white mt-4">
          We’re more than just a software development company – we’re your partners in growth. Our team is dedicated to delivering innovative, scalable, and results-driven solutions tailored to your business needs. Here’s why you should choose us:
          </p>
          <ol className="list-disc list-inside text-white mt-5 ml-3">
            <li className='flex flex-col gap-1' >
                <h2 className='text-md text-lightGreen font-semibold' >1: Expertise & Experience:</h2>
                <p className='text-sm text-white' >With years of experience in software, web, and mobile app development, our team leverages cutting-edge technologies to craft solutions that drive success.</p>
            </li>
            <li className='mt-5 flex flex-col gap-1' >
                <h2 className='text-md text-lightGreen font-semibold' >2: Tailored Solutions:</h2>
                <p className='text-sm text-white' >We understand that each business is unique, which is why we create custom-built solutions that are specifically designed to align with your goals and objectives.</p>
            </li>
            <li className='mt-5 flex flex-col gap-1' >
                <h2 className='text-md text-lightGreen font-semibold' >3: Commitment to Quality:</h2>
                <p className='text-sm text-white' >We pride ourselves on delivering exceptional quality with every project. Our quality assurance practices ensure that your product is bug-free, reliable, and future-ready.
                </p>
            </li>
            <li className='mt-5 flex flex-col gap-1' >
                <h2 className='text-md text-lightGreen font-semibold' >4: Collaborative Approach:</h2>
                <p className='text-sm text-white' >We work closely with our clients throughout the entire process, fostering transparency, open communication, and mutual understanding to ensure we exceed your expectations.
                </p>
            </li>
            <li className='mt-5 flex flex-col gap-1' >
                <h2 className='text-md text-lightGreen font-semibold' >5: Timely Delivery:</h2>
                <p className='text-sm text-white' >We respect your time and are committed to delivering projects on schedule without compromising on quality.
                </p>
            </li>
          </ol>
          <div className="mt-10">
            <Link
              href="#"
              className="bg-lightGreen text-black font-medium text-lg px-6 py-4 rounded-full hover:bg-white hover:text-black"
            >
              Get Free Proposal
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeChooseUs;
