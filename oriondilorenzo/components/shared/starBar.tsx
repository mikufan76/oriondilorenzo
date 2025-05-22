import Star from './svgs/star'

const SVGComponent = (props) => {
  const width = props.width || 39
  const length = props.length || 80
  const strokeWidth = props.strokeWidth || 1
  return (
    <div className={`w-full flex flex-row gap-x-0`}>
      <Star
        strokeWidth={strokeWidth}
        className="h-full w-1/4  max-w-10"
      />
      <svg xmlns="http://www.w3.org/2000/svg" className="grow h-full w-full scale-x-[1.01]">
        <line
          x1="0%"
          y1="50%"
          x2="100%"
          y2="50%"
          strokeWidth={strokeWidth * 2}
          stroke="var(--primary-color)"
        />
      </svg>
      <Star
        strokeWidth={strokeWidth}
        className="h-full w-1/4 max-w-10"
      />
    </div>
  )
}
export default SVGComponent
