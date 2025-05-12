module.exports = { reactStrictMode: true };
// next.config.js
module.exports = {
    reactStrictMode: true,
  
    /* Allow both Unsplash hosts with the new remotePatterns API */
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/photo-**',        // any actual photo file
        },
        {
          protocol: 'https',
          hostname: 'source.unsplash.com',
          port: '',
          pathname: '/**',              // their redirect endpoint
        },
      ],
    },
  };
  