import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Car, Gauge, Paintbrush, Sparkles, Wrench, Zap } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const services = [
        {
            icon: Paintbrush,
            title: "Auto Painting",
            description: "Professional painting of any complexity. Computer-precise color matching. Full or partial painting.",
            color: "from-red-500 to-red-600",
            glow: "red",
        },
        {
            icon: Car,
            title: "Body Repair",
            description: "Body geometry restoration after accidents. Repair of dents, scratches and damages of any complexity.",
            color: "from-blue-500 to-blue-600",
            glow: "blue",
        },
        {
            icon: Zap,
            title: "Electrical",
            description: "Diagnostics and repair of electrical equipment. Installation of additional equipment and accessories.",
            color: "from-yellow-500 to-yellow-600",
            glow: "yellow",
        },
        {
            icon: Sparkles,
            title: "Auto Restoration",
            description: "Complete restoration of classic and vintage cars. Restoring cars to their original appearance.",
            color: "from-purple-500 to-purple-600",
            glow: "purple",
        },
        {
            icon: Wrench,
            title: "Mechanical Repair",
            description: "Repair of suspension, brake system, engine. Technical maintenance of all car systems.",
            color: "from-green-500 to-green-600",
            glow: "green",
        },
        {
            icon: Gauge,
            title: "Diagnostics and Tuning",
            description: "Computer diagnostics of all car systems. Engine chip tuning. Settings and performance improvement.",
            color: "from-cyan-500 to-cyan-600",
            glow: "cyan",
        },
    ];

    return (
        <section id="services" ref={ref} className="py-20 bg-gray-950 relative overflow-hidden">
            <div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50"></div>

            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-1/2 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"
            ></motion.div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-block mb-4"
                    >
                        <span className="text-red-500 text-sm tracking-widest uppercase">Our Services</span>
                    </motion.div>
                    <h2 className="text-4xl lg:text-5xl text-white mb-4">
                        Full Range of Services
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        From minor repairs to complete car restoration
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Card
                                    className="border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/80 transition-all duration-300 group relative overflow-hidden">
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                                    <div
                                        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                                    <CardHeader>
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            className="relative mb-4"
                                        >
                                            <div
                                                className={`absolute inset-0 bg-gradient-to-br ${service.color} blur-xl opacity-50 rounded-lg`}></div>
                                            <div
                                                className={`relative w-14 h-14 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center border border-${service.glow}-500/30`}>
                                                <Icon className="w-7 h-7 text-white"/>
                                            </div>
                                        </motion.div>
                                        <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-gray-400">
                                            {service.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div
                        className="inline-flex items-center gap-4 bg-gray-900/50 backdrop-blur-sm border border-red-500/30 rounded-full px-8 py-4">
                        <div className="flex -space-x-2">
                            <div
                                className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 border-2 border-gray-900 flex items-center justify-center text-white text-sm">
                                15+
                            </div>
                            <div
                                className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-2 border-gray-900 flex items-center justify-center text-white text-sm">
                                ✓
                            </div>
                        </div>
                        <div className="text-left">
                            <div className="text-white">15+ Years of Experience</div>
                            <div className="text-sm text-gray-400">Over 5000 satisfied customers</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
