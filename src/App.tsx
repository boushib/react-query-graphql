import gql from 'graphql-tag'
import './App.sass'
import { useGraphQLQuery } from './hooks'

const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
    }
  }
`

// const GET_COUNTRY = gql`
//   query ($code: ID!) {
//     country(code: $code) {
//       name
//     }
//   }
// `

const App = () => {
  // Fetch data
  const { data, isLoading, error } = useGraphQLQuery({
    key: 'countries',
    query: GET_COUNTRIES,
  })

  return (
    <div className="app">
      <div className="home page">
        <div className="container">
          {error && <div className="error">{`ERROR: ${error}`}</div>}
          {isLoading && <h1>Loading...</h1>}
          {!isLoading && data && (
            <ul>
              {data.countries.map((c: any) => (
                <li key={c.code}>
                  {c.code} - {c.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
