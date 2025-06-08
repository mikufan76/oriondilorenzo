const PaperTexture = (props) => (
  <svg width={650} height={500} {...props}>
    <filter id="roughpaper" x="0%" y="0%" width="100%" height="100%">
      <feTurbulence
        type="fractalNoise"
        baseFrequency={'.09 0.001'}
        result="noise"
        numOctaves={1}
      />
      <feDiffuseLighting in="noise" lightingColor="#a0a0a0" surfaceScale={5}>
        <feDistantLight azimuth={45} elevation={60} />
      </feDiffuseLighting>
    </filter>

    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="6" />
    </filter>
    <rect
      x={0}
      y={0}
      width="100%"
      height="100%"
      filter="url(#roughpaper)"
      fill="none"
    />
    <rect
      x={0}
      y={0}
      width="100%"
      height="100%"
      opacity={0.5}
      filter="url(#noise)"
    />
  </svg>
)
export default PaperTexture
