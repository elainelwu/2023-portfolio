import Image from 'next/image'
import Link from 'next/link'
import Aurora from '@/app/ui/aurora.js'
import NavBar from '@/app/ui/nav-bar.js'

export default function About() {
  return (
    <main className="flex flex-col items-center">
      <Aurora page={'about'} />
      <div className="flex flex-col h-screen w-screen absolute font-semibold">
        <NavBar />
        <div className="flex flex-col items-center justify-center h-screen w-screen absolute">
          <h1 className="text-6xl">About</h1>
          <hr className="w-24 h-1 mx-auto my-8 bg-white border-0 rounded" />
          <div className="flex flex-row max-w-screen space-x-8">
            <div className="flex flex-col max-w-2xl space-y-4 text-xl font-normal">
              <p>Hello, I'm Elaine! I am currently a sophomore enrolled in Cornell University’s College of Engineering and I am studying computer science with a minor in information science. My goals lie in creating detailed, meaningful, and functional applications.</p>
              <p>My interest in computer science originally started in middle school when I learned how to customize Tumblr blog pages (you surprisingly learn a lot about HTML and CSS in the process). Now in college, I’ve expanded that budding interest into passion for creating large-scale applications using the valuable tool-kits and knowledge I have gained from mentors, peers, and the Internet! Aside from coding, I am also ardent about the design process, and I dabble a bit in UI/UX design.</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <Image src="/headshot.JPG"
                width={200}
                height={200}
                className="rounded-full border-4 border-solid max-w-52 max-h-52"
              />
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-xl">Contact me!</h3>
                <p className="font-normal mt-0">ew457@cornell.edu</p>
                <div className="flex flex-row space-x-4 mt-2">
                  <Link href="mailto:ew457@cornell.edu">
                    <Image src="/email-icon.svg"
                      width={36}
                      height={36}
                    />
                  </Link>
                  <Link href="https://www.linkedin.com/in/elaine-wu-09440620b/">
                    <Image src="/linkedin-icon.svg"
                      width={36}
                      height={36}
                    />
                  </Link>
                  <Link href="https://github.com/elainelwu">
                    <Image src="/github-icon.svg"
                      width={36}
                      height={36}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
