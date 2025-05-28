/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      // all files under your App Router “app” directory
      "./src/app/**/*.{ts,tsx,js,jsx}",
      // if you keep shared components here:
      "./src/components/**/*.{ts,tsx,js,jsx}"
    ],
    theme: {
      extend: {}, 
    },
    plugins: [],
  };
  