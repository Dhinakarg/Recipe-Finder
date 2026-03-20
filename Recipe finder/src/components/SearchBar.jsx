
const SearchBar = ({ searchTerm, setSearchTerm, onSearch, showVeg, setShowVeg, favCount }) => {
  return (
    <div className="max-w-4xl mx-auto mb-10 px-4">
      {/* Search Input Area */}
      <form onSubmit={onSearch} className="flex flex-col sm:flex-row gap-3 mb-8">
        <input 
          type="text" 
          className="flex-1 p-4 bg-white border-2 border-gray-50 rounded-2xl shadow-sm outline-none transition-all placeholder:text-gray-300 focus:border-orange-300 focus:bg-white"
          placeholder="What are you craving today? (e.g., Pasta, Tacos...)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <button className="px-10 py-4 bg-orange-500 text-white font-black rounded-2xl shadow-lg shadow-orange-200 hover:bg-orange-600 active:scale-95 transition-all">
          Search
        </button>
      </form>

      {/* Filter & Stats Row */}
      <div className="flex justify-between items-center px-1">
        
        {/* Vegetarian Toggle */}
        <div className="flex items-center gap-4 group">
          <span className={`text-sm font-black tracking-wide uppercase transition-colors ${showVeg ? 'text-green-600' : 'text-gray-400'}`}>
            Veg Only
          </span>
          
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer" 
              checked={showVeg}
              onChange={() => setShowVeg(!showVeg)}
            />
            {/* Custom Toggle Track */}
            <div className="w-12 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 peer-focus:ring-2 peer-focus:ring-green-100 transition-all after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-6"></div>
          </label>
        </div>

        {/* Favorites Counter */}
        <div className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl border border-gray-50 shadow-sm hover:shadow-md transition-shadow cursor-default">
          <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Saved</span>
          <div className="flex items-center gap-1.5">
            <span className="text-orange-600 font-black text-lg leading-none">{favCount}</span>
            <span className="text-xl filter drop-shadow-sm">❤️</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SearchBar;