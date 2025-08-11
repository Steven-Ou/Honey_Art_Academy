import tailwindcss from '@tailwindcss/postcss';
import tailwindConfig from './tailwind.config.mjs';

const config = {
  plugins: [tailwindcss(tailwindConfig)],
};

export default config;