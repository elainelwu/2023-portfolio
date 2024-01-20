import Aurora from '@/app/ui/aurora.js'
import NavBar from '@/app/ui/nav-bar.js'
import Experiences from '@/app/ui/experiences.js'
import Projects from '@/app/ui/projects.js'

export default function Work() {
  return (
    <main className="flex flex-col items-center">
      <Aurora page={'work'} />
      <div className="flex flex-col min-h-screen w-screen absolute font-semibold">
        <NavBar />
        <div className="flex flex-col items-center h-full w-full relative mb-24">
          <h1 className="text-6xl">Work</h1>
          <hr className="w-24 h-1 mx-auto my-8 bg-white border-0 rounded" />
          <Projects />
          <hr className="w-24 h-1 mx-auto my-8 bg-white border-0 rounded" />
          <Experiences />
        </div>
      </div>
    </main>
  )
}
