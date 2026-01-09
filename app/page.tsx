'use client'


import { useState } from 'react'
import { supabase } from '@/lib/supabase'


export default function LoginPage() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')


async function login() {
const { error } = await supabase.auth.signInWithPassword({
email,
password,
})
if (error) setError(error.message)
}


return (
<main className="flex min-h-screen items-center justify-center">
<div className="w-80 space-y-4">
<h1 className="text-2xl font-bold text-center">MNG Lehrerfussball</h1>
<input
className="w-full border p-2"
placeholder="E-Mail"
value={email}
onChange={e => setEmail(e.target.value)}
/>
<input
type="password"
className="w-full border p-2"
placeholder="Passwort"
value={password}
onChange={e => setPassword(e.target.value)}
/>
{error && <p className="text-red-500">{error}</p>}
<button
onClick={login}
className="w-full bg-black text-white p-2"
>
Anmelden
</button>
</div>
</main>
)
}
