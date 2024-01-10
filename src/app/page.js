import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex flex-col place-self-center">
        <h1 className="text-8xl">Hi! I'm Elaine Wu,</h1>
        <p className="max-w-4xl text-4xl text-wrap">an aspiring full-stack developer studying computer science at Cornell University.</p>
      </div>
    </main>
  )
}
