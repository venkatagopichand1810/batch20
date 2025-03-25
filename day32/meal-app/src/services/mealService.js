import {API_URL} from "../utils/api";

// fetch the meals by search term

export const fetchMealBySearch = async(searchTerm) => {
    try {
        const response = await fetch(`${API_URL}/search.php?s=${searchTerm}`);
        const data = await response.json();
        return data.meals || []

    } catch(error){
        console.error("Error fetching meals", error)
    }
}

// fetch meals by category
export const fetchMealByCategory = async(category) => {
    try {
        const response = await fetch(`${API_URL}/filter.php?c=${category}`);
        const data = await response.json();
        return data.meals || []

    } catch(error){
        console.error("Error fetching meals", error)
    }
}



//fetch a random meal

export const fetchRandomMeal = async() => {
    try {
        const response = await fetch(`${API_URL}/random.php`);
        const data = await response.json();
        return data.meals[0]

    } catch(error){
        console.error("Error fetching meals", error)
    }
}



//fetch meal by ID

export const fetchMealById = async(id) => {
    try {
        const response = await fetch(`${API_URL}/lookup.php?i=${id}`);
        const data = await response.json();
        return data.meals[0]

    } catch(error){
        console.error("Error fetching meals", error)
    }
}

