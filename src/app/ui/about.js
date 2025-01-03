import Image from 'next/image'
import Link from 'next/link'

export default function AboutContent() {
  return (
    <div className="flex flex-row max-w-screen space-x-8">
      <div className="flex flex-col max-w-2xl space-y-4 text-xl font-normal">
        <p>Hello, I&apos;m Elaine! I am currently a junior enrolled in Cornell University’s College of Engineering and I am studying computer science with a minor in psychology. My goals lie in creating detailed, meaningful, and functional applications.</p>
        <p>My interest in computer science originally started in middle school when I learned how to customize Tumblr blog pages (you surprisingly learn a lot about HTML and CSS in the process). Now in college, I&apos;ve expanded that budding interest into passion for creating large-scale applications using the valuable tool-kits and knowledge I have gained from mentors, peers, and the Internet! Aside from coding, I am also ardent about the design process, and I dabble a bit in UI/UX design. (last updated: 12/30/24)</p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <Image src="/headshot.JPG"
          alt="Headshot of Elaine Wu"
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
                alt="Send email"
                width={36}
                height={36}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/elaine-wu-09440620b/">
              <Image src="/linkedin-icon.svg"
                alt="Open LinkedIn page"
                width={36}
                height={36}
              />
            </Link>
            <Link href="https://github.com/elainelwu">
              <Image src="/github-icon.svg"
                alt="Go to GitHub page"
                width={36}
                height={36}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
