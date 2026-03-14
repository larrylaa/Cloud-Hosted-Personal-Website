import { motion } from "framer-motion";
import { skillGroups } from "../../data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-32 section-soft">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--c-title)] mb-1">
            Skills
          </h2>
          <span className="text-sm text-[var(--c-muted)]">
            My Technical Skills
          </span>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: gi * 0.07 }}
              className="backdrop-blur-sm bg-[var(--bg-card)]/80 border border-primary/10 hover:border-primary/35 rounded-2xl p-6 shadow-lg shadow-black/5 hover:shadow-primary/10 transition-all duration-300 group"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-primary/10">
                <i
                  className={`${group.categoryIcon} text-3xl`}
                  aria-hidden="true"
                />
                <h3 className="font-semibold text-[var(--c-title)] text-base">
                  {group.category}
                </h3>
              </div>

              {/* Icon grid */}
              <div className="flex flex-wrap gap-4 justify-center">
                {group.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: gi * 0.04 + si * 0.04,
                    }}
                    className="flex flex-col items-center gap-1.5"
                  >
                    {skill.name === "AWS SAM" ? (
                      <img
                        src="/assets/img/sam.png"
                        alt="AWS SAM"
                        className="text-4xl w-10 h-10 object-contain transition-transform duration-300 hover:scale-105 hover:-translate-y-0.5"
                        title={skill.name}
                      />
                    ) : skill.name === "GitHub Copilot" ? (
                      <img
                        src="/assets/img/copilot.png"
                        alt="GitHub Copilot"
                        className="text-4xl w-10 h-10 object-contain transition-transform duration-300 hover:scale-105 hover:-translate-y-0.5"
                        title={skill.name}
                      />
                    ) : (
                      <i
                        className={`${skill.icon} text-4xl transition-transform duration-300 hover:scale-105 hover:-translate-y-0.5`}
                        title={skill.name}
                        aria-label={skill.name}
                      />
                    )}
                    <span className="text-[10px] text-[var(--c-muted)] font-medium leading-none">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
