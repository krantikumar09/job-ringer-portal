/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/pages/Home.jsx",
    "./src/components/Navbar.jsx",
    "./src/components/EmployeeLogin.jsx",
    "./src/components/JobSearch.jsx",
    "./src/components/Title.jsx",
    "./src/components/FeatureJob.jsx",
    "./src/components/JobCard.jsx",
    "./src/components/RemoteJob.jsx",
    "./src/components/AppDownalod.jsx",
    "./src/components/Footer.jsx",
    "./src/components/Locations.jsx",
    "./src/components/SiteStat.jsx",
    "./src/components/FooterLinks.jsx"
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        yellow: "#ffd52c",
        darkBlue: "#455180",
        lightBlue: "#01b85",
        lightGray: "#595a5d",
      },
      backgroundColor: {
        yellow: "#ffd52c",
        darkBlue: "#455180",
        lightBlue: "#7ad5d5",
      },
      gradientColorStops: {
        darkBlue: "#455180",
        lightBlue: "#01b85",
      },
      keyframes: {
        slideCover: {
          "0%": { transform: "translateX(-100%)", backgroundColor: "#ffd52c" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        slideCover: "slideCover 2s linear infinite",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
