import Image from 'next/image'
import styles from '@/app/ui/aurora.module.css';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className={styles.container}>
        <div className={`${styles.base} ${styles.one}`}></div>
        <div className={`${styles.base} ${styles.two}`}></div>
        <div className={`${styles.base} ${styles.three}`}></div>
        <div className={`${styles.base} ${styles.four}`}></div>
      </div>
      <div className="flex flex-col h-screen justify-center absolute">
        <h1 className="text-8xl">Hi! I&apos;m Elaine Wu,</h1>
        <p className="max-w-4xl text-4xl text-wrap">an aspiring full-stack developer studying computer science at Cornell University.</p>
      </div>
    </main>
  )
}
