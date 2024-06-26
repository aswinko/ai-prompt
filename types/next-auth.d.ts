import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      id: string;
      address: string;
      name: string;
      email: string;
      image?: string;
    } & DefaultSession["user"]
  }

  interface Profile {
    picture?: string;
  }
}