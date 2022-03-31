import { DocumentNode } from 'graphql'
import { request } from 'graphql-request'
import { useQuery } from 'react-query'

type UseGraphQLQueryParams = {
  key: string
  query: DocumentNode
  variables?: any
  config?: Object
}

export const useGraphQLQuery = ({
  key,
  query,
  variables,
  config = {},
}: UseGraphQLQueryParams) => {
  const endpoint = 'https://countries.trevorblades.com/'

  const fetchData = async () => await request(endpoint, query, variables)

  return useQuery(key, fetchData, config)
}
