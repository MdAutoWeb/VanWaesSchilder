"use client";

import { useState } from "react";
import { WORK_TYPES } from "../lib/leads/types";

export default function ContactFormVW() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      naam: String(data.get("naam") ?? "").trim(),
      telefoon: String(data.get("telefoon") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      typeWerk: String(data.get("typeWerk") ?? "").trim(),
      gemeente: String(data.get("gemeente") ?? "").trim(),
      omschrijving: String(data.get("omschrijving") ?? "").trim(),
    };

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
    setSent(true);
    form.reset();
  }

  return (
    <form className={`form${sent ? " sent" : ""}`} onSubmit={handleSubmit}>
      <h3>Gratis offerte aanvragen</h3>
      <p className="sub">Vul het formulier in. We nemen zo snel mogelijk contact met u op.</p>

      <div className="row">
        <div className="field">
          <label htmlFor="f-naam">Naam</label>
          <input
            id="f-naam"
            name="naam"
            type="text"
            placeholder="Voor- en achternaam"
            required
            disabled={loading || sent}
          />
        </div>
        <div className="field">
          <label htmlFor="f-tel">Telefoon</label>
          <input
            id="f-tel"
            name="telefoon"
            type="tel"
            placeholder="0473 69 47 23"
            required
            disabled={loading || sent}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="f-mail">E-mail</label>
        <input
          id="f-mail"
          name="email"
          type="email"
          placeholder="u@email.be"
          required
          disabled={loading || sent}
        />
      </div>

      <div className="row">
        <div className="field">
          <label htmlFor="f-type">Type werk</label>
          <select id="f-type" name="typeWerk" required disabled={loading || sent}>
            {WORK_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="f-gemeente">Gemeente</label>
          <input
            id="f-gemeente"
            name="gemeente"
            type="text"
            placeholder="Bv. Oostende"
            required
            disabled={loading || sent}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="f-msg">Omschrijving</label>
        <textarea
          id="f-msg"
          name="omschrijving"
          placeholder="Vertel kort wat u gedaan wil hebben…"
          disabled={loading || sent}
        />
      </div>

      <button className="btn btn-primary btn-lg" type="submit" disabled={loading || sent}>
        {loading ? "Verwerken…" : "Verstuur aanvraag"}
        {!loading && (
          <svg
            className="ico"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        )}
      </button>

      {sent && (
        <div className="form-ok show">
          <div className="ic">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3>Aanvraag ontvangen</h3>
          <p className="sub" style={{ margin: 0 }}>
            We contacteren u binnen 24u.
          </p>
        </div>
      )}
    </form>
  );
}
