import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Mail, MapPin, Send, CheckCircle } from "lucide-react";

const SEND_URL =
  "https://ajvqwe6fc3.execute-api.us-east-1.amazonaws.com/sendemail";

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

const EMPTY: FormState = { name: "", email: "", company: "", message: "" };

const contactInfo = [
  {
    Icon: Linkedin,
    label: "LinkedIn",
    display: "www.linkedin.com/in/lqla",
    href: "https://www.linkedin.com/in/lqla",
  },
  {
    Icon: Mail,
    label: "Email",
    display: "larryquocla@gmail.com",
    href: "mailto:larryquocla@gmail.com",
  },
  {
    Icon: MapPin,
    label: "Location",
    display: "Los Angeles Metropolitan Area",
    href: "https://maps.app.goo.gl/wQo4BTvhJvCUPTdw6",
  },
];

export function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const set =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
      if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
    };

  const validate = (): boolean => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!form.email.trim()) errs.email = "Required";
    if (!form.company.trim()) errs.company = "Required";
    if (!form.message.trim()) errs.message = "Required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate() || sending) return;

    setSending(true);
    const body = `New contact form submission:\n\nName: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nMessage: ${form.message}`;

    try {
      await fetch(SEND_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Message: body }),
      });
    } catch {
      // no-cors — can't read response, assume success
    }

    setSending(false);
    setSent(true);
    setForm(EMPTY);
    setTimeout(() => setSent(false), 4000);
  };

  const inputBase =
    "w-full bg-[var(--bg-input)] rounded-xl px-4 py-3 text-sm text-[var(--c-title)] placeholder:text-[var(--c-muted)] outline-none transition-colors duration-200 border ";
  const inputCls = (f: keyof FormState) =>
    inputBase +
    (errors[f]
      ? "border-red-400 focus:border-red-400"
      : "border-primary/10 focus:border-primary/50");

  return (
    <section id="contact" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--c-title)] mb-1">
            Contact Me
          </h2>
          <span className="text-sm text-[var(--c-muted)]">
            Let's Get In Touch!
          </span>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_2fr] gap-14">
          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {contactInfo.map(({ Icon, label, display, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-[var(--c-title)] text-sm">
                    {label}
                  </h3>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--c-text)] text-sm hover:text-primary transition-colors duration-200"
                  >
                    {display}
                  </a>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <input
                  className={inputCls("name")}
                  placeholder="Name"
                  value={form.name}
                  onChange={set("name")}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  className={inputCls("email")}
                  placeholder="Email"
                  value={form.email}
                  onChange={set("email")}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <input
                className={inputCls("company")}
                placeholder="Company"
                value={form.company}
                onChange={set("company")}
              />
              {errors.company && (
                <p className="text-red-400 text-xs mt-1">{errors.company}</p>
              )}
            </div>

            <div>
              <textarea
                className={`${inputCls("message")} resize-none`}
                placeholder="Message"
                rows={6}
                value={form.message}
                onChange={set("message")}
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={sending}
              className="self-start inline-flex items-center gap-2 bg-primary hover:bg-primary-hover disabled:opacity-60 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-primary/20 cursor-pointer disabled:cursor-not-allowed"
            >
              {sending ? "Sending…" : "Send Message"}
              <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>

      {/* Success toast */}
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 md:bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-2xl shadow-2xl shadow-primary/30 text-sm font-medium"
          >
            <CheckCircle size={18} /> Thank you! I'll be in touch soon.
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
