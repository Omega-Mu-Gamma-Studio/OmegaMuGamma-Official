# Omega Mu Gamma Studio Website

The official studio website — a digital hub for our educational software, research, and creative projects.

Built with Angular 18, this website serves as the central showcase for Omega Mu Gamma Studio's portfolio of mascot-guided CS and engineering education tools, research publications, and studio information.

🔗 **Live Demo:** [Coming Soon]
📦 **Repository:** [GitHub](https://github.com/Omega-Mu-Gamma-Studio/OmegaMuGamma-Official)

## 🎯 Overview

Omega Mu Gamma Studio designs and builds mascot-guided learning tools for computer science and engineering coursework. This website organizes our projects into categories, making it easy for students, faculty, and collaborators to discover our work.

### Key Features

| Feature | Description |
|---|---|
| Category Disc | An interactive spinning disc that lets users browse project categories (Chan Series, CS Tools, Engineering Tools, Creative Tools, Research, Studio) |
| Project Grid | A clean, responsive grid view showing all projects within a category with status badges (Live, Complete, Content-Complete, In Development) |
| Project Detail | Comprehensive project pages with descriptions, tech stacks, and links to live demos and GitHub repositories |
| Global Search | Search across all projects by name, description, or technology stack |
| Responsive Design | Works seamlessly on desktop, tablet, and mobile devices |
| Angular Material | Premium UI components for a polished, professional look |

## 📂 Project Structure

```bash
omega-mu-gamma/
│
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── home/              # Homepage with disc navigation
│   │   │   ├── category/          # Category grid view
│   │   │   └── project-detail/    # Individual project page
│   │   │
│   │   ├── components/
│   │   │   ├── disc/              # Spinning category disc
│   │   │   ├── project-grid/      # Reusable grid component
│   │   │   ├── project-card/      # Reusable card component
│   │   │   ├── navbar/            # Global navigation
│   │   │   ├── footer/            # Global footer
│   │   │   └── search-bar/        # Search component
│   │   │
│   │   ├── services/
│   │   │   └── project.service.ts # Data fetching, search, filtering
│   │   │
│   │   ├── models/
│   │   │   └── project.model.ts   # TypeScript interfaces
│   │   │
│   │   ├── data/
│   │   │   └── projects.json      # All project metadata
│   │   │
│   │   ├── app.routes.ts          # Routing configuration
│   │   ├── app.config.ts          # App configuration
│   │   └── app.component.ts       # Root component
│   │
│   ├── assets/
│   │   ├── icons/                 # Category and project icons
│   │   └── images/                # Project images and thumbnails
│   │
│   ├── styles.scss                # Global styles
│   └── index.html                 # Entry point
│
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js v18+
- npm or yarn
- Angular CLI

### Installation

```bash
# Clone the repository
git clone https://github.com/Omega-Mu-Gamma-Studio/OmegaMuGamma-Official.git
cd OmegaMuGamma-Official

# Install dependencies
npm install

# Start the development server
ng serve
```

Open http://localhost:4200 in your browser.

### Build for Production

```bash
ng build --prod
```

The build output will be in `dist/omega-mu-gamma/`.

### Running Tests

```bash
ng test
```

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| Framework | Angular 18 | Modern, enterprise-grade web framework |
| UI Library | Angular Material | Premium, accessible UI components |
| Styling | SCSS | Maintainable, modular styles |
| State Management | RxJS + Signals | Reactive state and data flow |
| Routing | Angular Router | Client-side navigation |
| Animations | Angular Animations | Smooth transitions and interactions |
| Hosting | Vercel / Netlify | Static site deployment |

## 📊 Project Data

All project metadata lives in `src/app/data/projects.json`. The schema is:

```json
{
  "categories": [
    {
      "id": "category-id",
      "name": "Category Name",
      "icon": "emoji",
      "description": "Category description",
      "projects": [
        {
          "id": "project-id",
          "name": "Project Name",
          "status": "Live | Complete | Content-Complete | In Development",
          "statusColor": "#hex",
          "description": "Project description",
          "url": "https://live-demo.com",
          "repo": "https://github.com/...",
          "tech": ["Tech 1", "Tech 2"],
          "image": "assets/images/project.jpg"
        }
      ]
    }
  ]
}
```

### Status Definitions

| Status | Meaning |
|---|---|
| Live | Fully functional, deployed, and actively maintained |
| Complete | All features and content shipped |
| Content-Complete | Core content done, some polish/art/features pending |
| In Development | Actively being built |

## 🎨 Design Philosophy

### Color Palette

| Role | Color | Hex |
|---|---|---|
| Primary Ink | Dark | `#0B0D14` |
| Soft Ink | Muted dark | `#4A4F5E` |
| Muted Text | Medium grey | `#7A8092` |
| Line/Border | Light grey | `#E7E8EE` |
| Background | White | `#FFFFFF` |
| Alt Background | Off-white | `#F6F7FB` |
| Accent | Blue | `#2B4CFF` |
| Accent Dim | Light blue | `#EEF1FF` |

### Typography

| Element | Font | Weights |
|---|---|---|
| Headings | Manrope | 700, 800 |
| Body | Inter | 400, 500, 600 |

## 📝 Available Scripts

| Command | Description |
|---|---|
| `ng serve` | Development server at localhost:4200 |
| `ng build` | Production build to `dist/` |
| `ng test` | Run unit tests |
| `ng lint` | Lint the project |
| `ng generate component <name>` | Create a new component |

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Coding Standards

- Use standalone components
- Follow Angular style guide
- Write meaningful component and variable names
- Add comments for complex logic
- Write unit tests for new features

## 📄 License

This project is licensed under the PolyForm Noncommercial License 1.0.0.

You may use, modify, and share this software for noncommercial purposes only, including:

- Personal study and hobby projects
- Educational and research use
- Noncommercial organizations (charities, educational institutions, government bodies)

Commercial use is prohibited without a separate commercial license from Omega Mu Gamma Studio.

© 2026 Omega Mu Gamma Studio

## 📬 Contact

| Role | Name | GitHub |
|---|---|---|
| Founder & Primary Developer | Alberto Felix A | [@albertofelix08](https://github.com/albertofelix08) |
| Co-Developer | Aaron Mcgeo | [@aaronmcgeo](https://github.com/aaronmcgeo) |
| Co-Developer | Ashikha Brigid | [@ashikhabrigid](https://github.com/ashikhabrigid) |

Email: hello@example.com

## 🙏 Acknowledgments

- Angular Team — For an incredible framework
- Angular Material — For beautiful, accessible components
- Google Fonts — For Manrope and Inter typefaces
- All contributors — Who have helped build the studio's projects

---

This website is part of the Omega Mu Gamma Studio open-source education toolkit.

Made with ❤️ by Omega Mu Gamma Studio · Nagercoil, Tamil Nadu
