"use client"

import {KindeProvider} from "@kinde-oss/kinde-auth-nextjs";

export const AuthProvider  = ({children}: {children: React.ReactNode}) => {
    return (
        <KindeProvider
        // clientId={process.env.NEXT_PUBLIC_KINDE_CLIENT_ID}
        // issuer={process.env.NEXT_PUBLIC_KINDE_ISSUER}
        // redirectUri={process.env.NEXT_PUBLIC_KINDE_REDIRECT_URI}
        // scope="openid profile email"
        >
        {children}
        </KindeProvider>
    );
}