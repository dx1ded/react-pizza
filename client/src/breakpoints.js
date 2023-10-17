const size = {
  xxl: "80em", // 1280
  xl: "64em", // 1024
  lg: "48em", // 768
  md: "36em", // 576
  sm: "26.25em", // 420
  xs: "23.4375em", // 375
}

const device = {
  xxl: `(max-width: ${size.xxl})`,
  xl: `(max-width: ${size.xl})`,
  lg: `(max-width: ${size.lg})`,
  md: `(max-width: ${size.md})`,
  sm: `(max-width: ${size.sm})`,
  xs: `(max-width: ${size.xs})`,
}

export default { size, device }
