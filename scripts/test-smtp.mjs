#!/usr/bin/env node
/**
 * SMTP-verbinding testen (los van het contactformulier).
 *
 * Gebruik:
 *   node --env-file=.env.local scripts/test-smtp.mjs
 *   node --env-file=.env.local scripts/test-smtp.mjs --send jou@email.be
 */

import nodemailer from "nodemailer";

function getSmtpConfig() {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;
  const from = (process.env.SMTP_FROM ?? process.env.SMTP_USER)?.trim();
  const port = Number(process.env.SMTP_PORT ?? "587");

  const missing = [];
  if (!host) missing.push("SMTP_HOST");
  if (!user) missing.push("SMTP_USER");
  if (!pass) missing.push("SMTP_PASS");
  if (!from) missing.push("SMTP_FROM");

  if (missing.length > 0) {
    return { ok: false, missing };
  }

  return {
    ok: true,
    config: {
      host,
      user,
      pass,
      from,
      port,
      secure: port === 465,
      requireTLS: port === 587,
    },
  };
}

function formatError(error) {
  if (error instanceof Error) {
    return {
      message: error.message,
      code: error.code,
      response: error.response,
      responseCode: error.responseCode,
      command: error.command,
    };
  }

  return { message: String(error) };
}

async function main() {
  const smtp = getSmtpConfig();

  if (!smtp.ok) {
    console.error("SMTP config ontbreekt:", smtp.missing.join(", "));
    process.exit(1);
  }

  const { config } = smtp;

  console.log("SMTP test start");
  console.log({
    host: config.host,
    port: config.port,
    secure: config.secure,
    requireTLS: config.requireTLS,
    user: config.user,
    from: config.from,
  });

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    requireTLS: config.requireTLS,
    auth: {
      user: config.user,
      pass: config.pass,
    },
    connectionTimeout: 30_000,
    greetingTimeout: 30_000,
  });

  try {
    console.log("\n1/2 Verbinding verifiëren (STARTTLS op poort 587)…");
    await transporter.verify();
    console.log("✓ SMTP verify geslaagd");
  } catch (error) {
    console.error("✗ SMTP verify mislukt:");
    console.error(formatError(error));
    process.exit(1);
  }

  const sendArgIndex = process.argv.indexOf("--send");
  const sendTo = sendArgIndex >= 0 ? process.argv[sendArgIndex + 1] : null;

  if (!sendTo) {
    console.log("\n2/2 Testmail overgeslagen (geen --send adres meegegeven).");
    console.log("Voorbeeld: node --env-file=.env.local scripts/test-smtp.mjs --send jou@email.be");
    return;
  }

  try {
    console.log(`\n2/2 Testmail versturen naar ${sendTo}…`);
    const info = await transporter.sendMail({
      from: `"Van Waes SMTP test" <${config.from}>`,
      to: sendTo,
      subject: "Van Waes SMTP test",
      text: "Dit is een testmail van scripts/test-smtp.mjs. Als je dit leest, werkt SMTP.",
    });

    console.log("✓ Testmail verzonden");
    console.log({
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response,
    });
  } catch (error) {
    console.error("✗ Testmail mislukt:");
    console.error(formatError(error));
    process.exit(1);
  }
}

main().catch((error) => {
  console.error("Onverwachte fout:", formatError(error));
  process.exit(1);
});
