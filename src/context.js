import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchForm, setSearchForm] = useState('a');
  const [cocktails, setCocktails] = useState([])

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchForm}`)
      const data = await response.json()
      const { drinks } = data
      console.log(data);
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strAlcoholic, strDrinkThumb, strGlass } = item;
          return {
            id: idDrink,
            name: strDrink,
            info: strAlcoholic,
            image: strDrinkThumb,
            glass: strGlass
          }
        })
        setCocktails(newCocktails)

      } else {
        setCocktails([])
      }
      setLoading(false)

    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [searchForm])

  return <AppContext.Provider value={{
    loading,
    searchForm,
    cocktails,
    setSearchForm
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
