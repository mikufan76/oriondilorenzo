import Star from './svgs/star'

const SVGComponent = (props) => {
  const width = props.width || 39
  const length = props.length || 80
  const strokeWidth = props.strokeWidth || 1
  return (
    <div className={`w-full h-full flex flex-row gap-x-0`}>
      <Star className="w-[20%] sm:hidden h-full block" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="grow h-full w-full scale-[103%] sm:scale-100 sm:translate-x-[2%]"
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
      <Star className="w-[20%] translate-x-[-2px] sm:translate-x-[0px]" />
    </div>
  )
}
export default SVGComponent
