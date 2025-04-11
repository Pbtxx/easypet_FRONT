import { redirect } from "next/navigation"

export default function Home() {
  // Redirect to dashboard as home page
  redirect("/dashboard")
}
