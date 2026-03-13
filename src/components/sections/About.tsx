import { motion } from "framer-motion";
import { Download } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--c-title)] mb-1">
            About Me
          </h2>
          <span className="text-sm text-[var(--c-muted)]">My Background</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-primary/20 rounded-2xl blur-xl" />
              <img
                src="/assets/img/about.png"
                alt="Larry La"
                className="relative w-64 md:w-72 rounded-2xl shadow-2xl shadow-primary/20 ring-2 ring-primary/30 object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            <p className="text-[var(--c-text)] leading-[1.4] mb-8 text-sm md:text-base">
              I'm a motivated college junior pursuing a Computer Science degree,
              backed by multiple internship experiences in software engineering
              and information technology. I have a strong interest in cloud
              technologies and have gained knowledge of AWS through internships,
              personal projects, and certifications.
              <br />
              <br />
              My goal is to further cultivate my skills in hands-on environments
              where I can make meaningful contributions. At the moment, I am
              particularly interested in full-stack software engineering and
              cloud roles.
            </p>

            <a
              download
              href="/assets/pdf/Larry_La_Resume.pdf"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-primary/25"
            >
              Download Resume <Download size={17} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
