import Link from 'next/link';
import Aurora from '@/app/ui/aurora.js'
import NavBar from '@/app/ui/nav-bar.js'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Aurora />
      <div className="flex flex-col h-screen w-screen absolute font-semibold">
        <NavBar />
        <div className="flex items-center justify-center h-screen w-screen absolute">
          <div className="text-left">
            <h1 className="text-8xl">Hi! I&apos;m <Link className="hover:invert hover:opacity-75 transition ease-in-out delay-100" href="/about">Elaine Wu</Link>,</h1>
            <p className="max-w-4xl text-4xl">an aspiring full-stack developer studying computer science at Cornell University.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
