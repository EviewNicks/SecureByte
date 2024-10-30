/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './public/**/*.html', 
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Penulisan dengan huruf kapital "P"
      },
      colors: {
        primary: "#FFF0D1",
        secondary: "#092C4C",
        
        info: "#2F80ED",
        succ: "#27AE60",
        warning: "#E2B93B",
        error: "#EB5757",

        whiteLayer: {
          0: "#F5F4F4",
          1: "#FFF9ED",
          2: "#FFF0D1",
          3: "#FEE0AA",
          4: "#FDC874",
        },
        blackLayer: {
          0: "#092C4C",
          1: "#0D436D",
          2: "#045DA0",
          3: "#0474C5",
          4: "#64E9FF",
        },
        grey: {
          0: "#E0E0E0",
          1: "#BDBDBD",
          2: "#828282",
          3: "#4F4F4F",
          4: "#333333",
        },
      },
      backgroundImage: {
        // image
       'headline-image': "url('/assets/img/Headline-Image.png')",  // Sesuaikan dengan path yang benar
        'logo-image': "url('/assets/img/Logo.png')",  // Sesuaikan dengan path yang benar
        'example-image': "url('/assets/img/Modul-1.jpg')",  // Sesuaikan dengan path yang benar
        'add-image': "url('/assets/img/add-image.png')",
        


        // Grafient
        'gold': "linear-gradient(223deg, rgba(255, 240, 209, 1) 0%, rgba(221, 185, 111, 1) 100%)",
        'bluesky': "linear-gradient(225deg, rgba(8, 33, 55, 1) 0%, rgba(67, 173, 255, 1) 49%, rgba(21, 103, 178, 1) 100%)",
        'glass': "linear-gradient(225deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.05) 100%)",
        'moon': "linear-gradient(132deg, rgba(176, 185, 255, 1) 5.45%, rgba(231, 233, 255, 1) 78.15%)",
        'gold-out': "radial-gradient(69.16% 69.16% at 47.25% 49.5%, rgba(255, 240, 209, 1) 0%, rgba(221, 185, 111, 1) 100%)",
        'gold-in': "radial-gradient(69.16% 69.16% at 47.25% 49.5%, rgba(221, 185, 111, 1) 0%, rgba(255, 240, 209, 1) 100%)",
        'dark-glass': "linear-gradient(225deg, rgba(9, 44, 76, 0.4) 0%, rgba(9, 44, 76, 0.05) 100%)",
        'radial-primary': "radial-gradient(70.71% 70.71% at 50% 50%, rgba(255, 240, 209, 0.8) 0%, rgba(221, 185, 111, 1) 100%)",

        // Gradien Blue
        'b-up': "linear-gradient(180deg, rgba(255, 249, 237, 0.2) 0%, rgba(100, 233, 255, 1) 100%)",
        'b-down': "linear-gradient(180deg, rgba(100, 233, 255, 1) 0%, rgba(255, 249, 237, 0.2) 100%)",
        'b-left': "linear-gradient(90deg, rgba(255, 249, 237, 0.2) 0%, rgba(100, 233, 255, 1) 100%)",
        'b-right': "linear-gradient(180deg, rgba(100, 233, 255, 1) 0%, rgba(255, 249, 237, 0.2) 100%)",
        'b-outv': "linear-gradient(180deg, rgba(255, 249, 237, 0.2) 0%, rgba(102, 233, 255, 1) 50.5%, rgba(255, 249, 237, 0.2) 100%)",
        'b-inv': "linear-gradient(180deg, rgba(102, 233, 255, 1) 0%, rgba(255, 249, 237, 0.2) 50%, rgba(102, 233, 255, 1) 100%)",
        'b-outh': "linear-gradient(90deg, rgba(255, 249, 237, 0.2) 0%, rgba(102, 233, 255, 1) 50.5%, rgba(255, 249, 237, 0.2) 100%)",
        'b-inh': "linear-gradient(90deg, rgba(102, 233, 255, 1) 0%, rgba(255, 249, 237, 0.2) 50%, rgba(102, 233, 255, 1) 100%)",

        // gradien Dark 
        'd-up': "linear-gradient(180deg, rgba(255, 249, 237, 0.2) 0%, rgba(9, 44, 76, 1) 100%)",
        'd-down': "linear-gradient(180deg, rgba(9, 44, 76, 1) 0%, rgba(255, 249, 237, 0.2) 100%)",
        'd-left': "linear-gradient(90deg, rgba(255, 249, 237, 0.2) 0%, rgba(9, 44, 76, 1) 100%)",
        'd-right': "linear-gradient(180deg, rgba(9, 44, 76, 1) 0%, rgba(255, 249, 237, 0.2) 100%)",
        'd-outv': "linear-gradient(180deg, rgba(255, 249, 237, 0.2) 0%, rgba(9, 44, 76, 1) 50.5%, rgba(255, 249, 237, 0.2) 100%)",
        'd-inv': "linear-gradient(180deg, rgba(9, 44, 76, 1) 0%, rgba(255, 249, 237, 0.2) 50%, rgba(9, 44, 76, 1) 100%)",
        'd-outh': "linear-gradient(90deg, rgba(255, 249, 237, 0.2) 0%, rgba(9, 44, 76, 1) 50.5%, rgba(255, 249, 237, 0.2) 100%)",
        'd-inh': "linear-gradient(90deg, rgba(9, 44, 76, 1) 0%, rgba(255, 249, 237, 0.2) 50%, rgba(9, 44, 76, 1) 100%)",

        // shape
        'shape-50': "linear-gradient(180deg, rgba(255, 249, 237, 0) 0%, rgba(255, 249, 237, 0) 49.5%, rgba(9, 44, 76, 0.5) 70%, rgba(9, 68, 76, 1) 100%)",
        'shape-70': "linear-gradient(180deg, rgba(255, 249, 237, 0.2) 0%, rgba(9, 44, 76, 0.25) 25%, rgba(9, 44, 76, 0.5) 43%, rgba(9, 68, 76, 1) 84.5%)",

        // State Variants (Hover)
        'hover-gold': "linear-gradient(223deg, rgba(255, 240, 209, 0.8) 0%, rgba(221, 185, 111, 1) 100%)",
        'hover-b-up': "linear-gradient(180deg, rgba(255, 249, 237, 0.4) 0%, rgba(100, 233, 255, 0.8) 100%)",
        'hover-d-up': "linear-gradient(180deg, rgba(255, 249, 237, 0.4) 0%, rgba(9, 44, 76, 0.8) 100%)",
      },
      fontSize: {
        'h-lg': ['32px', { lineHeight: '40px', fontWeight: '700' }],
        'h-md': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        'h-sm': ['20px', { lineHeight: '32px', fontWeight: '700' }],
        'tl-lg': ['24px', { lineHeight: '40px', fontWeight: '600' }],
        'tl-md': ['20px', { lineHeight: '36px', fontWeight: '600' }],
        'tl-sm': ['16px', { lineHeight: '24px', fontWeight: '600' }],
        'lb-lg': ['16px', { lineHeight: '24px', fontWeight: '600' }],
        'lb-md': ['14px', { lineHeight: '20px', fontWeight: '600' }],
        'lb-sm': ['12px', { lineHeight: '16px', fontWeight: '600' }],
        'p-lg': ['14px', { lineHeight: '20px', fontWeight: '600' }],
        'p-md': ['12px', { lineHeight: '20px', fontWeight: '500' }],
        'p-sm': ['10px', { lineHeight: '16px', fontWeight: '500' }],
      },
      boxShadow: {
        custom: "0 4px 24px 0 rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
}

