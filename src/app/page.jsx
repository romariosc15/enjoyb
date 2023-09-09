import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
      <div className="h-screen flex items-center justify-center">
        <Link href={`/jobs`}>
          Job search
        </Link>
      </div>
    </main>
  )
}
