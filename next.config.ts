const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  }
};

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  scope: '/',
  skipWaiting: true,
  disable: process.env.NODE_ENV !== "production",
  buildExcludes: [
    /app-build-manifest\.json$/,
    /middleware-manifest\.json$/,
  ],
});

module.exports = withPWA(nextConfig);
