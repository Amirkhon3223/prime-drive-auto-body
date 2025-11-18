import { ImageWithFallback } from "./img-fall-back/ImageWithFallback";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { X } from "lucide-react";

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1602982618090-2899cde20858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBwYWludGluZyUyMHNwcmF5JTIwbWFza3xlbnwxfHx8fDE3NjMzNDA5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Покраска автомобиля",
      title: "Профессиональная покраска",
      category: "Покраска",
    },
    {
      src: "https://images.unsplash.com/photo-1649095108363-4fcaea93cf22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBwYWludCUyMGRldGFpbHxlbnwxfHx8fDE3NjMzNDA5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Покраска детали автомобиля",
      title: "Детальная работа",
      category: "Покраска",
    },
    {
      src: "https://images.unsplash.com/photo-1647033740615-a9ed3eeb3012?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBib2R5JTIwY2xvc2V1cHxlbnwxfHx8fDE3NjMzNDA5MjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Кузов автомобиля",
      title: "Идеальный кузов",
      category: "Кузов",
    },
    {
      src: "https://images.unsplash.com/photo-1708805282676-0c15476eb8a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZXRhaWxpbmclMjBwb2xpc2hpbmd8ZW58MXx8fHwxNzYzMzQwOTE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Полировка кузова",
      title: "Полировка кузова",
      category: "Детейлинг",
    },
    {
      src: "https://images.unsplash.com/photo-1642426312110-65ac029a400b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbmdpbmUlMjBkaWFnbm9zdGljfGVufDF8fHx8MTc2MzM0MDkyMHww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Диагностика электрики",
      title: "Диагностика авто",
      category: "Электрика",
    },
    {
      src: "https://images.unsplash.com/photo-1643701239119-0c1cd6b8c9a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBtZWNoYW5pYyUyMHdvcmslMjBoYW5kc3xlbnwxfHx8fDE3NjMzNDA5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Механический ремонт",
      title: "Ремонт и обслуживание",
      category: "Механика",
    },
  ];

  return (
    <section id="gallery" ref={ref} className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-1/3 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
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
            <span className="text-red-500 text-sm tracking-widest uppercase">Портфолио</span>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Наши работы
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Примеры выполненных проектов и наше оборудование
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedImage(index)}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-gray-900 cursor-pointer"
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

              <div className="absolute inset-0 border-2 border-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="space-y-2"
                >
                  <div className="inline-block px-3 py-1 bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-full text-xs text-red-400">
                    {image.category}
                  </div>
                  <h3 className="text-xl text-white">{image.title}</h3>
                </motion.div>
              </div>

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              ></motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "5000+", label: "Довольных клиентов" },
            { number: "15+", label: "Лет опыта" },
            { number: "99%", label: "Качество работ" },
            { number: "24/7", label: "Поддержка" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1 + i * 0.1, type: "spring" }}
              className="text-center bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-red-500/50 transition-colors duration-300"
            >
              <div className="text-3xl lg:text-4xl bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="max-w-5xl w-full"
          >
            <ImageWithFallback
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="w-full h-auto rounded-xl border border-red-500/50 shadow-2xl shadow-red-500/20"
            />
            <div className="mt-4 text-center">
              <h3 className="text-2xl text-white">{images[selectedImage].title}</h3>
              <p className="text-gray-400 mt-2">{images[selectedImage].category}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}