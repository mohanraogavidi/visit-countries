import './index.css'

const CountriesList = props => {
  const {details, addVisitedCountry} = props
  const {id, name, isVisited} = details

  const countryTest = isVisited ? 'visited' : 'visit'

  const addCountry = () => {
    addVisitedCountry(id)
  }

  return (
    <li className="country-list-item">
      <p className="country-name">{name}</p>
      {isVisited === true ? (
        <p className="para">{countryTest}</p>
      ) : (
        <button className="button" type="button" onClick={addCountry}>
          {countryTest}
        </button>
      )}
    </li>
  )
}

export default CountriesList
