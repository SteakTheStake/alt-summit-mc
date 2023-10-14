import NextAuth from "next-auth";
import PatreonProvider from "next-auth/providers/patreon";

export const authOptions = {
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  providers: [
    PatreonProvider({
      clientId: process.env.PATREON_ID,
      clientSecret: process.env.PATREON_SECRET,
      authorization: {
        params: {
          scope: "identity.memberships identity[email] identity",
        },
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user.id = token.id;
      session.accessToken = token.accessToken;

      try {
        const res = await fetch(
          "https://www.patreon.com/api/oauth2/api/current_user",
          {
            method: "get",
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          },
        );
        const pledges = await res.json();

        const isPledged = pledges.included.some((item) => {
          const { attributes } = item;
          if (attributes.url) {
            if (attributes.url.includes("zaura")) {
              return attributes.amount;
            }

            return null;
          }

          return null;
        });
        const pledgeAmount = pledges.included.find((item) => {
          const { attributes } = item;
          if (attributes.url && attributes.url.includes("zaura")) {
            return {
              isPledged: attributes.amount > 299 ? attributes.amount : false,
              amount: attributes.amount ? attributes.amount : 0,
            };
          }
          return false;
        });

        session.isPledged = isPledged;
        session.pledgeAmount = pledgeAmount.attributes.amount;

        return session;
      } catch (err) {
        session.err = err;
      }

      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.id = user.id;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
