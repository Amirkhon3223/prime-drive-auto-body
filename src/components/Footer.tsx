import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
    return (
        <footer className="bg-gray-950 text-white py-12 relative overflow-hidden border-t border-gray-800">
            <div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>

            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.03, 0.06, 0.03],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute -top-48 left-1/2 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"
            ></motion.div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="relative">
                                <div className="absolute inset-0 bg-red-500 blur-lg opacity-50 rounded-lg"></div>
                                <div
                                    className="relative w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center border border-red-500/50 overflow-hidden">
                                    <img src="/pd-logo.jpg" alt="Prime Drive Logo"
                                         className="w-full h-full object-cover"/>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg">Prime Drive</h3>
                                <p className="text-sm text-gray-500">AUTO BODY</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Профессиональный ремонт и реставрация автомобилей в Бруклине с 2009 года.
                        </p>
                    </div>

                    <div>
                    </div>

                    <div>
                        <h3 className="text-lg mb-4 text-white">Контакты</h3>
                        <div className="space-y-4 text-sm">
                            <motion.a
                                href="tel:+13472170008"
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors group"
                            >
                                <div
                                    className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 group-hover:border-red-500/50 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                                    <Phone className="w-4 h-4"/>
                                </div>
                                <span>(347) 217-0008</span>
                            </motion.a>

                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-start gap-3 text-gray-400 group"
                            >
                                <div
                                    className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 group-hover:border-red-500/50 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                                    <MapPin className="w-4 h-4"/>
                                </div>
                                <span>2705 W 16th St, Brooklyn, NY 11224</span>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-3 text-gray-400 group"
                            >
                                <div
                                    className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 group-hover:border-red-500/50 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                                    <Mail className="w-4 h-4"/>
                                </div>
                                <span>primedrive@yahoo.com</span>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} Prime Drive Auto Body Repair. Все права защищены.
                        </p>
                        <div className="flex gap-6 text-sm">
                            {["Политика конфиденциальности", "Условия использования", "Cookie"].map((item, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -2 }}
                                    className="text-gray-500 hover:text-red-500 transition-colors"
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
