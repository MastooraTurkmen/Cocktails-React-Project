import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [cocktail, setCocktail] = useState(null)

  useEffect(() => {
    setLoading(true)
    async function getCocktails() {
      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.drinks) {
          const {
            idDrink: id,
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
          } = data.drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5]

          const newCocktail = { name, id, info, category, glass, ingredients, instructions }
          setCocktail(newCocktail)
        } else {
          setCocktail(null)
        }

      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    }

    getCocktails()
  }, [id])

  return (
    <div>
      <h2>single cocktail page </h2>
    </div>
  )
}

export default SingleCocktail
