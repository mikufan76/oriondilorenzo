import Star from './svgs/star'

const SVGComponent = (props) => {
  const width = props.width || 39
  const length = props.length || 80
  const strokeWidth = props.strokeWidth || 1
  return (
    <div className={`w-full h-full flex flex-row gap-x-0`}>
      {/* <Star
        strokeWidth={strokeWidth}
        className="h-full w-1/4  max-w-10"
      /> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="grow h-full w-full translate-x-[2%]"
      >
        <line
          x1="0%"
          y1="50%"
          x2="100%"
          y2="50%"
          className="stroke-[1.5%] transition-stroke "
          stroke="var(--primary-color)"
        />
      </svg>
      <Star className="h-full" />
    </div>
  )
}
export default SVGComponent
