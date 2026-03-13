import { Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary to-primary-hover pt-12 pb-8 mt-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <h2 className="text-white text-2xl font-semibold">Larry</h2>

          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/lqla/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-white/70 hover:text-white transition-colors duration-200 hover:-translate-y-0.5 transform"
            >
              <Linkedin size={21} />
            </a>
            <a
              href="https://github.com/larrylaa"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-white/70 hover:text-white transition-colors duration-200 hover:-translate-y-0.5 transform"
            >
              <Github size={21} />
            </a>
            <a
              href="mailto:larryquocla@gmail.com"
              aria-label="Email"
              className="text-white/70 hover:text-white transition-colors duration-200 hover:-translate-y-0.5 transform"
            >
              <Mail size={21} />
            </a>
          </div>
        </div>

        <p className="text-white/50 text-sm text-center">
          © Larry La. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
