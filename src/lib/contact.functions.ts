import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(160),
  subject: z.string().trim().min(1).max(140),
  message: z.string().trim().min(10).max(3000),
  website: z.string().max(200).optional(),
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .validator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    // Honeypot: bots fill the hidden field; pretend success.
    if (data.website) return { ok: true as const };
    const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
    try {
      await sendTemplateEmail("contact-notification", "angeldavid@coltlax.edu.mx", {
        templateData: { name: data.name, email: data.email, subject: data.subject, message: data.message },
        replyTo: data.email,
      });
      return { ok: true as const };
    } catch (error) {
      console.error("contact send failed", error);
      return { ok: false as const };
    }
  });
