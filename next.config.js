require('dotenv').config();

module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    
    API_SERVER_HOST: process.env.API_SERVER_HOST, // Pass through env variables
  },
}
