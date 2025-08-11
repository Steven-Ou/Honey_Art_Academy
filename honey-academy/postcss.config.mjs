import tailwind from 'tailwindcss';
import tailwindConfig from './tailwind.config.mjs';

const config = {
  plugins: [tailwind(tailwindConfig)],
};

export default config;