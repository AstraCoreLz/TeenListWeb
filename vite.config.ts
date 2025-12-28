import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import { traeBadgePlugin } from 'vite-plugin-trae-solo-badge';

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  build: {
    sourcemap: 'hidden',
  },
  plugins: [
    react({
      babel: {
        plugins: [
          'react-dev-locator',
        ],
      },
    }),
    ...(command === 'serve' 
      ? [
          traeBadgePlugin({
            variant: 'dark',
            position: 'bottom-right',
            clickable: true,
            clickUrl: 'https://www.trae.ai/solo?showJoin=1',
            autoTheme: true,
            autoThemeTarget: '#root'
          })
        ]
      : []
    ),
    tsconfigPaths()
  ],
}))
