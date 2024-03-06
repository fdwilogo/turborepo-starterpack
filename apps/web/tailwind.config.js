/* eslint-disable @typescript-eslint/no-var-requires */
const baseConfig = require('@repo/tailwind-config');
const path = require('path');

module.exports = {
  ...baseConfig,
  content: [
    ...baseConfig.content,
    `${path.join(require.resolve('@repo/web-ui'), '..')}/**/*.{ts,tsx}`,
    `${path.join(require.resolve('@repo/email'), '..')}/**/*.{ts,tsx}`,
  ],
};
