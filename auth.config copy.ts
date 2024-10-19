// import type { NextAuthConfig } from "next-auth";
// import bcrypt from "bcryptjs";
// import Credentials from "next-auth/providers/credentials";
// import Github from "next-auth/providers/github";
// import Google from "next-auth/providers/google";
// import { LoginSchema } from "./schemas";
// import { getUserByEmail } from "./data/users";

// console.log("auth", process.env.GOOGLE_CLIENT_ID);
// export default {
//   providers: [
//     Google({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     Github({
//       clientId: process.env.GITHUB_CLIENT_ID,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET,
//     }),
//     Credentials({
//       async authorize(credentials) {
//         const validatedFirlds = LoginSchema.safeParse(credentials);
//         if (validatedFirlds.success) {
//           const { email, password } = validatedFirlds.data;
//           const user = await getUserByEmail(email);
//           if (!user || !password) return null;

//           const passwordsMatch = await bcrypt.compare(password, user.password);
//           if (passwordsMatch) return user;
//         }
//         return null;
//       },
//     }),
//   ],
// } satisfies NextAuthConfig;
