/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      backgroundColor:{
        all:'var(--bg-color)',
       },
       textColor:{
        tcolor:'var(--color-text)',
       },
       acentColor:{
         acent:'var(--color-acent)',
       },
       boxColor:{
        box:'var(--color-box)'
       },
       inputColor:{
        input:'var(--color-input)'
       },
    },
    container:{
      center:true,
      padding:{
        DEFAULT:'1rem',
        sm:'2rem',
        lg:'4rem',
        xl:'5rem',
        '2xl':'6rem',
      },
    },
  },
  plugins: [],
}