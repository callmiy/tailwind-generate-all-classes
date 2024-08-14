// https://design2tailwind.com/blog/tailwindcss-generate-all-classes/

/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    {
      pattern: /./, // the "." means "everything"
    },
  ],
  theme: {},
};
