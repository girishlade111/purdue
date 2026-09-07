# Purdue - Modern React Application

A modern, high-performance React application built with TypeScript, Vite, and Tailwind CSS. Features smooth animations with Framer Motion and a beautiful icon set from Lucide React.

## 🚀 Tech Stack

- **React 19** - Latest React with concurrent features
- **TypeScript** - Full type safety
- **Vite 8** - Lightning-fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **Lucide React** - Beautiful, consistent icon set
- **Oxlint** - Fast, modern linter

## 📁 Project Structure

```
purdue/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   ├── styles/             # Global styles & Tailwind
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── vite-env.d.ts       # Vite type declarations
├── dist/                   # Production build output
├── index.html              # HTML template
├── package.json            # Dependencies & scripts
├── tsconfig.json           # TypeScript config
├── tsconfig.app.json       # App-specific TS config
├── tsconfig.node.json      # Node-specific TS config
├── vite.config.ts          # Vite configuration
├── .oxlintrc.json          # Oxlint configuration
└── .gitignore              # Git ignore rules
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 20+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/purdue.git
cd purdue

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Start development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

The app will be available at `http://localhost:5173`

### Building for Production

```bash
# Build for production
npm run build
# or
yarn build
# or
pnpm build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
# Preview the production build locally
npm run preview
# or
yarn preview
# or
pnpm preview
```

### Linting

```bash
# Run linter
npm run lint
# or
yarn lint
# or
pnpm lint
```

## 🎨 Features

- **Modern React 19** - Leveraging the latest React features including concurrent rendering
- **Type-Safe Development** - Full TypeScript support with strict mode enabled
- **Fast Development** - Vite's HMR for instant updates
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - Framer Motion for delightful interactions
- **Icon System** - Lucide React for consistent, customizable icons
- **Code Quality** - Oxlint for fast, reliable linting
- **Optimized Builds** - Vite's production optimizations

## 📦 Dependencies

### Production Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.2.7 | Core React library |
| react-dom | ^19.2.7 | React DOM renderer |
| tailwindcss | ^4.3.2 | Utility-first CSS framework |
| @tailwindcss/vite | ^4.3.2 | Tailwind CSS Vite plugin |
| framer-motion | ^12.42.0 | Animation library |
| lucide-react | ^1.22.0 | Icon library |

### Development Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| typescript | ~6.0.2 | TypeScript compiler |
| vite | ^8.1.0 | Build tool & dev server |
| @vitejs/plugin-react | ^6.0.2 | React plugin for Vite |
| oxlint | ^1.69.0 | Fast linter |
| @types/react | ^19.2.17 | React type definitions |
| @types/react-dom | ^19.2.3 | React DOM type definitions |
| @types/node | ^24.13.2 | Node.js type definitions |

## 🔧 Configuration

### TypeScript

The project uses three TypeScript configurations:
- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - Application-specific config
- `tsconfig.node.json` - Node.js environment config

### Vite

Configured in `vite.config.ts` with:
- React plugin for JSX/TSX support
- Tailwind CSS plugin
- Path aliases for clean imports

### Oxlint

Configured in `.oxlintrc.json` with React and TypeScript rules.

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### Static Hosting

The `dist/` folder contains static files that can be deployed to any static hosting service:
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Surge.sh

## 📝 Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `vite` | Start development server |
| `build` | `tsc -b && vite build` | Build for production |
| `lint` | `oxlint` | Run linter |
| `preview` | `vite preview` | Preview production build |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://react.dev/) - The library for web and native user interfaces
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library for React
- [Lucide](https://lucide.dev/) - Beautiful & consistent icon toolkit
- [Oxlint](https://oxc.rs/docs/guide/usage/linter) - Fast linter for JavaScript/TypeScript