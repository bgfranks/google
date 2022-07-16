import { getProviders, signIn } from 'next-auth/react'

import Header from '../../components/Header'

export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div className='mt-40'>
        {Object.values(providers).map((proivider) => (
          <div className='flex flex-col items-center' key={proivider.name}>
            <img
              className='w-60 object-cover'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
              alt='Google Logo'
            />
            <p className='text-sm italic my-10 text-center'>
              This website is created for learning purposes
            </p>
            <button
              className='bg-red-400 rounded-lg text-white p-3 hover:bg-red-500 hover:shadow-md transition duration-700 ease-in-out'
              onClick={() => signIn(proivider.id, { callbackUrl: '/' })}
            >
              Sign in with {proivider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
