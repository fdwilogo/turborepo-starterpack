/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const { version } = require('./package.json')

const ENV_FILES = ['.env', '.env.local', `.env.${process.env.NODE_ENV || 'development'}`]

ENV_FILES.forEach((file) => {
  require('dotenv').config({
    path: path.join(__dirname, `../../${file}`),
  })
})

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    serverMinification: false,
    serverActions: {
      bodySizeLimit: '50mb',
    },
  },
  transpilePackages: ['@repo/prisma', '@repo/tailwind-config', '@repo/web-ui'],
  env: {
    APP_VERSION: version,
  },
}
