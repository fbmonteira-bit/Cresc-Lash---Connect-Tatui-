'use strict';

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    images: {
        domains: ['example.com'], // Replace with your allowed image source domains
    },
    optimizeFonts: true,
    reactStrictMode: true,
};

module.exports = nextConfig;
