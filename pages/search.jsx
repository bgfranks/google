import Head from 'next/head'
import SearchHeader from '../components/SearchHeader'

export default function search() {
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
