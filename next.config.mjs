/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the output configuration
  // output: "export",

  // Add the images configuration to disable Image Optimization API
  images: {
    unoptimized: true,
  },
}

export default nextConfig;