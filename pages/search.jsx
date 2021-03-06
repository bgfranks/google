import Head from 'next/head'
import { useRouter } from 'next/router'

import SearchHeader from '../components/SearchHeader'
import SearchResults from '../components/SearchResults'

import '../Response'

export default function Search({ results }) {
  const router = useRouter()

  console.log(results)

  return (
    <div>
      <Head>
        <title>{router.query.term} - Search Page</title>
      </Head>

      {/* search header */}
      <SearchHeader />

      {/* search results */}
      <SearchResults results={results} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const mockData = false

  const data = mockData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.GOOGLE_API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && '&searchType=image'
        }
    `
      ).then((res) => res.json())

  return {
    props: {
      results: data,
    },
  }
}
