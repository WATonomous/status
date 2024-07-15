import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.DEPLOY_PATH || '/',

  plugins: [
    react(),
    // Manually generated an auth token with project:releases scope and
    // added the SENTRY_AUTH_TOKEN env var to CI.
    // https://watonomous.sentry.io/settings/developer-settings/status-page-source-map-upload-db69ba/
    sentryVitePlugin({
      org: "watonomous",
      project: "status-page",
      telemetry: false,
    })
  ],

  build: {
    sourcemap: true
  }
})