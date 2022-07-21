import { useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { SearchIcon, MicrophoneIcon, XIcon } from '@heroicons/react/solid'
import User from './User'

export default function SearchHeader() {
  const router = useRouter()
  const searchInputRef = useRef(null)

  const search = (e) => {
    e.preventDefault()
    e.preventDefault()
    const term = searchInputRef.current.value
    if (!term.trim()) return

    router.push(`/search?term=${term.trim()}`)
  }

  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full p-6 items-center'>
        <Image
          className='cursor-pointer'
          width='120'
          height='40'
          objectFit='contain'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
          alt='Google Logo'
          onClick={() => router.push('/')}
        />
        <form className='flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center'>
          <input
            type='text'
            defaultValue={router.query.term}
            ref={searchInputRef}
            className='w-full focus:outline-none'
          />
          <XIcon
            className='h-7 text-gray-500 cursor-pointer sm:mr-3'
            onClick={() => (searchInputRef.current.value = '')}
          />
          <MicrophoneIcon className='h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3 cursor-pointer' />
          <SearchIcon
            className='h-6 hidden sm:inline-flex text-blue-500 cursor-pointer'
            onClick={search}
          />
          <button onClick={search} type='submit' />
        </form>
        <User className='ml-auto whitespace-nowrap' />
      </div>
    </header>
  )
}
