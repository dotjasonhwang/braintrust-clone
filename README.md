<!--
MIT License

Copyright (c) 2025 Jason Hwang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h1 align="center">Braintrust Clone</h1>

  <p align="center">An educational project - partial clone of <a href="https://www.braintrust.dev/">Braintrust</a>, built with React, Next.js, and Tailwind CSS</p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about">About</a></li>
    <li><a href="#setup">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About

This is an educational project that recreates key features of [Braintrust](https://www.braintrust.dev/), a platform for AI model evaluation and experimentation. This clone is built to understand modern AI tooling architectures and practice building production-quality React applications.

**Disclaimer**: This project is not affiliated with or endorsed by Braintrust. It is purely for educational purposes.

### Features (Planned)

- AI model evaluation and comparison
- Experiment tracking and logging
- Integration with Google GenAI and other AI providers
- Modern, responsive UI built with Next.js and Tailwind CSS

![Braintrust Clone Screenshot][product-screenshot]

## Getting Started

### Prerequisites

- Node.js 20+ (LTS recommended)
- npm or yarn package manager

### Installation

1. Clone the repository

   ```sh
   git clone https://github.com/dotjasonhwang/braintrust-clone.git
   cd braintrust-clone
   ```

2. Install dependencies

   ```sh
   npm install
   ```

3. Set up environment variables

   ```sh
   cp .env.example .env
   # Edit .env with your API keys
   ```

4. Run the development server

   ```sh
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

### Available Commands

- `npm run dev` - Start the development server at http://localhost:3000
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check for code quality issues
- `npm run api-test` - Run API integration tests

### Project Structure

```
braintrust-clone/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx       # Root layout component
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── public/              # Static assets
├── readme-assets/       # README images
└── api-test.ts          # API testing script
```

For more details, see [CLAUDE.md](CLAUDE.md) for development guidelines and architecture documentation.

## Built With

[![Next.js][next-shield]][next-url]
[![React][react-shield]][react-url]
[![TypeScript][typescript-shield]][typescript-url]
[![Tailwind CSS][tailwind-shield]][tailwind-url]

### Core Technologies

- **[Next.js 16.0.1](https://nextjs.org/)** - React framework with App Router
- **[React 19.2.0](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework

### AI Integration

- **[Braintrust SDK](https://www.braintrust.dev/)** - AI evaluation and logging
- **[Google GenAI](https://ai.google.dev/)** - Google's generative AI SDK

### Development Tools

- **[ESLint](https://eslint.org/)** - Code linting with Next.js recommended rules
- **[tsx](https://github.com/privatenumber/tsx)** - TypeScript execution for scripts

## Contributing

Thank you for your interest in contributing to this project. Open source projects are a beautiful picture of collaboration and generosity. Please raise items for discussion using the links below, via a pull request, or by email.

[Request Feature][feature-request-url]<br>
[Report Bug][bug-report-url]

## License

[![License][license-shield]][license-url]

## Contact

Jason Hwang<br>
GitHub: [@dotjasonhwang](https://github.com/dotjasonhwang)

## Acknowledgments

- [Braintrust](https://www.braintrust.dev/) - For the original platform that inspired this educational project
- [othneildrew/Best-README-Template][readme-template-url] - For the README template
- [Next.js](https://nextjs.org/) - For the excellent React framework and documentation

<!-- MARKDOWN LINKS -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

<!-- repo -->

[feature-request-url]: https://github.com/dotjasonhwang/braintrust-clone/issues/new?labels=enhancement&template=feature-request.md
[bug-report-url]: https://github.com/dotjasonhwang/braintrust-clone/issues/new?labels=bug&template=bug-report.md

<!-- about -->

[product-screenshot]: readme-assets/screenshot.png

<!-- built_with -->

[next-shield]: https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react-shield]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://react.dev/
[typescript-shield]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[tailwind-shield]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[tailwind-url]: https://tailwindcss.com/

<!-- license -->

[license-shield]: https://img.shields.io/github/license/dotjasonhwang/braintrust-clone.svg?style=for-the-badge
[license-url]: https://github.com/dotjasonhwang/braintrust-clone/blob/main/LICENSE

<!-- acknowledgements -->

[readme-template-url]: https://github.com/othneildrew/Best-README-Template
