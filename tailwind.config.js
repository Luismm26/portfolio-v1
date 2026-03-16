/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./assets/**/*.js"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#EF4B4C", 
        secondary: "#3D619B", 
        accent: "#3D619B", 
        "navy-dark": "#0B1120", 
        "navy-medium": "#1E293B", 
        "docks-bg": "#0f172a", 
        "docks-text": "#E2E8F0", 
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'stream': 'stream 20s linear infinite',
        'reveal': 'reveal 0.8s ease-out forwards',
        'border-glow': 'border-spin 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        stream: {
          '0%': { transform: 'translateY(100vh) translateX(-50px) opacity(0)' },
          '10%': { opacity: 0.2 },
          '90%': { opacity: 0.2 },
          '100%': { transform: 'translateY(-20vh) translateX(50px) opacity(0)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'border-spin': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}