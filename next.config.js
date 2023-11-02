require("dotenv").config();

module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_OPENWEATHERMAP_API_KEY:
      process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY,
  },
};
