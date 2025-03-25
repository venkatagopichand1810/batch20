
import { useState } from 'react';
import { fetchMealBySearch, fetchMealByCategory, fetchRandomMeal } from "../services/mealService";
import SearchBar from '../components/SearchBar';
import MealCard from '../components/MealCard';


function Home() {
    const [meals, setMeals] = useState([]);

    // search mealsz
    const handleSearch = async (searchTerm) => {
        const result = await fetchMealBySearch(searchTerm);
        setMeals(result)

    }

    // filter meals by category
    const handleCategorySelect = async (category) => {
        if (category) {
            const result = await fetchMealByCategory(category);
            setMeals(result)
        }

    }

    // get randome meal
    const handleRandomMeal = async () => {
        const result = await fetchRandomMeal();
        setMeals([result])

    };

    return (
        <div>
            <SearchBar 
                onSearch = {handleSearch}
                onCategorySelect = {handleCategorySelect}
                onRandomMeal = {handleRandomMeal}
            />

            {meals.length === 0 ? (
                <p className='text-center text-gray-500 mt-4'>No meals found</p>
            ): (
                <div>
                    {meals.map((meal) => (
                        <MealCard key = {meal.idMeal} meal = {meal}/>
                    ))}

                </div>
            )}
        </div>
    )
}

export default Home