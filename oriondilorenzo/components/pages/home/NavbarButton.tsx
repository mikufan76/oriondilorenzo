import Icon from '@/components/ui/Icon'

export type NavbarButton = {
  href?: string | null
  icon: any
  label: string
  onClick?: () => void
}

export default function NavbarButton(props: NavbarButton) {
  const { href, icon, onClick, label } = props
  const IconEle = () => (
    <Icon
      icon={icon}
      className=" md:h-5/6 sm:h-[50%] h-[40px] aspect-square rounded-lg group-hover:text-hilight "
    />
  )
  const LabelEle = () => (
    <label className="md:text-xl group-hover:text-hilight transition-colors ">
      {label}
    </label>
  )
  const wrapperClass =
    'flex flex-col justify-center items-center sm:h-full h-[40px]  transition-all rounded group hover:scale-110  hover:border-hilight border-2 border-transparent hover:shadow-glow'
  if (href) {
    return (
      <a href={href} className={wrapperClass}>
        <IconEle />
        <LabelEle />
      </a>
    )
  }
  return (
    <div onClick={onClick} className={wrapperClass}>
      <IconEle />
      <LabelEle />
    </div>
  )
}
