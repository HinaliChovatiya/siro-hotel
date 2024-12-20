import React from 'react'
import Active from './active'
import Place from './place'
import App from './app'
import Journal from './journal'

export default function Home() {
  return (
    <div>
      <Active/>
      <Place/>
      <App/>
      <Journal/>
    </div>
  )
}
