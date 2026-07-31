# 🍲 RecipeBook — Find. Cook. Enjoy.

RecipeBook is a modern, premium recipe discovery web application powered by **TheMealDB API**. Built with **React 19**, **Vite**, and **Tailwind CSS v4**, the application is designed to help users search, filter, save, and explore culinary recipes from all over the world with high performance and premium styling.

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

## ⚡ Technical Optimizations & Fixes

1. **Startup Network Overhead Reduced by 95%**: 
   - *Before*: The homepage used to fire **26 parallel fetches** (one for each letter of the alphabet) on start to populate its initial recipe feed, leading to slow startup times and rate-limiting blocks.
   - *After*: Consolidated startup fetching to a single request querying `search.php?s=`, providing 25 popular default dishes instantly.
2. **Detailed Modal Content**: Added full support for extracting ingredients and measurements (from `strIngredient1-20` and `strMeasure1-20`) to replace blank layouts.
3. **Typography & Theme Configuration**: Integrated Google Fonts properly inside Tailwind CSS v4’s `@theme` directive, linking the headings and interface to high-end sans/serif families.
4. **Grammar & Safety Improvements**: Corrected card description grammar for regions/areas (e.g. falls back elegantly for unknown categories) and resolved stuck pulsing loading states.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** (v18 or higher) and **npm** installed.

### Installation

1. Navigate to the `Recipe finder` folder:
   ```bash
   cd "Recipe finder"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   *The server will run on [http://localhost:5173/Recipe-Finder/](http://localhost:5173/Recipe-Finder/)*

4. Build the application for production:
   ```bash
   npm run build
   ```
