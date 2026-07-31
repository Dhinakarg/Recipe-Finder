import React from 'react';

const RecipeModal = ({ recipe, onClose }) => {
  // If no recipe is passed, we don't want to render a broken modal
  if (!recipe) return null;

  // Extract ingredients and measures from the API response
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== '') {
      ingredients.push({
        name: ingredient.trim(),
        measure: measure ? measure.trim() : ''
      });
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/70 backdrop-blur-md transition-opacity animate-fade-in">
      {/* Modal Container */}
      <div className="bg-white rounded-4xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in duration-300">
        
        {/* Hero Image Section */}
        <div className="relative group">
          <img 
            src={recipe.strMealThumb} 
            alt={recipe.strMeal} 
            className="w-full h-72 object-cover rounded-t-4xl brightness-95" 
          />
          
          {/* Close Button - Positioned for easy thumb/mouse access */}
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full p-3 shadow-xl hover:bg-white hover:scale-110 active:scale-90 transition-all z-10 cursor-pointer"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Subtle gradient overlay for the image title if needed */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
        
        {/* Content Body */}
        <div className="p-8 md:p-10">
          <header className="mb-8">
            <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight font-serif">
              {recipe.strMeal}
            </h2>
            
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-orange-50 text-orange-600 px-4 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider border border-orange-100">
                {recipe.strCategory}
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider border border-blue-100">
                {recipe.strArea || 'Unknown'}
              </span>
              
              {recipe.strYoutube && (
                <a 
                  href={recipe.strYoutube} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 bg-red-50 hover:bg-red-100 text-red-600 border border-red-100 px-3.5 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.388.511a3.002 3.002 0 0 0-2.11 2.107c-.51 1.884-.51 5.83-.51 5.83s0 3.946.51 5.83a3.003 3.003 0 0 0 2.11 2.107c1.883.51 9.388.51 9.388.51s7.505 0 9.388-.51a3.002 3.002 0 0 0 2.11-2.107c.51-1.884.51-5.83.51-5.83s0-3.946-.51-5.83zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Watch Video
                </a>
              )}
              
              {recipe.strSource && (
                <a 
                  href={recipe.strSource} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-100 px-3.5 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                  </svg>
                  View Source
                </a>
              )}
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Ingredients column */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-orange-500">◈</span> Ingredients
              </h3>
              <ul className="space-y-2.5 max-h-[40vh] md:max-h-[50vh] overflow-y-auto pr-2">
                {ingredients.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 bg-gray-50/70 px-4 py-3 rounded-xl border border-gray-100 text-gray-700 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400 shrink-0"></span>
                    <span className="font-medium text-gray-800 break-words">{item.name}</span>
                    {item.measure && (
                      <span className="ml-auto text-xs text-gray-400 font-bold bg-white px-2 py-0.5 rounded-lg border border-gray-100 shrink-0">
                        {item.measure}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions column */}
            <div className="md:col-span-3 flex flex-col">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-orange-500">◈</span> Cooking Instructions
              </h3>
              <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100 max-h-[40vh] md:max-h-[50vh] overflow-y-auto flex-1">
                <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm font-medium">
                  {recipe.strInstructions}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Polish */}
        <div className="p-6 border-t border-gray-50 flex justify-center">
          <button 
            onClick={onClose}
            className="text-gray-400 font-bold hover:text-gray-600 transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;