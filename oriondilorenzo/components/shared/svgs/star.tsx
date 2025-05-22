const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.58 15.82" {...props}>
    <path
      d="M14.87 7.92 9.8 9.79l-1.87 5.07-1.88-5.07L.99 7.92l5.06-1.88L7.93.97 9.8 6.04l5.07 1.88z"
      data-name="Star_Y"
      style={{
        fill: 'none',
        stroke: '#fff9cb',
        strokeMiterlimit: 10,
        strokeWidth: props.strokeWidth || 0.5,
      }}
    />
  </svg>
)
export default SvgComponent
