import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1>Hompe page</h1>
    <Link href='/users'>Go to users page</Link>
    </main>
  )
}
