import 'aos/dist/aos.css'

import Router from 'next/router'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    const language = localStorage.getItem('@lang')

    if (language) {
      Router.push(`/${language}`)
    } else {
      Router.push(`/pt`)
    }
  }, [])
  return <div />
}

export default Home
