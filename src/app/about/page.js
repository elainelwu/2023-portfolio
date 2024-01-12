import Aurora from '@/app/ui/aurora.js'
import NavBar from '@/app/ui/nav-bar.js'

export default function About() {
  return (
    <main className="flex flex-col items-center">
      <Aurora page={'about'} />
      <div className="flex flex-col h-screen w-screen absolute font-semibold">
        <NavBar />
        <div className="flex items-center justify-center h-screen w-screen absolute">
          <p className="text-4xl">coming soon...</p>
        </div>
      </div>
    </main>
  )
}
