import type { NextAuthConfig } from "next-auth";
import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { LoginSchema } from "./schemas";
import { getUserByEmail } from "./data/users";

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        // Validate the fields using your schema
        const validatedFields = LoginSchema.safeParse(credentials);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          // Get the user by email
          const user = await getUserByEmail(email);

          // Check if the user or password is null or undefined
          if (!user || !password || !user.password) return null;

          // Ensure user.password is a string before comparing
          const passwordsMatch = await bcrypt.compare(password, user.password);

          // If the passwords match, return the user
          if (passwordsMatch) return user;
        }

        // If validation fails or passwords don't match, return null
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
