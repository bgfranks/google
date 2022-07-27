import Head from 'next/head'
import SearchHeader from '../components/SearchHeader'
import '../Response'

export default function search({ results }) {
  console.log(results)

  return (
    <div>
      <Head>
        <title>Google | Search Resutls</title>
      </Head>

      {/* search header */}
      <SearchHeader />

      {/* search results */}
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
