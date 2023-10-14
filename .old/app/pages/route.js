import NextAuth from 'next-auth';
import PatreonProvider from "next-auth/providers/patreon";

export default NextAuth({
    providers: [
        PatreonProvider({
            clientId: process.env.PATREON_CLIENT_ID,
            clientSecret: process.env.PATREON_CLIENT_SECRET
        })
    ],
});