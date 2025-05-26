import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}', // 🔒 E2E em pasta própria
    baseUrl: 'http://localhost:3000',
    supportFile: false,
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    specPattern: 'src/**/*.spec.{js,jsx,ts,tsx}', // 🔓 Testes de componente junto do código
    supportFile: 'cypress/support/component.ts', // opcional
  },
})
