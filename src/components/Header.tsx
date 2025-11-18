import { Menu, Phone, X } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setMobileMenuOpen(false);
        }
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-gray-900/95 backdrop-blur-lg border-b border-red-500/20 shadow-lg shadow-red-500/10"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-3"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-red-500 blur-lg opacity-50 rounded-lg"></div>
                            <div
                                className="relative w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center border border-red-500/50 overflow-hidden">
                                <img src="/pd-logo.jpg" alt="Prime Drive Logo" className="w-full h-full object-cover"/>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-lg text-white">Prime Drive</h1>
                            <p className="text-xs bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                                AUTO BODY
                            </p>
                        </div>
                    </motion.div>

                    <nav className="hidden md:flex items-center gap-8">
                        {["services", "pricing", "gallery", "contact"].map((item, i) => (
                            <motion.button
                                key={item}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                onClick={() => scrollToSection(item)}
                                className="text-gray-300 hover:text-red-500 transition-colors relative group"
                            >
                                {item === "services" && "Услуги"}
                                {item === "pricing" && "Цены"}
                                {item === "gallery" && "Работы"}
                                {item === "contact" && "Контакты"}
                                <span
                                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
                            </motion.button>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <motion.a
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            href="tel:+13472170008"
                            className="hidden lg:flex items-center gap-2 text-gray-300 hover:text-red-500 transition-colors"
                        >
                            <Phone className="w-4 h-4"/>
                            <span>(347) 217-0008</span>
                        </motion.a>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Button
                                onClick={() => scrollToSection("contact")}
                                className="hidden md:block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 border border-red-500/50 shadow-lg shadow-red-500/30"
                            >
                                Записаться
                            </Button>
                        </motion.div>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-white"
                        >
                            {mobileMenuOpen ? <X/> : <Menu/>}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-gray-900 border-t border-red-500/20"
                    >
                        <div className="container mx-auto px-4 py-4 space-y-4">
                            {["services", "pricing", "gallery", "contact"].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className="block w-full text-left text-gray-300 hover:text-red-500 transition-colors py-2"
                                >
                                    {item === "services" && "Услуги"}
                                    {item === "pricing" && "Цены"}
                                    {item === "gallery" && "Работы"}
                                    {item === "contact" && "Контакты"}
                                </button>
                            ))}
                            <Button
                                onClick={() => scrollToSection("contact")}
                                className="w-full bg-gradient-to-r from-red-600 to-red-700"
                            >
                                Записаться
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
