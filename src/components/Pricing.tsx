import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Check, Star } from "lucide-react";
import { Button } from "./ui/button";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function Pricing() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const scrollToContact = () => {
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const pricingTiers = [
        {
            name: "Minor Repair",
            price: "from $100",
            description: "Small scratches and paint damage",
            features: [
                "Removal of minor scratches",
                "Spot painting",
                "Surface polishing",
                "Quick turnaround",
            ],
            color: "from-blue-500 to-blue-600",
        },
        {
            name: "Medium Repair",
            price: "from $2,500",
            description: "Moderate damage",
            features: [
                "Body work",
                "Part painting",
                "Dent repair",
                "Part replacement",
                "Quality guarantee",
            ],
            highlighted: true,
            color: "from-red-500 to-red-600",
        },
        {
            name: "Major Repair",
            price: "from $8,000",
            description: "Serious accident damage",
            features: [
                "Frame alignment",
                "Full paint job",
                "Parts replacement",
                "Electrical and mechanical",
                "Complete diagnostics",
                "Extended warranty",
            ],
            color: "from-purple-500 to-purple-600",
        },
    ];

    return (
        <section id="pricing" ref={ref} className="py-20 bg-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.15, 0.1],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
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
                        <span className="text-red-500 text-sm tracking-widest uppercase">Transparent Pricing</span>
                    </motion.div>
                    <h2 className="text-4xl lg:text-5xl text-white mb-4">
                        Fair Pricing
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Final price depends on damage complexity and car model
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricingTiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={tier.highlighted ? 'md:scale-105' : ''}
                        >
                            <Card
                                className={`border-gray-800 bg-gray-950/50 backdrop-blur-sm transition-all duration-300 group relative overflow-hidden h-full ${
                                    tier.highlighted ? 'border-red-500/50 shadow-2xl shadow-red-500/20' : 'hover:border-gray-700'
                                }`}
                            >
                                <motion.div
                                    animate={{
                                        opacity: [0.05, 0.1, 0.05],
                                    }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className={`absolute inset-0 bg-gradient-to-br ${tier.color}`}
                                ></motion.div>

                                {tier.highlighted && (
                                    <motion.div
                                        animate={{
                                            opacity: [0.5, 1, 0.5],
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tier.color}`}
                                    ></motion.div>
                                )}

                                <CardHeader className="relative">
                                    {tier.highlighted && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                                            transition={{ delay: 0.4 }}
                                            className="flex items-center gap-1 text-xs text-red-500 mb-2"
                                        >
                                            <Star className="w-3 h-3 fill-red-500"/>
                                            MOST POPULAR
                                            <Star className="w-3 h-3 fill-red-500"/>
                                        </motion.div>
                                    )}
                                    <CardTitle className="text-2xl text-white">{tier.name}</CardTitle>
                                    <motion.div
                                        initial={{ scale: 0.5 }}
                                        animate={isInView ? { scale: 1 } : {}}
                                        transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                                        className={`text-4xl bg-gradient-to-r ${tier.color} bg-clip-text text-transparent my-3`}
                                    >
                                        {tier.price}
                                    </motion.div>
                                    <CardDescription className="text-gray-400">{tier.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="relative">
                                    <ul className="space-y-3 mb-6">
                                        {tier.features.map((feature, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                                transition={{ delay: 0.5 + i * 0.1 }}
                                                className="flex items-start gap-3"
                                            >
                                                <div
                                                    className={`mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br ${tier.color} flex items-center justify-center flex-shrink-0`}>
                                                    <Check className="w-3 h-3 text-white"/>
                                                </div>
                                                <span className="text-gray-300">{feature}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                    <Button
                                        onClick={scrollToContact}
                                        className={`w-full ${
                                            tier.highlighted
                                                ? `bg-gradient-to-r ${tier.color} hover:opacity-90 border border-red-500/50 shadow-lg shadow-red-500/30`
                                                : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
                                        } transition-all duration-300`}
                                    >
                                        Get Quote
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="mt-12 text-center"
                >
                    <div
                        className="inline-block bg-gray-950/50 backdrop-blur-sm border border-gray-800 rounded-lg px-6 py-4">
                        <p className="text-gray-400">
                            <span className="text-red-500">*</span> Initial assessment is free!
                            <span className="text-gray-500 ml-2">Final cost after diagnostics</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
