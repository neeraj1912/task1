// const nextConfig = {
//   reactStrictMode: true,
//   // Additional configurations
// };

// export default nextConfig;

export default {
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.devtool = 'eval-source-map'; // Use for development only
    } else {
      config.devtool = false; // Disable in production
    }
    return config;
  },
};
