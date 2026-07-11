import type { Metadata } from "next";
import Link from "next/link";
import RevealObserver from "../_components/RevealObserver";
import { BUSINESS } from "../lib/site";

export const metadata: Metadata = {
  title: "Privacybeleid | Van Waes Schilderwerken",
  description:
    "Privacyverklaring van Van Waes Schilderwerken: welke gegevens we verzamelen, waarvoor we ze gebruiken en welke rechten u heeft.",
};

export default function PrivacybeleidPage() {
  return (
    <main>
      <RevealObserver />

      <div className="page-hero">
        <div className="container">
          <span className="kicker reveal">Juridisch</span>
          <h1 className="reveal" data-d="1">
            Privacybeleid.
          </h1>
          <p className="lead reveal" data-d="2">
            Hoe wij omgaan met uw persoonsgegevens en welke rechten u heeft.
          </p>
        </div>
      </div>

      <section className="sec">
        <div className="container">
          <article className="legal-content reveal">
            <p className="legal-updated">
              Laatst bijgewerkt: {new Date().toLocaleDateString("nl-BE")}
            </p>

            <p>
              {BUSINESS.name} ({BUSINESS.vatDisplay}) respecteert uw privacy en
              verwerkt persoonsgegevens conform de Algemene Verordening
              Gegevensbescherming (AVG/GDPR) en de Belgische privacywetgeving.
            </p>

            <h2>1. Verantwoordelijke</h2>
            <p>
              {BUSINESS.name}
              <br />
              {BUSINESS.addressDisplay}
              <br />
              E-mail:{" "}
              <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
              <br />
              Telefoon:{" "}
              <a href={`tel:${BUSINESS.phone}`}>{BUSINESS.phoneDisplay}</a>
            </p>

            <h2>2. Welke gegevens verzamelen wij?</h2>
            <p>
              Via het contactformulier op onze website verzamelen wij de
              volgende gegevens:
            </p>
            <ul>
              <li>Naam</li>
              <li>Telefoonnummer</li>
              <li>E-mailadres</li>
              <li>Gemeente</li>
              <li>Type werk (keuze uit onze diensten)</li>
              <li>Omschrijving van uw aanvraag / bericht</li>
            </ul>
            <p>
              Daarnaast kunnen technische gegevens automatisch worden
              geregistreerd bij uw bezoek aan de website, zoals IP-adres,
              browsertype en apparaatinformatie, enkel voor beveiliging en
              correcte werking van de site.
            </p>

            <h2>3. Waarvoor gebruiken wij deze gegevens?</h2>
            <p>Wij gebruiken uw gegevens uitsluitend voor:</p>
            <ul>
              <li>Het opvolgen van uw offerteaanvraag</li>
              <li>Contact opnemen over uw schilderproject</li>
              <li>Het versturen van een bevestiging van uw aanvraag per e-mail</li>
              <li>Interne opvolging van leads en klantcontact</li>
            </ul>
            <p>
              Wij gebruiken uw gegevens niet voor ongevraagde marketing zonder
              uw uitdrukkelijke toestemming.
            </p>

            <h2>4. Rechtsgrond</h2>
            <p>
              De verwerking gebeurt op basis van uw toestemming (wanneer u het
              contactformulier invult) en/of ons gerechtvaardigd belang om uw
              aanvraag op te volgen en u een offerte te kunnen bezorgen.
            </p>

            <h2>5. Bewaartermijn</h2>
            <p>
              Contactaanvragen bewaren wij zolang nodig om uw aanvraag op te
              volgen en eventueel een offerte uit te werken. Indien er geen
              opdracht volgt, worden gegevens maximaal <strong>2 jaar</strong>{" "}
              bewaard, tenzij een langere bewaartermijn wettelijk verplicht is
              (bijvoorbeeld voor facturatiegegevens van uitgevoerde werken).
            </p>
            <p>
              Daarna worden uw gegevens verwijderd of geanonimiseerd, tenzij u
              klant wordt — in dat geval gelden de wettelijke
              administratieve bewaartermijnen.
            </p>

            <h2>6. Delen met derden</h2>
            <p>
              Wij verkopen of verhuren uw gegevens niet aan derden. Uw gegevens
              worden niet gedeeld met externe partijen, behalve met de
              onderstaande verwerkers die wij inschakelen om onze dienstverlening
              mogelijk te maken:
            </p>
            <ul>
              <li>
                <strong>Airtable</strong> — opslag en opvolging van
                contactaanvragen (CRM)
              </li>
              <li>
                <strong>Groq</strong> — geautomatiseerde analyse van
                aanvragen om interne opvolging te ondersteunen (prioriteit,
                projectgrootte, suggesties voor opvolging)
              </li>
              <li>
                <strong>CloudEmail</strong> — verzending van
                bevestigingsmails en interne notificaties
              </li>
              <li>
                <strong>Vercel</strong> — hosting van de website
              </li>
            </ul>
            <p>
              Deze verwerkers verwerken gegevens enkel in onze opdracht en
              conform hun eigen privacyvoorwaarden. Wij sluiten met hen
              verwerkersovereenkomsten af waar vereist.
            </p>

            <h2>7. Cookies</h2>
            <p>
              Onze website gebruikt enkel essentiële cookies die nodig zijn voor
              het correct functioneren van de site. Niet-essentiële cookies,
              zoals analytics, worden enkel geplaatst als u daarvoor toestemming
              geeft via onze cookiebanner.
            </p>
            <p>
              U kunt uw cookievoorkeur op elk moment wijzigen door uw
              browsergegevens te wissen of contact met ons op te nemen.
            </p>

            <h2>8. Uw rechten</h2>
            <p>Als betrokkene heeft u de volgende rechten:</p>
            <ul>
              <li>
                <strong>Inzage</strong> — u kunt opvragen welke gegevens wij van
                u bewaren
              </li>
              <li>
                <strong>Correctie</strong> — onjuiste gegevens laten aanpassen
              </li>
              <li>
                <strong>Verwijdering</strong> — uw gegevens laten wissen, voor
                zover wettelijk toegestaan
              </li>
              <li>
                <strong>Beperking</strong> — de verwerking laten beperken
              </li>
              <li>
                <strong>Bezwaar</strong> — bezwaar maken tegen bepaalde
                verwerkingen
              </li>
              <li>
                <strong>Dataportabiliteit</strong> — uw gegevens in een
                gangbaar formaat ontvangen
              </li>
              <li>
                <strong>Intrekking toestemming</strong> — eerder gegeven
                toestemming intrekken
              </li>
            </ul>
            <p>
              Om deze rechten uit te oefenen, kunt u contact opnemen via{" "}
              <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>. Wij
              reageren binnen de wettelijke termijn van één maand.
            </p>
            <p>
              Heeft u een klacht over de verwerking van uw gegevens? Dan kunt u
              een klacht indienen bij de Gegevensbeschermingsautoriteit (GBA):{" "}
              <a
                href="https://www.gegevensbeschermingsautoriteit.be"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.gegevensbeschermingsautoriteit.be
              </a>
              .
            </p>

            <h2>9. Beveiliging</h2>
            <p>
              Wij nemen passende technische en organisatorische maatregelen om
              uw persoonsgegevens te beschermen tegen verlies, misbruik of
              onbevoegde toegang, waaronder beveiligde verbindingen (HTTPS),
              toegangsbeperkingen en inputvalidatie op ons contactformulier.
            </p>

            <h2>10. Wijzigingen</h2>
            <p>
              Wij kunnen dit privacybeleid aanpassen wanneer onze werkwijze of
              wetgeving wijzigt. De meest recente versie vindt u altijd op deze
              pagina.
            </p>

            <p className="legal-contact">
              Vragen over privacy? Neem contact op via{" "}
              <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> of ga
              naar onze <Link href="/contact">contactpagina</Link>.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
