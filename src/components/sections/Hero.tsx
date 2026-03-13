import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Linkedin, Github, Mail, ArrowDown, MessageCircle } from "lucide-react";
import { useVisitorCount } from "../../hooks/useVisitorCount";

function BlobProfileImage() {
  return (
    <svg
      viewBox="0 0 200 187"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="w-44 md:w-80 fill-primary drop-shadow-2xl"
    >
      <mask id="blob-mask" maskUnits="userSpaceOnUse">
        <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
      </mask>
      <g mask="url(#blob-mask)">
        <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
        <image
          xlinkHref="/assets/img/larry.png"
          x="18"
          y="-3"
          width="170"
          height="190"
          preserveAspectRatio="xMidYMid slice"
        />
      </g>
    </svg>
  );
}

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/lqla",
    Icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:larryquocla@gmail.com",
    Icon: Mail,
    label: "Email",
  },
  {
    href: "https://github.com/larrylaa",
    Icon: Github,
    label: "GitHub",
  },
];

export function Hero() {
  const visitCount = useVisitorCount();

  return (
    <section
      id="home"
      className="hero-bg relative min-h-[95vh] flex items-center overflow-hidden"
    >
      {/* Subtle dot-grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(hsl(215 69% 61% / 0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Soft radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 60%, hsl(215 28% 8% / 0.25) 100%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-0 md:min-h-[95vh] md:flex md:items-center w-full">
        <div className="grid md:grid-cols-[auto_1fr] gap-3 items-center w-full">
          {/* Vertical social links – desktop only */}
          <div className="hidden md:flex flex-col gap-5 items-center">
            {socialLinks.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-white/70 hover:text-white transition-all duration-200 hover:-translate-y-1 transform"
              >
                <Icon size={21} />
              </a>
            ))}
            <div className="w-px h-16 bg-white/30 mt-2" />
          </div>

          {/* Main hero content */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-8 md:gap-8 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="md:max-w-[520px]"
            >
              <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight mb-3">
                Greetings,
                <br />
                I'm Larry
              </h1>

              <h3 className="text-lg md:text-xl font-medium text-white/60 mb-5">
                Aspiring{" "}
                <TypeAnimation
                  sequence={[
                    "Software Engineer",
                    2000,
                    "Full-Stack Web Dev",
                    2000,
                    "DevOps Engineer",
                    2000,
                    "Cloud Engineer",
                    2000,
                  ]}
                  wrapper="span"
                  cursor
                  repeat={Infinity}
                  style={{ color: "hsl(215, 69%, 61%)" }}
                />
              </h3>

              <p className="text-white/50 max-w-md leading-relaxed mb-8 text-sm md:text-base">
                Junior @ Cal Poly Pomona studying Computer Science, seeking
                Summer 2026 Internship Opportunities.
              </p>

              {/* Mobile social row */}
              <div className="flex md:hidden justify-center gap-5 mb-7">
                {socialLinks.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="text-white/40 hover:text-primary transition-colors duration-200"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>

              <div className="flex justify-center md:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 shadow-xl shadow-primary/30"
                >
                  Contact Me <MessageCircle size={17} />
                </a>
              </div>

              {visitCount !== null && (
                <p className="text-white/30 text-sm mt-5 font-medium text-center md:text-left">
                  Site Visits:{" "}
                  <span className="text-primary font-semibold">
                    {visitCount}
                  </span>
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex justify-center flex-shrink-0"
            >
              <BlobProfileImage />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-1">
          <a
            href="#about"
            className="text-white/30 hover:text-primary transition-colors duration-200 flex flex-col items-center gap-1 text-xs"
          >
            <span>Scroll Down</span>
            <ArrowDown size={17} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
