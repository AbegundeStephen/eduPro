/** @type {import('next').NextConfig} */

const {withContentlayer} = require("next-contentlayer")

const nextConfig = {
    swcMinify: true,
    compiler:{
        removeConsole: true
    }
}

module.exports = withContentlayer({...nextConfig});
