import { Button } from "./ui/button";
import { Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./img-fall-back/ImageWithFallback";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import logoImage from "../assets/b201d57f043b579a6066d49046a125342b9088ae.png";
import shopImage from "../assets/6953b8dcb8983ddc3250ba4a450d47a7ba042764.png";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={ref} className="pt-20 relative overflow-hidden">
      <div className="relative h-[100vh] bg-gray-950">
        <motion.div style={{ y }} className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1571290130194-08c1cf854980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjBuaWdodHxlbnwxfHx8fDE3NjMzMzQyMjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Prime Drive Auto Body Repair"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/95 to-gray-950/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
        </motion.div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-600/30 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
        ></motion.div>

        <motion.div style={{ opacity }} className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <ImageWithFallback
                    src={logoImage}
                    alt="Prime Drive Auto Body Logo"
                    className="h-32 w-auto mb-6"
                  />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-5xl lg:text-6xl text-white"
                >
                  Восстановим ваш
                  <span className="block bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent mt-2">
                    автомобиль
                  </span>
                  <span className="block text-white mt-2">как новый</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-xl text-gray-300 max-w-lg"
                >
                  Кузовной ремонт • Покраска • Электрика • Реставрация
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button
                    onClick={scrollToContact}
                    size="lg"
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 border border-red-500/50 shadow-lg shadow-red-500/50 group"
                  >
                    Записаться на ремонт
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    onClick={scrollToContact}
                    size="lg"
                    variant="outline"
                    className="bg-white/5 text-white border-white/20 hover:bg-white/10 backdrop-blur-sm"
                  >
                    Бесплатная оценка
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="flex flex-col gap-4 pt-4"
                >
                  <div className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                      <Phone className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Звоните</div>
                      <a
                        href="tel:+13472170008"
                        className="text-white hover:text-red-500 transition-colors"
                      >
                        (347) 217-0008
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                      <MapPin className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Адрес</div>
                      <span className="text-white">2705 W 16th St, Brooklyn, NY</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                      <Clock className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Режим работы</div>
                      <span className="text-white">Пн-Пт: 8:00-18:00 | Сб-Вс: 9:00-18:00</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="hidden lg:block"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl blur-2xl opacity-30"></div>
                  <ImageWithFallback
                    src={shopImage}
                    alt="Prime Drive Auto Body Shop"
                    className="relative rounded-2xl border border-red-500/30 shadow-2xl shadow-red-500/20"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-red-500/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-red-500 rounded-full"
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
