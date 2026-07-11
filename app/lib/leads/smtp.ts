import nodemailer, { type Transporter } from "nodemailer";

export type SmtpConfig = {
  host: string;
  user: string;
  pass: string;
  from: string;
  port: number;
  secure: boolean;
  requireTLS: boolean;
};

export function getSmtpPort(): number {
  return Number(process.env.SMTP_PORT ?? "587");
}

export function getSmtpConfig():
  | { ok: true; config: SmtpConfig }
  | { ok: false; missing: string[] } {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;
  const from = (process.env.SMTP_FROM ?? process.env.SMTP_USER)?.trim();
  const port = getSmtpPort();

  const missing: string[] = [];
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
      host: host!,
      user: user!,
      pass: pass!,
      from: from!,
      port,
      secure: port === 465,
      requireTLS: port === 587,
    },
  };
}

export function formatSmtpError(error: unknown) {
  if (error instanceof Error) {
    const smtp = error as Error & {
      code?: string;
      response?: string;
      responseCode?: number;
      command?: string;
    };

    return {
      message: smtp.message,
      code: smtp.code,
      response: smtp.response,
      responseCode: smtp.responseCode,
      command: smtp.command,
    };
  }

  return { message: String(error) };
}

export function createSmtpTransporter(config: SmtpConfig): Transporter {
  console.log("[smtp] Transporter aanmaken:", {
    host: config.host,
    port: config.port,
    secure: config.secure,
    requireTLS: config.requireTLS,
    user: config.user,
    from: config.from,
  });

  return nodemailer.createTransport({
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
}

export async function verifySmtpConnection(
  transporter: Transporter,
): Promise<void> {
  await transporter.verify();
}
