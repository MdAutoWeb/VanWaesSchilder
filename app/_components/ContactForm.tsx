"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormState {
  name: string;
  email: string;
  phone: string;
  type: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSent(true);
  }

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center py-16 text-center"
        >
          <div className="mb-4 flex h-14 w-14 items-center justify-center bg-yellow">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A2744" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-navy">Bericht verzonden!</h3>
          <p className="text-sm font-light text-navy/60">
            Ik neem zo snel mogelijk contact met u op.
          </p>
          <button
            onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", type: "", message: "" }); }}
            className="mt-6 text-sm font-light text-navy/50 underline underline-offset-2 hover:text-navy transition-colors"
          >
            Stuur nog een bericht
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold tracking-wider uppercase text-navy/50">
                Naam *
              </label>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Jan Janssen"
                className="border border-navy/15 px-4 py-3 text-sm font-light text-navy outline-none placeholder:text-navy/30 focus:border-navy transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold tracking-wider uppercase text-navy/50">
                E-mail *
              </label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="jan@voorbeeld.be"
                className="border border-navy/15 px-4 py-3 text-sm font-light text-navy outline-none placeholder:text-navy/30 focus:border-navy transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold tracking-wider uppercase text-navy/50">
                Telefoon
              </label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+32 XXX XX XX XX"
                className="border border-navy/15 px-4 py-3 text-sm font-light text-navy outline-none placeholder:text-navy/30 focus:border-navy transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold tracking-wider uppercase text-navy/50">
                Type werk
              </label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="border border-navy/15 px-4 py-3 text-sm font-light text-navy outline-none focus:border-navy transition-colors appearance-none bg-white"
              >
                <option value="">Selecteer een optie</option>
                <option>Binnenschilderwerk</option>
                <option>Buitenschilderwerk</option>
                <option>Decoratieve technieken</option>
                <option>Behangwerken</option>
                <option>Houtbehandeling</option>
                <option>Andere</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold tracking-wider uppercase text-navy/50">
              Bericht *
            </label>
            <textarea
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Beschrijf uw project..."
              className="border border-navy/15 px-4 py-3 text-sm font-light text-navy outline-none placeholder:text-navy/30 focus:border-navy transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 flex items-center justify-center gap-2 bg-navy py-4 text-sm font-semibold text-white transition-colors hover:bg-navy-light disabled:opacity-60"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" opacity="0.3" />
                  <path d="M12 2a10 10 0 0 1 10 10" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Verzenden...
              </span>
            ) : (
              <>Stuur Bericht →</>
            )}
          </button>

          <p className="text-center text-xs font-light text-navy/35">
            Ik reageer binnen 24 uur op uw aanvraag.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
