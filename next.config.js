/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            protocol:'https',hostname:'picsum/photos/'
        }],
        deviceSizes:[500,968],
        imageSizes:[475,768],
        formats:['image/webp'],
        minimumCacheTTL:30
    }
}

module.exports = nextConfig
