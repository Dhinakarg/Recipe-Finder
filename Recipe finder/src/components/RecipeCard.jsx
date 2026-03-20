import React from 'react';

const RecipeCard = ({ recipe, isFavorite, toggleFavorite, onOpenDetails }) => {
  const HeartIcon = ({ filled }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="22" height="22" 
      viewBox="0 0 24 24" 
      fill={filled ? "currentColor" : "none"} 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
    </svg>
  );

  return (
    <div className="group relative flex flex-col h-full bg-white rounded-4xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
      
      <div className="relative h-56 overflow-hidden">
        <img 
          src={recipe.strMealThumb} 
          alt={recipe.strMeal} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
        />
        
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60" />
        
        <button 
          onClick={(e) => {
            e.stopPropagation(); // Preventing accidental card clicks
            toggleFavorite(recipe.idMeal);
          }} 
          className={`absolute top-4 right-4 z-10 p-3 rounded-full backdrop-blur-md transition-all duration-300 active:scale-75 shadow-lg
            ${isFavorite 
              ? 'bg-red-50 text-red-500' 
              : 'bg-white/80 text-gray-400 hover:bg-white hover:text-red-400'
            }`}
        >
          <div className={isFavorite ? 'animate-bounce-short' : ''}>
            <HeartIcon filled={isFavorite} />
          </div>
        </button>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-black uppercase tracking-[0.15em] text-orange-500 bg-orange-50 px-2.5 py-1 rounded-lg">
              {recipe.strCategory}
            </span>
          </div>
          
          <h2 className="text-2xl font-black text-gray-900 leading-[1.1] group-hover:text-orange-600 transition-colors duration-300">
            {recipe.strMeal}
          </h2>
        </div>
        
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
          Experience the authentic flavors of <span className="font-semibold text-gray-700">{recipe.strArea}</span> cuisine, crafted with traditional ingredients.
        </p>
        
        <div className="mt-auto pt-6">
          <button 
            onClick={onOpenDetails}
            className="w-full py-4 bg-gray-950 text-white font-black rounded-2xl shadow-xl shadow-gray-200 hover:bg-orange-600 hover:shadow-orange-100 transition-all duration-300 active:scale-[0.98]"
          >
            Explore Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;