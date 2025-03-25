function SearchBar({onSearch, onCategorySelect, onRandomMeal}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        const searchTerm = e.target.elements.search.value;
        if(searchTerm) {
            onSearch(searchTerm)
        }

    }


    return(
        <div className="flex justify-center items-center gap-20 my-4">
            <form onSubmit={handleSubmit} className="flex gap-20">
                <input 
                    type="text"
                    name="search"
                    placeholder="Search for a meal"
                    className="p-2 border border-orange-500 rounded-md w-64"
                    
                />
                <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-md">
                    Search
                </button>
            </form>

            {/* category selection */}
            <select 
                onChange={(e) => onCategorySelect(e.target.value)}
                className="p-2 border border-orange-500 rounded-md"

            >
                <option>Select Category</option>
                <option value= "Seafood">Seafood</option>
                <option value= "Dessert">Dessert</option>
                <option value= "Vegetarian">Vegetarian</option>
                <option value= "Pasta">Pasta</option>
            </select>

            <button onClick={onRandomMeal} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Random Meal
            </button>
        </div>
    )

}

export default SearchBar