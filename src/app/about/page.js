import Image from 'next/image'
import Link from 'next/link';
import auroraStyles from '@/app/ui/aurora.module.css';

export default function About() {
  return (
    <main className="flex flex-col items-center">
      <div className={auroraStyles.container}>
        <div className={`${auroraStyles.base} ${auroraStyles.five}`}></div>
        <div className={`${auroraStyles.base} ${auroraStyles.six}`}></div>
        <div className={`${auroraStyles.base} ${auroraStyles.seven}`}></div>
        <div className={`${auroraStyles.base} ${auroraStyles.eight}`}></div>
      </div>
      <div className="flex flex-col h-screen w-screen absolute font-semibold">
        <nav className="flex flex-row w-full justify-between px-6 pl-10 pr-12 py-6 z-20">
          <Link href="/">
            <Image src="/nav-logo.svg"
              width={50}
              height={50}
              className="hover:invert hover:opacity-75 transition ease-in-out delay-100"
            />
          </Link>
          <ul className="flex flex-row text-white space-x-20">
            <li className="place-self-center hover:invert hover:opacity-75 transition ease-in-out delay-100"><Link href="/">Home</Link></li>
            <li className="place-self-center hover:invert hover:opacity-75 transition ease-in-out delay-100"><Link href="/about">About</Link></li>
            <li className="place-self-center hover:invert hover:opacity-75 transition ease-in-out delay-100"><Link href="/work">Work</Link></li>
          </ul>
        </nav>
        <div className="flex items-center justify-center h-screen w-screen absolute">
          <p className="text-4xl">coming soon...</p>
        </div>
      </div>
    </main>
  )
}
