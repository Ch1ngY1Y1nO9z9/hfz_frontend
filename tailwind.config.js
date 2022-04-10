const tailwindcss = require('tailwindcss');
module.exports = {
    mode: 'jit',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ],
};

// module.exports = {
//   mode: 'jit',
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
