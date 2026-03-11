"use client";

import emailjs from "@emailjs/browser";

export type EarlyAccessEmailInput = {
  email: string;
  project?: string;
  wallet?: string;
  source?: string;
};

function getConfig() {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const confirmationTemplateId = process.env.NEXT_PUBLIC_EMAILJS_CONFIRM_TEMPLATE_ID;
  const adminTemplateId = process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID;
  const adminEmail = process.env.NEXT_PUBLIC_EMAILJS_ADMIN_EMAIL;

  if (!serviceId || !publicKey || !confirmationTemplateId) {
    throw new Error(
      "EmailJS is not configured. Add NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, and NEXT_PUBLIC_EMAILJS_CONFIRM_TEMPLATE_ID to your .env.local file."
    );
  }

  return { serviceId, publicKey, confirmationTemplateId, adminTemplateId, adminEmail };
}

export async function submitEarlyAccessRegistration(input: EarlyAccessEmailInput) {
  const config = getConfig();

  // Initialize emailjs with the public key
  emailjs.init({ publicKey: config.publicKey });

  const templateParams = {
    to_email: input.email,
    reply_to: input.email,
    project_name: input.project || "Individual",
    wallet_address: input.wallet || "Not provided",
    source: input.source || "unknown",
    admin_email: config.adminEmail || "",
  };

  // Send confirmation email to the user
  await emailjs.send(config.serviceId, config.confirmationTemplateId, templateParams);

  // Optionally send admin notification
  if (config.adminTemplateId && config.adminEmail) {
    await emailjs.send(config.serviceId, config.adminTemplateId, {
      ...templateParams,
      to_email: config.adminEmail,
    });
  }

  return {
    message: "You are registered. A confirmation email has been sent to your inbox.",
  };
}
