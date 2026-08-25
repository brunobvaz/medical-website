import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { sites } from '@openai/sites-vite-plugin'

const isGitHubPages = globalThis.process?.env?.GITHUB_ACTIONS === 'true'

export default defineConfig({
  base: isGitHubPages ? '/medical-website/' : '/',
  plugins: [react(), sites()],
})
