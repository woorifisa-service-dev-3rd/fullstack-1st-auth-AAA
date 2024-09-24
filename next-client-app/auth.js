import NextAuth from "next-auth";
import NaverProvider from "next-auth/providers/naver"

const config = {
    providers: [
        NaverProvider({
            clientId: process.env.AUTH_NAVER_ID,
            clientSecret: process.env.AUTH_NAVER_SECRET,
        })
    ],
    // TODO : 인증과 관련된 다른 처리 로직
    callbacks: {
        session: {
            strategy: 'jwt',
            maxAge: 60 * 60 * 24
        },

        async jwt({ token, account }) {
            console.log('jwt callback이 호출됨');

            if (account) {
                token.access_token = account.access_token;
                token.id_token = account.id_token;
                token.expires_at = account.expires_at;
                token.refresh_token = account.refresh_token;
                return token;
            }

            return token;
        },

        async session({ session, token }) {
            console.log('session callback 호출됨');
            
            session.id_token = token.id_token;
            return session;
        }
    }
}


export const { handlers, signIn, signOut, auth } = NextAuth(config);