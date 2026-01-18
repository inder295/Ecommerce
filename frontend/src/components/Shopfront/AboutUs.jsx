import React from 'react';
import { motion } from 'motion/react';
const AboutUs = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col md:flex-row items-center justify-center mx-auto gap-10 max-md:px-4"
      >
        <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
          <img
            className="max-w-md w-full object-cover rounded-2xl"
            src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=451&h=451&auto=format&fit=crop"
            alt=""
          />
          <div className="flex items-center gap-1 max-w-72 absolute bottom-8 left-8 bg-white p-4 rounded-xl">
            <div className="flex -space-x-4 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="image"
                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-1"
              />
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                alt="image"
                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[2]"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                alt="image"
                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[3]"
              />
              <div className="flex items-center justify-center text-xs  text-white size-9 rounded-full border-[3px] border-white bg-indigo-600 hover:-translate-y-1 transition z-[4]">
                50+
              </div>
            </div>
            <p className="text-sm font-medium text-slate-800">
              Explore our community
            </p>
          </div>
        </div>
        <div className="text-sm text-slate-600 max-w-lg">
          <h1 className="text-xl uppercase font-semibold text-slate-700">
            What we do?
          </h1>
          <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
          <p className="mt-8">
            Our eCommerce platform empowers entrepreneurs to build, manage, and
            grow their online stores — all in one place{' '}
          </p>
          <p className="mt-4">
            Whether you’re a small business owner, independent seller, or an
            established brand, our system provides everything you need — from a
            customizable Shopfront to a powerful Admin Panel and a dynamic
            Marketplace.
          </p>
          <p className="mt-4">
            Sellers can freely open their shops, showcase their products, and
            connect with customers without technical barriers.
          </p>
          <p className="mt-4">
            From seamless product management to real-time analytics, our
            platform is designed to simplify eCommerce operations and help you
            focus on what truly matters — selling and scaling your business.
          </p>
          <p className="mt-4">
            Build beautifully, sell freely, and grow effortlessly with our
            all-in-one eCommerce ecosystem.
          </p>
        </div>
      </motion.section>
    </>
  );
};

export default AboutUs;
