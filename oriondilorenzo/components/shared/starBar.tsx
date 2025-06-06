import Star from './svgs/star'
import { cn } from '@/sanity/lib/utils'

const SVGComponent = (props) => {
  const width = props.width || 39
  const length = props.length || 80
  const strokeWidth = props.strokeWidth || 1

  const starStyle = 'h-full aspect-square'
  return (
    <div
      className={cn(
        `w-full h-full flex flex-row`,
        props.className,
      )}
    >
      <Star className={`sm:hidden block ${starStyle}`} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="shrink h-full w-full scale-[103%] sm:scale-100 "
      >
        <line
          x1="0%"
          y1="50%"
          x2="100%"
          y2="50%"
          className="stroke-[1.5%]"
          stroke="var(--primary-color)"
        />
      </svg>
      <Star
        className={`${starStyle} sm:translate-x-[-14%]`}
      />
    </div>
  )
}
export default SVGComponent
