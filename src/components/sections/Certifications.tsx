import { motion } from "framer-motion";
import { certifications } from "../../data/certifications";

export function Certifications() {
  return (
    <section id="certifications" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--c-title)] mb-1">
            Certifications
          </h2>
          <span className="text-sm text-[var(--c-muted)]">
            My Professional Certifications
          </span>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.name}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative backdrop-blur-sm bg-[var(--bg-card)]/80 border border-primary/10 hover:border-primary/40 rounded-2xl p-6 shadow-lg shadow-black/5 hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center w-52 h-52"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={cert.image}
                alt={cert.name}
                className="relative w-38 h-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
