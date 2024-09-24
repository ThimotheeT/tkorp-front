/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:3000/:path*', // Votre API NestJS
        },
      ];
    },
  };
  
  export default nextConfig;