import { createRequire } from 'module'
const require = createRequire(import.meta.url)

require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
  extensions: ['.js', '.jsx'],
})
