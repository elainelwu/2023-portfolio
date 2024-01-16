import Aurora from '@/app/ui/aurora.js'
import NavBar from '@/app/ui/nav-bar.js'
import AboutContent from '@/app/ui/about.js'
import Skills from '@/app/ui/skills.js'

export default function About() {
  return (
    <main className="flex flex-col items-center">
      <Aurora page={'about'} />
      <div className="flex flex-col min-h-screen w-screen absolute font-semibold">
        <NavBar />
        <div className="flex flex-col items-center h-full w-full relative mb-24">
          <h1 className="text-6xl">About</h1>
          <hr className="w-24 h-1 mx-auto my-8 bg-white border-0 rounded" />
          <AboutContent />
          <hr className="w-24 h-1 mx-auto my-8 bg-white border-0 rounded" />
          <Skills />
        </div>
      </div>
    </main>
  )
}