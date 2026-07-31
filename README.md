# 🍲 RecipeBook — Find. Cook. Enjoy.

RecipeBook is a modern, premium recipe discovery web application powered by **TheMealDB API**. Built with **React 19**, **Vite**, and **Tailwind CSS v4**, the application is designed to help users search, filter, save, and explore culinary recipes from all over the world with high performance and premium styling.

🔗 **Live Deployment**: [https://Dhinakarg.github.io/Recipe-Finder/](https://Dhinakarg.github.io/Recipe-Finder/)

---

## 🛠️ Tech Stack

- **Core Framework**: [React 19](https://react.dev/) — Handles state management, local storage persistence, and component lifecycle.
- **Build Tool**: [Vite](https://vitejs.dev/) — Fast HMR dev server and optimized production build engine.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) — Tailored HSL color schemes, native CSS variables, custom typography, and custom micro-animations.
- **Data Source**: [TheMealDB API](https://www.themealdb.com/api.php) — External JSON API for recipe discovery.
- **Deployment**: [GitHub Pages](https://pages.github.com/) — Hosted statically using the `gh-pages` publish pipeline.

---

## ✨ Features

- 🔍 **Live Search**: Find recipes by name instantly.
- 🥗 **Vegetarian Filters**: One-click toggle to filter results for vegetarian and vegan dishes.
- ❤️ **Saved Kitchen (Favorites)**: Bookmark favorite recipes, persisting state across browser reloads using `localStorage`.
- 📖 **Interactive Recipe Modal**:
  - Grid layout showing detailed cooking instructions side-by-side with ingredient checklists.
  - Ingredient checkboxes to keep track of items while cooking.
  - Direct links to **YouTube video tutorials** and **original publisher articles**.
- 🌟 **Premium Aesthetics**:
  - Gorgeous typography combining **Fraunces** (serif) for elegant headings and **DM Sans** (sans-serif) for clean readability.
  - Satisfying micro-animations, such as custom bounce effects on heart button clicks.
  - Glassmorphic navigation bars and responsive grid layouts.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** (v18 or higher) and **npm** installed.

### Setup & Run Commands

You can run these commands directly from the root workspace directory:

- **Install dependencies**: `npm install`
- **Start local development server**: `npm run dev`
- **Build production assets**: `npm run build`
- **Deploy to GitHub Pages**: `npm run deploy`

---

## 🗺️ Roadmap & Future Enhancements

Planned upgrades for future releases:
- [ ] **Search by Main Ingredient**: Add a dropdown list to filter recipes by ingredients (e.g. Chicken, Beef, Eggplant).
- [ ] **Dark Mode Support**: Add a toggle header to switch the interface layout to a sleek dark mode.
- [ ] **Shopping List Planner**: A checklist inside the modal that lets users add ingredients to their local shopping list.
