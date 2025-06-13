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
      className="aspect-square h-[40px] rounded-lg group-hover:text-hilight sm:h-[50%] md:h-5/6"
    />
  )
  const LabelEle = () => (
    <label className="transition-colors group-hover:text-hilight md:text-xl">
      {label}
    </label>
  )
  const wrapperClass =
    'flex flex-col justify-center items-center sm:h-full h-[40px]  transition-all rounded group hover:scale-110  hover:border-hilight border-2 border-transparent hover:shadow-glow cursor-pointer'
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
