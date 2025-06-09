# Portfolio - Vishal K.S

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, interactive UI components, and showcases my projects and experience as an engineer.

🌐 **Live Demo**: [vishalkks.com](https://vishalkks.com)

## ✨ Features

- **Modern Design**: Clean, minimalist interface with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Animations**: Built with Framer Motion for engaging user experience
- **Project Showcase**: Dynamic project cards with descriptions and GitHub links
- **Contact Form**: Integrated contact functionality
- **Performance Optimized**: Fast loading with optimized assets and code splitting

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Material-UI components
- **Animations**: Framer Motion
- **Build Tool**: Create React App with custom Webpack config
- **Package Manager**: pnpm
- **Deployment**: GitHub Actions → GitHub Pages
- **Hosting**: Custom domain with GitHub Pages

## 📁 Project Structure

```
src/
├── components/
│   ├── animations/     # Framer Motion components
│   ├── common/         # Reusable UI components
│   └── modules/        # Page-specific components
├── pages/              # Main page components
├── info/               # JSON data files
└── utils/              # Utility functions

public/
├── image/              # Static images and assets
├── docs/               # Resume and documents
└── favicon/            # Favicon files
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/vishalkks/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Available Scripts

- `pnpm start` - Runs the app in development mode
- `pnpm build` - Builds the app for production
- `pnpm test` - Launches the test runner
- `pnpm deploy` - Deploys to GitHub Pages using gh-pages

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions:

1. **Push to main branch** triggers the deployment workflow
2. **GitHub Actions** builds the project and deploys to GitHub Pages
3. **Custom domain** (vishalkks.com) is configured via CNAME

### Manual Deployment

```bash
pnpm run build
pnpm run deploy
```

## 📱 Responsive Design

The portfolio is fully responsive and tested on:

- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Key Components

- **Animated Blobs**: Dynamic background animations using simplex noise
- **Project Cards**: Interactive showcase with hover effects
- **Contact Form**: Email integration with toast notifications
- **Navigation**: Responsive menu with mobile hamburger
- **Typography**: Custom font loading with WebFont loader

## 🔧 Customization

To customize for your own portfolio:

1. Update personal information in `src/info/about.json`
2. Add your projects to `src/info/projects.json`
3. Replace images in `public/image/`
4. Update resume in `public/docs/`
5. Modify the CNAME file for your custom domain

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Vishal K.S**

- Website: [vishalkks.com](https://vishalkks.com)
- LinkedIn: [linkedin.com/in/vishalkks](https://www.linkedin.com/in/vishalkks/)
- Email: vishalkks@gmail.com

---

⭐ If you found this portfolio helpful, please give it a star!
