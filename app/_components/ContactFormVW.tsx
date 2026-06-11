"use client";

import { useState } from "react";

export default function ContactFormVW() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSent(true);
  }

  return (
    <form className={`form${sent ? " sent" : ""}`} onSubmit={handleSubmit}>
      <h3>Gratis offerte aanvragen</h3>
      <p className="sub">Ik antwoord meestal binnen één werkdag.</p>
      <div className="row">
        <div className="field">
          <label htmlFor="f-naam">Naam</label>
          <input id="f-naam" type="text" placeholder="Voor- en achternaam" required />
        </div>
        <div className="field">
          <label htmlFor="f-tel">Telefoon</label>
          <input id="f-tel" type="tel" placeholder="0473 69 47 23" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="f-mail">E-mail</label>
        <input id="f-mail" type="email" placeholder="jij@email.be" required />
      </div>
      <div className="field">
        <label htmlFor="f-type">Soort werk</label>
        <select id="f-type">
          <option>Binnenschilderwerk</option>
          <option>Buitenschilderwerk</option>
          <option>Decoratieve techniek</option>
          <option>Spuit- &amp; lakwerk</option>
          <option>Iets anders</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-msg">Jouw project</label>
        <textarea id="f-msg" placeholder="Vertel kort wat je gedaan wil hebben…" />
      </div>
      <button className="btn btn-primary btn-lg" type="submit" disabled={loading}>
        {loading ? "Verzenden…" : "Verstuur aanvraag"}
        {!loading && (
          <svg className="ico" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        )}
      </button>

      {sent && (
        <div className="form-ok show">
          <div className="ic">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3>Bedankt!</h3>
          <p className="sub" style={{ margin: 0 }}>
            Je aanvraag is verzonden. Ik neem snel contact met je op.
          </p>
        </div>
      )}
    </form>
  );
}
