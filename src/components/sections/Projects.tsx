import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ExternalLink } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { projects } from "../../data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-32 section-soft">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--c-title)] mb-1">
            Projects
          </h2>
          <span className="text-sm text-[var(--c-muted)]">My Recent Works</span>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop
          className="pb-16 rounded-2xl"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title}>
              <div className="grid md:grid-cols-2 gap-10 items-center px-14 md:px-14 pt-4 pb-10">
                {/* Image card with hover reveal overlay */}
                <div
                  className="relative overflow-hidden rounded-2xl group bg-[var(--bg-card)] shadow-xl shadow-black/10"
                  style={{ height: "280px" }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Glassmorphism overlay revealed on hover */}
                  <div className="absolute inset-0 backdrop-blur-md bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex items-center justify-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-white font-medium text-sm px-5 py-2.5 rounded-xl border border-white/40 hover:bg-white/10 transition-colors duration-200"
                    >
                      <ExternalLink size={16} /> View Project
                    </a>
                  </div>
                </div>

                {/* Project info */}
                <div>
                  <h3 className="text-xl font-semibold text-[var(--c-title)] mb-3">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-[11px] font-medium text-[var(--c-muted)] mb-3">
                    {project.impact}
                  </p>

                  <p className="text-[var(--c-text)] text-sm leading-relaxed mb-7">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white text-sm px-5 py-2.5 rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-primary/20"
                  >
                    {project.linkLabel} <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
