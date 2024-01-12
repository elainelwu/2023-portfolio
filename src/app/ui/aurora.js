import auroraStyles from '@/app/ui/aurora.module.css';

export default function Aurora() {
  return (
    <div className={auroraStyles.container}>
      <div className={`${auroraStyles.base} ${auroraStyles.one}`}></div>
      <div className={`${auroraStyles.base} ${auroraStyles.two}`}></div>
      <div className={`${auroraStyles.base} ${auroraStyles.three}`}></div>
      <div className={`${auroraStyles.base} ${auroraStyles.four}`}></div>
    </div>
  )
}

export function AuroraAbout() {
  return (
    <div className={auroraStyles.container}>
      <div className={`${auroraStyles.base} ${auroraStyles.five}`}></div>
      <div className={`${auroraStyles.base} ${auroraStyles.six}`}></div>
      <div className={`${auroraStyles.base} ${auroraStyles.seven}`}></div>
      <div className={`${auroraStyles.base} ${auroraStyles.eight}`}></div>
    </div>
  )
}

export function AuroraWork() {
  return (
    <div className={auroraStyles.container}>
      <div className={`${auroraStyles.base} ${auroraStyles.nine}`}></div>
      <div className={`${auroraStyles.base} ${auroraStyles.ten}`}></div>
      <div className={`${auroraStyles.base} ${auroraStyles.eleven}`}></div>
      <div className={`${auroraStyles.base} ${auroraStyles.twelve}`}></div>
    </div>
  )
}
