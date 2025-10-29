# braintrust clone

## Overview

Partial clone of [braintrust](https://www.braintrust.dev/), built using React, Next.js, and Tailwind CSS.
Disclaimer: I am not affiliated with Braintrust, this is purely an educational project.

## Roadmap

This is a time-boxed project designed to practice modern front-end development skills while maintaining a focused scope. A self-contained hackathon, you could say.

1. 3 Hour v1 draft of Parent dashboard, Overview, and Logs
2. 3 Hour v2 draft, improving v1 and adding adding the TODO page

## Architecture

- **Framework**: Next.js 16.0.1 with App Router
- **UI**: React 19.2.0
- **Styling**: Tailwind CSS v4 with PostCSS
- **Language**: TypeScript with strict mode
- **Linting**: ESLint (flat config) with Next.js recommended rules
- **Testing**: Not yet configured
- **Deployment**: Vercel (default for Next.js)

### Configuration Files

- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration with strict mode
- `eslint.config.mjs` - ESLint flat config with Next.js rules
- `postcss.config.mjs` - PostCSS configuration for Tailwind CSS v4
- `app/globals.css` - Global styles and Tailwind CSS imports
- `.env*` - Environment variables (gitignored)

### Directory Structure

- `app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout component
  - `page.tsx` - Home page
  - `globals.css` - Global styles
- `public/` - Static assets
- `.vscode/` - VS Code configuration
  - `settings.json` - Editor settings (contains outdated Astro references - needs cleanup)
  - `extensions.json` - Recommended extensions

### Integrations

- **Braintrust SDK** (`braintrust` package) - AI model evaluation and logging
- **Google GenAI** (`@google/genai` package) - Google's generative AI SDK

## Development Preferences

- **Code Style**: 2-space indentation (per tsconfig.json), ESLint for linting
- **TypeScript**: Strict mode enabled, prefer explicit types
- **Testing**: Not yet configured (TODO: add Vitest, Playwright, etc.)
- **Accessibility**: Not yet configured (TODO: add axe-core testing)

### Formatter Configuration

- TypeScript/TSX files: `esbenp.prettier-vscode` (per .vscode/settings.json)
- Note: .vscode/settings.json contains outdated Astro configuration that should be removed

### Commands

Available commands from package.json:

- `npm run dev` - Start Next.js development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run api-test` - Run API test script (uses tsx to execute api-test.ts)
