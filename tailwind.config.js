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
          'url("https://images.pexels.com/photos/3031391/pexels-photo-3031391.jpeg?auto=compress&cs=tinysrgb&w=600")',
        barber2:
          'url("https://images.pexels.com/photos/2714273/pexels-photo-2714273.jpeg?auto=compress&cs=tinysrgb&w=600")',
        barber3:
          'url("https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=600")',
      },
    },
  },
  plugins: [],
};
