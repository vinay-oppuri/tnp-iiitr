/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            { protocol: 'https', hostname: 'upload.wikimedia.org' },
            { protocol: 'https', hostname: 'ckmvigil.in' },
            { protocol: 'https', hostname: 'vepaar.b-cdn.net' },
            { protocol: 'https', hostname: 'seeklogo.com' },
            { protocol: 'https', hostname: 'img.mensxp.com' },
            { protocol: 'https', hostname: 'cdot.in' },
            { protocol: 'https', hostname: 'softwarejobupdates.com' },
            { protocol: 'https', hostname: 'storyxpress.co' },
            { protocol: 'https', hostname: 'logo.clearbit.com' },
            { protocol: 'https', hostname: 'ui-avatars.com' }
        ],
    },
}

module.exports = nextConfig
