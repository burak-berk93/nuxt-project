module.exports = {
  content: [
    './pages/**/*.{js,ts,vue}',
    './components/**/*.{js,ts,vue}',
    './layouts/**/*.{js,ts,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'Arial', 'sans-serif'],
        // diğer font ailelerini buraya ekleyebilirsiniz
      },
    },
  },
  plugins: [],
}
