import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, X } from "lucide-react";
import { workExperience, education } from "../../data/experience";
import type { ExperienceItem } from "../../types";

type Tab = "work" | "education";

function TimelineCard({
  title,
  subtitle,
  date,
  badge,
  logo,
  onOpen,
  clickable,
}: ExperienceItem & { onOpen: () => void; clickable: boolean }) {
  const className = `w-full text-left backdrop-blur-sm bg-[var(--bg-card)]/80 border border-primary/10 ${clickable ? "hover:border-primary/35" : ""} rounded-xl p-3 shadow-md ${clickable ? "hover:shadow-primary/10" : ""} transition-all duration-300`;
  const inner = (
    <div className="grid grid-cols-[112px_1fr] gap-3 items-stretch">
      <div className="rounded-lg border border-primary/15 bg-primary/8 flex items-center justify-center p-3 min-h-[92px]">
        {logo ? (
          <img
            src={logo}
            alt={badge ?? "Company logo"}
            className="h-12 w-auto max-w-full object-contain"
          />
        ) : (
          <span className="text-primary font-semibold text-sm">
            {badge ?? "EXP"}
          </span>
        )}
      </div>

      <div className="flex flex-col justify-center">
        <h3 className="font-semibold text-[var(--c-title)] text-sm leading-snug">
          {title}
        </h3>
        <span className="text-primary text-xs font-medium mt-1 leading-tight">
          {subtitle}
        </span>
        <div className="flex items-center gap-1.5 mt-2 text-xs text-[var(--c-muted)]">
          <Calendar size={11} />
          {date}
        </div>
        {clickable && (
          <span className="text-[10px] text-[var(--c-muted)] mt-2">
            Click for details
          </span>
        )}
      </div>
    </div>
  );
  if (!clickable) {
    return <div className={className}>{inner}</div>;
  }
  return (
    <button
      type="button"
      onClick={onOpen}
      className={className}
      aria-label={`Open details for ${title}`}
    >
      {inner}
    </button>
  );
}

function TimelineRow({
  item,
  index,
  isLast,
  onOpen,
  clickable,
}: {
  item: ExperienceItem;
  index: number;
  isLast: boolean;
  onOpen: (item: ExperienceItem) => void;
  clickable: boolean;
}) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.07 }}
      className="mb-4 md:mb-0"
    >
      <div className="grid grid-cols-[28px_1fr] items-start md:hidden">
        <div className="self-stretch flex flex-col items-center pt-3">
          <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20 shrink-0 z-10" />
          {!isLast && <div className="w-px flex-1 -mb-3 bg-primary/30" />}
        </div>
        <div className="pl-4">
          <TimelineCard
            {...item}
            onOpen={() => onOpen(item)}
            clickable={clickable}
          />
        </div>
      </div>

      <div className="hidden md:grid md:grid-cols-[1fr_28px_1fr] md:items-start">
        {/* Left slot */}
        <div className={isLeft ? "pr-5" : ""}>
          {isLeft && (
            <TimelineCard
              {...item}
              onOpen={() => onOpen(item)}
              clickable={clickable}
            />
          )}
        </div>

        {/* Center connector */}
        <div className="self-stretch flex flex-col items-center pt-3">
          <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20 shrink-0 z-10" />
          {!isLast && <div className="w-px flex-1 -mb-3 bg-primary/30" />}
        </div>

        {/* Right slot */}
        <div className={!isLeft ? "pl-5" : ""}>
          {!isLeft && (
            <TimelineCard
              {...item}
              onOpen={() => onOpen(item)}
              clickable={clickable}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const [tab, setTab] = useState<Tab>("work");
  const [activeItem, setActiveItem] = useState<ExperienceItem | null>(null);
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
                onOpen={setActiveItem}
                clickable={tab === "work"}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/45 backdrop-blur-sm p-4 flex items-center justify-center"
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-xl rounded-2xl border border-primary/20 bg-[var(--bg-card)] p-6 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg border border-primary/20 bg-primary/10 flex items-center justify-center p-2">
                    {activeItem.logo ? (
                      <img
                        src={activeItem.logo}
                        alt={activeItem.badge ?? "Company logo"}
                        className="h-8 w-auto object-contain"
                      />
                    ) : (
                      <span className="text-primary font-semibold text-xs">
                        {activeItem.badge ?? "EXP"}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[var(--c-title)] leading-tight">
                      {activeItem.title}
                    </h3>
                    <p className="text-sm text-primary mt-0.5">
                      {activeItem.subtitle}
                    </p>
                    <p className="text-xs text-[var(--c-muted)] mt-1">
                      {activeItem.date}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
                  className="h-8 w-8 rounded-lg border border-primary/20 text-[var(--c-muted)] hover:text-[var(--c-title)] hover:bg-primary/10 transition-colors duration-200 flex items-center justify-center"
                  aria-label="Close details modal"
                >
                  <X size={15} />
                </button>
              </div>

              <ul className="space-y-2 pt-3 border-t border-primary/10">
                {(activeItem.bullets && activeItem.bullets.length > 0
                  ? activeItem.bullets
                  : ["Add resume bullet points for this role."]
                ).map((bullet, idx) => (
                  <li
                    key={`${activeItem.title}-modal-bullet-${idx}`}
                    className="text-sm leading-relaxed text-[var(--c-text)]"
                  >
                    • {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
