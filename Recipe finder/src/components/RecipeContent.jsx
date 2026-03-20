import React from 'react';

const RecipeModal = ({ recipe, onClose }) => {
  // If no recipe is passed, we don't want to render a broken modal
  if (!recipe) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/70 backdrop-blur-md transition-opacity">
      {/* Modal Container */}
      <div className="bg-white rounded-4xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in duration-200">
        
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
            className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full p-3 shadow-xl hover:bg-white hover:scale-110 active:scale-90 transition-all z-10"
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
            <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">
              {recipe.strMeal}
            </h2>
            
            <div className="flex flex-wrap gap-3">
              <span className="bg-orange-50 text-orange-600 px-4 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider border border-orange-100">
                {recipe.strCategory}
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider border border-blue-100">
                {recipe.strArea}
              </span>
            </div>
          </header>

          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-orange-500">◈</span> Cooking Instructions
              </h3>
              
              <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100">
                <p className="text-gray-600 leading-relaxed whitespace-pre-line text-lg font-medium">
                  {recipe.strInstructions}
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Footer Polish */}
        <div className="p-6 border-t border-gray-50 flex justify-center">
          <button 
            onClick={onClose}
            className="text-gray-400 font-bold hover:text-gray-600 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;