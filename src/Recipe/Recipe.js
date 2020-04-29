import React, { useState, useEffect } from "react";
import RecipeItems from "./RecipeItems";
import 'tachyons';
import './items.css'
//a60a9308
//1f955083069a1c29e9664e87f4026b94
//https://api.edamam.com/search?q=chicken&app_id=${a60a9308}&app_key=${1f955083069a1c29e9664e87f4026b94}
const Recipe = () => {
  let ID = "a60a9308";
  let KEY = "1f955083069a1c29e9664e87f4026b94";


  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('banana')

  useEffect(() => {
    getRecipe();
  }, [query]);


  const handleChange = (e) => {
    setSearch(e.target.value);
  };


  const getSearch = (e)=>{
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }


  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${ID}&app_key=${KEY}`
    );
    const data = await response.json();
    console.log(data);
    setRecipe(data.hits);
  };

  return (
    <div className="body">
      <form onSubmit={getSearch} className='form'>
        <input placeholder='search' className='input-field' type="text" value={search} onChange={handleChange} />
        <button className='search-button'>Search</button>
      </form>
      <div className="recipes">
      {recipe.map((x) => (
        <RecipeItems
          key={x.recipe.label}
          image={x.recipe.image}
          title={x.recipe.label}
          cal={x.recipe.calories}
          ingredients={x.recipe.ingredients}
        />
      ))}
      </div> <br/> <br/>
    </div> 
  );
};

export default Recipe;
