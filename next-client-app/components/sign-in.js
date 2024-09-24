const { signIn } = require("@/auth")
import React from "react";


const SignIn = () => {
    return (
        <form action={async () => {
            'use server'
            await signIn('naver')
        }}>
        <button type="submit">Signin with Naver</button>
    </form>
    )
}

export default SignIn;