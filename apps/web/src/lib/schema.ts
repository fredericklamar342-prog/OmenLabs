import { z } from "zod";

// Helper for cleaning and validating common profile string formats
const profileSchema = z.string()
  .min(1, "Identifier is required")
  .transform(val => val.trim().toLowerCase())
  .refine(val => !val.includes(" "), "Identifier cannot contain spaces");

export const waitlistSchema = z.object({
  email: z.string().trim().toLowerCase().email("Please enter a valid email address"),
  source: z.string().optional().default("direct"),
});

export const developerSchema = z.object({
  github: profileSchema,
  x_profile: profileSchema,
  email: z.string().trim().toLowerCase().email("Invalid email address").optional().nullable(),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;
