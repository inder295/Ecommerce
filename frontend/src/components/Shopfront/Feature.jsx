import {motion } from "motion/react"

export default function Feature() {
    return (
        <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="m-40">
           
            
            <h1 className="text-3xl font-semibold text-center mx-auto">Powerful Features</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">Everything you need to manage, track, and grow your Business, securely and efficiently.</p>
            
            <div className="flex flex-wrap items-center justify-center gap-10 mt-16">
                <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                    <img className="rounded-xl" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-1.png" alt="" />
                    <h3 className="text-base font-semibold text-slate-700 mt-4">Seller Dashboard
</h3>
                    <p className="text-sm text-slate-600 mt-1">Track your sales, revenue, and customer trends in real time with powerful analytics.</p>
                </div>
                <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                    <img className="rounded-xl" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-2.png" alt="" />
                    <h3 className="text-base font-semibold text-slate-700 mt-4">Smart Shopfronts
</h3>
                    <p className="text-sm text-slate-600 mt-1">Create beautiful, responsive storefronts that attract customers and boost conversions.</p>
                </div>
                <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                    <img className="rounded-xl" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-3.png" alt="" />
                    <h3 className="text-base font-semibold text-slate-700 mt-4">Marketplace Hub
</h3>
                    <p className="text-sm text-slate-600 mt-1">Connect with buyers worldwide and manage your products seamlessly from one place.</p>
                </div>
            </div>
        </motion.div>
    );
};