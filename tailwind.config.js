/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "Sans-Serif", "Arial"],
        Inter: ["Poppins", "Sans-Serif", "Arial"],
      },
      backgroundImage: {
        hero_pic_1:
          'url("https://i.pinimg.com/236x/9b/eb/b2/9bebb2095df9a366a964afa98aa6e8bd.jpg")',
        hero_pic_2:
          'url("https://i.pinimg.com/564x/a4/14/c3/a414c3e3493e0cee9e6b5159fb7f6db2.jpg")',
        hero_pic_3:
          'url("https://i.pinimg.com/564x/14/bc/72/14bc72112d5193074ebd4cf6d37ea6b8.jpg")',
        hero_pic_4:
          'url("https://i.pinimg.com/736x/9e/19/6c/9e196ca82244f0ef7810a02bfce895c0.jpg ")',
        barbershop:
          'url("https://images.pexels.com/photos/1319459/pexels-photo-1319459.jpeg?auto=compress&cs=tinysrgb&w=600")',
        barber1:
          'url("https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600")',
        barber2:
          'url("https://images.pexels.com/photos/10112053/pexels-photo-10112053.jpeg?auto=compress&cs=tinysrgb&w=600")',
        barber3:
          'url("https://images.pexels.com/photos/12097152/pexels-photo-12097152.jpeg?auto=compress&cs=tinysrgb&w=600")',
        haircut_1:
          'url("https://i.pinimg.com/236x/d8/7c/c1/d87cc1af0826b036eb5f2fdaef409648.jpg")',
        haircut_2:
          'url("https://i.pinimg.com/236x/85/0d/83/850d83ea1ee72c31dff6e4431de1bfcf.jpg")',
        haircut_3:
          'url("https://i.pinimg.com/236x/4a/4f/db/4a4fdb4f7ceaf04882f22be99fb6d8b3.jpg")',
        haircut_4:
          'url("https://i.pinimg.com/236x/50/5e/eb/505eebb94857ec6c1d7498f35ff267ef.jpg")',
        haircut_5:
          'url("https://i.pinimg.com/236x/f5/79/b8/f579b8b72c82a38461dfef3322030116.jpg")',
        haircut_6:
          'url("https://i.pinimg.com/236x/03/37/75/033775c74446b599d1a4810e63184138.jpg")',
        haircut_7:
          'url("https://i.pinimg.com/236x/6f/5a/7e/6f5a7e5573c1757cfd7427f6fcbc6ea3.jpg")',
        haircut_8:
          'url("https://i.pinimg.com/236x/e4/26/d8/e426d8d9951dacffa08f2d9a5b75f1ed.jpg")',
      },
    },
  },
  plugins: [],
};
