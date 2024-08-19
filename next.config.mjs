/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    env: {
      LINE_CLIENT_ID: process.env.LINE_CLIENT_ID,
      LINE_CLIENT_SECRET: process.env.LINE_CLIENT_SECRET,
      LINE_REDIRECT_URI: process.env.LINE_REDIRECT_URI,
    },
  };
  
  export default nextConfig;
  