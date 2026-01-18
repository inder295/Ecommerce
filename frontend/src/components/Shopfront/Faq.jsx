import React from 'react';
import { motion } from 'motion/react';

const Faq = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    {
      question: 'How can I start selling on this platform?',
      answer:
        'Simply sign up as a seller, create your shop profile, and add your products.Our step-by-step setup guide helps you list your items, set prices, and customize your store — no coding or design skills needed!',
    },
    {
      question: 'Is there any fee to open a shop?',
      answer:
        'No — opening a shop is completely free!You can start selling instantly without any hidden costs.We only charge a small commission on each sale to keep the marketplace running smoothly.',
    },
    {
      question: 'How do customers make purchases safely?',
      answer:
        'Customers can browse shops, add products to their cart, and pay securely through our integrated payment gateway.All transactions are encrypted, ensuring your payment and personal details stay protected.',
    },
    {
      question: 'How do I track my orders and sales?',
      answer:
        'Both sellers and customers get real-time dashboards to track every order.Sellers can see sales reports and inventory updates, while customers can check order status and delivery progress anytime.',
    },
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-xl mx-auto flex flex-col items-center justify-center mt-20 px-4 md:px-0"
      >
        <h1 className="text-3xl font-semibold text-center">
          Looking for answer?
        </h1>
        <p className="text-sm text-slate-500 mt-2 pb-8 text-center"></p>
        {faqs.map((faq, index) => (
          <div
            className="border-b border-slate-200 py-4 cursor-pointer w-full"
            key={index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-medium">{faq.question}</h3>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${openIndex === index ? 'rotate-180' : ''} transition-all duration-500 ease-in-out`}
              >
                <path
                  d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                  stroke="#1D293D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p
              className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md ${openIndex === index ? 'opacity-100 max-h-[300px] translate-y-0 pt-4' : 'opacity-0 max-h-0 -translate-y-2'}`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Faq;
