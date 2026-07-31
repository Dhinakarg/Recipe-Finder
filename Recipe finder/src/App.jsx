import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';
import RecipeContent from './components/RecipeContent'; 

const App = () => {
  // --- Persistent State ---
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('recipe-favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [searchTerm, setSearchTerm] = useState(() => {
    return localStorage.getItem('last-search-term') || '';
  });

  // --- Application State ---
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showVegOnly, setShowVegOnly] = useState(false);
  const [showFavsOnly, setShowFavsOnly] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // --- Pagination Control ---
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 9;

  // --- Persistence Effects ---
  useEffect(() => {
    localStorage.setItem('recipe-favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('last-search-term', searchTerm);
  }, [searchTerm]);

  // --- Data Fetching ---
  const fetchRecipes = async (query) => {
    setLoading(true);
    try {
      if (!query || query.trim() === "") {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        const requests = alphabet.map(l =>
          fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${l}`).then(res => res.json())
        );
        const results = await Promise.all(requests);
        const combined = results.reduce((acc, curr) => curr.meals ? [...acc, ...curr.meals] : acc, []);
        setRecipes(combined);
      } else {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await res.json();
        setRecipes(data.meals || []);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes(searchTerm);
  }, []);

  // --- Event Handlers ---
  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchRecipes(searchTerm);
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  // --- Filtering & Pagination Logic ---
  const filteredRecipes = recipes.filter(r => {
    const matchesVeg = showVegOnly ? (r.strCategory === 'Vegetarian' || r.strCategory === 'Vegan') : true;
    const matchesFavs = showFavsOnly ? favorites.includes(r.idMeal) : true;
    return matchesVeg && matchesFavs;
  });

  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);
  const currentItems = filteredRecipes.slice((currentPage - 1) * recipesPerPage, currentPage * recipesPerPage);

  return (
    <div className="min-h-screen bg-gray-50 pb-20 font-sans text-gray-900">
      <NavBar
        favCount={favorites.length}
        showFavs={showFavsOnly}
        setShowFavs={(val) => { setShowFavsOnly(val); setCurrentPage(1); }}
      />

      {/* Hero Header */}
      <header className="py-12 text-center bg-white border-b border-gray-100 mb-8 px-4">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2 tracking-tight">
          Find. <span className="text-orange-500">Cook. </span>Enjoy.
        </h1>
        <p className="text-gray-400 font-medium italic">Your personal culinary companion.</p>
      </header>

      {/* Search & Filter Bar */}
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
        showVeg={showVegOnly}
        setShowVeg={(val) => { setShowVegOnly(val); setCurrentPage(1); }}
        favCount={favorites.length}
      />

      {/* Contextual Status Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        {!showFavsOnly ? (
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-orange-400 rounded-full animate-pulse"></div>
            <p className="text-gray-500 font-bold italic text-sm">
              {searchTerm
                ? `Showing results for "${searchTerm}"`
                : "Discovering all available recipes..."
              }
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-1 border-l-4 border-orange-500 pl-4 py-1">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight uppercase">Your Saved Kitchen</h2>
            <p className="text-gray-400 text-sm font-bold">Manage your {favorites.length} favorite dishes</p>
          </div>
        )}
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
            <p className="text-orange-600 font-bold">Gathering ingredients...</p>
          </div>
        ) : currentItems.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentItems.map(recipe => (
                <RecipeCard
                  key={recipe.idMeal}
                  recipe={recipe}
                  isFavorite={favorites.includes(recipe.idMeal)}
                  toggleFavorite={toggleFavorite}
                  onOpenDetails={() => setSelectedRecipe(recipe)}
                />
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-16 gap-4">
                <button
                  disabled={currentPage === 1}
                  onClick={() => { setCurrentPage(p => p - 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="px-6 py-3 bg-white border-2 border-gray-100 rounded-xl font-bold disabled:opacity-20 hover:border-orange-500 transition-all shadow-sm active:scale-95"
                >
                  ← Back
                </button>

                <div className="bg-white px-6 py-3 rounded-xl border-2 border-gray-100 shadow-sm font-black text-orange-600">
                  {currentPage} / {totalPages}
                </div>

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => { setCurrentPage(p => p + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="px-6 py-3 bg-white border-2 border-gray-100 rounded-xl font-bold disabled:opacity-20 hover:border-orange-500 transition-all shadow-sm active:scale-95"
                >
                  Next →
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-24 bg-white rounded-[2.5rem] border-2 border-dashed border-gray-100 shadow-inner">
             <div className="text-5xl mb-4">🍽️</div>
            <h3 className="text-xl font-black text-gray-800">
              {showFavsOnly ? "Your kitchen is empty!" : "No recipes found"}
            </h3>
            <p className="text-gray-400 mt-2">
              {showFavsOnly ? "Go explore and heart some recipes to see them here." : "Try adjusting your search or filters."}
            </p>
          </div>
        )}
      </main>

      {selectedRecipe && (
        <RecipeContent 
          recipe={selectedRecipe} 
          onClose={() => setSelectedRecipe(null)} 
        />
      )}
    </div>
  );
};

export default App;