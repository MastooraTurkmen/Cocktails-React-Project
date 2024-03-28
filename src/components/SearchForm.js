import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchForm } = useGlobalContext()
  const searchValue = React.useRef('');

  const searchCocktails = () => {
    setSearchForm(searchValue.current.value)
  }

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input onChange={searchCocktails} type="text" id='name' ref={searchValue} />
        </div>
      </form>
    </div>
  )
}

export default SearchForm
