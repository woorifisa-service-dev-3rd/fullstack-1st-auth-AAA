'use client'
import React from "react";
import { useSession } from 'next-auth/react';

const AuthStatus = () => {
    const session = useSession();
    console.log(session);

    return(
        <div>AuthStatus</div>
    );
};

export default AuthStatus;