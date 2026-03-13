import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { workExperience, education } from "../../data/experience";
import type { ExperienceItem } from "../../types";

type Tab = "work" | "education";

function TimelineCard({ title, subtitle, date }: ExperienceItem) {
  return (
    <div className="backdrop-blur-sm bg-[var(--bg-card)]/80 border border-primary/10 hover:border-primary/35 rounded-xl p-4 shadow-md hover:shadow-primary/10 transition-all duration-300">
      <h3 className="font-semibold text-[var(--c-title)] text-sm leading-snug">
        {title}
      </h3>
      <span className="text-primary text-xs font-medium block mt-1">
        {subtitle}
      </span>
      <div className="flex items-center gap-1.5 mt-2 text-xs text-[var(--c-muted)]">
        <Calendar size={11} />
        {date}
      </div>
    </div>
  );
}

function TimelineRow({
  item,
  index,
  isLast,
}: {
  item: ExperienceItem;
  index: number;
  isLast: boolean;
}) {
  const isLeft = item.side === "left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.07 }}
      className="grid grid-cols-[1fr_28px_1fr] items-start mb-0"
    >
      {/* Left slot */}
      <div className={isLeft ? "pr-5" : ""}>
        {isLeft && <TimelineCard {...item} />}
      </div>

      {/* Center connector */}
      <div className="self-stretch flex flex-col items-center pt-3">
        <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20 shrink-0 z-10" />
        {!isLast && <div className="w-px flex-1 -mb-3 bg-primary/30" />}
      </div>

      {/* Right slot */}
      <div className={!isLeft ? "pl-5" : ""}>
        {!isLeft && <TimelineCard {...item} />}
      </div>
    </motion.div>
  );
}

export function Experience() {
  const [tab, setTab] = useState<Tab>("work");
  const items = tab === "work" ? workExperience : education;

  return (
    <section id="experience" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--c-title)] mb-1">
            Experience
          </h2>
          <span className="text-sm text-[var(--c-muted)]">
            My Education & Work History
          </span>
        </motion.div>

        {/* Tab buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {(
            [
              { id: "work", label: "Work", Icon: Briefcase },
              { id: "education", label: "Education", Icon: GraduationCap },
            ] as const
          ).map(({ id, label, Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                tab === id
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "text-[var(--c-title)] hover:text-primary border border-primary/20 hover:border-primary/50"
              }`}
            >
              <Icon size={16} /> {label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            {items.map((item, i) => (
              <TimelineRow
                key={i}
                item={item}
                index={i}
                isLast={i === items.length - 1}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
