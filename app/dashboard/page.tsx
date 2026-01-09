'use client'


import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'


export default function Dashboard() {
const [role, setRole] = useState<string | null>(null)


useEffect(() => {
supabase.auth.getUser().then(({ data }) => {
if (!data.user) return


supabase
.from('profiles')
.select('role')
.eq('id', data.user.id)
.single()
.then(({ data }) => setRole(data?.role))
})
}, [])


return (
<main className="p-6">
<h1 className="text-2xl font-bold">Dashboard</h1>
<p>Rolle: {role}</p>


{role === 'admin' && (
<p className="mt-4 text-green-700">Du kannst Spiele eintragen.</p>
)}


{role === 'viewer' && (
<p className="mt-4">Du kannst Statistiken ansehen.</p>
)}
</main>
)
}
