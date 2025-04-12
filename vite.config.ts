import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/Sidebar/index.tsx'),
      name: 'Sidebar',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        '@mui/material',
        '@mui/system',
        '@emotion/react',
        '@emotion/styled',
        '@mui/icons-material',
      ],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'styles.css' // 👈 output CSS as styles.css
          }
          return 'assets/[name][extname]' // default for other assets like .svg
        },
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@mui/material': 'MuiMaterial',
          '@mui/system': 'MuiSystem',
          '@mui/icons-material': 'MuiIconsMaterial',
          '@emotion/react': 'EmotionReact',
          '@emotion/styled': 'EmotionStyled',
        },
      },
    },
  },
})
