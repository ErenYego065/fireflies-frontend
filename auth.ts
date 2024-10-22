import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import NextAuth, { DefaultSession } from "next-auth";
import { cookies } from "next/headers";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/signin",
  },

  callbacks: {
    session(e) {
      const { session, token } = e;
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
        },
      };
    },
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_CMS_URL}/api/users/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
            },
          );

          if (!response.ok) {
            return null;
          }

          const dataResponse = await response.json();
          const user = dataResponse.user;

          cookies().set("token", dataResponse.token, {
            maxAge: 60 * 60 * 24 * 30,
          });

          return {
            id: user.id,
            email: user.email,
          };
        } catch (err) {
          return null;
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
});
