const PaperTexture = (props) => (
  <svg width={650} height={500} {...props}>
    <filter id="roughpaper" x="0%" y="0%" width="100%" height="100%">
      <feTurbulence
        type="fractalNoise"
        baseFrequency={0.04}
        result="noise"
        numOctaves={5}
      />
      <feDiffuseLighting in="noise" lightingColor="white" surfaceScale={2}>
        <feDistantLight azimuth={45} elevation={60} />
      </feDiffuseLighting>
    </filter>
    <rect
      x={0}
      y={0}
      width="100%"
      height="100%"
      filter="url(#roughpaper)"
      fill="none"
    />
  </svg>
);
export default PaperTexture;
