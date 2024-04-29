
/** @type {import('next').NextConfig} */
const nextConfig = (phase, { defaultConfig }) => {
  if ('sassOptions' in defaultConfig) {
    defaultConfig['sassOptions'] = {
      includePaths: ['./src/styles'],
      prependData: `@import "@/styles/base/variables.scss";`,
    }
  }
  return defaultConfig;
}

export default nextConfig