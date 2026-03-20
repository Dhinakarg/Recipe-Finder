
const NavBar = ({ favCount, showFavs, setShowFavs }) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-gray-100/50 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div 
            className="flex items-center gap-3 cursor-pointer group active:scale-95 transition-transform duration-200"
            onClick={() => setShowFavs(false)}
          >
            <div className="text-3xl filter drop-shadow-sm group-hover:rotate-12 transition-transform">
              🍲
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black bg-linear-to-r from-orange-600 to-rose-500 bg-clip-text text-transparent hidden sm:block tracking-tight">
                RecipeBook
              </span>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest hidden sm:block leading-none">
                Cook with love
              </span>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <button 
              onClick={() => setShowFavs(false)}
              className={`text-sm font-bold tracking-wide uppercase transition-all relative py-2
                ${!showFavs 
                  ? 'text-orange-600' 
                  : 'text-gray-400 hover:text-gray-900'
                }`}
            >
              Home
              {!showFavs && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 rounded-full animate-in slide-in-from-left duration-300" />
              )}
            </button>
            
            <button 
              onClick={() => setShowFavs(true)}
              className={`relative text-sm font-bold tracking-wide uppercase transition-all py-2
                ${showFavs 
                  ? 'text-orange-600' 
                  : 'text-gray-400 hover:text-gray-900'
                }`}
            >
              Favourites
              {favCount > 0 && (
                <span className="absolute -top-1 -right-4 bg-rose-500 text-white text-[9px] font-black w-5 h-5 flex items-center justify-center rounded-full shadow-lg shadow-rose-200 ring-2 ring-white animate-in zoom-in">
                  {favCount}
                </span>
              )}
              {showFavs && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 rounded-full animate-in slide-in-from-left duration-300" />
              )}
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;