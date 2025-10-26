# Am I Here Or Not ?

![Home Page Preview](./public/preview.jpeg)

**Live Demo:** [am-i-here-or-not](https://am-i-here-or-not.vercel.app/)

## 💕 About

**Am I Here or Not?** is a high-contrast, editorial-style photo gallery and creative manifesto built with Next.js. This project explores experimental photography and self-inquiry through a dynamic, magazine-inspired design. It features four thematic pages that guide the user through a unique narrative from the model's perspective:

- **Home (`/`)**: The landing page, posing the central question, "Am I Here or Not?"
- **Subject (`/subject`)**: An "About Me" page that delves into the model's identity and story.
- **Focus (`/focus`)**: A horizontal, scroll-driven gallery showcasing a collection of experimental photography.
- **Signal (`/signal`)**: A "Contact" page for reaching out and connecting.

---

## ✨ Features

This project is built with a modern tech stack and includes several notable features:

- **Framework**: Built with [Next.js](https://nextjs.org/) 14 (App Router) and [TypeScript](https://www.typescriptlang.org/) for a robust, type-safe, and performant application.
- **Styling**: Styled with [Tailwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4-alpha) for a utility-first CSS workflow.

- **Animations**: - Powered by [GSAP (GreenSock Animation Platform)](https://gsap.com/) for high-performance, complex animations.
            - Implements `ScrollTrigger` for engaging scroll-based animations. - Features smooth scrolling powered by Lenis.

- **Interactive UI/UX**:
            - **Follow Cursor**: A custom cursor that provides a unique and interactive user experience.

- **Performance**: Leverages Turbopack, Next.js's Rust-based bundler, for an optimized and fast development experience.

- **Code Quality**: Enforced with Biome for linting and formatting, ensuring a clean and consistent codebase.

---

## 🚀 Getting Started

First, install the dependencies:

**Prerequisites:** Node.js 18 LTS or later is recommended.

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server with Turbopack for faster builds:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

The page will automatically reload when you make changes to the code. You can also view any build errors or lint warnings in the console.

### Available Scripts

- `npm run dev` - Starts the development server with Turbopack
- `npm run build` - Creates an optimized production build.
- `npm run start` - Starts the production server (after building).
- `npm run lint` - Runs Biome to check for code issues.
- `npm run format` - Formats code with Biome.

---

## 🎨 Customization

### Modifying Colors and Styling

The project uses Tailwind CSS v4 with custom utilities. To change the color scheme or styling:

1. Edit `src/app/globals.css` to update CSS variables and custom utilities
2. Modify Tailwind classes in component files
3. The color palette and design tokens are defined in the global CSS file

### Adding New Pages

To add a new page:

1. Create a new folder in `src/app/`
2. Add a `page.tsx` file with your page component
3. Update the navigation in `src/components/Navbar.tsx`

---

## 📂 Project Structure

A brief overview of the project's directory structure:

```plaintext
📁 am-i-here-or-not
├── 📁 public
│   └── 📁 images
├── 📁 src
│   ├── 📁 app
│   │   ├── 📁 focus
│   │   ├── 📁 signal
│   │   └── 📁 subject
│   ├── 📁 components
│   ├── 📁 fonts
│   ├── 📁 libs
│   └── 📁 utils
├── .gitignore
├── LICENSE.md
├── README.md
├── biome.json
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## 🦾 Building for Production

To create a production build and start the production server:

```bash
npm run build
npm run start
```

---

## 😵‍💫 Troubleshooting

### Common Issues

1. **Port already in use:**

```bash
npm run dev -- -p 3001
```

2. **Dependency issues:**

```bash
rm -rf node_modules package-lock.json
npm install
```

3. **Linting or Formatting Errors:** Run `npm run lint` or `npm run format` to fix issues automatically.

4. **Build failures:** Check console error messages; ensure all dependencies are installed and compatible versions are used.

5. **GSAP and animation issues:** Ensure GSAP animations are triggered after component mount.

---

## 🧑‍💻 Code Quality

This project uses Biome for linting and formatting, complemented by Prettier, to ensure a clean and consistent codebase.

- Run `npm run lint` to check code style
- Run `npm run format` to automatically format your code with Biome.

---

Here is a fresh, updated responsive-focused roadmap for your photography portfolio site:

## 🗺️ Roadmap

This portfolio is evolving with future features planned for a seamless, responsive experience:

- **Mobile-First Design:** Optimized layouts ensuring smooth browsing on phones and tablets.
- **Performance Enhancements:** Fast-loading images and efficient resource management for all devices.

_Your feedback and suggestions are welcome!_

---

## 🤝 Contributing

Open to suggestions and feedback! To contribute:

- Fork the repository.
- Create a new branch (`git checkout -b feature/YourFeatureName`).
- Commit your changes (`git commit -m 'Add some feature'`).
- Push to the branch (`git push origin feature/YourFeatureName`).
- Open a pull request.

---

## 🧑‍🦱 Author

[![GitHub](https://img.shields.io/badge/GitHub_rudraxi-%23121011.svg?logo=github&logoColor=white)](https://github.com/rudra-xi)

## 📱Contact

[![Instagram](https://img.shields.io/badge/Instagram_%40Rudra.Xii-%23E4405F.svg?logo=Instagram&logoColor=white)](https://www.instagram.com/rudra.xii/)
[![LinkedIn](https://custom-icon-badges.demolab.com/badge/LinkedIn_Goutam-0A66C2?logo=linkedin-white&logoColor=fff)](https://www.linkedin.com/in/goutam-rudraxi)

## 🪪 License

This project is licensed under the MIT License. See the [![License: MIT](https://img.shields.io/badge/License-MIT-lightgreen.svg)](/LICENSE) file for more information.
