import { ActionError, defineAction } from "astro:actions";
import { Resend } from "resend";
import { z } from "astro/zod";

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const resendEmail = import.meta.env.RESEND_EMAIL;
const fromEmail = import.meta.env.FROM_EMAIL;

export const server = {
  send: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(3, { error: "Name must be at least 3 characters" }).max(30, { error: "Name must be at most 30 characters" }),
      email: z.email({ error: "Invalid email address" }),
      message: z.string().min(10, { error: "Message must be at least 10 characters" }).max(500, { error: "Message must be at most 500 characters" }),
      company: z.string().optional(),
    }),
    handler: async ({ name, email, message, company }) => {
      if (company) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: "Invalid submission detected",
        });
      }

      if (!resendEmail || !fromEmail) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Email configuration is missing.",
        });
      }

      const { data, error } = await resend.emails.send({
        from: resendEmail,
        to: fromEmail,
        subject: `New contact from ${name}`,
        html: `
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
        text: `New Contact Message\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      });

      if (error || !data) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to send note. Please try again later.",
        });
      }

      return {
        success: true,
        message: "We've got your note!",
        data: data.id,
      };
    },
  }),
};