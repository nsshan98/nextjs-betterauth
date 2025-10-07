"use client"
import { authClient } from "@/lib/auth-client"

export default function Dashboard() {
  const {data} = authClient.useSession()
  console.log(data)
  return (
    <div>
      <h1>Dashboard {data?.user?.name}</h1>
      <p>Welcome to your dashboard!</p>
      <p onClick={() => authClient.signOut()}>Logout</p>
    </div>
  )
}
