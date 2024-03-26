import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

const Home = () => {
  return (
    <div>
      <SearchForm />
      <CocktailList />
    </div>
  )
}

export default Home
