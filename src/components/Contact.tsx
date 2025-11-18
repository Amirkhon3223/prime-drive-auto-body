import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { motion, useInView } from "motion/react";
import { sendToTelegram } from "../utils/telegram";

export function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const success = await sendToTelegram(formData);

        if (success) {
            toast.success("Thank you! We will contact you shortly.", {
                style: {
                    background: '#1f2937',
                    color: '#fff',
                    border: '1px solid #ef4444',
                },
            });
            setFormData({ name: "", phone: "", email: "", message: "" });
        } else {
            toast.error("Submission error. Please call us!", {
                style: {
                    background: '#1f2937',
                    color: '#fff',
                    border: '1px solid #ef4444',
                },
            });
        }
    };

    const hours = [
        { day: "Monday", time: "8:00 AM - 6:00 PM" },
        { day: "Tuesday", time: "8:00 AM - 6:00 PM" },
        { day: "Wednesday", time: "8:00 AM - 6:00 PM" },
        { day: "Thursday", time: "8:00 AM - 6:00 PM" },
        { day: "Friday", time: "8:00 AM - 6:00 PM" },
        { day: "Saturday", time: "9:00 AM - 6:00 PM" },
        { day: "Sunday", time: "9:00 AM - 6:00 PM" },
    ];

    return (
        <section id="contact" ref={ref} className="py-20 bg-gray-900 relative overflow-hidden">
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.05, 0.1, 0.05],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"
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
                        <span className="text-red-500 text-sm tracking-widest uppercase">Contact</span>
                    </motion.div>
                    <h2 className="text-4xl lg:text-5xl text-white mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Schedule a repair or get a free estimate
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="md:col-span-2 lg:col-span-1"
                    >
                        <Card
                            className="border-gray-800 bg-gray-950/50 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300 h-full">
                            <CardHeader>
                                <CardTitle className="text-white">Send Request</CardTitle>
                                <CardDescription className="text-gray-400">
                                    Fill out the form and we'll contact you within an hour
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <Input
                                            placeholder="Your name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                            className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-red-500/20"
                                        />
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <Input
                                            type="tel"
                                            placeholder="Phone"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            required
                                            className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-red-500/20"
                                        />
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.6 }}
                                    >
                                        <Input
                                            type="email"
                                            placeholder="Email (optional)"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-red-500/20"
                                        />
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.7 }}
                                    >
                                        <Textarea
                                            placeholder="Describe your car problem"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            rows={4}
                                            required
                                            className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-red-500/20"
                                        />
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.8 }}
                                    >
                                        <Button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 border border-red-500/50 shadow-lg shadow-red-500/30 group"
                                        >
                                            Submit Request
                                            <Send
                                                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                                        </Button>
                                    </motion.div>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Card
                            className="border-gray-800 bg-gray-950/50 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300 h-full">
                            <CardHeader>
                                <CardTitle className="text-white">Contact Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <motion.a
                                    href="tel:+13472170008"
                                    whileHover={{ x: 5 }}
                                    className="flex items-start gap-4 p-4 rounded-lg bg-gray-900/50 hover:bg-gray-900 border border-gray-800 hover:border-red-500/50 transition-all duration-300 group"
                                >
                                    <div
                                        className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-white"/>
                                    </div>
                                    <div>
                                        <div className="text-white group-hover:text-red-400 transition-colors">(347)
                                            217-0008
                                        </div>
                                        <div className="text-sm text-gray-500">Call during business hours</div>
                                    </div>
                                </motion.a>

                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-start gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-red-500/50 transition-all duration-300"
                                >
                                    <div
                                        className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-white"/>
                                    </div>
                                    <div>
                                        <div className="text-white">2705 W 16th St</div>
                                        <div className="text-sm text-gray-500">Brooklyn, NY 11224</div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-start gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-red-500/50 transition-all duration-300"
                                >
                                    <div
                                        className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-white"/>
                                    </div>
                                    <div>
                                        <div className="text-white">primedrive@yahoo.com</div>
                                        <div className="text-sm text-gray-500">We'll respond within 24 hours</div>
                                    </div>
                                </motion.div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <Card
                            className="border-gray-800 bg-gray-950/50 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300 h-full">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-white">
                                    <Clock className="w-5 h-5 text-red-500"/>
                                    Business Hours
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {hours.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: 0.6 + index * 0.05 }}
                                            className="flex justify-between text-sm p-2 rounded hover:bg-gray-900/50 transition-colors"
                                        >
                                            <span className="text-gray-400">{item.day}</span>
                                            <span className="text-white">{item.time}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-12 rounded-xl overflow-hidden h-96 border border-gray-800 shadow-2xl shadow-red-500/10"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.2636766893486!2d-73.99315!3d40.579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c244c0c0c0c0c0%3A0x0!2s2705%20W%2016th%20St%2C%20Brooklyn%2C%20NY%2011224!5e0!3m2!1sen!2sus!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Prime Drive Auto Body Repair Location"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
}